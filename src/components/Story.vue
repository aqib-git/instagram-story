<template>
  <div class="story-component">
    <div class="story">
      <div class="story__indicators">
        <div
          :class="{'story__indicator': true, 'last': stories.length - 1 === index}"
          v-for="(story, index) in stories"
          :key="index">
          <span
            class="story__indicator__fill" :style="'width:' + story.progress + '%'">
          </span>
        </div>
      </div>
      <div class="story__meta" v-if="stories.length > 0">
        <div class="story__meta__avatar">
          <img src="https://instagram.fdel11-1.fna.fbcdn.net/vp/beca63fedef3f442c0a525e7239407f7/5E47F369/t51.2885-19/s150x150/64974692_661204254341795_2793570488801034240_n.jpg?_nc_ht=instagram.fdel11-1.fna.fbcdn.net">
        </div>
        <div class="story__meta__author">
          <span class="story__meta__author__name">{{name}}</span>
          <span class="story__meta__date">8m ago</span>
        </div>
      </div>
      <div class="story__placeholder" v-if="stories.length === 0">
        <i class="fas fa-images"></i>
      </div>
      <div class="story__media" v-else>
        <div
          :class="{'story__media__item': true, 'current': key === index}"
          v-for="(story, key) in stories"
          :key="story.id">
          <img :src="story.url" v-if="story.type === 'image'" />
          <video
            v-else-if="story.type === 'video'"
            @loadeddata="onLoadedData($event, key)"
            :ref="'video' + story.id">
            <source :src="story.url" :type="story.mime">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div
        class="story__overlay"
        @mousedown="onStoryTouchStart"
        @mouseup="onStoryTouchEnd"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import actionTypes from '@/store/actionTypes';

export default {
  name: 'Story',
  data() {
    return {
      delay: 5000,
      paused: false,
      touchStartTime: null,
    };
  },
  methods: {
    startStory() {
      const video = this.$refs[`video${this.currentStory.id}`];
      const increment = 0.2;
      let interval = (this.delay * increment) / 100;

      this.pauseVideoStories();

      if (this.currentStory.type === 'video' && !video) {
        return;
      }

      if (this.currentStory.type === 'video' && video[0]) {
        interval = (this.currentStory.duration * increment) / 100;

        video[0].currentTime = 0;
        video[0].play();
      }

      this.playStory(interval, increment);
    },
    nextStory() {
      clearInterval(this.intervalId);

      this.$store.dispatch(actionTypes.STORY_UPDATE_INTERVAL_ID, {
        intervalId: null,
      });

      if (this.index === this.stories.length - 1) {
        return;
      }

      this.$store.dispatch(actionTypes.STORY_UPDATE_INDEX, {
        index: this.index + 1,
      }).then(() => {
        this.startStory();
      });
    },
    playStory(interval, increment) {
      clearInterval(this.intervalId);

      this.$store.dispatch(actionTypes.STORY_UPDATE_INTERVAL_ID, {
        intervalId: setInterval(() => {
          if (this.currentStory.progress >= 100) {
            this.$store.dispatch(actionTypes.STORY_UPDATE_PROGRESS, {
              progress: 100,
            });

            this.nextStory();

            return;
          }

          if (this.paused) {
            return;
          }

          this.$store.dispatch(actionTypes.STORY_UPDATE_PROGRESS, {
            progress: this.currentStory.progress + increment,
          });
        }, interval),
      });
    },
    pauseVideoStories() {
      const stories = this.stories
        .filter(story => story.type === 'video');

      for (let i = 0; i < stories.length; i += 1) {
        const story = stories[i];
        const video = this.$refs[`video${story.id}`];

        if (video && video[0]) {
          video[0].pause();
        }
      }
    },
    onLoadedData(event, index) {
      if (this.stories[index].duration !== -1) {
        return;
      }

      this.$store.dispatch(actionTypes.STORY_UPDATE_VIDEO_DURATION, {
        index,
        duration: event.target.duration * 1000,
      }).then(() => {
        this.startStory();
      });
    },
    onTouch(event, type) {
      const width = event.target.offsetWidth;
      const leftArea = [0, width * (33.33 / 100)];
      const midArea = [leftArea[1], width * (66.66 / 100)];
      const rightArea = [midArea[1], width];

      if (type === 'start' && event.layerX >= leftArea[0] && event.layerX < leftArea[1]) {
        if (this.stories.length <= 1 || this.index === 0) {
          return;
        }

        this.$store.dispatch(actionTypes.STORY_PREV)
          .then(() => {
            this.startStory();
          });

        return;
      }

      if (type === 'start' && event.layerX >= rightArea[0] && event.layerX < rightArea[1]) {
        if (this.stories.length <= 1 || this.index >= (this.stories.length - 1)) {
          return;
        }

        this.$store.dispatch(actionTypes.STORY_NEXT)
          .then(() => {
            this.startStory();
          });

        return;
      }

      if (event.layerX >= midArea[0] && event.layerX < midArea[1]) {
        const touchDuration = (Date.now() - this.touchStartTime) / 1000;

        if (touchDuration < 1) {
          if (type !== 'end' || this.stories.length <= 1 || this.index >= (this.stories.length - 1)) {
            return;
          }

          this.$store.dispatch(actionTypes.STORY_NEXT)
            .then(() => {
              this.startStory();
            });

          return;
        }

        this.paused = type === 'start';

        const video = this.$refs[`video${this.currentStory.id}`];

        if (this.currentStory.type !== 'video') {
          return;
        }

        if (type === 'end') {
          video[0].play();

          return;
        }

        video[0].pause();
      }
    },
    onStoryTouchStart(event) {
      if (this.stories.length === 0) {
        return;
      }

      event.preventDefault();

      this.touchStartTime = Date.now();

      this.onTouch(event, 'start');
    },
    onStoryTouchEnd(event) {
      if (this.stories.length === 0) {
        return;
      }

      event.preventDefault();

      this.onTouch(event, 'end');
    },
  },
  computed: {
    ...mapGetters(['stories', 'name', 'index', 'intervalId']),

    currentStory() {
      if (this.index === -1) {
        return null;
      }

      return this.stories[this.index];
    },
  },
  watch: {
    stories() {
      if (this.stories.length === 0) {
        return;
      }

      if (!this.currentStory) {
        return;
      }

      this.startStory();
    },
  },
};
</script>

<style lang="scss" scoped>
.story-component {
  .story {
    position: relative;
    width: 360px;
    height: 640px;
    margin-left: auto;
    box-shadow: 0 0 8px #272626;

    &__placeholder {
      display: flex;
      justify-content: center;
      align-items: center;
      background: whitesmoke;
      height: 100%;

      i {
        font-size: 120px;
        color: lightgrey;
      }
    }

    &__meta {
      display: flex;
      align-items: center;
      position: absolute;
      top: 12px;
      padding: 5px;

      &__avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 5px;
        box-shadow: 0 0 2px black;

        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          max-width: 100%;
        }
      }

      &__author {
        display: flex;
        justify-content: center;
        flex-direction: column;
        flex: 1;
        color: white;
        text-shadow: 0 0 2px black;

        &__name {
          font-weight: bold;
          font-size: 16px;

        }
      }

      &__date {
        font-size: 13px;
      }
    }

    &__indicators {
      display: flex;
      position: absolute;
      top: 0;
      width: 100%;
      padding: 5px 2px;
      box-sizing: border-box;
      margin-right: 5px;

      &.last {
        margin-right: 0;
      }
    }

    &__indicator {
      flex: 1;
      height: 2px;
      border-radius: 5px;
      background-color: transparent;
      margin-right: 2px;

      &__fill {
        display: block;
        height: 100%;
        width: 0%;
        background-color: white;
      }
    }

    &__overlay {
      position:absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1000;
    }

    &__media {
      height: 100%;
    }

    &__media__item {
      display: none;
      align-items: center;
      justify-content: center;
      height: 100%;

      &.current {
        display: flex;
      }

      video {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>

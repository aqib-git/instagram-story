<template>
  <div class="story-component">
    <div class="story">
      <div class="story__indicators">
        <div
          :class="{'story__indicator': true, 'last': stories.length -1 === index}"
          v-for="(story, index) in stories"
          :key="index">
          <span
            class="story__indicator__fill" :style="'width:' + story.progress + '%'">
          </span>
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
    };
  },
  methods: {
    startStory() {
      const video = this.$refs[`video${this.currentStory.id}`];
      const increment = 0.2;
      let interval = (this.delay * increment) / 100;

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

          this.$store.dispatch(actionTypes.STORY_UPDATE_PROGRESS, {
            progress: this.currentStory.progress + increment,
          });
        }, interval),
      });
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

      if (this.stories.length > 1) {
        const story = this.stories[this.stories.length - 2];

        if (story.type === 'video') {
          const video = this.$refs[`video${story.id}`];

          if (video && video[0]) {
            video[0].pause();
          }
        }
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

<template>
  <div class="form-component">
    <div class="create-story">
      <div class="create-story__name">
        <label>Page Name</label>
        <input placeholder="Codesm" :value="name" @input="updateStoryName"/>
      </div>
      <div class="create-story__add">
        <button>
          <input type="file" @change="addStory" accept=".png, .jpg, .jpeg, .mp4">
          Add Story
        </button>
      </div>
      <div class="create-story__items">
        <div
          class="create-story__items__story"
          v-for="(story, index) in stories"
          :key="index">
          <i class="fas fa-times-circle" @click="removeStory(index)"></i> {{story.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import actionTypes from '@/store/actionTypes';

export default {
  name: 'CreateStory',

  methods: {
    addStory(event) {
      if (!event.target.files || event.target.files.length === 0) {
        return;
      }

      const file = event.target.files[0];

      const data = {
        id: this.maxStoryId + 1,
        name: file.name,
        url: URL.createObjectURL(file),
        type: 'image',
        mime: file.type,
        progress: 0,
      };

      if (file.type.search('image/') === -1) {
        data.type = 'video';
        data.duration = -1;
      }

      this.$store.dispatch(actionTypes.STORY_ADD, {
        story: data,
      });
    },
    updateStoryName(event) {
      this.$store.dispatch(actionTypes.STORY_NAME, {
        name: event.target.value,
      });
    },
    removeStory(index) {
      this.$store.dispatch(actionTypes.STORY_DELETE, {
        index,
      });
    },
  },
  computed: {
    ...mapGetters(['stories', 'name', 'maxStoryId']),
  },
};
</script>

<style lang="scss" scoped>
.form-component {
  border: 1px solid;
  padding: 10px;

  .create-story {
    > div {
      margin-bottom: 20px;
    }

    &__name {
      display: flex;
      flex-direction: column;

      label {
        margin-bottom: 10px;
      }
    }

    &__add {
      button {
        width: 100%;
        position: relative;
        overflow: hidden;

        input {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 100;
          width: 100%;
          height: 100%;
          opacity: 0.01;
        }
      }
    }

    &__items__story {
      display: flex;
      align-items: center;
      padding: 10px;

      i {
        cursor: pointer;
        font-size: 20px;
        margin-right: 10px;
      }
    }
  }
}
</style>

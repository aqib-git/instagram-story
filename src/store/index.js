import Vue from 'vue';
import Vuex from 'vuex';
import mutationTypes from '@/store/mutationTypes';
import actionTypes from '@/store/actionTypes';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stories: [],
    index: -1,
    name: 'Codesm',
    intervalId: null,
  },
  getters: {
    stories(state) {
      return state.stories;
    },
    name(state) {
      return state.name;
    },
    index(state) {
      return state.index;
    },
    intervalId(state) {
      return state.intervalId;
    },
    maxStoryId(state) {
      let id = -1;

      for (let i = 0; i < state.stories.length; i += 1) {
        if (id < state.stories[i].id) {
          // eslint-disable-next-line prefer-destructuring
          id = state.stories[i].id;
        }
      }

      return id;
    },
  },
  mutations: {
    [mutationTypes.STORY_ADD](state, data) {
      if (state.intervalId) {
        clearInterval(state.intervalId);
        state.intervalId = null;
      }

      state.index = 0;

      for (let i = 0; i < state.stories.length; i += 1) {
        Vue.set(state.stories[i], 'progress', 0);
      }

      state.stories.push(data.story);
    },
    [mutationTypes.STORY_DELETE](state, data) {
      if (state.intervalId) {
        clearInterval(state.intervalId);
        state.intervalId = null;
      }

      state.index = state.stories.length <= 1 ? -1 : 0;

      for (let i = 0; i < state.stories.length; i += 1) {
        Vue.set(state.stories[i], 'progress', 0);
      }

      Vue.delete(state.stories, data.index);
    },
    [mutationTypes.STORY_NAME](state, data) {
      state.name = data.name;
    },
    [mutationTypes.STORY_UPDATE_PROGRESS](state, data) {
      if (state.stories.length === 0 || state.index < 0) {
        return;
      }

      Vue.set(state.stories[state.index], 'progress', data.progress);
    },
    [mutationTypes.STORY_UPDATE_INDEX](state, data) {
      state.index = data.index;
    },
    [mutationTypes.STORY_UPDATE_INTERVAL_ID](state, data) {
      state.intervalId = data.intervalId;
    },
    [mutationTypes.STORY_UPDATE_VIDEO_DURATION](state, data) {
      Vue.set(state.stories[data.index], 'duration', data.duration);
    },
    [mutationTypes.STORY_PREV](state) {
      if (state.intervalId) {
        clearInterval(state.intervalId);
        state.intervalId = null;
      }

      state.index -= 1;

      for (let i = state.index; i < state.stories.length; i += 1) {
        Vue.set(state.stories[i], 'progress', 0);
      }
    },
    [mutationTypes.STORY_NEXT](state) {
      if (state.intervalId) {
        clearInterval(state.intervalId);
        state.intervalId = null;
      }

      state.index += 1;

      for (let i = 0; i < state.index; i += 1) {
        Vue.set(state.stories[i], 'progress', 100);
      }

      for (let i = state.index; i < state.stories.length; i += 1) {
        Vue.set(state.stories[i], 'progress', 0);
      }
    },
  },
  actions: {
    [actionTypes.STORY_ADD](context, data) {
      context.commit(mutationTypes.STORY_ADD, data);
    },
    [actionTypes.STORY_DELETE](context, data) {
      context.commit(mutationTypes.STORY_DELETE, data);
    },
    [actionTypes.STORY_NAME](context, data) {
      context.commit(mutationTypes.STORY_NAME, data);
    },
    [actionTypes.STORY_UPDATE_PROGRESS](context, data) {
      context.commit(mutationTypes.STORY_UPDATE_PROGRESS, data);
    },
    [actionTypes.STORY_UPDATE_INDEX](context, data) {
      context.commit(mutationTypes.STORY_UPDATE_INDEX, data);
    },
    [actionTypes.STORY_UPDATE_INTERVAL_ID](context, data) {
      context.commit(mutationTypes.STORY_UPDATE_INTERVAL_ID, data);
    },
    [actionTypes.STORY_UPDATE_VIDEO_DURATION](context, data) {
      context.commit(mutationTypes.STORY_UPDATE_VIDEO_DURATION, data);
    },
    [actionTypes.STORY_PREV](context) {
      context.commit(mutationTypes.STORY_PREV);
    },
    [actionTypes.STORY_NEXT](context) {
      context.commit(mutationTypes.STORY_NEXT);
    },
  },
  modules: {
  },
});

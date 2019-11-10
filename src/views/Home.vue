<template>
  <div class="home-view">
    <create-story></create-story>
    <story></story>
  </div>
</template>

<script>
import Form from '@/components/Form.vue';
import Story from '@/components/Story.vue';

export default {
  name: 'home',
  components: {
    'create-story': Form,
    Story,
  },
};
</script>

<style lang="scss">
.home-view {
  display: flex;
  justify-content: space-between;
  max-width: 900px;
  margin: auto;

  > div {
    width: 48%;
  }
}
</style>

<template>
  <div class="home-view">
    <div class="home-view__header">
      <img src="../assets/images/instagram.png" alt="Instagram"> <span> Stories </span>
    </div>
    <div class="home-view__body">
      <create-story></create-story>
      <story></story>
    </div>
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
  &__header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;

    span {
      display: inline-block;
      font-family: 'Yeon Sung', cursive;
      font-size: 45px;
      margin-left: 15px;
    }

    img {
      max-width: 70px;
      border-radius: 10px;
    }
  }

  &__body {
    display: flex;
    justify-content: space-between;
    max-width: 900px;
    margin: auto;

    > div {
      width: 48%;
      margin-bottom: 30px;
    }

    @media only screen and (max-width: 991px) {
      flex-direction: column;
      align-items: center;

      > div {
        width: 90%;
      }
    }
  }
}
</style>

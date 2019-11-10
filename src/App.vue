<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted() {
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

input {
  font-size: 16px;
  padding: 5px;
  border: 1px solid #2c3e50;
  border-radius: 3px;
  height: 30px;
  outline: none;
}

button {
  background: lightslategrey;
  color: white;
  border: 0;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
   box-shadow: 0 2px 2px #5d6771;
  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    background: #909faf;
  }
}
</style>

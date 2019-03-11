<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import "bootstrap-vue/dist/bootstrap-vue.css";
@import "./scss/main.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
  border: 2px solid gray;
  height: calc(100vh - 20px);
  width: 480px;
  margin: 10px calc(50vw - 240px);
  min-height: 450px;
  border-radius: 5px;
  box-shadow: 5px 5px 3px #888888;
}

@media screen and (max-width: 480px) {
  #app {
    height: 100vh;
    width: 100vw;
    margin: 0;
    box-shadow: none;
  }
}
</style>

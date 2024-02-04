<template>
  <div id="body">
    <header-nav-bar></header-nav-bar>
    <router-view />
  </div>
</template>

<script>
import HeaderNavBar from "./components/layout/HeaderNavBar.vue";

export default {
  components: {
    HeaderNavBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#body {
  width: 99vw;
  overflow-x: hidden;
  min-height: 100%;
  height: auto;
  background-color: #0f1421;
}

</style>

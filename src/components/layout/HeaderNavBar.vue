<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" id="head-nav">
      <b-navbar-brand>
        <router-link :to="{ path: menuArray[0].name }">
          <header-nav-bar-logo></header-nav-bar-logo>
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" style="color: #bbbbbb; background-color: #3c5066;"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="mt-2">
        <!-- Right aligned nav items -->
        <b-navbar-nav class="mx-auto">
          <router-link :to="{ path: menuArray[2].name }" class="nav-link">
            {{ menuArray[2].menu }}
          </router-link>

          <router-link :to="{ path: menuArray[3].name }" class="nav-link">
            {{ menuArray[3].menu }}
          </router-link>

          <router-link :to="{ path: menuArray[1].name }" class="nav-link">
            {{ menuArray[1].menu }}
          </router-link>

          <router-link :to="{ path: menuArray[4].name }" class="nav-link">
            {{ menuArray[4].menu }}
          </router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import HeaderNavBarLogo from "./HeaderNavBarLogo.vue";

export default {
  components: {HeaderNavBarLogo},
  data() {
    return {};
  },
  mounted() {},
  methods: {
    getSelnum(item) {
      console.log(item.index);
      console.log(item.name);
      //this.store.dispatch('navStore/set_selected_num', nums);
    },
  },
  setup() {
    const store = useStore();

    const maxsize = computed(() => store.state.navStore.maxsize);
    const menuArray = computed(() => store.state.navStore.menuArray);
    const selected_num = computed(() => store.state.navStore.selected_num);
    return { store, maxsize, menuArray, selected_num };
  },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Lato:100,300,900);

#head-nav {
  background-color: #1a2844;
  z-index: 2;
  width: 100%;
}

#head-nav .nav-link {
  color: white;
  align-self: center;
  font-size: large;
}

#head-nav .nav-link:hover {
  -webkit-transform: scale(1.05);
  -moz-transform: scale(1.05);
  -ms-transform: scale(1.05);
  -o-transform: scale(1.05);
  transform: scale(1.05);
}
</style>

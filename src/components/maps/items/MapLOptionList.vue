<template>
  <b-row>
    <b-card id="maplist">
      <b-card-header> <h4>병원</h4> </b-card-header>
      <b-card-body class="list-space">
        <div class="list-inner-space" style="overflow: auto;">
          <map-l-option-list-item
            v-for="(item, index) in hospital.list"
            :key="(item.index = index)"
            v-bind="item"
            class="list-info"
          ></map-l-option-list-item>
        </div>
      </b-card-body>
    </b-card>
  </b-row>
  <b-row>
    <b-card id="maplist">
      <b-card-header> <h4>약국</h4> </b-card-header>
      <b-card-body class="list-space" >
        <div class="list-inner-space" >
          <map-l-option-list-item
            v-for="(item, index) in pharmacy.list"
            :key="(item.index = index)"
            v-bind="item"
            class="list-info"
          ></map-l-option-list-item>
        </div>
      </b-card-body>
    </b-card>
  </b-row>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import MapLOptionListItem from "./MapLOptionListItem.vue";
export default {
  components: {
    MapLOptionListItem,
  },
  setup() {
    const store = useStore();
    const hospital = computed(() => store.state.mapStore.hospital);
    const pharmacy = computed(() => store.state.mapStore.pharmacy);

    return { store, hospital, pharmacy };
  },
  data() {
    return {};
  },
};
</script>

<style>
#maplist {
  background-color: #0f1421;
  margin: 1rem;
}

#maplist > .card-body {
  padding-right: 0;
  padding-left: 0;
  padding-bottom: 0;
}

.card-header {
  background-color: #0f1421;
  color: white;
  font-style: bold;
}

.list-space {
  padding-right: 0;
}

.list-inner-space{
  height: 15rem;
  overflow: auto;
  border: 1px solid white;
  border-radius: 1rem;
}

.list-inner-space::-webkit-scrollbar {
  width: 0;
}
.list-inner-space::-webkit-scrollbar-track {
  background-color: transparent;
}
.list-inner-space::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background-color: gray;
}
.list-inner-space::-webkit-scrollbar-button {
  width: 0;
  height: 0;
}

.list-info {
  padding-right: 0;

  background-color: #0f1421;
}
</style>

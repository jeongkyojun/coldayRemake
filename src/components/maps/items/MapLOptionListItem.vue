<template>
  <b-card id="listcard">
    <div id="listItem">
      <div class="idx">{{ index + 1 }}</div>
      <div class="name">{{ place_name }}</div>
      <div class="pn">{{ phone }} </div>
    </div>
  </b-card>
</template>

<script>
export default {
  props: {
    index: Number,
    place_name: String,
    phone: String,
  },
};
</script>

<style>
#listcard{
}

#listItem{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #0f1421;
  color: white;
}
.idx {
  padding: 0;
}
</style>

<template>
  <div id="block">
    <ul class="emphasize" v-if="isEmphasize">
      <li>
        <!-- <pre>{{title}}  <a v-for="item in text" :key="item"> {{item}} </a></pre> -->
        {{title}}  <a v-for="item in text" :key="item"> {{item}} </a>
      </li>
      <about-modals-show-item-list
        v-for="item in list"
        :key="item.isEmphasize == false"
        v-bind="item"
      >
      </about-modals-show-item-list>
      <about-modals-show-item-list
        v-for="item in emphasize"
        :key="item.isEmphasize == true"
        v-bind="item"
      >
      </about-modals-show-item-list>
    </ul>

    <ul v-else>
      <li>
        <pre>{{title}}  <a v-for="item in text" :key="item"> {{item}} </a></pre>
      </li>
      <about-modals-show-item-list
        v-for="item in list"
        :key="item.isEmphasize == false"
        v-bind="item"
      >
      </about-modals-show-item-list>
      <about-modals-show-item-list
        v-for="item in emphasize"
        :key="item.isEmphasize == true"
        v-bind="item"
      >
      </about-modals-show-item-list>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: Array,
    text: Array,
    list: Array,
    emphasize: Array,
    isEmphasize: Boolean,
  },
};
</script>

<style>
#block{
  display: flex;
  flex-direction: column;
  justify-content: start;
  border: 1px solid red;
}

.emphasize {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  margin: 2px 0 0 0;
  padding: 0 0 4px 16px;
  font-size: 16px;
  color: white;
  width: 100%;
  max-height: 100%;
}

.emphasize li {
  margin: 2px 0 0 0;
  padding: 0 0 4px 16px;
  font-size: 16px;
  color: gray;
}

.emphasize li:after {
  content: "";
  top: 4px;
  left: 0;
  width: 10px;
  height: 10px;
  position: absolute;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7K63tX5M3uqMo8mN2yPd_9j4JAlgJO9BizSsPqnzaRFBE5EdQ&usqp=CAU");
  background-size: cover;
  background-position: center;

  /*  가운데 정렬할 경우 쓸 것
      top: 50%;
      transform: translateY(-50%); */
}
pre::-webkit-scrollbar {
  height: 6px;
}
pre::-webkit-scrollbar-track {
  background-color: transparent;
}
pre::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background-color: gray;
}
pre::-webkit-scrollbar-button {
  width: 0;
  height: 0;
}
</style>

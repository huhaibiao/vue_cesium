<template>
  <div class="about">
    <div id="nav">
    <router-link to="/">Echarts</router-link> |
    <router-link to="/about">组合API Echarts</router-link>|
    <router-link to="/cesiumearth">CesiumEarth</router-link>
  </div>
    <!-- <span>count1:{{ count1 }} </span>
    <span>count:{{ data.count }} </span>
    <span> double:{{ data.double }}</span>
    <br />
    <button @click="add">count++</button>
    <div id="main" @click="getDynamicEhcarts"></div> -->
  </div>
</template>
<script>
import { reactive, ref, computed, onMounted } from "vue";
import * as echarts from "echarts";
// import worker from "./worker.js";
// import worker from "./worker";
// import VueWorker from "vue-worker";
import { Worker } from "@/module/core/app.js";
export default {
  setup() {
    // const myWorker = new worker();
    if (window.Worker) {
      console.log("ok");
      let w = new Worker();
      
      console.log('完成');
    }
  },
  mounted() {
  },
};
</script>
<style scoped>
#main {
  height: 600px;
  width: 100%;
}
</style>

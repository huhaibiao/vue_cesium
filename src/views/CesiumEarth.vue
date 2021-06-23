<template>
  <div id="CesiumEarth">
    <div id="nav">
    <router-link to="/">Echarts</router-link> |
    <router-link to="/about">组合API Echarts</router-link>|
    <router-link to="/cesiumearth">CesiumEarth</router-link>
  </div>
    <div>cesiumEarth</div>
    <div id="cesiumContainer"></div>
  </div>
</template>

<script>
// import * as Cesium from "cesium";
// import "cesium/Build/Cesium/Widgets/widgets.css";
export default {
  name: "CesiumEarth",
    setup() {
        function getCesium(){
            // window.CESIUM_BASE_URL = '/static/Cesium/';
          //  let viewer = new Cesium.Viewer('cesiumContainer');
          //   console.log(viewer);
            var viewer = new Cesium.Viewer('cesiumContainer', {
    animation: true, //是否显示动画控件(左下方那个)
    baseLayerPicker: true, //是否显示图层选择控件
    geocoder: true, //是否显示地名查找控件
    timeline: true, //是否显示时间线控件
    sceneModePicker: true, //是否显示投影方式控件
    navigationHelpButton: false, //是否显示帮助信息控件
    infoBox: true, //是否显示点击要素之后显示的信息
});
        }
        return {
            getCesium,
        }
    },
    mounted(){
        this.getCesium();
    }
};
</script>
<style lang='scss' scoped>
#cesiumContainer {
  height: 80vh;
  width: 100%;
  // background-color: blue;
}
</style>
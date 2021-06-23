<template>
  <div id="CesiumEarth">
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
           let viewer = new Cesium.Viewer('cesiumContainer');
            console.log(viewer);
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
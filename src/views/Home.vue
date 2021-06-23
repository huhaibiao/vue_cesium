<template>
  <div class="home">
    <div id="nav">
    <router-link to="/">Echarts</router-link> |
    <router-link to="/about">组合API Echarts</router-link>|
    <router-link to="/cesiumearth">CesiumEarth</router-link>
  </div>
    <HelloWorld msg="echarts" />
    <div class= "hiddenBtn" :class="isTrue?'Hight':'Gray'" @click="change">
    </div>
    <div><span>当前倍速：{{seconds}}秒一步 </span>  <button @click="quicken">加快x2</button><button @click="slower">减慢x2</button></div>
    <div><span>当前步长：一秒{{speed}}步 </span>  <button @click="quickenSpeed">加快x2</button><button @click="slowerSpeed">减慢x2</button></div>
    <div class="chart">
      <div id="markLine"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import * as echarts from "echarts";
import { ref } from 'vue';
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  mounted() {
    this.getEchartsLine();
  },
  methods: {
      
  },
  setup() {
    let seconds = ref(1000);
    let speed = ref(1);
    let isTrue = ref(true);
    function change() {
      isTrue.value = !isTrue.value;
    };
    function quicken(params) {
      seconds.value/=2;
    };
    function slower(params) {
      seconds.value*=2;
    };
    function quickenSpeed(params) {
      speed.value*=2;
    };
    function slowerSpeed(params) {
      speed.value/=2;
    };
    function getEchartsLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById("markLine"));
        // 绘制图表
        var now = new Date();
        var res = [];
        var len = 10;
        while (len--) {
            res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
            now = new Date(now - 1000);
        };
        let option = {
          xAxis: {
            type: "category",
            data: res,
                  
          },
          yAxis: {
            splitLine:{
              show:false,
            }
          },
          series: [
            {
              data: (function (){
                      var res = [];
                      var len = 10;
                      while (len--) {
                          res.push(Math.round(Math.random() * 1000));
                      }
                      return res;
                  })(),
              type: "line",
              markLine: {
                data: [
                  {
                    xAxis: res[0],
                    symbol: "none",
                  },
                ],
                animation: false,
                label: {
                  show:false,
                },
                lineStyle: {
                  type: 'solid',
                  color: "red",
                  width:'3',
                },
              },
            },
          ],
        };
        myChart.setOption(option);
        let data = option.xAxis.data;
        let i = 0;
        // let num = parseInt(seconds.value); 
        setInterval(() => {
          // i = i + 2;
          option.series[0].markLine.data[0].xAxis = option.xAxis.data[i];
            myChart.resize();
            myChart.setOption(option);
            i=i+2;
          if(i>data.length||i==data.length){
            i=0;
            // clearInterval(interval);
          };
        }, 1000);
      };
    return{
      isTrue,
      change,
      seconds,
      speed,
      quicken,
      slower,
      getEchartsLine,
      quickenSpeed,
      slowerSpeed,
    }

}
};
</script>
<style scoped >
.home{
  user-select: none;
}
.chart {
  display: flex;
}
#markLine{
  flex: 1;
  height: 600px;
  /* background-color: red; */
}
.hiddenBtn{
  width: 24px;
  height: 20px;
  display: inline-block;
  text-align: center;
  cursor: pointer;
}
.Hight{
  background:url(../assets/hidden-nameActive.png) no-repeat;
}
.Gray{
  background:url(../assets/hidden-nameGray.png) no-repeat;
}

</style>


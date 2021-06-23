<template>
  <div class="home">
    <HelloWorld msg="echarts" />
    <div class= "hiddenBtn" :class="isTrue?'Hight':'Gray'" @click="change">
    </div>
    <div><span>当前倍速：{{seconds}}秒一步 </span>  <button @click="quicken">加快x2</button><button @click="slower">减慢x2</button></div>
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
      getEchartsLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById("markLine"));
        // 绘制图表
        let option = {
          xAxis: {
            type: "category",
            data: (function (){
                      var now = new Date();
                      var res = [];
                      var len = 10*60*60;
                      while (len--) {
                          res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                          now = new Date(now - 1000);
                      }
                      // console.log(res);
                      return res;
                  })(),
          },
          yAxis: {
            splitLine:{
              show:false,
            }
          },
          series: [
            {
              // data: (function (){
              //         var res = [];
              //         var len = 10*60;
              //         while (len--) {
              //             res.push(Math.round(Math.random() * 1000));
              //         }
              //         return res;
              //     })(),
              type: "line",
              markPoint: {
                data: [
                  {
                    coord: [5, 33.4], 
                  },
                ],
              },
              markLine: {
                data: [
                  {
                    xAxis: 'Mon',
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
        let interval = setInterval(() => {
          option.series[0].markLine.data[0].xAxis = option.xAxis.data[i++];
          myChart.resize();
          myChart.setOption(option);
          if(i==data.length){
            i=0;
            // clearInterval(interval);
          }
          // console.log(this.seconds.value);
        }, 1000*this.seconds.value);
      },
  },
  setup() {
    let seconds = ref(1);
    let isTrue = ref(true);
    function change() {
      isTrue.value = !isTrue.value;
    };
    function quicken(params) {
      seconds.value/=2;
    };
    function slower(params) {
      seconds.value*=2;
    }
    return{
      isTrue,
      change,
      seconds,
      quicken,
      slower,
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


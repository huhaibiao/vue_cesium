<template>
  <div class="about">
    <span>count1:{{ count1 }} </span>
    <span>count:{{ data.count }} </span>
    <span>  double:{{ data.double }}</span>
    <br>
    <button @click="add" >count++</button>
    <div id="main" @click="getDynamicEhcarts" ></div>
  </div>
</template>
<script>
import {reactive,ref, computed, onMounted } from 'vue';
import * as echarts from 'echarts';
export default {
    setup() {
      const count1 = ref(0);
      const data = reactive({
        count:0,
        double:computed(()=>{return data.count*2}),
      });
      function add() {
        data.count++;
        count1.value++;
      };
      function getDynamicEhcarts(){
      var app = {};
      var chartDom = document.getElementById('main');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        xAxis: [
            {
                type: 'category',
                boundaryGap: true,
                data: (function (){
                    var now = new Date();
                    var res = [];
                    var len = 10;
                    while (len--) {
                        res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                        now = new Date(now - 2000);
                    }
                    return res;
                })()
            },
            {
                type: 'category',
                boundaryGap: true,
                data: (function (){
                    var res = [];
                    var len = 10;
                    while (len--) {
                        res.push(10 - len - 1);
                    }
                    return res;
                })()
            }
        ],
        yAxis: [
            {
                type: 'value',
                scale: true,
                name: '价格',
                max: 30,
                min: 0,
                boundaryGap: [0.2, 0.2]
            },
            {
                type: 'value',
                scale: true,
                name: '预购量',
                max: 1200,
                min: 0,
                boundaryGap: [0.2, 0.2]
            }
        ],
        series: [
            {
                name: '预购队列',
                type: 'bar',
                xAxisIndex: 1,
                yAxisIndex: 1,
                data: (function (){
                    var res = [];
                    var len = 10;
                    while (len--) {
                        res.push(Math.round(Math.random() * 1000));
                    }
                    return res;
                })()
            },
            {
                name: '最新成交价',
                type: 'line',
                data: (function (){
                    var res = [];
                    var len = 0;
                    while (len < 10) {
                        res.push((Math.random()*10 + 5).toFixed(1) - 0);
                        len++;
                    }
                    return res;
                })()
            }
        ]
    };
    app.count = 11;
    setInterval(function (){
        var axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');

        var data0 = option.series[0].data;
        var data1 = option.series[1].data;
        data0.shift();
        data0.push(Math.round(Math.random() * 1000));
        data1.shift();
        data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

        option.xAxis[0].data.shift();
        option.xAxis[0].data.push(axisData);
        option.xAxis[1].data.shift();
        option.xAxis[1].data.push(app.count++);
        myChart.setOption(option);
        myChart.resize();
    }, 2000);    
      option && myChart.setOption(option);
      };
      return {
        count1,
        data,
        add,
        getDynamicEhcarts,
      }
    },
    mounted(){
      this.getDynamicEhcarts();
    }
}
</script>
<style scoped>
#main{
    height: 600px;
    width: 100%;
  }
</style>

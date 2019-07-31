<template>
  <div class='chart-con'>
    <div id='mychart'></div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  name: 'lineChart',
  data() {
    return {
      title: 'Gradient along the y axis'
    }
  },
  mounted() {
    this.drawLine()
  },
  methods:{
    drawLine() {
      let myChart = echarts.init(document.getElementById('mychart'))
      myChart.setOption({
          title: {
            top: '5%',
            left: 'center',
            text: this.title
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                  backgroundColor: '#6a7985'
                }
            }
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line',
              areaStyle: {}
          }]
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.chart-con{
  width: 400px;
  height: 300px;
  background: #fff;
}
#mychart{
  width: 100%;
  height: 100%;
}
</style>


<template>
  <div class='pine-con'>
    <div id='pinechart'></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'pine',
  data() {
    return {
      title: 'this is my title'
    }
  },
  mounted(){
    this.drawLine()
  },
  methods:{
    drawLine() {
      let myChart = echarts.init(document.getElementById('pinechart'))
      myChart.setOption({
        title : {
            text: this.title,
            // subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.pine-con{
  width: 400px;
  height: 300px;
  background: #fff;
  & #pinechart{
    width: 100%;
    height: 100%;
  }
}
</style>


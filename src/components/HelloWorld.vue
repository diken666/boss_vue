<template>
  <div>
    <div class='con'>
      <!-- <span>时间线</span> -->
      <TimeLine/>
      <LineChart/>
      <Pine/>
    </div>
  </div>
</template>

<script>
import TimeLine from '@/components/index/TimeLine'
import LineChart from '@/components/charts/Line'
import Pine from '@/components/charts/Pine'
export default {
  name: 'HelloWorld',
  data () {
    return {
      reverse: true,
      timeArr: [{
          content: '活动按期开始',
          timestamp: '2018-04-15',
          size: 'large',
          color: '#0bbd87'
        }, {
          content: '通过审核',
          timestamp: '2018-04-13',
          color: '#0bbd87'
        }, {
          content: '创建成功',
          timestamp: '2018-04-11',
          color: '#0bbd87'
        }]
    }
  },

  components: {
    TimeLine,
    LineChart,
    Pine
  }
}
</script>

<style scoped>
</style>

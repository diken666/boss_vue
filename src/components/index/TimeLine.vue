<template>
  <div class='timeline'>
    <div class='title'>时间线</div>
    <div class='t-con'>
      <el-timeline :reverse="reverse">
        <el-timeline-item
          v-for="(activity, index) in timeArr"
          :key="index"
          :color="activity.color"
          :timestamp="activity.timestamp">
          {{activity.content}}
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimeLine',
  data() {
    return {
      reverse: true,
      timeArr: [ {
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
      }, {
        content: '创建成功',
        timestamp: '2018-04-11',
        color: '#0bbd87'
      }, {
        content: '创建成功',
        timestamp: '2018-04-11',
        color: '#0bbd87'
      }, {
        content: '创建成功',
        timestamp: '2018-04-11',
        color: '#0bbd87'
      } ]
    }
  }
}
</script>

<style lang="scss" scoped>
.timeline{
  position: relative;
  width: 250px;
  height: 300px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
}
.title{
  top:0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  text-align: center;
  background: #fff;
  z-index: 100;
}
.t-con{
  height: 260px;
  overflow-y: auto;

  &::-webkit-scrollbar{
    width: 6px;
  }
  &::-webkit-scrollbar-thumb{
    background: #eee;
    border-radius: 3px;
  }
}
</style>

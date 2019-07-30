<template>
  <div class='sidebar'>
    <router-link :to="{path: '/'}" class='item'>
        <i class="icon-look"></i><span>hello</span>
    </router-link>
    <router-link :to="{path: '/test1'}" class='item'>
        <i class="icon-look"></i><span>test1</span>
    </router-link>
    <router-link :to="{path: '/test2'}" class='item'>
        <i class="icon-look"></i><span>test2</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style lang='scss'>
 .sidebar{
    float: left;
    width: 210px;
    height: 100%;
    background: rgb(48, 65, 86);
    color: rgb(191, 203, 217);
    overflow-y: auto;
    font-size: 14px;
  }
  .item{
    position: relative;
    display: block;
    height: 40px;
    line-height: 40px;
    padding-left: 30px;
    cursor: pointer;
    user-select: none;

    &:hover{
      background: #263445;
    }
    & i{
      display: inline-block;
      position: relative;
      top: -2px;
      width: 15px;
      height: 15px;
      margin-right: 10px;
      background: url(../../static/image/look.png) no-repeat;
      background-size: 15px 15px;
      vertical-align: middle;
    }
  }
  .router-link-exact-active{
    color: #1890ff;

    & i{
      background: url(../../static/image/look_blue.png) no-repeat;
      background-size: 15px 15px;
    }
  }
</style>

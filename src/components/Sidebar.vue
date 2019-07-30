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
  name: 'Sidebar',
  mounted(){
  }
}
</script>

<style>
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
    height: 56px;
    line-height: 56px;
    padding-left: 30px;
    cursor: pointer;
    user-select: none;
  }
  .item:hover{
    background: #263445;
  }
  .item i{
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
  .router-link-exact-active{
    color: #1890ff;
  }
  .router-link-exact-active i{
    background: url(../../static/image/look_blue.png) no-repeat;
    background-size: 15px 15px;
  }
</style>

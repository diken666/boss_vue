<template>
  <div id="app">
    <Sidebar/>
    <router-view class='container'/>
  </div>
</template>

<script>
import Sidebar from '@/components/SideBar'
export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>

<style>
  #app{
    height: 100%;
  }
</style>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import Cantainer from '../src/components/Cantainer.vue'
export default {
  name: 'App',
  components: {
    // Cantainer
  }
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    /* background-color: #D3DCE6; */
    color: #333;
    text-align: center;
    height: calc(100vh - 60px);
  }
</style>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
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

  
  .el-aside {
    /* background-color: #D3DCE6; */
    color: #333;
    text-align: center;
    height: calc(100vh - 60px);
  }
</style>

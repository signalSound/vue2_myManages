<template>
    <div>
      <el-container>
      <el-header>Header</el-header>
      <el-container>
          <el-aside width="200px">
            <el-scrollbar style="height:100%;">
                <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <MenuTree :parentMenu="routerArr"></MenuTree>
              </el-menu>
            </el-scrollbar>
        </el-aside>

        <el-main>
            <div  class="content_base">
              <router-view/>
            </div>
        </el-main>
    </el-container>
    </el-container>
     
    </div>
</template>
<script>
import MenuTree from './MenuTree.vue'
// import {routerDatas} from '@/router/easymock'
export default {
  name: 'Cantainer',
  components: {
    MenuTree
  },
  data () {
    return {
      conuter: 0,
      show: true,
      routerArr: [],
      // contentHeight:'calc(100% - 60px)'
    }
  },
  computed: {
    message: function(){
      // return this.msg + this.msg1
    } 
  },
  watch: {
    conuter(newVal, oldVal){
      // console.log(newVal, oldVal)
    }
  },
  mounted() {
    this.routerArr = this.$store.state.routerArr[0].children
    console.log(this.$store.state.routerArr, 'antRoute')
  },
  methods: {
    handleOpen(){},
    handleClose(){},
  }
}
</script>
<style>
.el-main {
  overflow: hidden;
  height: calc(100vh - 60px);
}
.content_base {
  height: 100%;
  overflow: auto;
}
.el-scrollbar__wrap {
 overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-thumb {
  background-color: #DDDEE0;
  -webkit-border-radius: 2em;
  -ms-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
}
.el-scrollbar__bar.is-vertical {
  width: 4px;
}
.el-main {
  padding: 10px;
}
</style>

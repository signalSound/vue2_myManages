<template>
    <div>
      <el-container>
      <el-header>
        <div></div>
        <div>
          <el-dropdown @command="handleCommand" menu-align='start'>
            <img src="../assets/bg.jpg" class="avator">
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="home">首页</el-dropdown-item>
              <el-dropdown-item command="signout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
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
    handleCommand(command){
      if(command === 'home') {
        this.$router.push('/Echart');
      }else {
        sessionStorage.clear()
        this.$store.commit('savePass', null)
        this.$router.push('/login');

        // window.location.reload() //刷新页面
        this.$message({
            type: 'success',
            message: '退出成功'
        });
      }
    },
    handleOpen(){},
    handleClose(){},
  }
}
</script>
<style scoped lang="less">
.el-main {
  overflow: hidden;
  height: calc(100vh - 60px);
}
.content_base {
  height: 100%;
  padding: 15px;
  overflow: auto;
  background: #fff;
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
  background: #f5f7fa;
}
.el-header, .el-footer {
    background-color: #ecf5ff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

.avator{
  width: 36px;
  height: 36px;
  border-radius: 50%;
  // margin-right: 37px;
}
</style>


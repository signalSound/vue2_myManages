<template>
    <div>
        <el-button type="primary" class="button" @click="buttoncli">摁我全屏</el-button>
    </div>
</template>
<script>
    import ScreenFull from 'screenfull/dist/screenfull'
    export default{
        data(){
            return{
                isFullscreen: false
            }
        },
        methods:{
            buttoncli(){
                if (!ScreenFull.enabled) { // 如果不允许进入全屏，发出不允许提示
                this.$message({
                  message: '不支持全屏',
                  type: 'warning'
                })
                return false
             }
              ScreenFull.toggle()
              this.$message({
                  message: '全屏啦',
                  type: 'success'
                })
            }
        }
    }
</script>
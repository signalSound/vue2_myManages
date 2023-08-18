<template>
    <div>
        <div class="docWrap">
      <!-- 预览文件的地方（用于渲染） -->
            <div ref="file"></div>
        </div>
    </div>
</template>
<script>
import {request} from '@/http/axios.js'
let docx = require("docx-preview")
    export default {
        data(){
            return {

            }
        },
        mounted() {
            let param = {
                url: '/getFile/word',
                method: 'get',
                responseType: 'blob',
                params: {test:'testword'}
            }
            request(param).then( res => {
                console.log(res.data)
                docx.renderAsync(res.data, this.$refs.file)
            })
        }
    }
</script>

<style lang="less" scoped>
.docWrap {
  // 指定样式宽度
  width: 100%;
  overflow-x: auto;
}
</style>
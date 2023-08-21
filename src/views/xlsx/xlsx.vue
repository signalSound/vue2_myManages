<template>
    <div>
        <el-button @click="downExcelFile" type="primary">主要按钮</el-button>
        xlsx
    </div>
</template>
<script>
    import * as XLSX from 'xlsx/xlsx.mjs'
    export default {
        data() {
            return {
           // 需要导出的数据
                aoa: [
                    ['姓名', '性别', '年龄', '注册时间'],
                    ['张三', '男', 18, new Date()],
                    ['李四', '女', 22, new Date()]
                ]
            }
        },
        methods: {
            downExcelFile() {
                // 导出的表格名称
                const filename ='导出表格.xlsx'
                // Excel第一个sheet的名称
                const ws_name = 'Sheet1'
                const wb = XLSX.utils.book_new()
                const ws = XLSX.utils.aoa_to_sheet(this.aoa);
                XLSX.utils.book_append_sheet(wb, ws, ws_name) // 将数据添加到工作薄
                XLSX.writeFile(wb, filename) // 导出Excel
            }
        },
        mounted() {
            
           
        }
    }
</script>
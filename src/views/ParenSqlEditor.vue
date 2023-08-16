<template>
	<div>
		<!-- <SqlEditor ref="sqleditor"
		   :value="basicInfoForm.sqlMain"
		   @changeTextarea="changeTextarea($event)"
		/> -->
		<!-- <el-button type="primary" size="small" class="sql-btn" @click="formaterSql (basicInfoForm.sqlMain)">格式化sql</el-button> -->
        <textarea name="" v-model="sql" id="" cols="30" rows="10"></textarea>
        <p>{{sql}}</p>
	</div>
</template>
<script>
    import sqlFormatter from "sql-formatter"
    // import SqlEditor from '@/components/SqlEditor'
	export default {
        // components: {
        //     SqlEditor
        // },
        data() {
	        return{
	        	// basicInfoForm:{
	        	// 	sqlMain: ''
				// }
                sql: ''
			}
		},
        mounted(){
            var str = "CREATE TABLE IF NOT EXISTS `test_user`.`testA_` (`hello` VARCHAR(255) COMMENT '你好',`word` VARCHAR(255) COMMENT '世界') COMMENT '测试'  STORED AS PARQUET"
            this.sql = sqlFormatter.format(str)
            console.log(this.sql)
        },
        methods:{
        	changeTextarea (val){
        	   this.$set(this.basicInfoForm, 'sqlMain', val)
        	},
        	formaterSql (val) {
                let dom = this.$refs.sqleditor
                dom.editor.setValue(sqlFormatter.format(dom.editor.getValue()))
           },
        },
     }
</script>

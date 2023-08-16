<template>
    <div class="login">
        <div class="login_input">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="账号" prop="accunot">
                    <el-input type="text" v-model="ruleForm.accunot" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
      
    </div>
</template>
<script>
  export default {
    data() {
 
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
            accunot: '',
          checkPass: '',
        },
        rules: {
          accunot: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$store.commit('savePass', JSON.stringify(this.ruleForm))
            this.$router.push({path: '/Echart'})
            // console.log(this.$store.state.passInfo, 333)

            // alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style lang="less" scoped>
.login {
    background-image: url(../../assets/bg.jpg);
    display: flex;
    align-content: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}
.login_input {
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
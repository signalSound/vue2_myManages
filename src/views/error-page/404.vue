<template>
    <div>
        404
    </div>
</template>
<script>

export default {
    name: 'Cantainer',
    data () {
      return {
        msg: 'Welcome ',
        msg1: '教程',
        conuter: 0,
        show: true,
      }
    },
    computed: {
      message: function(){
        return this.msg + this.msg1
      } 
    },
    watch: {
      conuter(newVal, oldVal){
        console.log(newVal, oldVal)
      }
    },
    mounted() {
  
      console.log(this.$store, 'antRoute222')
    },
    methods: {
      handleOpen(){},
      handleClose(){},
    }
  }
  </script>
<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <button @click="conuter++">点击加 1</button>
    <input type="text" v-focus>
    <button @click="show = !show">点击显示隐藏</button>
    <transition name="fade">
      <p v-show="show" style="fontSize: 30px;color:red">动画实例</p>
    </transition>
    <transition name="slide-fade">
      <p v-show="show" style="fontSize: 30px;color:red">动画实例</p>
    </transition>
    <transition name="bounce">
      <p v-show="show" style="fontSize: 30px;color:red">动画实例</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
  }
}
// event.stopPropagation
// event.preventDefault
// console.log(this)

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all .3s ease
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(0.165, 0.84, 0.44, 1) 
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
}
.bounce-enter-active {
  animation: bounce-in .5s;
}

.bounce-leave-active {
  animation: bounce-in .5s reverse;

}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>

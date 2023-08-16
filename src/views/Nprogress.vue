<template>
    <div>
        <p class="textColor">
            nprogress
            <span>
                lesstest
            </span>
        </p>
        <!-- <canvas id="canvas"></canvas> -->
    </div>
</template>
<script>
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
NProgress.configure({ showSpinner: false})
    export default{
        data() {
            return {
                url: ''
            }
        },
        mounted() {
            NProgress.set(0.0);     // Sorta same as .start()
            NProgress.set(0.4);
            setTimeout(()=> {
                NProgress.set(1.0)
 

            },5000)
            console.log(NProgress)
            // NProgress.start();
        }
    }
</script>
<style scoped lang="less">
    .textColor {
        color: red;
        span {
            font-size: 30px;
            color: burlywood;
        }
    }
</style>
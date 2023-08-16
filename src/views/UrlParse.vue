<template>
    <div>
        <button class="btn">
            按钮
        </button>
        <!-- This was made with GlassGenerator.netlify.app -->
<div class="glass-container" id="glass"> 22 | formatedate(1)</div>
        <!-- <canvas id="canvas"></canvas> -->
    </div>
</template>
<script>
    import { request, httpRequest } from "@/http/axios.js";
    const Url = require('url-parse')
    export default{
        data() {
            return {
                url: '',
                arr: [1,2,3]
            }
        },
        filters: {
            formatedate(val,that) {
                // console.log(this, 1111)
            }
        },
        mounted() {
            request('get','/user',{url: '/user'}).then(res => {
                console.log(res, 'res')
            })
            // this.arr.filter(item => {
            //     console.log(this, item)
            // })
            const url = new Url('https://github.com/foo/bar');
            // console.log(url)
        }
    }
</script>
<style>
    .btn {
        background-image: linear-gradient(25deg, #85001c, #ac261a, #d44314, #fd5f00);
        box-shadow: 5px 17px 32px -2px rgba(255, 74, 183, 0.3);
    }
    /* This was made with GlassGenerator.netlify.app */ 

/* This was made with GlassGenerator.netlify.app */ 

.glass-container{
    width: 700px;
    height: 375px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-radius: 21px;
    backdrop-filter: blur(7px);
    background-color: rgba(0,191,255, 0.009);
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
    border: 2px rgba(255,255,255,0.4) solid;
    border-bottom: 2px rgba(40,40,40,0.35) solid;
    border-right: 2px rgba(40,40,40,0.35) solid;
}
</style>
<template>
    <div>
        <div class="wrapper" ref="wrapper">
            <div class="content">
                <ul>
                    <li @click="liClick">3</li>
                    <li>3</li>
                    <li>3</li>
                    <li>3</li>
                    <li>3</li>
                    <li>3</li>
                    <li>3</li>
                    <li>3</li>
                    <li>3</li>
                    <li>3</li>
                    <li>3</li>
                    <li>3</li>
                    <li>3</li>
                    <li>3</li>
                    <li>3</li>
                    <li>3</li>
                    <li>3</li>
                    <li>3</li>
                    <li>3</li>
                    <li>3</li>
                    <li>3</li>
                    <li>3</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import bScroll from 'better-scroll'
    export default{
        data() {
            return {
                bScroll: null
            }
        },
        methods:{
            liClick(){
                console.log('我被点击了')
            }
        },
        mounted() {
           this.bScroll = new bScroll(this.$refs.wrapper, {
            probeType: 2,
            pullUpLoad: true,
            click: true
           })
           this.bScroll.on('scroll', position => {
            // console.log(position, 'position')
           })
           this.bScroll.on('pullingUp', () => {
            console.log('上拉加载更多')
           })
        }
    }
</script>
<style>
    .wrapper {
        height: 100px;
        overflow: hidden;
        background-color: aliceblue;
    }
</style>
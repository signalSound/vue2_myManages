<template>
    <div>
        <!-- <canvas id="canvas"></canvas> -->
    </div>
</template>
<script>
var FileSaver = require('file-saver');

    export default{
        data() {
            return {
                url: ''
            }
        },
        mounted() {
            // var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
            // FileSaver.saveAs(blob, "hello world.txt")
        }
    }
</script>

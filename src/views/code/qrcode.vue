<template>
    <div>
        <!-- <canvas id="canvas"></canvas> -->
        <img :src="url" id="image" width="100" height="100" alt="">
    </div>
</template>
<script>
    import QRCode from 'qrcode'
    export default{
        data() {
            return {
                url: ''
            }
        },
        mounted() {
            // let canvas = document.getElementById('canvas')
            // QRCode.toCanvas(canvas, '兵者，国之大事，生死之地，存亡之道，不可不察也', function (error) {
            // if (error) console.error(error)
            //     console.log('success!');
            // })
            let _this = this
            // QRCode.toString('I am a pony!',{type:'terminal'}, function (err, url) {
            //     _this.url = url
            //     console.log(url)
            // })

            // QRCode.toDataURL('I am a pony!')
            // .then(url => {
            //     _this.url = url

            //     console.log(url)
            // })
            // .catch(err => {
            //     console.error(err)
            // })

            // QRCode.toDataURL('some text', { errorCorrectionLevel: 'H' }, function (err, url) {
            //     _this.url = url

            //     console.log(url)
            // })

            var opts = {
                errorCorrectionLevel: 'H',
                type: 'image/jpeg',
                quality: 0.3,
                margin: 1,
                color: {
                    dark:"#010599FF",
                    light:"#FFBF60FF"
                }
                }

                QRCode.toDataURL('text', opts, function (err, url) {
                if (err) throw err

                var img = document.getElementById('image')
                img.src = url
                })

        }
    }
</script>
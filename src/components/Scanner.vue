
<template>

<span> 
     <div class="w3-container w3-center" style="height:100%!important;">
        <qrcode-reader class="w3-center" @init="onInit" @decode="onDecode" :paused="paused" 
      style="height:300px; width:100%; margin-top:30%"></qrcode-reader>
     </div>
</span>
</template>


<style>
body {font-family: "Lato", sans-serif}
</style>


<script>
import { QrcodeReader } from 'vue-qrcode-reader'
export default {
  name: 'Scanner',
  data () {
    return {
      cart:0,
       paused: false,
       content:0
    }
  },
  created () {
      console.log(JSON.stringify(QrcodeReader))
  },
  
  components: {
  //  'qrcode-reader': QrcodeReaderVue.QrcodeReader
  QrcodeReader,
  },
  methods: {
      async onInit (promise) {
          try {
            await promise
          } catch (error) {
            if (error.name === 'NotAllowedError') {
                iziToast.error({
                    title: 'error',
                    message: 'user denied camera access permisson',
                    position: 'bottomCenter',
                });

            } else if (error.name === 'NotFoundError') {
              // 
               iziToast.error({
                    title: 'error',
                    message: 'no suitable camera device installed',
                    position: 'bottomCenter',
                });
            } else if (error.name === 'NotSupportedError') {
              // page is not served over HTTPS (or localhost)
              iziToast.error({
                    title: 'error',
                    message: ' page is not served over HTTPS (or localhost)',
                    position: 'bottomCenter',
                });
            } else if (error.name === 'NotReadableError') {
              // maybe camera is already in use
              iziToast.error({
                    title: 'error',
                    message: 'maybe camera is already in use',
                    position: 'bottomCenter',
                });
            } else if (error.name === 'OverconstrainedError') {
              // 
              iziToast.error({
                    title: 'error',
                    message: 'passed constraints don\'t match any camera. Did you requested the front camera although there is none?',
                    position: 'bottomCenter',
                });
            } else {
              // browser is probably lacking features (WebRTC, Canvas)
               iziToast.error({
                    title: 'error',
                    message: 'browser is probably lacking features (WebRTC, Canvas)',
                    position: 'bottomCenter',
                });
            }
          } finally {
            // hide loading indicator
          }
      },
      onDecode (content) {
        this.paused = true
        this.content =  content
        window.localStorage.setItem('dineIn',this.content)
        window.location.href='/dine_in'

      }
     
  } 
}
</script>




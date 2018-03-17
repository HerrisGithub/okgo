
<template>

<span> 
        {{content}}
</span>
</template>


<style>
body {font-family: "Lato", sans-serif}
</style>


<script>
 import iziToast from '../.././static/izitoast/dist/js/iziToast.js'
export default {
  name: 'Scanner',
  data () {
    return {
      cart:0,
       paused: false,
       content: window.localStorage.getItem('dineIn')||''
    }
  },
  created () {
   
  },
  
  components: {
  //  'qrcode-reader': QrcodeReaderVue.QrcodeReader
  },
  methods: {
     
     
  } 
}
</script>




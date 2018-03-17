 <!-- Modal -->
  <template>
    <span>
        <!-- <navbar></navbar> -->
        <p style="color:red">{{lastInvoice}}</p>
            <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
    </span>
  </template>

<style>
 
</style>

<script>
import Navbar from './Navbar'
import Axios from 'axios'
import QrcodeVue from 'qrcode.vue';
export default {
  name: 'Login',
  data () {
    return {
      data: 'as',
      error:'',
      lastInvoice:123,
    //    value: '',
      size: 300
    }
  },
  components: {
      Navbar,
      QrcodeVue
  },
  methods :{
      
  },
  created () {
      console.log(this.$store.getters.getLastInvoice)
  }
  
}
</script>
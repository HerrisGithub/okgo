  <template>
    <span>
        <navbar></navbar>
        <br>
         <span v-if="(data.id).toString()!=='error'">
            <ul class="nav nav-tabs " role="tablist" style="margin-top:10px; padding-left:30px;">
                <li class="nav-item" id="barcode-link">
                    <a class="nav-link active" data-toggle="tab" href="#nav-barcode" @click=" getOrderById()" role="tab">BARCODE</a>
                </li>
                <li class="nav-item" id="orders-link">
                    <a class="nav-link" data-toggle="tab" href="#nav-details" role="tab" @click=" getDetailOrders()">DETAILS</a>
                </li>
            </ul>
            <div class="tab-content" id="nav-tabContent" style="padding-top:0; margin-top:0">
                <div class="tab-pane fade show active" id="nav-barcode" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class="w3-center" >
                            <p style="font-size:10pt; padding:30px; padding-top:10px; padding-bottom:0" class="peringatan"  v-if="expired">
                                  Barcode sudah pernah digunakan
                              </p>
                            <p style="font-size:10pt; padding:30px; padding-top:10px; padding-bottom:0" class="peringatan" v-else>
                                Maksimum pengambilan barang 15 menit setelah mekukan scanning barcode
                            </p>
                              
                            <div class="w3-center" style="padding:20px; padding-top:0; padding-bottom:0">
                                <qrcode-vue :value="(data.id).toString()" :size="250" level="H" style="width:100%" ></qrcode-vue> 
                            </div>
                    </div> 
                </div>
                <div class="tab-pane fade" id="nav-details" role="tabpanel" aria-labelledby="nav-profile-tab">
                      <div class="card" v-for = "(item,index) in datas" v-bind:item="item" v-bind:index="index"  v-bind:key="item.id">
                          <div class="row">
                              <div class="w3-left" style="widthL:100%; height:120px; padding:20px">
                                  <img v-bind:src="($store.getters.getAPIURL)+'/image/'+item.listing.image"  style="width:auto!important;height:auto!important; max-height:100%;">
                              </div>
                              <div class="w3-left" style="padding-top:50px; width:50%">
                                  <p style="font-size:10pt; text-align:center">
                                      {{item.listing.name}} 
                                  </p>
                              </div>
                              <div class="w3-right" style="padding-top:50px; text-align:right">
                                  <span class="badge badge-warning">{{item.qty}}</span> 
                              </div>
                          </div>
                         
                      </div>
                </div>
            </div>
        </span>
         
    </span>
  </template>

<style>
 .i-text-10{
     font-size: 10pt
 }
</style>

<script>
import Navbar from './Navbar'
import Axios from 'axios'
import QrcodeVue from 'qrcode.vue';
import _ from 'underscore'
import $ from 'jquery'
export default {
  name: 'Order',
  data () {
    return {
      data:{
          id:'error'
      },
      datas:[],
      error:'',
      lastInvoice:this.$store.getters.getLastInvoice,
      size: 100,
      expired:false
    }
  },
  components: {
      Navbar,
      QrcodeVue
  },
  methods :{
    getOrderById(){
        const id = window.localStorage.getItem('odId')
        if(id!==null && id!=='' && typeof(id)!=='undefined'){
            new Promise((resolve,reject)=>{
                 Axios.get(this.$store.getters.getAPIURL+'/mobile/user/history/progress/'
                +window.localStorage.getItem('userEmail'))
                .then((res)=>{
                    const a = _.find(res.data,(key)=>{
                        return (key.id).toString() ===id
                    })
                    if(typeof(a)!=='undefined'){
                        resolve(a)
                    }else{
                        reject()
                    }
                })
            })
            .then((data)=>{
                this.data=data
                this.expired=false
            })
            .catch(()=>{
                    Axios.get(this.$store.getters.getAPIURL+'/mobile/user/history/completed/'
                        +window.localStorage.getItem('userEmail'))
                        .then((res)=>{
                            const a = _.find(res.data,(key)=>{
                                return (key.id).toString() ===id
                            })
                                
                            if(typeof(a)!='undefined'){
                                this.data = a
                                this.expired=true
                            }
                    })
               
            })

        }
    },
    getDetailOrders(){
        Axios.post(this.$store.getters.getAPIURL+'/mobile/user/history/detail',{
            transactionId:this.data.id,
            token:this.$store.getters.getToken
        })
        .then((res)=>{
            this.datas = res.data
        })
    },
    getOrdersCompleted(){
        Axios.get(this.$store.getters.getAPIURL+'/mobile/user/history/completed/'
        +window.localStorage.getItem('userEmail'))
        .then((res)=>{
            this.data = res.data
        })
    }
      
  },
  created () {
       this.getOrderById()
  }
  
}
</script>
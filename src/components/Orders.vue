  <template>
    <span>

       
        <navbar></navbar>
        <br>
         <ul class="nav nav-tabs " role="tablist" style="margin-top:1%; padding-left:30px;">
            <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#home-s" @click=" getOrdersOnProgress()" role="tab">Progress</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#home-s" @click="getOrdersCompleted()" role="tab">Completed</a>
            </li>
        </ul>
         <br>
         <div class="col-auto">
             <input type="text" class="form-control" placeholder="Cari Order" v-model="filter"  @keyup="searchOrder()">
         </div>
         <br>
         <div class="row" >
            <span  class="card col-md-3"  v-for = "(item,index) in data" v-bind:item="item" v-bind:index="index"  v-bind:key="item.id">
                 <a href="#" @click="toOrder(item.id)">
                 <div class="row" style="padding-left:30px">
                     <div class="w3-left">
                       <div style="width: 100%; margin-top:10px; margin-bottom:10px">
                            <qrcode-vue :value="(item.id).toString()" :size="size" level="H" style="width:100%"></qrcode-vue> 
                        </div>
                  </div>
                  <div class="w3-right" style="padding:10px; padding-top:5px">
                     <p class="i-text-10">ORDER NO</p>
                     <p class="i-text-10">{{item.invoice}}</p>
                     <p class="i-text-10">{{item.createdAt | localDate}}</p> 
                  </div>
                 </div>
                 </a>
          </span>
        </div>
 <!-- modal -->
           
        <div class="w3-container" style="height:100%">
            <div id="id01" class="w3-modal" style="padding-top:0; ">
                <div class="w3-modal-content w3-animate-zoom w3-card-4" style="height:100%;margin:0">
                <header class="w3-container w3-teal" style="height:75px"> 
                    <span onclick="document.getElementById('id01').style.display='none'" 
                    class="w3-button w3-display-topright" style="font-size:24pt">&times;</span>
                    <p style="padding-top:10%">Order No : {{lastTrx.invoice}}</p>
                </header>
                <div class="w3-container" style="padding:10px">
                     <qrcode-vue :value="(lastTrx.id).toString()" :size="300" level="H" style="width:100%"></qrcode-vue> 
                </div>

                </div>
            </div>
            </div>
        <!-- end modal -->

        



            <!-- <qrcode-vue :value="data" :size="size" level="H"></qrcode-vue> -->
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
import QrcodeVue from 'qrcode.vue'
import $ from 'jquery'
import _ from 'underscore'
export default {
  name: 'Login',
  data () {
    return {
      data:'',
      temp:[],
      error:'',
      lastInvoice:this.$store.getters.getLastInvoice,
      size: 100,
      lastTrx:{
          id:'error'
      },
      filter:''
    }
  },
  components: {
      Navbar,
      QrcodeVue
  },
  methods :{
    getOrdersOnProgress(){
        Axios.get(this.$store.getters.getAPIURL+'/mobile/user/history/progress/'
        +window.localStorage.getItem('userEmail'))
        .then((res)=>{
            
            this.data = res.data
            this.temp = res.data
        })
    },
     getOrdersCompleted(){
        Axios.get(this.$store.getters.getAPIURL+'/mobile/user/history/completed/'
        +window.localStorage.getItem('userEmail'))
        .then((res)=>{
            this.data = res.data
            this.temp = res.data
        })
    },
    toOrder(id){
        window.localStorage.setItem('odId',id.toString())
        window.location.href='/order'
    },
    searchOrder(){
        if(this.filter==''){
            this.data = this.temp       
        }else{
            let _data =  _.filter(this.temp,(item)=>{
                return ((item.invoice).toLowerCase()).includes((this.filter).toLowerCase())
            })
            this.data = _data
        }
    }
      
  },
created () {
    this.getOrdersOnProgress()
    if(window.localStorage.getItem('ordersData')!==null && window.localStorage.getItem('ordersData')!=='' && typeof(window.localStorage.getItem('ordersData'))!=='undefined'){
        this.lastTrx = JSON.parse(window.localStorage.getItem('ordersData'))
        setTimeout(() => {
            document.getElementById('id01').style.display='block'
            window.localStorage.setItem('ordersData','')
        }, 300);
    }
    
}
  
}
</script>
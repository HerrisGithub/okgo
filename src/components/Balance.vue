
<template>
   <span>
       <navbar></navbar>
       <div class="row">
            <div class="col-md-12 w3-center">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <p class="col-md-12">BALANCE</p>
                </nav>
            </div>
        </div>
        <div class="row" style="padding:10px">
            <div class="col-md-6">
                <p></p>
                
                <div class="card">
                    <div class="card-header">
                       <img src=".././assets/wallet.jpeg" alt="" style="width:30px">  Wallet
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                 <h5 class="card-title">{{meName().toUpperCase()}} WALLET</h5>
                                <p style="color:brown">Current Balance</p>
                                <p>{{getBalance() | currency('IDR. ')}}</p>
                            </div>
                            <div class="col-md-6">
                                <img src=".././assets/wallet.jpeg" alt="" style="width:100%; height:200px; border-radius:10px">
                            </div>
                            
                        </div>
                       
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <p></p>
                 <div class="card">
                    <div class="card-header">
                        Top up melalui BCA
                    </div>
                    <div class="card-body">
                        <p style="font-size:9pt">1. Gunakan ATM / Internet Banking / Mobile Banking BCA</p>
                        <p style="font-size:9pt">2. Pilih TRANSFER > TRANSFER KE REK. BCA</p>
                        <p style="font-size:9pt">3. Daftarkan atau Masukkan nomor akun <strong>242-1110001 </strong>(a/n <strong>PT. BAR CODE INDONESIA</strong>  )</p>
                        <p style="font-size:9pt">4. Masukkan nominal topup (Minimal Rp. 50.000) dan berita transfer berupa email akun Okgo (Masukkan sebatasnya)</p>
                        <p style="font-size:9pt">5. Foto / Screenshot bukti transfer</p>
                        <p style="font-size:9pt">6. Hubungi WhatsApp OkGo +62 821 6011 0069</p>
                        <p style="font-size:9pt">7. Ikuti petunjuk untuk menyelesaikan transaksi</p>
                        
                        
                    </div>
                </div>
            </div>
        </div>
   </span>
</template>
<style></style>

<script>
import _ from "underscore"
import Navbar from './Navbar'
import Axios from 'axios'
import $ from 'jquery'
export default {
  name: 'Cart',
  data () {
    return {
      data: [],
      total:0,
      tableClass : 'table-responsive',
      balance:0
    }
  },
  components: {
      Navbar
  },
  methods :{
     meName(){
          return this.$store.getters.meName
     },
      getBalance(){
        new Promise((resolve,reject)=>{
          Axios.post(this.$store.getters.getAPIURL+'/mobile/user/balance',{
              email:this.$store.getters.meEmail,
              token:this.$store.getters.getToken
          }).then((res)=>{
              if(res.data.errors[0].message==''){
                this.balance=res.data.balance
              }else{
              }
              resolve()
          })
        })
        return this.balance
    }

  },
  created () {
      if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        ){
           this.tableClass='table-responsive' 
        }
        else{
          this.tableClass=''
        }
        
      window.localStorage.removeItem('redirect')
  }
  
}
</script>

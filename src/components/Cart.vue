
<template>
<!-- v-for = "(item,index) in $store.state.order.cart" v-bind:item="item" v-bind:index="index"  v-bind:key="item.id -->
   <span>
       <navbar></navbar>
    <table id="table-cart" class="table" v-bind:class="tableClass" style="margin-top:1%">
        <thead>
            <tr class="i-sm">
            <th></th>
            <th>Product</th>
            <th>QTY</th>
            <th>IDR</th>
            <th><i class="fa fa-gear"></i> </th>
            </tr>
        </thead>
        <tbody>
                <tr v-for = "(item,index) in $store.state.order.cart" v-bind:item="item" v-bind:index="index"  v-bind:key="item.id">
                    <td class="i-sm">
                        <img class="card-img-top" v-bind:src="($store.getters.getAPIURL)+'/image/'+item.image" style="height:50px; width:50px" alt="Card image cap">
                    </td>
                    <td class="i-sm">{{item.name}}</td>
                    <td class="i-sm">{{item.qty}}</td>
                    <td class="i-sm">{{item.price/1000 | currency(' ')}}</td>
                    <td class="i-sm"><button class="btn btn-danger btn-sm" @click="deleteOrder(item)">X</button></td>
                    </tr>
                    <tr v-if="$store.state.order.cart.length<1">
                        <th scope="row"></th>
                        <td colspan="6" style="color:red; text-align:center">Cart kosong</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
        </tbody>
    </table>
    <table class="table">
         <thead>
             <tr>
                <th> <span class="w3-right"> Grand Total</span></th>
            </tr>
        </thead>
        <tbody>
                <tr>
                    <td class="w3-right">{{ordersTotal($store.state.order.cart)/1000 | currency('IDR. ')}}</td>
                </tr>
                <tr>
                    <td><button class="btn btn-success w3-right" @click="checkOut()">Checkout</button></td>
                </tr>
        </tbody>
    </table>

   </span>
</template>
<style>
.i-name{
    color: black;
    padding:10px
}
.i-sm{
    font-size: 10pt
}
</style>

   
<script>
import _ from "underscore"
import Navbar from './Navbar'
import Axios from 'axios'
import $ from 'jquery'
import iziToast from '../.././static/izitoast/dist/js/iziToast.js'
export default {
  name: 'Cart',
  data () {
    return {
      data: [],
      total:0,
      tableClass : 'table-responsive'
    }
  },
  components: {
      Navbar
  },
  methods :{
      ordersTotal(data){
          let val=0;
          data.forEach(e => {
              val +=(e.price*e.qty)
          });
          this.total=val
          return this.total
      },
      deleteOrder(item){
          let self = this
            iziToast.question({
                timeout:false,
                close: false,
                overlay: true,
                toastOnce: true,
                id: 'question',
                zindex: 999,
                title: 'Hapus '+item.name,
                message: 'Apakah Anda Yakin?',
                position: 'center',
                buttons: [
                    ['<button name="btnYes"><b>Ya</b></button>', function (instance, toast) {
                        let toast1 = document.querySelector('.iziToast')
                        new Promise((res,rej)=>{
                            iziToast.hide(toast1)
                            setTimeout(() => {
                                res()     
                            }, 2000);
                        })
                        .then(()=>{
                            self.$store.dispatch('DELETE_ORDER',item);
                        })
                    }, true],
                    ['<button>Tidak</button>', function (instance, toast) {
                        let toast1 = document.querySelector('.iziToast')
                        iziToast.hide(toast1)
                        iziToast.hide({
                            transitionOut: 'fadeOutUp'
                        }, toast1)
                    }]
                ],
                onClosing: function(instance, toast, closedBy){
                },
                onClosed: function(instance, toast, closedBy){
                }
            });
      },
      checkOut(){
           if(this.$store.state.user.token!=null){
                Axios.post(this.$store.getters.getAPIURL+'/mobile/order/create',{
                    order:JSON.stringify(this.$store.state.order.cart),
                    total:this.total,
                    email:this.$store.state.user.email,
                    token:this.$store.state.user.token,
                    tableNo:0
                }).then((res)=>{
                        const invoice = res.data.invoice
                        let self = this
                        let success=false
                        // window.localStorage.setItem('lastInvoice')
                        if(res.data.errors[0].message==''){
                            iziToast.question({
                                timeout:false,
                                close: false,
                                overlay: true,
                                toastOnce: true,
                                id: 'forwardorders',
                                zindex: 999,
                                title: 'Checkout',
                                message: 'Apakah anda ingin melanjutkan orderan ini?',
                                position: 'center',
                                buttons: [
                                    ['<button name="btnYes"><b>Ya</b></button>', function (instance, toast) {
                                         
                                         let toast1 = document.querySelector('#forwardorders')
                                        iziToast.hide(toast1)

                                        iziToast.success({
                                                title: 'OK',
                                                timeout:1500,
                                                message: 'Transaksi Berhasil',
                                                position: 'bottomCenter',
                                                onClosing: ()=>{
                                                    new Promise((resolve,rej)=>{
                                                        self.$store.dispatch('DELETE_CART')
                                                        window.localStorage.setItem('ordersData',JSON.stringify(res.data))
                                                        resolve()
                                                    }).then(()=>{
                                                        window.location.href="/orders"
                                                    })
                                                }
                                            });


                                        success=true
                                    }, true],
                                    ['<button>Tidak</button>', function (instance, toast) {
                                        let toast1 = document.querySelector('.iziToast')
                                        iziToast.hide(toast1)
                                        iziToast.hide({
                                            transitionOut: 'fadeOutUp'
                                        }, toast1)
                                        success=false
                                    }]
                                ],
                                onClosing: function(instance, toast, closedBy){
                                     
                                },
                                onClosed: function(instance, toast, closedBy){
                                   if(success){
                                      
                                   }
                                    
                                },
                               
                            });
                            
                            
                        }else{
                            iziToast.error({
                                title: 'OK',
                                message:res.data.errors[0].message ,
                                position: 'bottomCenter'
                            });
                    }
            }).catch((err)=>{
                console.log(err)
            })
           }else{
               window.localStorage.setItem('redirect','/cart')
               window.location.href="/login"
           }

      },
      isLogged(){
       return this.$store.getters.hasToken
      },
      logout(){
       this.$store.dispatch('LOGOUT')
       window.location.reload()
      }

  },
  created () {
      if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Xiaomi/i)
        || navigator.userAgent.match(/Mobile/i)
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

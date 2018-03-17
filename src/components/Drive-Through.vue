<template>
<span id="dt">
  <header >
    <navbar></navbar>
<div class="w3-display-container w3-content" style="background-color: #eee;">
  <ul class="nav nav-tabs " role="tablist" style="margin-top:1%; padding-left:30px;">
    <li class="nav-item">
      <a class="nav-link active" data-toggle="tab" href="#home-s" @click="getListBeer()" role="tab">Beer</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#home-s" @click="getListCoffee()" role="tab">Coffee</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#home-" @click="getListOthers()" role="tab">Others</a>
    </li>
  </ul>
  <br>
   <div class="col-auto">
      <div class="input-group mb-2">
        <input type="text" v-model="filter" class="form-control" @keyup="searchProduct()" placeholder="Cari Produk">
      </div>
    </div>
  <div class="row w3-container w3-center" >
            <!--
            <div class="card col-md-3" style="padding:2%;" v-for = "(item,index) in data" v-bind:item="item" v-bind:index="index"  v-bind:key="item.id">
              <div style="width: 100%;text-align:center;">
                <img class="card-img-top" v-bind:src="($store.getters.getAPIURL)+'/image/'+item.image" v-bind:style="{height:'auto',width:'100px'}"alt="Card image cap">
                <p>{{item.name}}</p>
              </div>
              <div class="row">
                <div class="col-md-12" >{{item.ml}}</div>
              </div>
              <div class="row"> 
                <div class="col-md-12">{{item.price/1000 | currency('IDR. ')}}</div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="order w3-container" style="display:none;">
                    <button class="btn btn-danger btn-sm" @click="subtQty(index)"  style="border-radius:100px; width:30px">-</button>
                      <input  class="i-name qtyi" min=0 v-model="qty" @change="qtyChange(index)" 
                      type="number" style="width:100px; text-align:center;">
                      <button class="btn btn-primary btn-sm" @click="addQty()" style="border-radius:100px; width:30px">+</button>
                      
                  </div>
                  <br>
                  <button class="btn btn-primary btn-add-order" @click="addOrder(index)">Add order</button>
                  <button class="btn btn-success btn-add-to-cart" style="display:none" @click="addToCart(index)">Add to cart</button>
                </div> 
              </div>
                <br>
                <p>&nbsp;</p>
          </div>
          -->
          <div class="cardHolder-dt">
            <div class="card-dt" v-for = "(item,index) in data" v-bind:item="item" v-bind:index="index"  v-bind:key="item.id">
              <div></div>
              <div style="width:100%; height:150px;" class="w3-center">
                  <span style="width:90px; height:150px;" class="w3-center">
                             <img class="card-img-top w3-center" v-bind:src="($store.getters.getAPIURL)+'/image/'+item.image" 
                  style = "width:auto!important;height:auto!important; max-height:100%; padding-left:10px; text-align:center">
                  </span>
         
              </div>
              <div class="">
                 <p class="p-product">{{item.name}}</p>
              </div>
              <div class="">
                 <p class="p-product-info">{{item.ml}} | {{item.price/1000 | currency('IDR. ')}}</p>
              </div>
               <div class="" >
                   <button class="btn btn-primary btn-add-order btn-sm" @click="addOrder(index)">order</button>
                  <span class="order" style="display:none;">
                    <button class="btn btn-danger btn-sm" @click="subtQty(index)"  style="border-radius:100px; width:30px;">-</button>
                      <input  class="i-name qtyi" min=0 v-model="qty" @change="qtyChange(index)" 
                      type="number" style="width:50%; text-align:center;height:3%; font-size:8pt; padding:1px">
                      <button class="btn btn-primary btn-sm" @click="addQty()" style="border-radius:100px; width:30px">+</button>
                  </span>
                  <br>
                 
                  <button class="btn btn-success btn-add-to-cart btn-sm" style="display:none" @click="addToCart(index)">Add to cart</button>
              </div>
            </div>
          </div>


  </div>
</div>
  
  </header>
  
</span>
</template>

<style src="./dt.css">

</style>

<script>
  import Axios from 'axios'
  import Navbar from './Navbar'
  import Navbardt from './Navbar-DT'
  import {mapGetters,mapState,mapActions} from 'vuex'
  import store from '.././store/store'
  import $ from 'jquery'
  import iziToast from '../.././static/izitoast/dist/js/iziToast.js'
  import _ from 'underscore'
  export default {
    ...mapActions({
          setPrice : 'SET_PRICE',
        }),
      data(){
        return {
          data: [],
          cart:[],
          initialQty:0,
          qty:0,
          filter:'',
          temp:[],
          prodWidth:100,
          prodHeight:300
                
        }
      },
      components:{
        Navbar,
      },
      methods:{
         ...mapState({
          a:state=>state.config.price
        }),
         ...mapGetters({
          curr:'currency'
        }),
        ...mapActions({
          setPrice : 'SET_PRICE',
          checkOut : 'ADD_TO_CART'
        }),
        qtyChange(index){
          const value = parseInt(document.getElementsByClassName('qtyi')[index].value)
          if(value==0){
            document.getElementsByClassName('order')[index].style.display="none"
            document.getElementsByClassName('btn-add-order')[index].style.display="unset"
            document.getElementsByClassName('btn-add-to-cart')[index].style.display="none"
          }
        }
        ,
        addOrder(index){
          this.qty=1
          $('.order').css({display:'none'})
          document.getElementsByClassName('order')[index].style.display="unset"
          
          $('.btn-add-order').css({display:'unset'})
          $('.btn-add-to-cart').css({display:'none'})
          document.getElementsByClassName('btn-add-order')[index].style.display="none"
          document.getElementsByClassName('btn-add-to-cart')[index].style.display="unset"
        },
        addToCart(index){
          const _prod =this.data[index]
          _prod.qty=this.qty
          _prod.subtotal = _prod.qty * _prod.price
          this.qty=0
          this.checkOut(_prod)
           $('.order').css({display:'none'})
             document.getElementsByClassName('btn-add-order')[index].style.display="unset"
             document.getElementsByClassName('btn-add-to-cart')[index].style.display="none"
           iziToast.success({
                title: _prod.name,
                message: 'Berhasil Ditambahkan',
                 position: 'bottomCenter',
            });
        },
        addQty(){
          this.qty+=1
        },
        subtQty(index){
          if(this.qty>1){
            this.qty-=1
          }else{
            this.qty=0
             $('.order').css({display:'none'})
            document.getElementsByClassName('btn-add-order')[index].style.display="unset"
            document.getElementsByClassName('btn-add-to-cart')[index].style.display="none"
          }
        },
        getListBeer(){
          // this.$store.getters.getAPIURL
          // {merchantId:0,category:'beer'}
          // this.$store.dispatch('GET_API_DATA',{url:'/mobile/listing',category:'BEER'});
            Axios.post(this.$store.getters.getAPIURL+'/mobile/listing',{
                merchantId:1,
                category:'BEER'
            }).then((res)=>{
                this.data  = res.data
                this.temp = res.data
            })
        },
        getListCoffee(){
            Axios.post(this.$store.getters.getAPIURL+'/mobile/listing',{
                merchantId:1,
                category:'COFFEE'
            }).then((res)=>{
                this.data  = res.data
                 this.temp = res.data
              
            })
        },
        getListOthers(){
            Axios.post(this.$store.getters.getAPIURL+'/mobile/listing',{
                merchantId:1,
                category:'OTHER'
            }).then((res)=>{
                this.data  = res.data
                 this.temp = res.data
            })
        },
        
        w3Open() {
        document.getElementsByClassName("mySidebar")[0].style.display = "block"
        } ,
        w3Close(){
        document.getElementsByClassName("mySidebar")[0].style.display = "none"
        },
        searchProduct(){
           if(this.filter==''){
              this.data = this.temp       
           }else{
              let product =  _.filter(this.temp,(item)=>{
                return ((item.name).toLowerCase()).includes((this.filter).toLowerCase())
              })
             this.data = product

           }
        }
       
      },
      computed:{
      },

      created(){
         this.getListBeer()
             if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Xiaomi/i)
        || navigator.userAgent.match(/Mobile/i)
        ){
          this.prodHeight=100
          this.prodWidth=100
        }else{
          this.prodHeight=400
          this.prodWidth=220
        }
          
      }
  }
</script>

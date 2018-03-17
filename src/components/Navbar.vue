
<template>
  <span>
     <nav class="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large" style="display:none; z-index:9999" id="mySidebar">
            <a href="javascript:void(0)" @click="w3Close()" class="w3-bar-item w3-button w3-large w3-padding-16">Close ×</a>
             <a href="/balance" @click="w3Close()" class="w3-bar-item w3-button" v-if="isLogged()">BALANCE <span style="color:yellow">{{getBalance() | currency(' ')}}</span></a>
            <a href="/" @click="w3Close()" class="w3-bar-item w3-button" >HOME</a>
            <a href="/drive_through" @click="w3Close()" class="w3-bar-item w3-button">DRIVE-THRU</a>
            <a href="/orders" @click="w3Close()" class="w3-bar-item w3-button" v-if="isLogged()">MY ORDERS</a>
             <a href="/profile" @click="w3Close()" class="w3-bar-item w3-button" v-if="isLogged()">PROFILE</a>
            <a href="/about" @click="w3Close()" class="w3-bar-item w3-button">ABOUT US</a>
            <a href="#"  @click="logout()" class="w3-bar-item w3-button" v-if="isLogged()">LOGOUT</a>
            <a href="/login" @click="w3Close()" class="w3-bar-item w3-button" v-else>LOGIN</a>
            <a href="/register" class="w3-bar-item w3-button" v-if="!isLogged()">REGISTER</a>
    </nav>


  <div class="w3-bar w3-white w3-card">
    <a class="w3-bar-item w3-button  w3-padding-large w3-hide-medium w3-hide-large w3-left" title="Toggle Navigation Menu" @click="w3Open()"><i class="fa fa-bars"></i></a>
    <a href="/" class="w3-bar-item w3-button w3-padding-large w3-left">
      <img src=".././assets/okgo.jpeg" style="width:100px; height:25px" alt="">
    </a>
   <!-- <a href="/cart" class="w3-bar-item w3-button w3-padding-large w3-hide-large w3-right" v-if="cartHide">
          <i class="fa fa-shopping-cart"></i>
              <span class="badge badge-warning"> <span class="cart">{{ ($store.state.order.cart).length}}</span> </span>
     </a> -->
    
      <a href="/cart" class="w3-bar-item w3-button w3-padding-large  w3-right">
          <i class="fa fa-shopping-cart"></i>
              <span class="badge badge-warning"> <span class="cart">{{ ($store.state.order.cart).length}}</span> </span>
     </a>
     
    <div class="w3-dropdown-hover w3-hide-small w3-right">
      <button class="w3-padding-large w3-button" title="More"><i class="fa fa-user"></i>&nbsp; <i class="fa fa-caret-down"></i></button>     
      <div class="w3-dropdown-content w3-bar-block w3-card-4"  v-if="isLogged()">
         <a href="/balance" @click="w3Close()" class="w3-bar-item w3-button" >BALANCE <span style="color:black">{{getBalance() | currency(' ')}}</span></a>
        <a href="/profile" class="w3-bar-item w3-button" >Profile</a>
        <a href="/orders" class="w3-bar-item w3-button" >My Orders</a>
         <a href="#" class="w3-bar-item w3-button" @click="logout()">Logout</a>
      </div>
       <div class="w3-dropdown-content w3-bar-block w3-card-4"  v-else>
         <a href="/login" class="w3-bar-item w3-button">Login</a>
         <a href="/register" class="w3-bar-item w3-button" >Register</a>
      </div>
    </div>
   
    <a href="/about" class="w3-bar-item w3-button w3-padding-large w3-hide-small w3-right"><i class="fa fa-th"></i> ABOUT US</a>
    <a href="/drive_through" class="w3-bar-item w3-button w3-padding-large w3-hide-small w3-right"><i class="fa fa-glass"></i> DRIVE-THRU</a>
    <a href="/" class="w3-bar-item w3-button w3-padding-large w3-hide-small w3-right"><i class="fa fa-home"></i> HOME</a>
  </div>
 
  </span>
</template>


<script>
 import Axios from 'axios'
export default {
  name: 'Navbar',
  data () {
    return {
      cart:0,
      balance:0,
      hasBalance:false,
      userAgent:'',
      platform:'',
      cartHide:true
    }
  },
  created () {
    const cart = window.localStorage.getItem('ogCart')
    if(cart==null || cart=='' || typeof(cart)=='undefined'){
      window.localStorage.setItem('ogCart','[]')
    }
     this.userAgent=navigator.userAgent
     this.platform = navigator.platform
  },
  mounted () {
    this.cart=((this.$store.state.order.cart).length)
    this.getBalance()
  },
  components: {
  },
  methods: {
    w3Open() {
        document.getElementById("mySidebar").style.display = "block"
    } ,
    w3Close(){
      document.getElementById("mySidebar").style.display = "none"
    },
    isLogged(){
      return this.$store.getters.hasToken
    },
    logout(){
      this.$store.dispatch('LOGOUT')
      window.location.href='/login'
    },
    getBalance(){
        new Promise((resolve,reject)=>{
            Axios.post(this.$store.getters.getAPIURL+'/mobile/user/balance',{
                email:this.$store.getters.meEmail,
                token:this.$store.getters.getToken
            }).then((res)=>{
                if(res.data.errors[0].message==''){
                  this.hasBalance=true
                  this.balance=res.data.balance
                }else{
                  this.hasBalance=false
                  this.balance = 0
                }
                resolve()
            }).catch((err)=>{
              console.log(err)
                reject()
            })
        }).then(()=>{
              return this.balance
        }).catch(()=>{
            return 0
        })
    }

  } 
}
</script>

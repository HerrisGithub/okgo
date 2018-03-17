
  <template>
    <span>
        <navbar></navbar>
        <div class="row">
          <div class="col-md-6">
               <div id="home-banner" class="mySlides w3-display-container w3-center carousel slide" 
                style="z-index:0;">
                      <ol class="carousel-indicators" style="z-index:1">
                        <li data-target="#home-banner" data-slide-to="0" class="active" ></li>
                        <li data-target="#home-banner" data-slide-to="1"></li>
                        <li data-target="#home-banner" data-slide-to="2"></li>
                        <li data-target="#home-banner" data-slide-to="3"></li>
                      </ol>
                      <div class="carousel-inner" role="listbox" style="width:100%;" v-bind:style="{height:resolutionH+'px'}">
                        <div class="carousel-item active" style="width:100%;" v-bind:style="{height:resolutionH+'px'}">
                          <img class="d-block img-fluid img-banner" 
                          src="../.././static/back-1.png" alt="First slide" style="width:100%;height:100%;">
                        </div>
                        <div class="carousel-item" style="width:100%;" v-bind:style="{height:resolutionH+'px'}">
                          <img class="d-block img-fluid img-banner" style="width:100%; height:100%"  src="../.././static/back-1.png" alt="Second slide">
                        </div>
                        <div class="carousel-item" style="width:100%;" v-bind:style="{height:resolutionH+'px'}">
                          <img class="d-block img-fluid img-banner" style="width:100%; height:100%"  src="../.././static/back-2.jpg" alt="Second slide">
                        </div>
                        <div class="carousel-item" style="width:100%;" v-bind:style="{height:resolutionH+'px'}">
                          <img class="d-block img-fluid img-banner" style="width:100%; height:100%"  src="../.././static/back-3.jpg" alt="Second slide">
                        </div>
                      </div>
                      <a class="carousel-control-prev" href="#home-banner" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#home-banner" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                      </a>
                </div>
          </div>
           <div class="col-md-6" style="padding-right:3%">
             <p  v-bind:style="{marginTop:loginStyles.loginH+'%'}"></p>
              <input type="email" class="form-control" placeholder="email" 
              v-model="data.email" 
              style="width:90%; margin-left:5%"
              v-bind:style="[{height:loginStyles.emailH+'px'},{textAlign:'center'},{fontSize:loginStyles.fontSize+'pt'}]"
              >
              <p></p>
              <input type="password" class="form-control" placeholder="password" 
              v-model="data.password" style="width:90%;margin-left:5%"
              v-bind:style="[{height:loginStyles.emailH+'px'},{textAlign:'center'},{fontSize:loginStyles.fontSize+'pt'}]"
               >
              <p></p>
              <button class="btn btn-primary" @click="login()" 
              style="width:100%; border-radius:100px;width:90%; margin-left:5%"
               v-bind:style="[{height:loginStyles.emailH+'px'},{textAlign:'center'},{fontSize:loginStyles.fontSize+'pt'}]"
              >LOGIN</button>
              <p style="color:red; padding:20px; text-align:center">{{error}}</p>
           </div>
        </div>
        
        
       
    </span>
  </template>

<style>
 
</style>

<script>
import Axios from 'axios'
import Navbar from './Navbar'
import iziToast from '../.././static/izitoast/dist/js/iziToast.js'
export default {
  name: 'Login',
  data () {
    return {
      data: {},
      error:'',
      resolutionH:678,
      loginStyles:{
        loginH:30,
        emailH:30,
        fontSize:24
      },
      loginH:30,
      emailH:10
    }
  },
  components: {
    Navbar
  },
  methods :{
   login(){
     Axios.post(this.$store.getters.getAPIURL+'/mobile/login',this.data)
     .then((res)=>{
       if(res.data.errors[0].message==""){
         window.localStorage.setItem('userToken',res.data.token)
         window.localStorage.setItem('userEmail',this.data.email)
         window.localStorage.setItem('userName',res.data.fullname)
         if(window.localStorage.getItem('redirect')!==null){
           window.location.href=window.localStorage.getItem('redirect')
         }else{
           window.location.href='/drive_through'
         }
       }else{
         this.error = res.data.errors[0].message
          iziToast.error({
              title: 'error',
              message: res.data.errors[0].message,
              position: 'bottomCenter',
          });
       }
     }).catch((err)=>{
        iziToast.error({
              title: 'error',
              message: res.data.errors[0].message,
              position: 'bottomCenter',
          });
     })
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
          this.resolutionH=200 
          this.loginStyles.loginH=10
          this.loginStyles.emailH=30
          this.loginStyles.fontSize=12
        }
        else{
          // this.resolutionH=629
          this.resolutionH=630
          this.loginStyles.loginH=30
          this.loginStyles.emailH=60
          this.loginStyles.fontSize=24  
        }
        
    // const API_URL = this.$store.getters.getAPIURL 
    // const _data = this.getJSON(API_URL+'/mobile/listing/beer')  
    // this.data = _data 
  }
  
}
</script>
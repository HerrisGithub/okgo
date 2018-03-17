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
             <p  v-bind:style="{marginTop:regStyles.loginH+'%'}"></p>
              <input type="text" class="form-control" placeholder="email" 
              v-model="data.fullname" 
              style="width:90%; margin-left:5%"
              v-bind:style="[{height:regStyles.emailH+'px'},{textAlign:'center'},{fontSize:regStyles.fontSize+'pt'}]"
              >
              <p></p>
              
              <input type="email" class="form-control" placeholder="email" 
              v-model="data.email" 
              style="width:90%; margin-left:5%"
              v-bind:style="[{height:regStyles.emailH+'px'},{textAlign:'center'},{fontSize:regStyles.fontSize+'pt'}]"
              >
              <p></p>
              
              <input type="password" class="form-control" placeholder="password" 
              v-model="data.password" style="width:90%;margin-left:5%"
              v-bind:style="[{height:regStyles.emailH+'px'},{textAlign:'center'},{fontSize:regStyles.fontSize+'pt'}]"
               >
              <p></p>
              <input type="password" class="form-control" placeholder="confirm password" 
              v-model="data.cpassword" style="width:90%;margin-left:5%"
              v-bind:style="[{height:regStyles.emailH+'px'},{textAlign:'center'},{fontSize:regStyles.fontSize+'pt'}]"
               >
              <p></p>
                <div class="col-auto" >
                      <input type="checkbox" v-model="tac" required class="w3-left" style="padding:10px; margin-right:10px;height:30px; width:30px;">
                      <p>By creating an account, you agree to OkGO <a href="#" @click="terms" style="color:brown"><u>Terms and Condition</u></a></p>
                </div>
                <p></p>
              <button class="btn btn-primary" @click="submit()" 
              style="width:100%; border-radius:100px;width:90%; margin-left:5%"
               v-bind:style="[{height:regStyles.emailH+'px'},{textAlign:'center'},{fontSize:regStyles.fontSize+'pt'}]"
              >SUBMIT</button>
              <p style="color:red; padding:20px; text-align:center">{{error}}</p>
           </div>

            <!-- <div class="col-md-6 w3-center" style="padding-left:10%">
               <form action="">
                <p  v-bind:style="{marginTop:regStyles.regH+'%'}"></p>
                <input type="text" class="form-control" placeholder="fullname" 
                v-model="data.fullname"   required 
                 v-bind:style="[{height:regStyles.emailH+'px',width:90+'%',textAlign:'center',fontSize:regStyles.fontSize+'pt'}]"
                >
                <p></p>
                <input type="email"  required  class="form-control " placeholder="email" v-model="data.email" 
                  v-bind:style="[{height:regStyles.emailH+'px',width:90+'%',textAlign:'center',fontSize:regStyles.fontSize+'pt'}]"
                >
                <p></p>
                <input type="password"  required  class="form-control" placeholder="password" v-model="data.password" 
                  v-bind:style="[{height:regStyles.emailH+'px',width:90+'%',textAlign:'center',fontSize:regStyles.fontSize+'pt'}]">
                <p></p>
                 <input type="password"  required  class="form-control" placeholder="password" v-model="data.password" 
                  v-bind:style="[{height:regStyles.emailH+'px',width:90+'%',textAlign:'center',fontSize:regStyles.fontSize+'pt'}]">
                <p></p>
                <div class="col-auto" >
                      <input type="checkbox" v-model="tac" required class="w3-left" style="padding:10px; margin-right:10px;height:30px; width:30px;">
                      <p>By creating an account, you agree to OkGO <a href="#" @click="terms" style="color:brown"><u>Terms and Condition</u></a></p>
                </div>
                <p></p>
                <button class="btn btn-primary" @click="submit()" 
                v-bind:style="[{height:regStyles.emailH+'px',width:90+'%',textAlign:'center',fontSize:regStyles.fontSize+'pt',paddingLeft:0}]"
                >SUBMIT</button>
                <p style="text-align:center; color:red">{{error}}</p>
                </form>
            </div> -->
            
        </div>

        
    </span>
</template>

<script>
import Axios from 'axios'
import Navbar from './Navbar'
import iziToast from '../.././static/izitoast/dist/js/iziToast.js'
import $ from 'jquery'
export default {
  name: 'Home',
  data () {
    return {
      data: {},
       resolutionH:630,
       regStyles:{
        regH:30,
        emailH:30,
        fontSize:24,
        error:''
      },
      tac:false,
      error:'',
      regH:30,
      emailH:10
    }
  },
  components: {
      Navbar
  },
  methods:{
      submit(){
        if(this.tac){
          if(this.data.password==this.data.cpassword && this.cpassword!==''){
            Axios.post(this.$store.getters.getAPIURL+'/mobile/register',this.data)
            .then((res)=>{
                if(res.data.errors[0].message==""){
                  iziToast.success({
                    title: 'OK',
                    message: "Registrasi Berhasil",
                    position: 'bottomCenter',
                    onClosed: function(instance, toast, closedBy){
                      window.location.href="/login"
                    }
                  });
                }else{
                  this.error = res.data.errors[0].message
                  iziToast.error({
                    title: 'error',
                    message: res.data.errors[0].message,
                  position: 'bottomCenter',
                  })
                }
            }).catch((err)=>{
              this.error =err
                iziToast.error({
                    title: 'error',
                    message: err,
                  position: 'bottomCenter',
                });
            })
          }else{
            this.error = 'Password harus cocok dan tidak boleh kosong'
            iziToast.error({
                title: 'error',
                message: this.error,
              position: 'bottomCenter',
            });
          }
        }
      },
      terms(){
           document.getElementById('id02').style.display='block'
      }
  },
  created(){
  
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
          this.regStyles.regH=10
          this.regStyles.emailH=30
          this.regStyles.fontSize=12
        }
        else{
          this.resolutionH=629
          this.resolutionH=630
          this.regStyles.regH=30
          this.regStyles.emailH=60
          this.regStyles.fontSize=24  
        }
  }
}
</script>


<template>
  <span style="width:100%; height:100%;">
      
  <header class="w3-display-container w3-content w3-wide" style="width:99%; min-width:100%;" id="home">
    <navbar></navbar>  

  <div id="home-banner" class="mySlides w3-hide-small w3-display-container w3-center carousel slide" 
  style="z-index:0;">
        <ol class="carousel-indicators" style="z-index:1">
          <li data-target="#home-banner" data-slide-to="0" class="active" ></li>
          <li data-target="#home-banner" data-slide-to="1"></li>
          <li data-target="#home-banner" data-slide-to="2"></li>
           <li data-target="#home-banner" data-slide-to="3"></li>
        </ol>
        <div class="carousel-inner" role="listbox" style="width:100%; height:678px">
          <div class="carousel-item active" style="width:100%; height:678px">
            <img class="d-block img-fluid img-banner" 
            src="../.././static/back-1.png" alt="First slide" style="width:100%;height:100%;">
          </div>
          <div class="carousel-item" style="width:100%;height:678px">
            <img class="d-block img-fluid img-banner" style="width:100%;"  src="../.././static/back-1.png" alt="Second slide">
          </div>
          <div class="carousel-item" style="width:100%;height:678px">
            <img class="d-block img-fluid img-banner" style="width:100%;"  src="../.././static/back-2.jpg" alt="Second slide">
          </div>
          <div class="carousel-item" style="width:100%;height:678px">
            <img class="d-block img-fluid img-banner" style="width:100%;"  src="../.././static/back-3.jpg" alt="Second slide">
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
  <div id="home-banner-s" class="mySlides w3-hide-large w3-display-container w3-center carousel slide" 
  style="z-index:0;">
        <ol class="carousel-indicators" style="">
          <li data-target="#home-banner-s" data-slide-to="0" class="active" ></li>
          <li data-target="#home-banner-s" data-slide-to="1"></li>
          <li data-target="#home-banner-s" data-slide-to="2"></li>
           <li data-target="#home-banner-s" data-slide-to="3"></li>
        </ol>
        <div class="carousel-inner" role="listbox" style="width:100%; height:250px">
          <div class="carousel-item active" style="width:100%; height:100%">
            <img class="d-block img-fluid img-banner" 
            src="../.././static/back-1.png" alt="First slide" style="width:100%;height:100%;">
          </div>
          <div class="carousel-item" style="width:100%; height:250px">
            <img class="d-block img-fluid img-banner" style="width:100%; height:100%"  src="../.././static/back-1.png" alt="Second slide">
          </div>
          <div class="carousel-item" style="width:100%; height:250px">
            <img class="d-block img-fluid img-banner" style="width:100%; height:100%"  src="../.././static/back-2.jpg" alt="Second slide">
          </div>
          <div   class="carousel-item" style="width:100%; height:250px">
            <img class="d-block img-fluid img-banner" style="width:100%; height:100%"  src="../.././static/back-3.jpg" alt="Second slide">
          </div>
        </div>
        <a class="carousel-control-prev" href="#home-banner-s" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#home-banner-s" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
  </div>

    <div class="w3-display-container w3-center">
       <div class="row">
      <div class="col-md-6">
        <img src=".././assets/iPhone6s.png" alt="" style="width:100%;">
      </div>
      <div class="col-md-6" style="padding:50px">
            <img src=".././assets/text.jpg" style="width:100%" alt="">
            <p></p>
            <a href="https://play.google.com/store/apps/details?id=com.app.okgo">
              <img src=".././assets/android.jpg" style="width:40%; height:50px" alt="">
            </a>
            <a @click="commingSoon()">
              <img src=".././assets/ios.jpg" style="width:40%; height:50px" alt="">
            </a>
      </div>
      </div>
      <!-- <div class="row" style="background-color:whitesmoke">
        <div class="col-md-6">
          <div class="col-md-12">
            <i class="fa fa-envelope-o fa-3x"></i>
            DELIVERED TO YOU EVERY MONTH
            <p></p>
            <p style="text-align:justify; 
            padding-left:16%;">Join our subscribe list to get monthly delivery, exclusive deals, giveaway and more.</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-12"><br><br></div>
          </div>
          <div class="row">
            <div class="col-md-10" style="padding-right:0">
              <input type="email" placeholder="Email" class="form-control" style="width:100%; padding:10px">
            </div>
            <div class="col-md-1" style="padding-left:1px">
              <button class="btn btn-primary" style="width:100%; padding:10px"><i class="fa fa-paper-plane"></i> </button>
            </div>
            
          </div>
        </div>
        
        
      </div> -->
    </div>
  </header>
   <!-- download apps and mail subscribe -->
      <!-- <div class="d" style="">
        <div class="row">
            <div class="col-md-6">
              <div class="d-image">
                <img class="d-image-src" src="../.././static/iPhone6s.png" alt="" style="">
              </div>
            </div>
            <div class="col-md-6 b-top">
                <h1 class="b-mobile">Free Beer, only for you</h1>
                <p class="bl">Download our free mobile app for an even better shopping experience. Get your beer with just a few taps.</p>
            </div>
          </div>
          <div class="row b-bottom">
              <div class="col-md-6 b-bottom-ct">
                <i class="fa fa-envelope-o fa-3x fa-d"></i>
                <p class="b-bottom-l">DELIVERED TO YOU EVERY MONTH</p>
                <p class="m-txt"></p>
                <p class="m-txt">Join our subscribe list to get monthly delivery, exclusive deals, giveaway and more.</p>
              </div>
              <div class="col-md-6 b-bottom-inp">
                <input type="text"  class="form-control inp-bottom" placeholder="Subscribe Now!">
              </div>
          </div>
      </div> -->
     <!-- end download apps and mail subscribe -->  

          
    <div style="">
        <!-- <div class="row" style="height:400px">
            <div id="wrapper">
            <div id="image">
              <div class="image i1">
                <p style="height:100px">BREW</p>  
              </div>
              <div class="image i2">
                <p>ENJOY</p> 
              </div>
              <div class="image i3">
                <p>EMPTY</p>
              </div>
              <div class="image i4">
                <p>EMPTY</p>
              </div>
            </div>
          </div>
        </div> -->
        <div class="row" style="text-align:center">
            <div class="col-md-12">
              <h1>a look on</h1> 
            </div>
        </div>
        <div class="row" style="text-align:center">
            <div class="col-md-12">
              <a href="https://www.instagram.com/okgospace/" target="_blank" class="fa-3x"><i class="fa fa-instagram"></i> okgospace</a>
            </div>
        </div>
        <br>
        <div class="row" style="text-align:center; ">
            <div class="col-md-4">
              <div class="card card-img" style="width: 100%;">
                <img class="card-img-top" src="../.././static/back-1.png" style="height:250px" alt="Card image cap">
              </div>
            </div>
            <div class="col-md-4">
              <div class="card card-img" style="width: 100%;">
                <img class="card-img-top" src="../.././static/back-2.jpg" style="height:250px" alt="Card image cap">
              </div>
            </div>
            <div class="col-md-4">
              <div class="card card-img" style="width: 100%;">
                <img class="card-img-top" src="../.././static/back-3.jpg" style="height:250px" alt="Card image cap">
              </div>
            </div>
        </div>
        
        <br>
         <div class="row" style="text-align:center">
              <div class="col-md-12">
              #okgotakeyourbeer
            </div>
        </div>
        <br>
         <div class="row" style="text-align:center">
            <div class="col-md-4">
              CUSTOMER SERVICE
            </div>
            <div class="col-md-4">
              Mon - Sat : 9:30 am - 5:30 pm
            </div>
            <div class="col-md-4">
              <i class="fa fa-envelope-o"></i>
              info@okgo.co.id
            </div>
        </div>
         <br>
      </div>
      
  </span>
</template>
<style>
  ul,li{
    list-style-type: none;
  }
  li{
    float: left;
    padding-right: 10%;
  }
  #wrapper {
	width:800px;
	margin: 0 auto;
}

#wrapper {
  perspective: 2900;
	-webkit-perspective: 2500;
	width: 100%;
	margin: 200px auto 0 auto;
  margin-top: 0;
  perspective-origin: 50% 150px;
	-webkit-perspective-origin: 50% 150px;
  transition: perspective, 1s;
  -o-transition: -o-perspective, 1s;
  -moz-transition: -moz-perspective, 1s;
	-webkit-transition: -webkit-perspective, 1s;
}

@-webkit-keyframes spin {
	from {
    transform: rotateY(0);
    -o-transform: rotateY(0);
    -ms-transform: rotateY(0);
    -moz-transform: rotateY(0);
		-webkit-transform: rotateY(0);
	}
	to {
    transform: rotateY(-360deg);
    -o-transform: rotateY(-360deg);
    -ms-transform: rotateY(-360deg);
    -moz-transform: rotateY(-360deg);
		-webkit-transform: rotateY(-360deg);
	}
}

#image {
	margin: 0 auto;
	height: 300px;
	width: 900px;
  transform-style: preserve-3d;
	-webkit-transform-style: preserve-3d;
  animation: spin 1s infinite linear;
  -moz-animation: spin 10s infinite linear;
  -o-animation: spin 10s 3nfinite linear;
	-webkit-animation: spin 10s infinite linear;
}

.image {
	position: absolute;
	height: 400px;
	width: 900px;
	text-align: center;
	font-size: 18em;
	color: #fff;
}

#image > .i1 {
  background: #49c5b6;
  transform: translateZ(600px);
  -moz-transform: translateZ(600px);
  -o-transform: translateZ(600px);
  -ms-transform: translateZ(600px);
  -webkit-transform:translateZ(600px);
}
#image > .i2 {
    background: #2b7970;
  transform: rotateY(74deg) translateZ(600px);
  -moz-transform: rotateY(74deg) translateZ(600px);
  -o-transform: rotateY(74deg) translateZ(600px);
  -ms-transform: rotateY(74deg) translateZ(600px);
  -webkit-transform: rotateY(74deg) translateZ(600px);
}
#image > .i3 {
  background: #ffc907;
  transform: rotateY(148deg) translateZ(600px);
  -moz-transform: rotateY(148deg) translateZ(600px);
  -o-transform: rotateY(148deg) translateZ(600px);
  -ms-transform: rotateY(148deg) translateZ(600px);
  -webkit-transform: rotateY(148deg) translateZ(600px);
}
#image > .i4 {
  background: #a1b400;
  transform: rotateY(200deg) translateZ(600px);
  -moz-transform: rotateY(200deg) translateZ(600px);
  -o-transform: rotateY(200deg) translateZ(600px);
  -ms-transform: rotateY(200deg) translateZ(600px);
  -webkit-transform: rotateY(222deg) translateZ(600px);
}
#image > .i5 {
    background: #b02d15;
  transform: rotateY(200deg) translateZ(600px);
  -webkit-transform: rotateY(296deg) translateZ(600px);
}


</style>

   
<script>
import Navbar from './Navbar'
import {mapState} from 'vuex'
import Cart from './Cart'
import VueBarcode from 'vue-barcode';
import iziToast from '../.././static/izitoast/dist/js/iziToast.js'
export default {
  name: 'Home',
  data () {
    return {
      data: [],
      barcodeValue: 'test',
      testing:''
    }
  },
  components: {
    Navbar,
    Cart,
    'barcode': VueBarcode
  },
  methods :{
    ...mapState({
        a:state=>state.config.price
      }),
    w3Open(){
      if (document.getElementById("mySidebar").style.display === 'block') {
        document.getElementById("mySidebar").style.display = 'none';
      } else {
          document.getElementById("mySidebar").style.display = 'block';
      }
    },
    w3Close(){
      document.getElementById("mySidebar").style.display = "none";
    },
    commingSoon(){
          iziToast.error({
              title: 'Comming Soon',
              message:'Maaf versi IOS sedang dalam pengembangan' ,
              position: 'bottomRight'
          });
    }
 
  },
  created () {
    console.log(navigator.userAgent)
  },
  mounted(){
    console.log()
  }

  
}
</script>

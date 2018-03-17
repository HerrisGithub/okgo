
<template>
  <span>
<div id="home-banner" class="carousel slide" data-ride="carousel">
 <div class="w3-hide-small">
          <div class="n">
            <div class="w3-bar" id="myNavbar" >
              <a href="javascript:void(0)" class="w3-bar-item w3-button w3-left w3-hide-large w3-hide-medium" @click="w3Open()">
                <i class="fa fa-bars"></i>
              </a>
             
              <!-- Right-sided navbar links -->
              <div class="w3-left w3-hide-small" >
                 <span class="w3-bar-item w3-wide" style="width:120px">
                open : 24 hours
              </span>
              <span class="w3-bar-item w3-wide" style="width:250px">
                <i class="fa  fa-map-marker"></i> Museum Juang - JL. Lorem Ipsum 37-40, Medan
              </span>
                <a href="/" class="w3-bar-item w3-button">
                <h4> HOME</h4></a>
                <a href="/drive_through" class="w3-bar-item w3-button">
                 <h4> DRIVE THROUGH</h4>
                </a>
                <a href="#work" class="w3-bar-item w3-button">
                  <h4>ABOUT US</h4>
                </a>
                <span class="w3-bar-item">
                  <p>follow us</p>
                  <p><i class="fa fa-instagram"></i> <i class="fa fa-facebook"></i></p>
                </span>
                <span href="#contact" class="w3-bar-item ">
                    <i class="fa fa-user fa-3x"></i>
                </span>
                <span href="#contact" class="w3-bar-item ">
                     <i class="fa fa-shopping-basket fa-3x"></i>
                </span>
              </div>

            </div>
          </div>
        
      <ol class="carousel-indicators">
          <li data-target="#home-banner" data-slide-to="0" class="active" ></li>
          <li data-target="#home-banner" data-slide-to="1"></li>
          <li data-target="#home-banner" data-slide-to="2"></li>
          <li data-target="#home-banner" data-slide-to="3"></li>
          <li data-target="#home-banner" data-slide-to="4"></li>
          <li data-target="#home-banner" data-slide-to="5"></li>
        </ol>
        <div class="carousel-inner" role="listbox" style="width:100%;">
          <div class="carousel-item active">
            <img class="d-block img-fluid img-banner" 
            src="../.././static/back-1.png" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block img-fluid img-banner"  src="../.././static/back-1.png" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block img-fluid img-banner"  src="../.././static/back-2.jpg" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block img-fluid img-banner"  src="../.././static/back-3.jpg" alt="Second slide">
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

<nav class="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large mySidebar" 
style="display:none; z-index:100">
  <a href="javascript:void(0)" @click="w3Close()" class="w3-bar-item w3-button w3-large w3-padding-16">Close ×</a>
  <a href="/" @click="w3Close()" class="w3-bar-item w3-button">HOME</a>
  <a href="#team" @click="w3Close()" class="w3-bar-item w3-button">DRIVE THROUGH</a>
  <a href="#work" @click="w3Close()" class="w3-bar-item w3-button">ABOUT US</a>
  <a href="#pricing" @click="w3Close()" class="w3-bar-item w3-button">PRICING</a>
  <a href="#contact" @click="w3Close()" class="w3-bar-item w3-button">CONTACT</a>
</nav>



</div>

  </span>
</template>
<style src="./style.css"></style>
<style>
  .nav-item{
    padding-top: 10px
  }
  #home-s{
    padding: 10px;
    word-wrap: break-word;
  }

 
</style>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      herris: []    
    }
  },
  created () {
  },
  mounted () {
    this.$store.state.token
  },
  components: {
  },
  methods: {
      w3Open() {
          document.getElementsByClassName("mySidebar")[0].style.display = "block";
      } ,
      w3Close(){
      document.getElementsByClassName("mySidebar")[0].style.display = "none";
      }

    } 
}
</script>

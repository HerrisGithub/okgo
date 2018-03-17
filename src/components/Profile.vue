
  <template>
    <span>
        <navbar></navbar>
        <div class="w3-container">
          <div class="w3-center">
            <div style="margin-top:10%">
              
              
              <input type="text" name="" id="" class="form-control rad-10" readonly placeholder="Email" v-model="email" style="text-align:center">
              <p></p>
              <input type="text" name="" id="" class="form-control  rad-10" placeholder="Full Name" v-model="fullname" style="text-align:center">
              <p></p>
              <input class="w3-left" type="checkbox" v-model="enableChangePassword">
              <p>Change Password</p>
              <p></p>
              <span v-if="enableChangePassword">
                <input type="password" class="form-control  rad-10" placeholder="current password" v-model="oldPassword" style="text-align:center">
                <p></p>
                <input type="password" class="form-control  rad-10" placeholder="new password" v-model="password" style="text-align:center">
                <p></p>
                <input type="password" class="form-control  rad-10" placeholder="confirm password" v-model="cPassword" style="text-align:center">
                <p></p>
              </span>
                <button class="btn btn-info  rad-10" style="width:100%" @click="changeProfile()">Change</button>
                <p></p>
                <p style="color:red">{{error}}</p>
            </div>
          </div>
        </div>
    </span>
  </template>

<style>
 .rad-10{
   border-radius: 10px
 }
</style>

<script>
import Navbar from './Navbar'
import Axios from 'axios'
import iziToast from '../.././static/izitoast/dist/js/iziToast.js'
export default {
  name: 'Profile',
  data () {
    return {
      email:'',
      fullname:'',
      error:'',
      oldPassword:'',
      cPassword:'',
      password:'',
      enableChangePassword:false
    }
  },
  components: {
    Navbar
  },
  methods :{
    changeProfile(){

        if(this.enableChangePassword){
          if(this.password===this.cPassword){
              Axios.post(this.$store.getters.getAPIURL+'/mobile/user/password/update',{
                  email:this.email,
                  old:this.oldPassword,
                  password:this.cPassword,
                  token:this.$store.getters.getToken
              }).then((res)=>{
                  this.error=''
                  if(res.data.errors[0].message==''){
                    iziToast.success({
                        title: 'OK',
                        timeout:1500,
                        message: 'Profile berhasil diganti',
                        position: 'bottomCenter',
                        onClosing: ()=>{
                          this.$store.dispatch('CHANGE_PROFILE',{email:this.email,fullname:this.fullname})
                          this.enableChangePassword=false
                          this.oldPassword=''
                          this.cPassword=''
                          this.password=''
                        }
                    })
                  }else{
                     this.error=res.data.errors[0].message
                    iziToast.error({
                        title: 'OK',
                        timeout:1500,
                        message: res.data.errors[0].message,
                        position: 'bottomCenter'
                    })
                  }
              })


              
          }else{
                this.error = 'password tidak cocok'
               iziToast.error({
                        title: 'OK',
                        timeout:1500,
                        message: 'password tidak cocok',
                        position: 'bottomCenter'
                })
          }
        }else{
            Axios.post(this.$store.getters.getAPIURL+'/mobile/user/profile/update',{
              email:this.email,
              fullname:this.fullname,
              token:this.$store.getters.getToken
            }).then((res)=>{
                this.error = res.data.errors[0].message
                if(this.error==''){
                  iziToast.success({
                      title: 'OK',
                      timeout:1500,
                      message: 'Profile berhasil diganti',
                      position: 'bottomCenter',
                      onClosing: ()=>{
                            this.$store.dispatch('CHANGE_PROFILE',{email:this.email,fullname:this.fullname})
                      }
                  })
                }
            })
        }
    }
  },
  created(){
    this.email = (this.$store.getters.meEmail)
    this.fullname = (this.$store.getters.meName)
    
  }
  
  
}
</script>
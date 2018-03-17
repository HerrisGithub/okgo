 <!-- Modal -->
  <template>
    <span>
        <navbar></navbar>
        <div class="row">
            <div class="col-sm-6">
                <img src=".././assets/back-about.jpg" style="width:100%; padding:20px" alt="">
            </div>
            <div class="col-sm-6 w3-container w3-center">
                <p style="text-align:justify; padding:20px" class="i-text-10">
                    A year ago we had a chat about drive through and cafe where we can have coffee and beer.
                    then we found out that now a days people need to have more simple.
                    easier, conviniance in their daily life. especially when we talking about everyday needs.
                    like food and drink, how we can have access to this need much more simple and fast.
                    this is why we create okgo, an apps that provide solution for this needs, okgo provided drive through,
                    dine in and reservation service with secure cashless payment, we believe okgo will be your everyday needs solution.    
                </p>
            </div>
            
        </div>
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
export default {
  name: 'About',
  data () {
    return {
      data:'',
    }
  },
  components: {
      Navbar,
  },
  methods :{
      
  },
  created () {
  }
  
}
</script>
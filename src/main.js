import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import {currency} from './currency'

Vue.config.productionTip = false
Vue.filter('currency', currency)


Vue.filter('localDate',(value)=>{
  let date = new Date(value)
  let locale = 'en-us'
  let month = date.toLocaleString(locale,{month:'long'})
  return (date.getDate()<10?'0'+date.getDate():date.getDate())+' '+month.substring(0,3)+' '+date.getFullYear()+'.'+(date.getHours()<10?'0'+date.getHours():date.getHours())+':'+(date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes())
})
new Vue({
  el: '#app',
  store,  
  router,
  template: '<App/>',
  components: { App },
  render:h=>h(App)
}).$mount('#app')

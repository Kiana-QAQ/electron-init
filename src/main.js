import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
var api = 'https://devapi.qweather.com/v7/weather/now?key=7a112ecb85e743a79bce47bd95e9266e&location=116.41,39.92'
Vue.axios.get(api).then((response) => {
  console.log(response.data)
})
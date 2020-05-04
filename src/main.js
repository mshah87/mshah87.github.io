import Vue from 'vue'
import App from './App.vue'
import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'
import Vuetify from "vuetify"
import "vuetify/dist/vuetify.min.css"
import router from './router'

Vue.use(Vuikit)
Vue.use(VuikitIcons)
Vue.use(Vuetify);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

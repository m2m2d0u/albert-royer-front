import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './app/app-routes'

Vue.config.productionTip = false


import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

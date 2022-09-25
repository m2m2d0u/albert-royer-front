import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './app/app-routes';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css';
import VueImg from 'v-img';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';
import store from './stores'

Vue.config.productionTip = false


Vue.use(VueMaterial);
Vue.use(VueImg);
Vue.component('VueSlider', VueSlider)


new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')

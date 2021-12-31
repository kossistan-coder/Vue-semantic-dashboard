import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'semantic-ui-css/semantic.min.css';
import SuiVue from 'semantic-ui-vue'
import VueEllipseProgress from 'vue-ellipse-progress'
Vue.use(SuiVue) 
Vue.use(VueEllipseProgress)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

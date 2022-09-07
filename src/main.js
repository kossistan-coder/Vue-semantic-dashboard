import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'semantic-ui-css/semantic.min.css';
import SuiVue from 'semantic-ui-vue'
import VueEllipseProgress from 'vue-ellipse-progress'

import VueToast from 'vue-toast-notification';

import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast , {
  position : 'top-right'
});
Vue.use(SuiVue) 
Vue.use(VueEllipseProgress)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

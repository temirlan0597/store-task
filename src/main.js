import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './_router'
import store from './_store'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast,
  {
    position: 'top-right',
    duration: 3000,

  }
);


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

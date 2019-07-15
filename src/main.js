import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import 'popper.js';
import 'bootstrap'; //only for JS file
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'

import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC5SY34WAIbttEAYuSjSglOHdO3SivR5Uw",
  authDomain: "project-1-f0278.firebaseapp.com",
  databaseURL: "https://project-1-f0278.firebaseio.com",
  projectId: "project-1-f0278",
  storageBucket: "",
  messagingSenderId: "89255024735",
  appId: "1:89255024735:web:303284d336dc53ff"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();
export const db = firebase.database();

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(ElementUI, { locale });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

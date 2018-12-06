import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'

import firebase from 'firebase/app';
// import 'firebase/post-cha.firebaseapp.com';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
// nicoをインポート
import "./lib/nico.bootstrap.bundle.min.js"
import "./lib/nico.bootstrap.min.js"
import "./lib/nico.bootstrap.min.css"


Vue.use(BootstrapVue)

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAASntGfp-FPAUHu-5II9y3s8pI0XppIZI",
  authDomain: "post-cha.firebaseapp.com",
  databaseURL: "https://post-cha.firebaseio.com",
  projectId: "post-cha",
  storageBucket: "post-cha.appspot.com",
  messagingSenderId: "656801433168"
};
firebase.initializeApp(config);

new Vue({
  el: '#app',
  render: h => h(App)
})

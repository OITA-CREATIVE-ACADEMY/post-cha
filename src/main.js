import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
// nicoをインポート
import "../node_modules/bootstrap-vue/dist/js/nico.bootstrap.bundle.min.js"
import "../node_modules/bootstrap-vue/dist/js/nico.bootstrap.min.js"
import "../node_modules/bootstrap/dist/css/nico.bootstrap.min.css"

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(App)
})

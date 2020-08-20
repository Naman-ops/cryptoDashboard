import Vue from 'vue'
import App from './App.vue'
import top from './top.vue'
import medium from './medium.vue'
import footer from './footer.vue'


Vue.component('app-top',top)
Vue.component('app-medium',medium)
Vue.component('app-footer',footer)

new Vue({
  el: '#app',
  render: h => h(App)
})

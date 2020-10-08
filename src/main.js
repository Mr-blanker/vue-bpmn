import Vue from 'vue'
import App from './App.vue'

// import VueBpmn from '../packages'
// Vue.component("vue-bpmn", VueBpmn)
Vue.component("vue-bpmn", window.VueBpmn)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

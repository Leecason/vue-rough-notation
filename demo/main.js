import Vue from 'vue';
import VueRoughNotation from '../src';
import App from './App.vue';
import './style.css';

Vue.use(VueRoughNotation);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

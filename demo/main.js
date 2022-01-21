import { createApp } from 'vue-demi';
import VueRoughNotation from '../src';
import App from './App.vue';
import './style.css';

const app = createApp(App);

app.use(VueRoughNotation);
app.mount('#app');

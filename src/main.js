import { createApp } from 'vue';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import jQuery from 'jquery';
import router from './router';
import App from './App.vue';

global.jQuery = jQuery;
global.$ = jQuery;

const app = createApp(App);

app.use(router);
app.use(ElementPlus);

app.mount('#app');

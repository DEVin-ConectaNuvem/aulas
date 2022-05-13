import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

import router from './router';

let app = createApp(App);

app.use(router);
app.use(store);
app.use(VueToast);

app.mount('#app');
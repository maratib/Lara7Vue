import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '../sass/app.scss';
// app.js
// import 'bootstrap-vue/dist/bootstrap-vue.css';
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Install BootstrapVue
// Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin);

Vue.config.productionTip = false;

const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
import { createApp, Vue } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueWorker from 'vue-worker';
// import  from 'vue';
// import App from 'App.vue'
// Vue.use(VueWorker)
createApp(App).use(store).use(router).mount('#app')

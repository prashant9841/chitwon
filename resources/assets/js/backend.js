import VueRouter from 'vue-router';
import {ElButton, ElementUI} from 'element-ui';
require('./bootstrap');

Vue.use(VueRouter);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 */


Vue.http.interceptors.push((request, next) => {
    request.headers.set('X-CSRF-TOKEN', Laravel.csrfToken);
    next();
});

/*
-------------------------------------------------
#################################################
 Components
#################################################
------------------------------------------------- */
const Notifications = Vue.component('notifications', require('./components/backend/notifications.vue'));
const menuBar = Vue.component('menu-bar', require('./components/backend/menuBar.vue'));
const messages = Vue.component('messages', require('./components/backend/messages.vue'));
const user = Vue.component('user', require('./components/backend/user.vue'));


const router = new VueRouter({

    mode: 'history',
    histroy: true,
    routes: [
        { path: '/dashboard', components: user },
    ]


})
//Router Mounted
const app = new Vue({
    router,
    components:{
        ElButton,ElementUI
    }



}).$mount('#app');

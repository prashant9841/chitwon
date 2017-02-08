
window._ = require('lodash');

window.$ = window.jQuery = require('jquery');

window.Vue = require('vue');

require('vue-resource');

require('element-ui');
/**
 * We'll register a HTTP interceptor to attach the "CSRF" header to each of
 * the outgoing requests issued by this application. The CSRF middleware
 * included with Laravel will automatically verify the header's value.
 */

Vue.http.interceptors.push((request, next) => {
    request.headers.set('X-CSRF-TOKEN', Laravel.csrfToken);
    next();
});


import VueRouter from 'vue-router';



Vue.use(VueRouter);
const Welcome = Vue.component('welcome',{
    template:`  <div class="welcome">
            <h1>Welcome <span>To Axle</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo corrupti molestias obcaecati delectus, labore, odit aperiam commodi rerum tempore fuga. Debitis natus voluptate, pariatur omnis.</p>
            <el-button><router-link to="/dashboard/events">Start Project</router-link></el-button>
    <router-view></router-view>

        </div>
`
});

/*
-------------------------------------------------
#################################################
 Components
#################################################
-------------------------------------------------
*/

// Remove test
const Notifications = Vue.component('notifications', require('./components/backend/notifications.vue'));
const menuBar = Vue.component('menu-bar', require('./components/backend/menuBar.vue'));
const messages = Vue.component('messages', require('./components/backend/messages.vue'));
const user = Vue.component('user', require('./components/backend/user.vue'));
const allUser = Vue.component('users', require('./components/backend/allUser.vue'));
const loginForm = Vue.component('login-form', require('./components/backend/loginForm.vue'));
const event = Vue.component('event', require('./components/backend/event.vue'));
const imageUpload = Vue.component('imgupload', require('./components/backend/sub-components/imageUpload.vue'));


const router = new VueRouter({
    history:true,
    mode:'history',
    routes: [
        { path: '/dashboard', component: Welcome },
        { path: '/dashboard/users', component: allUser },
        { path: '/dashboard/events', component: event},
        { path: '/dashboard/users', component: user},
        { path: '/dashboard/posts', component: event},
        { path: '/dashboard/pages', component: event},
        { path: '/dashboard/options', component: event},
        { path: '/dashboard/login', component: loginForm},
    ]
})

//Router Mounted
const backend = new Vue({
    router
}).$mount('#backend');

$('.toggle-nav').on('click', function(event) {
    event.preventDefault();
    $('.side-nav').toggleClass('hide');
    $('#main-content').toggleClass('hide');
});

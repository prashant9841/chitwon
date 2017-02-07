
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


/*
-------------------------------------------------
#################################################
 Components
#################################################
-------------------------------------------------
*/
//Testing purposes only
const PassportC = Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue')
);

const PassportAC = Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue')
);

const PassportAT = Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue')
);
// Remove test

const Notifications = Vue.component('notifications', require('./components/backend/notifications.vue'));
const menuBar = Vue.component('menu-bar', require('./components/backend/menuBar.vue'));
const messages = Vue.component('messages', require('./components/backend/messages.vue'));
const user = Vue.component('user', require('./components/backend/user.vue'));


const router = new VueRouter({
history:true,
    mode:'history',

    routes: [
        { path: '/dashboard', component: PassportAC },
        { path: '/dashboard/user', component: PassportC},
    ]
})

//Router Mounted
const backend = new Vue({
    router



}).$mount('#backend');

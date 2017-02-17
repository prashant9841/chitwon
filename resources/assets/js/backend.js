import VueRouter from 'vue-router';
//Lodash
window._ = require('lodash');
//Jquery
window.$ = window.jQuery = require('jquery');
//Vuejs
window.Vue = require('vue');
//Using VueRouter in project
Vue.use(VueRouter);

require('vue-resource');

require('element-ui');


import ElementUI from 'element-ui'

import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })
/**
 * We'll register a HTTP interceptor to attach the "CSRF" header to each of
 * the outgoing requests issued by this application. The CSRF middleware
 * included with Laravel will automatically verify the header's value.
 */

Vue.http.interceptors.push((request, next) => {
    request.headers.set('X-CSRF-TOKEN', Laravel.csrfToken);
    next();
});


const Welcome = Vue.component('welcome',{
    template:`  <div class="welcome">
            <h1>Welcome <span>To Axle</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo corrupti molestias obcaecati delectus, labore, odit aperiam commodi rerum tempore fuga. Debitis natus voluptate, pariatur omnis.</p>
            <el-button><router-link to="/dashboard/events">Start Project</router-link></el-button>
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

const notifications = Vue.component('notifications', require('./components/backend/notifications.vue'));
const menuBar = Vue.component('menu-bar', require('./components/backend/menuBar.vue'));
const messages = Vue.component('messages', require('./components/backend/messages.vue'));
const user = Vue.component('user', require('./components/backend/user.vue'));
const welcome = Vue.component('welcome', require('./components/backend/dashboard.vue'));
const profile = Vue.component('profile', require('./components/backend/profile.vue'));
const profileEdit = Vue.component('profile-edit', require('./components/backend/profileEdit.vue'));
const ProfileSideMenu = Vue.component('profile-SideMenu', require('./components/backend/profileSideMenu.vue'));
const settings = Vue.component('settings', require('./components/backend/settings.vue'));
const allUser = Vue.component('users', require('./components/backend/allUser.vue'));
const allPosts = Vue.component('all-posts', require('./components/backend/posts.vue'));
const allMedia = Vue.component('all-media', require('./components/backend/media.vue'));
const allPages = Vue.component('all-pages', require('./components/backend/pages.vue'));
const loginForm = Vue.component('login-form', require('./components/backend/loginForm.vue'));
const event = Vue.component('event', require('./components/backend/event.vue'));
const editor = Vue.component('editors', require('./components/backend/editor.vue'));
const imageUpload = Vue.component('imgupload', require('./components/backend/sub-components/imageUpload.vue'));
const dashboardTitle = Vue.component('dashboard-title', require('./components/backend/sub-components/dashboardTitle.vue'));
const breadCrumb = Vue.component('bread-crumb', require('./components/backend/sub-components/breadCrumb.vue'));
const modal = Vue.component('modal', require('./components/backend/sub-components/modal.vue'));
<<<<<<< HEAD
const pageForm = Vue.component('page-form', require('./components/backend/sub-components/pageForm.vue'));
const postForm = Vue.component('post-form', require('./components/backend/sub-components/postForm.vue'));
const mediaForm = Vue.component('media-form', require('./components/backend/sub-components/mediaForm.vue'));
=======
>>>>>>> winter

const router = new VueRouter({
    history:true,
    mode:'history',
    routes: [
        { path: '/dashboard', component: welcome },
        { path: '/dashboard/users', component: allUser },
        { path: '/dashboard/events', component: event},
        { path: '/dashboard/users', component: user},
        { path: '/dashboard/posts', component: allPosts},
        { path: '/dashboard/pages', component: allPages},
        { path: '/dashboard/gallery', component: allMedia},
        { path: '/dashboard/options', component: event},
        { path: '/dashboard/editor', component: modal},
        { path: '/dashboard/login', component: loginForm},
        { path: '/dashboard/profile', component: profile},
        { path: '/dashboard/profile/settings', component: settings},
        { path: '/dashboard/profile/edit', component: profileEdit}
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

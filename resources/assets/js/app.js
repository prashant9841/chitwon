
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

import VueRouter from 'vue-router';
//import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
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


const Passport = Vue.component('passport-clients',require('./components/passport/Clients.vue'));
const Pages = Vue.component('all-pages',require('./components/Pages.vue'));
const PassportClient = Vue.component('passport-authorized-clients',require('./components/passport/AuthorizedClients.vue'));
const AccessToken = Vue.component('passport-personal-access-tokens',require('./components/passport/PersonalAccessTokens.vue'));
const InnerPage = Vue.component('single-page',require('./components/SinglePage.vue'));
const Example = Vue.component('example', require('./components/Example.vue'));
const Post = Vue.component('child-posts', require('./components/ChildPosts.vue'));
const AllPosts = Vue.component('posts', require('./components/Posts.vue'));

const router = new VueRouter({
    routes: [
        // dynamic segments start with a colon
        { path: '/example', component:Example},
        {path:'/pages',component: Pages},
        { path: '/pages/:id', component: InnerPage,
        children: [
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                path: '/',
                component: Pages
            },
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                path: '/posts',
                component: Example
            },
            {
                // UserPosts will be rendered inside User's <router-view>
                // when /user/:id/posts is matched
                path: '/passport',
                component: Passport
            }
        ]
        },
        {path:'/posts/:id',component:AllPosts,
        children:[
            {
                path: '/',
                component: Example
            }
        ]},
        { path: '/pages/:id', component: InnerPage },
        { path: '/upload', component: Vue.component('upload', require('./components/Upload.vue'))},
        { path: '/passport', component: Passport},

    ]

})
//Router Mounted
const app = new Vue({
    router,


}).$mount('#app');

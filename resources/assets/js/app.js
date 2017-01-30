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



const Pages = Vue.component('pages',require('./components/Pages.vue'));

const InnerPage = Vue.component('single-page',require('./components/SinglePage.vue'));
const Image = Vue.component('image-gallery',require('./components/Image.vue'));
const Example = Vue.component('example', require('./components/Example.vue'));
const Post = Vue.component('child-posts', require('./components/ChildPosts.vue'));
const AllPosts = Vue.component('posts', require('./components/Posts.vue'));
const IndividualPosts = Vue.component('individual-posts', require('./components/IndividualPost.vue'));

const router = new VueRouter({
    mode: 'history',
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
                component: Example
            }
        ]
        },
        {path:'/posts/:id',component:IndividualPosts
        /*children:[
            {
                path: '/',
                component: AllPosts
            }
        ]*/},
        { path: '/pages/:id', component: InnerPage },
        { path: '/upload', component: Vue.component('upload', require('./components/Upload.vue'))},
        { path: '/passport', component: Pages},

    ]

})
//Router Mounted
const app = new Vue({
    router,


}).$mount('#app');

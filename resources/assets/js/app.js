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

const Copyright = Vue.component('copyright', {
        template: `
            <p>&copy; {{statement}}</p>
        `,
        data: function () {
          return { statement: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' }
        }

    });
/*
---------------------------------------------------------
        Components
---------------------------------------------------------
*/
const Pages = Vue.component('pages',require('./components/Pages.vue'));

const InnerPage = Vue.component('single-page',require('./components/SinglePage.vue'));

const Image = Vue.component('image-gallery',require('./components/Image.vue'));

const Post = Vue.component('child-posts', require('./components/ChildPosts.vue'));
const AllPosts = Vue.component('posts', require('./components/Posts.vue'));
const IndividualPosts = Vue.component('individual-posts', require('./components/IndividualPost.vue'));
const Menu = Vue.component('site-menu', require('./components/siteMenu.vue'));
const Social = Vue.component('social-icons', require('./components/socialIcons.vue'));
const Slider = Vue.component('banner-slider', require('./components/bannerSlider.vue'));
const Package = Vue.component('package', require('./components/package.vue'));
const Facts = Vue.component('facts', require('./components/facts.vue'));
const Blog = Vue.component('blog', require('./components/blog.vue'));
const Intro = Vue.component('intro', require('./components/intro.vue'));
const About = Vue.component('about', require('./components/about.vue'));
const Testimonial = Vue.component('testimonial', require('./components/testimonial.vue'));
const contactInfo = Vue.component('contact-info', require('./components/contactInfo.vue'));
/*
---------------------------------------------------------
        Main Pages
---------------------------------------------------------
*/
const Home = Vue.component('home', require('./components/home.vue'));

const router = new VueRouter({

    history: true,

    mode: 'history',

    routes: [
        // dynamic segments start with a colon

        { path: '/pages/:id', component: InnerPage },

        { path: '/', component:Home},
        //{path:'/pages',component: Pages},
        { path: '/facts', component: Facts},
        { path: '/about', component: Intro},

        { path:'/testimonial',component:Testimonial},

        { path: '/blog', component: Blog},
        {path:'/testimonial',component:Testimonial},
        { path: '/package', component: Package },

        { path: '/upload', component: Vue.component('upload', require('./components/Upload.vue'))},
        { path: '/passport', component: Pages},

    ]

})


//Router Mounted
const app = new Vue({
    router,


}).$mount('#app');

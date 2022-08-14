import indexPage from "./../pages/index.vue";
import slugPage from "./../pages/slug.vue";


export const routes = [
    {
        path: '/',
        name: 'index',
        component: indexPage
    },

    {
        path: '/libreta/:slug',
        name: 'slugPage',
        component: slugPage
    }
];
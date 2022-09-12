import Vue from 'vue'
import VueRouter from "vue-router";
import Index from './components/pages/dashboard/Index.vue'
import Profile from './components/pages/dashboard/profile.vue'
import Admin from './components/pages/dashboard/Admins.vue'
import Overview from './components/pages/dashboard/customComponents/Overview.vue'
import Subscription from './components/pages/dashboard/Subscription.vue'
import Categories from './components/pages/dashboard/Categories.vue'
import Sellers from './components/pages/dashboard/Sellers.vue'
import Products from './components/pages/dashboard/Products.vue'
import Login from './components/pages/dashboard/login.vue'

Vue.use(VueRouter)

let routes = [
    {
        path:'/',
        component:Login,
        name:'login'
    },

    {
        
        path:'/account',
        component:Index,
        children:[
            {
                path:'/account/dashboard',
                component:Overview,
                name:'overview'
            },
            {
                path:'/account/profile',
                component: Profile,
                name:'profile'
            },
            {
                path:'/account/admins',
                component: Admin,
                name:'admins'
            },
            {
                path:'/account/subscriptions',
                component:Subscription,
                name:'subscription'
            },
            {
                path:'/account/categories',
                component:Categories,
                name:'categories'
            },
            {
                path:'/account/sellers',
                component:Sellers,
                name:'sellers'
            },
            {
                path:'/account/produits',
                component:Products,
                name:'produits'
            }
        ]
    }
]

let router = new VueRouter({
    mode:'history',
    routes
})

export default router;
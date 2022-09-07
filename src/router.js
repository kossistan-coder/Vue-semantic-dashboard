import Vue from 'vue'
import VueRouter from "vue-router";
import Index from './components/pages/dashboard/Index.vue'
import Profile from './components/pages/dashboard/profile.vue'
import Admin from './components/pages/dashboard/Admins.vue'
import Overview from './components/pages/dashboard/customComponents/Overview.vue'
import Subscription from './components/pages/dashboard/Subscription.vue'
import Categories from './components/pages/dashboard/Categories.vue'

Vue.use(VueRouter)

let routes = [

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
            }
        ]
    }
]

let router = new VueRouter({
    mode:'history',
    routes
})

export default router;
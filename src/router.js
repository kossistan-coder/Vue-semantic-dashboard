
import VueRouter from "vue-router";
import Overview from './components/Overview.vue'



let routes = [

    {
        path:'/',
        component:Overview
    }
]

let router = new VueRouter({
    mode:'history',
    routes
})

export default router;
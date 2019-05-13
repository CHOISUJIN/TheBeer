import Vue from 'vue'
import VueRouter from 'vue-router'
import BeerView from '../views/BeerView.vue'

Vue.use(VueRouter);


export const router = new VueRouter({
    mode : 'history',
    routes : [
        {
            path : '/',
            redirect : '/beer'
        },
        {
            path: '/beer',
            name: 'beer',
            component : BeerView
        }
    ]

})
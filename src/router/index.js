import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/recepty',
    name: 'Recipes',
    component: () => import(/* webpackChunkName: "about" */ '../views/Recipes.vue')
  },
  {
    path: '/recept/:id',
    name: 'Recipe',
    component: () => import(/* webpackChunkName: "about" */ '../views/Recipe.vue')
  },
  {
    path: '/oblubene',
    name: 'Bookmarks',
    component: () => import(/* webpackChunkName: "about" */ '../views/Bookmarks.vue')
  },
  {
    path: '/prihlasenie',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/registracia',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/spajza',
    name: 'Pantry',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pantry.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

export default router

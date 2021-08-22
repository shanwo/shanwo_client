import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("../views/main"),
    redirect: "home",
    children: [
      {
        path: "home",
        component: () => import("../views/home/index"),
        meta: { keepAlive: true },
      },
      {
        path: "myShan",
        component: () => import("../views/myShan/index"),
        meta: { keepAlive: true },
      },
      {
        path: "my",
        component: () => import("../views/my/index"),
        meta: { keepAlive: true },
      },
    ],
  },
  {
    path: "/shanDetail",
    name: "shanDetail",
    component: () => import("../views/home/shanDetail"),
    meta: { keepAlive: true },
  },
  {
    path: "/templates",
    name: "templates",
    component: () => import("../views/home/templates"),
		meta: { keepAlive: true }
  },
  {
    path: "/editShan",
    name: "editShan",
    component: () => import("../views/myShan/editShan"),
		meta: { keepAlive: true }
  },
  {
    path: "/editHead",
    name: "editHead",
    component: () => import("../views/myShan/editShan/editHead"),
		meta: { keepAlive: true }
  },
  {
    path: "/editLink",
    name: "editLink",
    component: () => import("../views/myShan/editShan/editLink"),
		meta: { keepAlive: true }
  },
  {
    path: "/editDetail",
    name: "editDetail",
    component: () => import("../views/myShan/editShan/editLink/editDetail"),
		meta: { keepAlive: true }
  },
  {
    path: "/icons",
    name: "icons",
    component: () => import("../views/myShan/editShan/editLink/icons"),
		meta: { keepAlive: true }
  },
  {
    path: "/linkGuide",
    name: "linkGuide",
    component: () => import("../views/myShan/editShan/editLink/linkGuide"),
		meta: { keepAlive: true }
  },
  {
    path: "/guideDetail",
    name: "guideDetail",
    component: () => import("../views/myShan/editShan/editLink/guideDetail"),
		meta: { keepAlive: true }
  },
  {
    path: "/editBottom",
    name: "editBottom",
    component: () => import("../views/myShan/editShan/editBottom"),
		meta: { keepAlive: true }
  },
  {
    path: "/memberDes",
    name: "memberDes",
    component: () => import("../views/my/memberDes"),
		meta: { keepAlive: true }
  },
  {
    path: "/myLiked",
    name: "myLiked",
    component: () => import("../views/my/myLiked"),
		meta: { keepAlive: true }
  },
  {
    path: "/editUserInfo",
    name: "editUserInfo",
    component: () => import("../views/my/editUserInfo"),
    meta: { keepAlive: true },
  },
  {
    path: "/fans",
    name: "fans",
    component: () => import("../views/myShan/fans"),
		meta: { keepAlive: true }
  },
];
const router = new VueRouter({
  mode: 'history',
  base: '/market-poster',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition && to.meta.keepAlive) {
      return savedPosition
    } else {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({
            x: 0,
            y: 1
          })
        }, 0)
      })
    }
  }
})
export default router
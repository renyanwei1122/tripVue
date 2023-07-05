import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  // 映射关系： path->component
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: () => import("@/views/home/home.vue")
    },
    {
      path: "/favor",
      component: () => import("@/views/favor/favor.vue")
    },
    {
      path: "/order",
      component: () => import("@/views/order/order.vue")
    },
    {
      path: "/message",
      component: () => import("@/views/message/message.vue")
    },
    {
      path: "/city",
      component: () => import("@/views/home/city/city.vue"),
      meta: {
        hideTabbar: true
      }
    },
    {
      path: "/search",
      component: () => import("@/views/home/search/search.vue"),
      meta: {
        hideTabbar: true
      }
    },
    {
      path: "/detail/:id",
      component: () => import("@/views/home/detial/detail.vue"),
      meta: {
        hideTabbar: true
      }
    },

  ]
})

//导出路由
export default router
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// vscode 配置一下 tsconfig.js
// 否则提示找不到模块
import Home from '@/views/home.vue'
import Vuex from '@/views/vuex.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/vuex",
    name: "Vuex",
    component: Vuex,
  },
  {
    path: "/axios",
    name: "Axios",
    component: () => import("@/views/axios.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

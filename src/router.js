
import { createRouter, createWebHistory,createWebHashHistory,useRoute } from 'vue-router'
import{ defineAsyncComponent } from"vue"
import store from './store'


const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes :[
    {
      path: "/",
      name: "index",
      redirect:"/layout",
    },
    {
      path: "/login",
      name: "login",
      component:()=>import("@/view/login/index-login.vue"),
    },
    {
      path: "/layout",
      name: "layout",
      component:()=>import("@/view/layout/index-layout.vue"),
    },
    {
      path: "/panel3D",
      name: "panel3D",
      component:()=>import("@/view/panel3D/panel3D-index.vue"),
    },
    
  ]
});



export default router;


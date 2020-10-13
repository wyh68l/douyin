import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Wallpaper from "./views/wallpaper.vue";
import Tools from "./views/Tools.vue";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },{
      path: "/home",
      name: "home",
      component: Home
    },
      {
          path: "/tools",
          name: "Tools",
          component: Tools
      },
      {
          path: "/wallpaper",
          name: "Wallpaper",
          component: Wallpaper
      },
  ]
});

import Vue from "vue";
import VueRouter from "vue-router";
import Index from "./components/Index.vue";
import AddSmoothie from "./components/AddSmoothie.vue";

Vue.use(VueRouter);

export default new VueRouter({
  base: "/",
  mode: "history",
  routes: [
    { path: "/", component: Index, name: "Index" },
    {
      path: "/add-smoothie",
      component: AddSmoothie,
      name: "AddSmoothie"
    }
  ]
});

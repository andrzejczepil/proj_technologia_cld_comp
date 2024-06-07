import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Users from "./components/Users.vue";
import User from './components/User.vue';

const router= createRouter({
  history: createWebHistory(),
  routes: [
      { path: "/", component: Home },
      { path: "/users", component: Users },
      { path: "/user/:id", component: User }
  ]
});
export default router;


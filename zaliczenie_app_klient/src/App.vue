<template>
  <app-header></app-header>
 <router-view></router-view>
</template>

<script>
/* Component import */
import Home from './components/Home.vue'
import Header from './components/Header.vue'
import Users from './components/Users.vue'
import User from './components/User.vue';

export default{
  components:{
    "home-home":Home,
    "app-header":Header,
    "users-users":Users,
    "user-user":User
  }
}
</script>


<style scoped>

</style>

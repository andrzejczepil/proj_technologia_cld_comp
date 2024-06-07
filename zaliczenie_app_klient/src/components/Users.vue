<template>
    <div class="container">
    <div class="row justify-content-center mt-4">
   <div class="col-6">
  <h1 class="alert alert-primary  text-center">Lista Użytkowników</h1>
  <input type="text" v-model="keyword" placeholder="Wyszukaj" />
  <p v-if="loading">Ładuję...</p>
<div class="alert alert-danger " v-else-if="errored">Błąd</div>
</div>

  <table class="table table-striped">
  <thead>
    <tr>
      <th>id</th>
      <th>Imię</th>
      <th>Email</th>
      <th>Miasto</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in FilterUsers" :key="user.id">
      <td>{{user.id}}</td>
      <td><router-link v-bind:to="'/user/'+user.id">{{user.name}}</router-link></td>
      <td>{{user.email}}</td>
      <td>{{user.address.city}}</td>
    </tr>
  </tbody>
</table>
</div>
  </div>
</template>

<script>
import axios from 'axios'
export default{
  data(){
    return{
      users: [],
      keyword: '',
      loading: true,
      errored: false
    }
  },
  computed:{
    FilterUsers(){
      return this.users.filter(user=>{
        return user.name.toLowerCase().includes(this.keyword.toLowerCase());
      })
     }
  },
  created(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
      console.log(response);
      this.users=response.data;
    })
    .catch(error=>{
      console.log(error);
      this.errored = true;
    })
    .finally(()=>{
      console.log('Wykonane');
      this.loading = false;
    })
  }
}
</script>

<style scoped>
</style>
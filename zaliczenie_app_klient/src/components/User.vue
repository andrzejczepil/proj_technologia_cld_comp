<template>
      <div class="container">
    <div class="row justify-content-center mt-4">
   <div class="col-6">
  <h1 class="alert alert-primary  text-center">List User</h1>
  <p v-if="loading">Loading...</p>
<div class="alert alert-danger " v-else-if="errored">Błąd</div>
</div>
  <table class="table table-striped">
  <thead>
    <tr>
      <th>id</th>
      <th>name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{user.id}}</td>
      <td>{{user.name}}</td>
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
      user: {},
      id: this.$route.params.id,
      loading: true,
      errored: false
    }
  },
  created(){
    axios.get('https://jsonplaceholder.typicode.com/users/'+this.id)
    .then(response=>{
      console.log(response);
      this.user=response.data;
    })
    .catch(error=>{
      console.log(error);
      this.errored = true;
    })
    .finally(()=>{
      console.log('Request completed');
      this.loading = false;
    })
  }
}
</script>

<style scoped>
</style>
<template>
  <div class="container">
  <div class="row justify-content-center mt-4">
 <div class="col-6">
<h1 class="alert alert-primary  text-center">Strona Główna</h1>
<p v-if="loading">Ładuję</p>
<div class="alert alert-danger " v-else-if="errored">Błąd</div>
</div>

<table class="table table-striped">
  <thead>
    <tr>
      <th>Mądrość Pana Kanye West na dzisiaj:</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{kanye.quote}}</td>
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
      keyword: '',
      loading: true,
      errored: false
    }
  },
  created(){
    axios.get('https://api.kanye.rest')
    .then(response=>{
      console.log(response);
      this.kanye=response.data;
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
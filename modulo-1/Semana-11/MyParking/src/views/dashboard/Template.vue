<template>
  <div class="container mt-5">   
    <h1>Reservas</h1> 
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from '../../components/header/HeaderComponent.vue';
  export default {
    components: {
      'my-header': Header
    },
    data () {
      return {     
        title: 'Cadastro e listagem de reservas'
      }
    },
    methods: {
    }
  }
</script>
<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
            <img src="@/assets/logo.svg" width="25" height="25" class="d-inline-block align-text-top">
                My Parking
            </a>
            <div class="collapse navbar-collapse" id="navbarNav" v-if="autenticado">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/reserva/nova">Nova Reserva</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/reserva/lista">Listar Reservas</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/user">Novo Usuário</router-link>
                    </li>
                </ul>
            </div>
            <div class="d-flex mr-2">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/auth" v-if="!autenticado">Login</router-link>
                        <a href="#" class="nav-link" @click="logout" v-else>Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
    export default {
        methods: {
            logout() {
                this.$store.commit('autenticacaoModule/logout');
                this.$router.push('/');
            }
        },
        computed: {
            autenticado() {
                return this.$store.state.autenticacaoModule.autenticado;
            },
            user() {
                return this.$store.state.userModule.user;
            }
        },
        mounted() {
          this.$store.state.autenticacaoModule.autenticado = localStorage.getItem('token') ? true : false;
        },
    }
</script>
<template>
    <div class="m-5">
        <div class="container">
            <div class="text-center">
                <img src="@/assets/logo.png" alt="">
            </div>
            <div class="mt-5 text-center">
                <p v-if="!autenticado">Serviço de reserva de vagas de estacionamento. Efetue o <router-link to="auth">login</router-link> e faça sua reserva agora!</p>
                <div v-else>
                    <p>Bem vindo ao MyParking, serviço de reserva de vagas de estacionamento</p>
                    <button class="btn btn-outline-success" @click="toReserva">
                        Fazer uma reserva
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            toReserva() {
                this.$router.push('/reserva/nova');
            }
        },
        computed: {
            autenticado() {
                return this.$store.state.autenticacaoModule.autenticado;
            }
        },
        mounted() {
          this.$store.state.autenticacaoModule.autenticado = localStorage.getItem('token') ? true : false;
        },
    }
</script>
<style>
</style>
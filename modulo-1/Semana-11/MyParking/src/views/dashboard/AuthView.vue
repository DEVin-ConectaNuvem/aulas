<template>
    <div class="container">        
        <div class="row justify-content-md-center">
            <div class="col-8 mt-5">
                <h1>Efetuar Login</h1>
                <hr>
                <div class="row g-2">
                    <div class="col-12">
                        <label>E-mail</label>
                        <input placeholder="admin@admin.com.br" type="email" class="form-control" v-model="login.email">
                    </div>
                    <div class="col-12">
                        <label>Senha</label>
                        <input placeholder="******" type="password" class="form-control" v-model="login.password">
                    </div>
                    <div class="col-12 text-right">
                        <button class="btn btn-primary" @click="autenticar">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                login: {},
                loader: {}
            }
        },
        methods: {
            autenticar() {
                this.loader = this.$loading.show();
                this.$store.dispatch('autenticacaoModule/autenticar', this.login)
                    .then(() => {
                        this.loader.hide();
                        this.$router.push('/');
                    });
            }
        }
    }
</script>
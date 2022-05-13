<template>
    <div class="container mt-5">
        <div class="row justify-content-md-center">
            <div class="col-8">
                <h1>Novo Usuário</h1>
                <hr>
                <form @submit.prevent="save">
                    <div class="row g-2">
                        <div class="col-6">
                            <label>Nome</label>
                            <input type="text" class="form-control" v-model="user.name" required>
                        </div>
                        <div class="col-6">
                            <label>E-mail</label>
                            <input type="email" class="form-control" v-model="user.email" required>
                        </div>
                        <div class="col-12">
                            <label>Senha</label>
                            <input type="password" class="form-control" v-model="user.password" required>
                        </div>
                        <div class="col-12 mt-2 text-right">
                            <button type="submit" class="btn btn-primary">Salvar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {}
            }
        },
        methods: {
            save() {
                this.$store.dispatch('userModule/newUser', this.user);
            }
        }
    }
</script>
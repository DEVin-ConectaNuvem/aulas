import { isAutenticado, logout } from './mutations';
import axios from 'axios';

export default {
    namespaced: true,
    state() {
        return {
            autenticado:false
        }
    },
    mutations: {
        isAutenticado,
        logout 
    },
    actions: {
        autenticar(context, login) {
            return new Promise((resolve, reject) => {
                axios.post('https://devinhouse-auth.herokuapp.com/api/v1/login', login)
                    .then((response) => {
                        const token = response.data.token;
                        const id = response.data.details.id;
                        localStorage.setItem('token', token);
                        localStorage.setItem('id', id);
                        context.state.autenticado = true;
                        resolve();
                    })
                    .catch((err) => {
                        console.log(err);
                        reject();
                    })
            })
        }
    }
}
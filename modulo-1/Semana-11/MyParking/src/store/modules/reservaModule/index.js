function geraId() {
    var stringAleatoria = '';
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 24; i++) {
        stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return stringAleatoria;
}

export default {
    namespaced: true,
    state() {
        return {
            reservas: []
        }
    },
    mutations: {
        insert(state, reserva) {
            reserva.id = geraId();
            console.log('ID: ' + reserva.id)
            state.reservas.push(reserva);
        },
        delete(state, id) {
            console.log('entra aqui?')
            console.log(state.reservas)
            const index = state.reservas.findIndex( r => r.id === id );
            console.log(index);
            state.reservas.splice(index, 1);
        }
    }
}
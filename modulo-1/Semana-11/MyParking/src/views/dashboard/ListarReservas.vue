<template>
    <div class="text-center" v-if="reservas.length === 0">
      Não há reservas cadastradas
    </div>
    <table class="table" v-else>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Data Reserva</th>
          <th>Hora de Entrada</th>
          <th>Qtd Horas</th>
          <th>Placa</th>
          <th>Modelo</th>
          <th>Ano</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="reserva in reservas" :key="reserva.id">
          <td>{{ reserva.nome }}</td>
          <td>{{ reserva.dataReserva }}</td>
          <td>{{ reserva.horaEntrada }}</td>
          <td>{{ reserva.qtdHoras }}</td>
          <td>{{ reserva.placa }}</td>
          <td>{{ reserva.modelo }}</td>
          <td>{{ reserva.ano }}</td>
          <td>
            <button class="btn btn-danger btn-sm" @click="deleteReserva(reserva.id)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
</template>

<script>
export default {
    computed: {
      reservas() {
        return this.$store.state.reservaModule.reservas;
      }
    },
    methods: {
      deleteReserva(id) {
        console.log('delete: ' + id);
        this.$store.commit('reservaModule/delete')
      }
    }
}
</script>
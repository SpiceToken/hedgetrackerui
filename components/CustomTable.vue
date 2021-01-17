<template>
  <v-container>
    <v-row>
      <v-col sm="12">
        <v-card>
          <v-card-title>
            Nutrition
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="settlements"
            :search="search"
          ></v-data-table>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import settlementsVue from '../pages/settlements.vue'
  export default {

    data () {
      return {
        search: '',
        settlements: [],
        headers: [
          {
            text: 'Spending Transaction',
            align: 'start',
            sortable: false,
            value: 'spending_transaction',
          },
          { text: 'Hedge Satoshis', value: 'hedge_satoshis' },
          { text: 'Long Satoshis', value: 'long_satoshis' },
          { text: 'Oracle Price', value: 'oracle_price' },
        ],
      }
    },
    created(){
      let vm = this
      vm.$axios.get('/settlements/').then(function(res){
        vm.settlements = res.data.results
      })
    },
    
  }
</script>

<style>

</style>
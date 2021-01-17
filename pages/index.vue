<template>
  <v-container>

    <v-row justify="center" align="center">

        <v-col cols="12" md="2">
          <digits :name="'Total Contract Satoshis'" :value="latest_metric.total_contract_satoshis"/>
        </v-col>

        <v-col cols="12" md="2">
          <digits :name="'Hedge USD Payout'" :value="latest_metric.hedge_usd_payout"/>
        </v-col>

        <v-col cols="12" md="2">
          <digits :name="'Long USD Payout'" :value="latest_metric.long_usd_payout"/>
        </v-col>

        <v-col cols="12" md="2">
          <digits :name="'Approximate Hedge Pay In (Satoshis)'" :value="latest_metric.approx_hedge_payin_satoshis"/>
        </v-col>

        <v-col cols="12" md="2">
          <digits :name="'Approximate Long Pay In (Satoshis)'" :value="latest_metric.approx_long_payin_satoshis"/>
        </v-col>

        <v-col cols="12" md="2">
          <digits :name="'Approximate Ling USD Pay In'" :value="latest_metric.approx_long_usd_payin"/>
        </v-col>
    </v-row>

    <v-row>
      <analysis/>
      <v-col>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      metrics: [],
      latest_metric: {},
    }
  },
  methods: {
    messageReceived: function(data){
      console.log(data)
    },
  },
  beforeCreate() {
    this.$options.sockets = {
      onmessage: data => this.messageReceived(data)
    }
  },
  created(){
    let latest_metric = this.metrics[0]
    delete latest_metric.date_created
    delete latest_metric.id
    this.latest_metric = latest_metric
    

  },
  async asyncData({ $axios }) {
    const metrics = await $axios.$get(`/metrics/`)
    return { metrics }
  } 

}
</script>
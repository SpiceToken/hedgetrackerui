<template>
  <v-container>

    <v-row justify="center" align="center">

        <v-col md="6" sm="12" >
          <digits :name="'Total Contract Satoshis'"
            :date="latest_metric.date_created"
            :value="latest_metric.total_contract_satoshis"
            :sign="''"
            :color="'deep-orange'"/>
        </v-col>
        <v-col md="6">
          <analysis v-if="!isMobile" :metrics="metrics"/> 
        </v-col>

        <v-col md="6" sm="12">
          <digits
            :date="latest_metric.date_created"
            :name="'Hedge Payout'"
            :value="latest_metric.hedge_usd_payout"
            :sign="'$'"
            :color="'blue'"/>
        </v-col>
        <v-col md="6">
          <analysis v-if="!isMobile" :metrics="metrics"/> 
        </v-col>


        <v-col md="6" sm="12">
          <digits
            :date="latest_metric.date_created"
            :name="'Long Payout'"
            :value="latest_metric.long_usd_payout"
            :sign="'$'"
            :color="'pink'"/>
        </v-col>
        <v-col md="6">
          <analysis v-if="!isMobile" :metrics="metrics"/> 
        </v-col>

        <v-col md="6" sm="12">
          <digits
            :date="latest_metric.date_created"
            :name="'Hedge Pay In (Satoshis)'"
            :value="latest_metric.approx_hedge_payin_satoshis"
            :sign="''"
            :color="'purple'"/>
        </v-col>
        <v-col md="6">
          <analysis v-if="!isMobile" :metrics="metrics"/> 
        </v-col>

        <v-col md="6" sm="12">
          <digits
            :date="latest_metric.date_created"
            :name="'Long Pay In (Satoshis)'"
            :value="latest_metric.approx_long_payin_satoshis"
            :sign="''"
            :color="'amber'"/>
        </v-col>
        <v-col md="6">
          <analysis v-if="!isMobile" :metrics="metrics"/> 
        </v-col>

        <v-col md="6" sm="12">
          <digits
            :date="latest_metric.date_created"
            :name="'Approx Long Pay In'"
            :value="latest_metric.approx_long_usd_payin"
            :sign="'$'"
            :color="'teal'"/>
        </v-col>
        <v-col md="6">
          <analysis v-if="!isMobile" :metrics="metrics"/> 
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
      isMobile: false
    }
  },
  mounted () {
      this.onResize()
      window.addEventListener('resize', this.onResize, { passive: true })
    },


  beforeDestroy () {
    if (typeof window === 'undefined') return
    window.removeEventListener('resize', this.onResize, { passive: true })

  },
  methods: {
    onResize () {
        this.isMobile = window.innerWidth < 960
    },
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
    delete latest_metric.id
    this.latest_metric = latest_metric
    this.metrics = this.metrics.slice(0,11)
  
  },
  async asyncData({ $axios }) {
    const metrics = await $axios.$get(`/metrics/`)
    return { metrics }
  } 

}
</script>
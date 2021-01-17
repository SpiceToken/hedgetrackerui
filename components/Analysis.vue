<template>
<v-container>
  <v-row justify="center" align="center">
    <v-col>
      <bar-chart :data="barChartData" :options="barChartOptions" :height="200" />
    </v-col>
  </v-row>
</v-container>
  
</template>

<script>
import moment from 'moment'

export default {
  props: ['metrics', 'color','filterBy'],
  computed:{
    test: function(datetime){
      return moment(datetime)
    }
  },
  created(){
    let vm = this
    let latest = vm.metrics
    let label = latest.map(function(obj){
      return moment(obj.date_created).format("MMMDD HH[:]mm")
    })

    let datasets = latest.map(function(obj){
      return {
        'label': vm.filterBy,
        'data': latest.map(function(obj){
          return obj[vm.filterBy]
        }),
        'backgroundColor': vm.color
      }
    })
    vm.barChartData['labels'] = label
    vm.barChartData['datasets'] = datasets


  },
  data() {
    return {
      metric_names: [
        'total_contract_satoshis',
        'hedge_usd_payout',
        'long_usd_payout',
        'approx_hedge_payin_satoshis',
        'approx_long_payin_satoshis',
        'approx_long_usd_payin'
      ],
      barChartData: {
        labels: [],
        datasets: []
      },
     barChartOptions: {
        responsive: true,
        legend: {
          display: false
        },
        title: {
          display: true,
          text: '',
          fontSize: 24,
          fontColor: '#6b7280'
        },
        tooltips: {
          backgroundColor: '#17BF62'
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }
          ]
        }
      }
    }
  }
}
</script>

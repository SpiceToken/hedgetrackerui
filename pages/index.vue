<template>
  <v-container>
    <v-row v-if="dataLoaded">
      <time-zoom-chart
        :series="totalContractsSeries"
        title="Total Contract Satoshis"
        :dates="dates"
        y-title="Satoshis"
      />
    </v-row>

    <v-row class="mb-5" v-if="dataLoaded">
      <time-zoom-chart
        :series="usdPayoutSeries[0]"
        title="Total Daily Payouts"
        :dates="dates"
        y-title="Dollars ($)"
        :cols="6"
      />
      <time-zoom-chart
        :series="usdPayoutSeries[1]"
        title="Average Daily Payouts"
        :dates="dates"
        y-title="Dollars ($)"
        :cols="6"
      />
    </v-row>

    <custom-table title="Settlement Transactions" />
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      dataLoaded: false,
      usdPayoutSeries: [],
      totalContractsSeries: [],
      dates: [],
    };
  },

  methods: {
    messageReceived: function(data) {
      console.log(data);
    },
  },

  beforeCreate() {
    this.$options.sockets = {
      onmessage: (data) => this.messageReceived(data),
    };
  },

  created() {
    this.$axios.get("metrics/").then((resp) => {
      const data = resp.data;
      this.dates = data.date_created;

      // Total Contract Satoshis
      this.totalContractsSeries.push({
        name: "Satoshis",
        data: data.total_contract_satoshis,
      });

      // USD Payouts
      for (let key of Object.keys(data.usd_payouts)) {
        let series = [
          {
            name: "Hedge",
            data: [],
          },
          {
            name: "Long",
            data: [],
          },
        ];
        series[0].data = data.usd_payouts[key].hedge;
        series[1].data = data.usd_payouts[key].long;
        this.usdPayoutSeries.push(series);
      }

      this.dataLoaded = true;
    });
  },
};
</script>

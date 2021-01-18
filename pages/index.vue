<template>
  <v-container>
    <v-card style="padding: 2%" class="mb-5">
      <apexchart
        v-if="dataLoaded"
        type="area"
        height="350"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </v-card>
    <custom-table title="Settlement Transactions" />
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      dataLoaded: false,
      series: [
        {
          name: "Hedge",
          data: [],
          type: "column",
        },
        {
          name: "Long",
          data: [],
          type: "column",
        },
      ],
      chartOptions: {
        chart: {
          type: "area",
          // foreColor: "#FFFFFF",
          stacked: false,
          height: 350,
          zoom: {
            type: "x",
            enabled: true,
            autoScaleYaxis: true,
          },
          toolbar: {
            autoSelected: "zoom",
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 0,
        },
        title: {
          text: "Hedge & Long USD Payouts",
          align: "left",
          style: {
            fontFamily: "Karla",
            fontSize: "18px",
          },
        },
        yaxis: {
          type: "numeric",
          labels: {
            formatter: function(val) {
              return val.toFixed(0);
            },
          },
          title: {
            text: "USD ($)",
          },
        },
        xaxis: {
          type: "datetime",
          categories: [],
        },
        tooltip: {
          shared: false,
          y: {
            formatter: function(val) {
              return val.toFixed(0);
            },
          },
        },
      },
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
      this.chartOptions.xaxis.categories = data.date_created;
      this.series[0].data = data.hedge_usd_payout;
      this.series[1].data = data.long_usd_payout;
      this.dataLoaded = true;
    });
  },
};
</script>

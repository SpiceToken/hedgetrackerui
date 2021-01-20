<template>
  <v-col sm="12" :md="cols" :lg="cols">
    <v-card style="padding: 3%">
      <apexchart
        type="area"
        height="350"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    series: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      default: "Title Here",
    },
    dates: {
      type: Array,
      required: true,
    },
    cols: {
      type: Number,
      default: 12,
    },
    yTitle: {
      type: String,
      default: "Y-AXIS",
    },
  },

  data() {
    return {
      dataLoaded: false,
      chartOptions: {
        chart: {
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
          text: this.title,
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
            text: this.yTitle,
          },
        },
        xaxis: {
          type: "datetime",
          categories: this.dates,
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
};
</script>

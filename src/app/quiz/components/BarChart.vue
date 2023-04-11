<template>
  <v-container>
    <div>
      <apexchart type="bar" :options="chartOptions" :series="series"></apexchart>
    </div>
  </v-container>
</template>

<script lang="ts">

export default {
  props: {
    build_better_future: Number,
    adapt_and_evolve: Number,
    deliver_growth: Number,
    collaborate_to_win: Number,
    prioritise_customers: Number
  },
  data: function () {
    return {
      chartOptions: {
        xaxis: {
          categories: ["Build for a better future", "Adapt & Evolve", "Deliver Growth", "Collaborate to Win", "Prioritise Customers"],
        },
        chart: {
          toolbar: {
            show: false
          }
        },
        grid: {
          show: false
        },
        colors: [
          // eslint-disable-next-line no-unused-vars
          function ({value, seriesIndex, w}) {
            if (value < 25) {
              return "#de1616"
            }
            if (value >= 25 && value < 50) {
              return "#ecc810"
            }
            if (value >= 50 && value < 75) {
              return "#c74a06"
            }

            if (value >= 75) {
              return "#5be510"
            }
          }
        ],
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
            barHeight: '40%'
          }
        }
      },
      series: [{
        name: 'series-1',
        data: [this.build_better_future, this.adapt_and_evolve, this.deliver_growth, this.collaborate_to_win, this.prioritise_customers]
      }]
    }
  }
};
</script>

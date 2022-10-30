<template>
  <v-container class="mt-10">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="6" xl="3" lg="3">
          <card-stats/>
        </v-col>
        <v-col cols="12" sm="12" md="6" xl="3" lg="3">
          <card-stats/>
        </v-col>
        <v-col cols="12" sm="12" md="6" xl="3" lg="3">
          <card-stats/>
        </v-col>
        <v-col cols="12" sm="12" md="6" xl="3" lg="3">
          <card-stats/>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="6" sm="12" md="6" lg="6" xl="6">
          <apexchart
              width="100%"
              type="bar"
              :options="options"
              :series="series"></apexchart>
        </v-col>
        <v-col cols="6" md="6" sm="12" xl="6">
          <apexchart
              width="100%"
              type="line"
              :options="options"
              :series="series"></apexchart>

        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import CardStats from "@/app/shared/components/CardStats";

export default {
  name: "Dashboard",
  components: {
    CardStats
  },
  data() {
    return {
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ]
        }
      },
      series: [{
        name: 'series-1',
        data: [55, 62, 89, 66, 98, 72, 101, 75, 94, 120, 117, 139]
      }]
    }
  }

}
</script>

<style scoped>

</style>

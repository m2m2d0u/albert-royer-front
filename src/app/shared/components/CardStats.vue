<template>
  <v-card
      elevation="6"
      height="175"
      outlined
  >
    <v-card-text>
      <v-row class="mt-2">
        <v-col>
          <h5 class="card-title text-uppercase text-muted mb-0">Traffic</h5>
          <span class="h2 font-weight-bold mb-0">350,897</span>
        </v-col>
        <v-col class="d-flex justify-content-center">
          <div class="icon icon-shape bg-danger text-white rounded-circle shadow">
            <em class="fas fa-chart-bar"/>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-subtitle class="mt-3 mb-0 text-muted text-sm">
      <span class="text-success mr-2"><em class="fa fa-arrow-up"></em> 3.48%</span>
      <span class="text-nowrap">Since last month</span>
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "CardStats"
}
</script>

<style scoped>

.icon {
  width: 4rem;
  height: 4rem;
}

.icon em {
  font-size: 2rem;
}

.icon-shape {
  display: inline-flex;
  padding: 12px;
  text-align: center;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
}

.icon-shape i {
  font-size: 1.25rem;
}

</style>

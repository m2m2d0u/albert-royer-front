<template>
  <v-container class="drawer">
    <v-container>
      <drawer/>
    </v-container>
    <v-container>
      <dashboard v-if="dashboard"/>
      <data-table v-if="dataTable"/>
    </v-container>
  </v-container>
</template>

<script>
import Drawer from "@/app/shared/components/Drawer";
import Dashboard from "@/app/shared/components/Dashboard";
import DataTable from "@/app/shared/components/DataTable";

export default {
  name: "Administration",
  components: {
    Drawer,
    Dashboard,
    DataTable
  },
  data() {
    return {
      dashboard: false,
      dataTable: true,
    }
  }
}
</script>

<style scoped>
.drawer {
  background-color: #FAFAFA;
  height: 100vh;
}
</style>

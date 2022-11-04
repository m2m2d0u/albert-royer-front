<template>
  <div class="drawer">
    <div>
      <drawer @togglePage="navigatePage($event)"/>
    </div>
    <div class="page">
      <dashboard v-if="navigation.dashboard"/>
      <data-table v-if="navigation.dataTable"/>
      <list-users v-if="navigation.listUsers"/>
    </div>
  </div>
</template>

<script>
import Drawer from "@/app/shared/components/Drawer";
import Dashboard from "@/app/shared/components/Dashboard";
import DataTable from "@/app/shared/components/ListTests";
import ListUsers from "@/app/shared/components/ListUsers";

export default {
  name: "Administration",
  components: {
    ListUsers,
    Drawer,
    Dashboard,
    DataTable
  },
  data() {
    return {
      navigation: {
        dashboard: true,
        dataTable: false,
        listUsers: false,
      }
    }
  },
  methods: {
    navigatePage(name) {
      Object.keys(this.navigation).map(nav => {
        if (nav !== name)
          this.navigation[nav] = false
      })
      this.navigation[name] = true;
    }
  }
}
</script>

<style scoped>
.drawer {
  background-color: #FAFAFA;
}
</style>

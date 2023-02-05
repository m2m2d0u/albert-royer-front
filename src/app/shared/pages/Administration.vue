<template>
  <div class="drawer">
    <div>
      <drawer @togglePage="navigatePage($event)"/>
    </div>
    <div class="page">
      <dashboard v-if="navigation.dashboard"/>
      <list-tests v-if="navigation.listTests"/>
      <list-users v-if="navigation.listUsers"/>
      <list-jobs v-if="navigation.listJobs"/>
    </div>
  </div>
</template>

<script>
import Drawer from "@/app/shared/components/Drawer";
import Dashboard from "@/app/shared/components/Dashboard";
import ListTests from "@/app/shared/components/ListTests";
import ListUsers from "@/app/shared/components/ListUsers";
import ListJobs from "@/app/shared/components/ListJobs.vue";

export default {
  name: "Administration",
  components: {
    ListUsers,
    Drawer,
    Dashboard,
    ListTests,
    ListJobs,
  },
  data() {
    return {
      navigation: {
        dashboard: false,
        listTests: true,
        listUsers: false,
        listJobs: false,
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

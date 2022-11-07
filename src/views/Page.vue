<template>
<v-app>
  <navbar-index/>
  <router-view/>
  <footer-index/>
</v-app>
</template>

<script>
import NavbarIndex from "@/app/shared/components/Navbar";
import FooterIndex from "@/app/shared/components/Footer";

export default {
  name: "Page",
  components: {
    NavbarIndex,
    FooterIndex
  }
}
</script>

<style scoped>

</style>

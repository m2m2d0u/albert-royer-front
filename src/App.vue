<template>
  <v-app>
    <v-main>
      <NavbarIndex/>
      <router-view/>
      <FooterIndex/>
    </v-main>
  </v-app>
</template>

<script>
import NavbarIndex from "@/app/shared/components/Navbar";
import FooterIndex from "@/app/shared/components/Footer";

export default {
  name: 'App',
  components: {
    NavbarIndex, FooterIndex
  },
  mounted() {
    this.$store.dispatch("quiz/fetchAllTest");
  },
  methods: {},
};
</script>

<template>
  <v-app>
    <v-main>
      <notifications/>
      <router-view/>
      <!--      <NavbarIndex v-if="$route.path !== '/connexion' && $route.path !== '/admin' && $route.path !== '/report' && $route.path !== '/confirm-email'"/>-->
      <div class="center-screen" v-if="isLoading">
        <v-progress-circular
            :size="50"
            color="primary"
            indeterminate
        />
      </div>
      <div v-else>
<!--        <FooterIndex v-if="$route.path !== '/connexion' && $route.path !== '/admin' && $route.path !== '/report' && $route.path !== '/confirm-email'"/>-->
      </div>
    </v-main>
  </v-app>
</template>

<script>
// import NavbarIndex from "@/app/shared/components/Navbar";
// import FooterIndex from "@/app/shared/components/Footer";

export default {
  name: 'App',
  components: {
    // NavbarIndex,
    // FooterIndex
  },
  mounted() {
    this.$store.dispatch("quiz/fetchAllTest");
    this.$store.dispatch("user/getRoles");
  },
  computed: {
    isLoading() {
      return this.$store.state.utilities.isLoading
    }
  },
  methods: {},
};
</script>

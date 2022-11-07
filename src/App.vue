<template>
  <v-app>
    <v-main>
      <notifications/>
      <router-view/>
      <div class="center-screen" v-if="isLoading">
        <v-progress-circular
            :size="50"
            color="primary"
            indeterminate
        />
      </div>
      <div v-else>
      </div>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {},
  mounted() {
    this.$store.dispatch("recipient/checkIfRecipientHasTest");
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

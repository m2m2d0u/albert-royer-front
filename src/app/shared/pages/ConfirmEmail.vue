<template>
  <v-container>
    <v-container v-if="result === 'success'" v-show="false" class="center-screen d-flex flex-column align-items-center gap-3">
      <v-img :src="require('@/assets/images/avatars/redirect.jpg')" width="600"/>
      <span class="text-h6">Your account is verified now</span>
      <v-btn color="#4F52FF">
        <router-link to="/pages/connexion" style="text-decoration: none; color: black">
          Go to the login page
        </router-link>
      </v-btn>
    </v-container>
    <v-container v-if="result === 'error'" class="center-screen d-flex flex-column align-items-center gap-3">
      <v-img :src="require('@/assets/images/avatars/error.jpg')" width="600"/>
      <span class="text-h6">{{ message }}</span>
      <v-btn color="#D2001E">
        <router-link to="/" style="text-decoration: none; color: black">
          Go to homepage
        </router-link>
      </v-btn>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "ConfirmEmail",
  data() {
    return {
      result: null,
      message: null
    }
  },
  mounted() {
    const email = this.$route.params.email;
    const tokenId = this.$route.params.token;
    this.$store.dispatch('user/validateEmail', {email: email, tokenId: tokenId})
        .then(() => {
          this.result = 'success'
        })
        .catch(error => {
          this.result = 'error'
          this.message = error;
        })
  }
}
</script>

<style scoped>

</style>

<template>
  <v-container>
    <div class="form signup">
      <span class="title">Reset your password</span>
      <form action="#">
        <div class="input-field">
          <v-text-field
              prepend-icon="mdi-account"
              type="text"
              :rules="rules.username"
              placeholder="Phone number or email"
              v-model="username"/>
        </div>
        <div class="input-field button">
          <v-btn class="button-confirm" large color="#4070f4" @click="resetPassword" :disabled="isActive">
            Submit
          </v-btn>
        </div>
      </form>
      <div class="login-signup">
          <span class="text">Your have an account?
              <a href="#" class="text login-link" @click.prevent="toLogin">Sign In</a>
          </span>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "ForgetPassword",
  props: {
    forgotPasswordProps: Object
  },

  data() {
    return {
      username: null,
      isActive: false,
      rules: {
        username: [v => !!v || "Le nom d'utilisateur est obligatoire."]
      }
    }
  },
  methods: {
    toLogin() {
      this.$emit('changeLevel', 'login');
    },
    resetPassword() {
      this.isActive = true
      this.$store.dispatch('user/resetPassword', {email: this.username})
          .then(() => {
            this.$notifyInfo("Your password is sent to your inbox");
            this.$emit('changeLevel', 'login');
            this.isActive = false
          })
          .catch(error => {
            if (error instanceof Array) {
              error.map(v => {
                this.$notifyError(v);
              })
            } else {
              this.$notifyError(error);
            }
            this.isActive = false
          })
    }
  }
}
</script>

<style scoped>

</style>

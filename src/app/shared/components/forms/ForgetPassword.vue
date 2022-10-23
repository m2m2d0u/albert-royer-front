<template>
  <v-container>
    <div class="form signup">
      <span class="title">Mot de passe oublié</span>
      <form action="#">
        <div class="input-field">
          <input type="text" placeholder="Donner votre email" required>
          <i class="uil uil-envelope icon"/>
        </div>
        <div class="input-field button">
          <input type="button" value="Réinitialiser">
        </div>
      </form>
      <div class="login-signup">
          <span class="text">Vous êtes déjà membre?
              <a href="#" class="text login-link" @click.prevent="toLogin">Se connecter</a>
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
    return {}
  },
  methods: {
    toLogin() {
      this.$emit('changeLevel', 'login');
    }
  }
}
</script>

<style scoped>

</style>

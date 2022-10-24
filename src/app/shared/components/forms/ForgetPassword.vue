<template>
  <v-container>
    <div class="form signup">
      <span class="title">Mot de passe oublié</span>
      <form action="#">
        <div class="input-field">
          <v-text-field
              prepend-icon="mdi-account"
              type="text"
              :rules="rules.username"
              placeholder="Téléphone ou mail"
              v-model="username"/>
        </div>
        <div class="input-field button">
          <v-btn class="button-confirm" large color="#4070f4">Soumettre</v-btn>
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
    return {
      username: null,
      rules: {
        username: [v => !!v || "Le nom d'utilisateur est obligatoire."]
      }
    }
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

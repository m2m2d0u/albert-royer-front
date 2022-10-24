<!-- Signin Template -->
<template>
  <v-container>
    <div class="form login">
      <span class="title">Page de connexion</span>
      <v-form
          ref="form"
          lazy-validation>
        <div class="input-field">
          <v-text-field
              prepend-icon="mdi-account"
              type="text"
              :rules="rules.username"
              placeholder="Téléphone ou mail"
              v-model="name"></v-text-field>
        </div>
        <div class="input-field">
          <v-text-field
              prepend-icon="mdi-key-variant"
              type="password"
              :rules="rules.password"
              placeholder="Mot de passe"
              v-model="password"></v-text-field>
        </div>

        <div class="checkbox-text">
          <a href="#" class="text" @click.prevent="forgetPassword">Mot de passe oublié?</a>
        </div>

        <div class="input-field button">
          <v-btn class="button-confirm" large color="#4070f4" @click.prevent="login">Se connecter</v-btn>
        </div>
      </v-form>
      <div class="login-signup">
            <span class="text">Vous n'êtes pas membre?
                <a href="#" class="text signup-link" @click.prevent="toRegister">Créer un compte</a>
            </span>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: null,
      password: null,
      rules: {
        username: [v => !!v || "Le nom d'utilisateur est obligatoire."],
        password: [v => !!v || "Le mot de passe est obligatoire."]
      }
    }
  },
  methods: {
    toRegister() {
      this.$emit('changeLevel', 'register')
    },
    forgetPassword() {
      this.$emit('changeLevel', 'forgetPassword')
    },
    login() {
      if (this.$refs.form.validate()) {
        console.log("Info")
      }
    }
  }

}
</script>


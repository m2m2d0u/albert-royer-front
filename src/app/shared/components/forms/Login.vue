<!-- Signin Template -->
<template>
  <v-container>
    <div class="form login">
      <span class="title">Sign In</span>
      <v-form
          ref="form"
          lazy-validation>
        <div class="input-field">
          <v-text-field
              prepend-icon="mdi-account"
              type="text"
              :rules="rules.username"
              placeholder="Phone number or email"
              v-model="username"></v-text-field>
        </div>
        <div class="input-field">
          <v-text-field
              prepend-icon="mdi-key-variant"
              type="password"
              :rules="rules.password"
              placeholder="Password"
              v-model="password"></v-text-field>
        </div>

        <div class="checkbox-text">
          <a href="#" class="text" @click.prevent="forgetPassword">Forgot your password?</a>
        </div>

        <div class="input-field button">
          <v-btn class="button-confirm" large color="#4070f4" @click.prevent="login">Sign in</v-btn>
        </div>
      </v-form>
      <div class="login-signup">
            <span class="text">You are not a member?
                <a href="#" class="text signup-link" @click.prevent="toRegister">Create an account</a>
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
        this.$store.dispatch('auth/login', {
          username: this.username,
          password: this.password,
        }).then(async () => {
          await this.$store.dispatch('utilities/setLoading', true)
          await new Promise(resolve => setTimeout(resolve, 1000));
          await this.$store.dispatch('utilities/setLoading', false)
          this.$notifyInfo("Vous êtes maintenant connecté");
          await this.$router.push('/')
        }).catch(error => {
          if (error instanceof Array) {
            error.map(v => {
              this.$notifyError(v);
            })
          } else {
            this.$notifyError(error);
          }
        })
      }
    }
  }

}
</script>


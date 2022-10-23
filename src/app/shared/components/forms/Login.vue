<!-- Signin Template -->
<template>
  <v-container>
    <div class="form login">
      <span class="title">Page de connexion</span>
      <form action="#">
        <div class="input-field">
          <input type="text" placeholder="Donner votre email" required>
          <i class="uil uil-envelope icon"/>
        </div>
        <div class="input-field">
          <input type="password" class="password" placeholder="Mot de passe" required>
          <i class="uil uil-lock icon"/>
          <i class="uil uil-eye-slash showHidePw"/>
        </div>

        <div class="checkbox-text">
          <a href="#" class="text" @click.prevent="forgetPassword">Mot de passe oublié?</a>
        </div>

        <div class="input-field button">
          <input type="button" value="Se connecter">
        </div>
      </form>
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
  methods: {
    toRegister(){
      this.$emit('changeLevel', 'register')
    },
    forgetPassword(){
      this.$emit('changeLevel', 'forgetPassword')
    }
  }

}
</script>


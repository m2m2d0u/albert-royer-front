<template>
  <v-container>
    <div class="form signup">
      <span class="title">Création de compte</span>
      <form action="#">
        <div class="input-field">
          <input type="text" placeholder="Entrer votre nom complet" required>
          <i class="uil uil-user icon"/>
        </div>
        <div class="input-field">
          <input type="text" placeholder="Entrer votre numéro de téléphone" required>
          <i class="uil uil-phone icon"/>
        </div>
        <div class="input-field">
          <input type="text" placeholder="Entrer votre email" required>
          <i class="uil uil-envelope icon"/>
        </div>
        <div class="input-field">
          <input type="password" class="password" placeholder="Mot de passe" required>
          <i class="uil uil-lock icon"/>
        </div>
        <div class="input-field">
          <input type="password" class="password" placeholder="Confirmer votre mot de passe" required>
          <i class="uil uil-lock icon"/>
          <i class="uil uil-eye-slash showHidePw"/>
        </div>
        <div class="input-field button">
          <input type="button" value="Creer le compte">
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
  name: "Register",
  methods:{
    toLogin(){
      this.$emit('changeLevel', 'login');
    }
  }
}
</script>
<style scoped lang="css"></style>



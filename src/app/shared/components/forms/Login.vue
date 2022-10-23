<!-- Signin Template -->
<template id="signinTemplate">
  <form ref='form' @submit.prevent='handleForm' action="" class='signin-form'>
    <h2>Signin</h2>
    <div class="form-group">
      <label for="email">Adresse électronique</label>
      <input required v-model='user.email' type="email" id='email' placeholder="Adresse électronique">
    </div>
    <div class="form-group">
      <label for="password">Mot de passe</label>
      <input required v-model='user.password' type="password" id='password' placeholder="Mot de passe">
    </div>
    <input :disabled='!isFormValid' type="submit" value="Signin">
  </form>
</template>

<script>
export default {
  name: "Login",
  props: {
    loginProps: Object
  },
  watch: {
    loginProps: {
      immediate: true,
      deep: true,
      handler(val) {
        this.login = val
      }
    },
    login: {
      immediate: true,
      deep: true,
      handler(val) {
        this.$emit('handleChange', val)
      }
    }
  },
  data() {
    return {
      login: {
        email: '',
        password: ''
      }
    }
  },
}
</script>

<style scoped>

</style>

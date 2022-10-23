<!-- Register Template -->
<template>
  <form @submit.prevent='onSubmit' ref='form' action="" class='register-form'>
    <h2>Register</h2>
    <div class="form-group">
      <label for="firstname">Prénom</label>
      <input required type="text" v-model.trim='user.firstname' id='firstname' placeholder="Prénom">
    </div>
    <div class="form-group">
      <label for="lastname">Nom</label>
      <input required type="text" v-model.trim='user.lastname' id='lastname' placeholder="Nom">
    </div>
    <div class="form-group">
      <label for="email">Adresse électronique</label>
      <input required type="email" v-model.trim='user.email' id='email' placeholder="Adresse électronique">
    </div>
    <div class="form-group">
      <label for="password">Mot de passe</label>
      <input required type="password" v-model='user.password' placeholder="Mot de passe" id='password'>
    </div>
    <div class="form-group">
      <label for="passwordcheck">Vérification du mot de passe</label>
      <input required type="password" v-model='user.passwordChck' placeholder="Vérification du mot de passe"
             id='passwordcheck'>
    </div>
    <input type="submit" :disabled='!isFormValid' value='Register'>
  </form>
</template>

<script>
const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

export default {
  name: "Register",

  data() {
    return {
      user: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        passwordChck: ''
      }
    }
  },
  computed: {
    isFormValid() {
      return (
          this.isValid('firstname') &&
          this.isValid('lastname') &&
          this.isValid('email') &&
          this.isValid('password') &&
          this.isValid('passwordChck')
      )
    }
  },
  methods: {
    isValid(prop) {
      switch (prop) {
        case 'firstname':
          return this.user.firstname.length >= 2
        case 'lastname':
          return this.user.lastname.length >= 2
        case 'email':
          return emailRegex.test(this.user.email)
        case 'password':
          return this.user.password.length >= 6
        case "passwordChck":
          return this.user.password === this.user.passwordChck
        default:
          return false
      }
    },
    resetUser() {
      this.user.firstname = ''
      this.user.lastname = ''
      this.user.email = ''
      this.user.password = ''
      this.user.passwordChck = ''
    },
    onSubmit() {
      let user = Object.assign({}, this.user)
      this.resetUser()
      this.$emit('register-form', {type: 'register', data: user})
    }
  },
  mounted() {
    let element = this.$el.querySelector('#passwordcheck')
    element.addEventListener('blur', () => {
      if (!this.isValid('passwordChck')) {
        element.classList.add('invalid')
      } else {
        element.classList.remove('invalid')
      }
    })
  }
}
</script>



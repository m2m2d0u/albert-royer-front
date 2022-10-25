<template>
  <v-container>
    <div class="form signup">
      <span class="title">Création de compte</span>
      <v-form
          ref="form"
          lazy-validation>
        <div class="input-field">
          <v-text-field
              prepend-icon="mdi-account"
              type="text"
              :rules="rules.name"
              placeholder="Entrer votre nom complet"
              v-model="name"></v-text-field>
        </div>
        <div class="input-field">
          <v-text-field
              prepend-icon="mdi-phone"
              type="text"
              :rules="rules.phone"
              placeholder="Entrer votre numéro de téléphone"
              v-model="phone"></v-text-field>
        </div>
        <div class="input-field">
          <v-text-field
              prepend-icon="mdi-email"
              type="text"
              :rules="rules.email"
              placeholder="Entrer votre email"
              v-model="email"></v-text-field>
        </div>
        <div class="input-field">
          <v-text-field
              prepend-icon="mdi-key-variant"
              type="password"
              :rules="rules.password"
              placeholder="Mot de passe"
              v-model="password"></v-text-field>
        </div>
        <div class="input-field">
          <v-text-field
              prepend-icon="mdi-key-variant"
              :rules="rules.confirmPassword"
              type="password"
              placeholder="Confirmer votre mot de passe"
              v-model="confirmPassword"></v-text-field>
        </div>
        <div class="input-field mt-12">
          <v-select
              v-model="subTestId"
              prepend-icon="mdi-test-tube"
              :items="tests"
              :rules="rules.subTestId"
              label="Choisir un test"
              item-text="name"
              item-value="id"
              dense
          ></v-select>
        </div>
        <div class="input-field button">
          <v-btn class="button-confirm" large color="#4070f4" @click="createAccount">Créer un compte</v-btn>
        </div>
      </v-form>
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
  data() {
    return {
      name: null,
      email: null,
      phone: null,
      password: null,
      subTestId: null,
      role: 'Basic',
      confirmPassword: null,
      rules: {
        name: [v => !!v || 'Le nom est obligatoire.'],
        email: [
          v => !!v || "L'email est obligatoire.",
          v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "L'email n'est pas valide."
        ],
        phone: [v => !!v || 'Le numéro de téléphone est obligatoire.'],
        password: [
          (v) => !!v || 'Le mot de passe est obligatoire.',
          (v) => (v && v.length >= 6) || 'Minimum 6 charactères',
        ],
        confirmPassword: [
          (v) => !!v || 'La confirmation du mot de passe est obligatoire',
          (v) => v === this.password || 'Les mots de passes ne correspondent pas.',
        ],
        subTestId: [v => !!v || "Le choix d'un test est obligatoire."],
      }
    }
  },
  computed: {
    tests() {
      return this.$store.state.quiz.tests;
    }
  },
  methods: {
    toLogin() {
      this.$emit('changeLevel', 'login');
    },
    async createAccount() {

      if (this.$refs.form.validate()) {
        const phoneWithCallingCode = this.phone[0] === '+' ? this.phone : '+221' + this.phone;
        console.log(phoneWithCallingCode)
        this.$store.dispatch('auth/createUser', {
          name: this.name,
          email: this.email,
          phone: phoneWithCallingCode,
          password: this.password,
          subTestId: this.subTestId,
          role: this.role,
        }).then(async () => {
          await this.$store.dispatch('utilities/setLoading', true)
          await new Promise(resolve => setTimeout(resolve, 1000));
          await this.$store.dispatch('utilities/setLoading', false)
          this.$notifyInfo("L'utilisateur a été bien crée");
          this.$emit('changeLevel', 'login');
        }).catch((error) => {
          this.$notifyError(error);
        })
      }
    }
  }
}
</script>
<style scoped lang="css"></style>



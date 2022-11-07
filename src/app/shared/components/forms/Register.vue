<template>
  <v-container>
    <div class="form signup">
      <span class="title">Create account</span>
      <v-form
          ref="form"
          lazy-validation>
        <div class="input-field">
          <v-text-field
              prepend-icon="mdi-account"
              type="text"
              :rules="rules.name"
              placeholder="Firstname and Lastname"
              v-model="name"></v-text-field>
        </div>
        <div class="input-field">
          <v-text-field
              prepend-icon="mdi-phone"
              type="text"
              :rules="rules.phone"
              placeholder="Phone number"
              v-model="phone"></v-text-field>
        </div>
        <div class="input-field">
          <v-text-field
              prepend-icon="mdi-email"
              type="text"
              :rules="rules.email"
              placeholder="Email"
              v-model="email"></v-text-field>
        </div>
        <div class="input-field">
          <v-text-field
              prepend-icon="mdi-key-variant"
              type="password"
              :rules="rules.password"
              placeholder="Password"
              v-model="password"></v-text-field>
        </div>
        <div class="input-field">
          <v-text-field
              prepend-icon="mdi-key-variant"
              :rules="rules.confirmPassword"
              type="password"
              placeholder="Confirm your password"
              v-model="confirmPassword"></v-text-field>
        </div>
        <div class="input-field mt-12">
          <v-select
              v-model="subTestId"
              prepend-icon="mdi-test-tube"
              :items="tests"
              :rules="rules.subTestId"
              label="Choice a test"
              item-text="name"
              item-value="id"
              dense
          ></v-select>
        </div>
        <div class="input-field button">
          <v-btn class="button-confirm" large color="#4070f4" @click="createAccount" :disabled="isClicked">Sign up</v-btn>
        </div>
      </v-form>
      <div class="login-signup">
          <span class="text">You have an account?
              <a href="#" class="text login-link" @click.prevent="toLogin">Sign in</a>
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
      isClicked: false,
      confirmPassword: null,
      rules: {
        name: [v => !!v || 'The name id required.'],
        email: [
          v => !!v || "The email is required.",
          v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "The email is not valid."
        ],
        phone: [v => !!v || 'The phone number is required.',
          v => Number.isInteger(Number(v)) || 'The number must be a number'
        ],
        password: [
          (v) => !!v || 'The password is required.',
          (v) => (v && v.length >= 6) || 'Minimum 6 characters',
        ],
        confirmPassword: [
          (v) => !!v || 'The password confirm is required',
          (v) => v === this.password || 'Passwords does not match.',
        ],
        subTestId: [v => !!v || "The test is required."],
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
        this.isClicked = true;
        this.$store.dispatch('auth/createUser', {
          name: this.name,
          email: this.email,
          phone: this.phone,
          password: this.password,
          subTestId: this.subTestId,
          role: this.role,
        }).then(async () => {
          this.isClicked = false;
          await this.$store.dispatch('utilities/setLoading', true)
          await new Promise(resolve => setTimeout(resolve, 1000));
          await this.$store.dispatch('utilities/setLoading', false)
          this.$notifyInfo("The user is successfully create and a mail is sent to your email.");
          this.$emit('changeLevel', 'login');
        }).catch((error) => {
          this.isClicked = false;
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
<style scoped lang="css"></style>



<template>
  <div>
    <md-dialog :md-active="dialog" v-click-outside="clickOutsideOfDialog">
      <div class="registration-form">
        <form>
          <div class="form-icon">
            <span><i class="fa fa-user"></i></span>
          </div>
          <div class="form-group">
            <input type="text" class="form-control item" id="username" placeholder="Nom d'utilisateur">
          </div>
          <div class="form-group">
            <input type="password" class="form-control item" id="password" placeholder="Mot de passe">
          </div>
          <div v-if="register">
            <div class="form-group">
              <input type="text" class="form-control item" id="birth-date" placeholder="Confirmer mot de passe">
            </div>
            <div class="form-group">
              <input type="text" class="form-control item" id="email" placeholder="Email">
            </div>
            <div class="form-group">
              <input type="text" class="form-control item" id="phone-number" placeholder="Numéro de téléphone">
            </div>
          </div>
          <div class="form-group bottom-form">
            <button type="button" class="btn btn-block create-account">
              {{ register ? "Soumettre" : "Se connecter" }}
            </button>
            <div class="mt-4">
              <button class="tab-1" type="button" @click="register = !register">
                {{ register ? "Vous avez déjà de compte?" : "Créez un compte" }}
              </button>
            </div>
          </div>
        </form>
      </div>
    </md-dialog>
  </div>
</template>
<script>
export default {
  name: "ConnexionPage",
  props: ['dialog'],
  data() {
    return {
      register: false
    }
  },
  methods: {
    handleDialog(value) {
      this.$emit("handleDialog", value)
      return value;
    },
    // Close the dialog when user click to outside the dialog
    clickOutsideOfDialog(event) {
      if (event.explicitOriginalTarget.className === "md-overlay md-fixed md-dialog-overlay") {
        this.handleDialog(false)
      }
    }
  }
}
</script>

<style scoped>

.registration-form {
  padding: 0 0;
  width: 500px;
}

.registration-form form {
  background-color: #FFFFFF;
  margin: auto;
  padding: 50px 70px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.075);
}


.registration-form .form-icon {
  text-align: center;
  background-color: #1E1450;
  border-radius: 50%;
  font-size: 40px;
  color: white;
  width: 100px;
  height: 100px;
  margin: auto auto 50px;
  line-height: 100px;
}

.registration-form .item {
  border-radius: 20px;
  margin-bottom: 25px;
  padding: 10px 20px;
}

.registration-form .create-account {
  border-radius: 30px;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  background-color: #1E1450;
  border: none;
  color: white;
  margin-top: 20px;
}

.registration-form {
  max-width: 600px;
  background-color: #fff;
  margin: auto;
  padding: 35px 0;
  text-align: center;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  color: #9fadca;
  border-top: 1px solid #dee9ff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.075);
  overflow: auto;
}

.registration-form .social-icons {
  margin-top: 30px;
  margin-bottom: 16px;
}

.registration-form .social-icons a {
  font-size: 23px;
  margin: 0 3px;
  color: #1E1450;
  border: 1px solid;
  border-radius: 50%;
  width: 45px;
  display: inline-block;
  height: 45px;
  text-align: center;
  background-color: #fff;
  line-height: 45px;
}

.registration-form .social-icons a:hover {
  text-decoration: none;
  opacity: 0.6;
}

.bottom-form {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

@media (max-width: 576px) {
  .registration-form form {
    padding: 50px 20px;
  }

  .registration-form .form-icon {
    width: 70px;
    height: 70px;
    font-size: 30px;
    line-height: 70px;
  }
}

</style>
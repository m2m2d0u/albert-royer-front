<template>
  <v-container>
    <div class="container mt-5 mb-5">
      <div class="row g-0 my-card">
        <div class="col-md-6 mt-3">
          <div class="card card1 p-3">
            <div class="d-flex flex-column">
              <!--              <img src="https://i.imgur.com/kFFNY1q.png" height="50" width="50"/>-->
              <span class="login mt-3 text-h4 text-md-h4 text-xs-body-1 fw-bold">Page de connexion</span>
            </div>
            <div class="input-field d-flex flex-column">
              <span>Email:</span>
              <input class="form-control" placeholder="Email">
              <span class="mt-3">Mot de passe:</span>
              <input class="form-control" placeholder="Mot de passe">
              <button class="mt-4 btn btn-dark d-flex justify-content-center align-items-center">
                Se connecter
              </button>
              <!--              <div class="mt-3 text1">-->
              <!--                <span class="mt-3 forget">Forget Password?</span>-->
              <!--              </div>-->
              <!--              <div class="text2 mt-4 d-flex flex-row align-items-center">-->
              <!--                <span>Don't have an account?-->
              <!--                  <span class="register">Register here</span>-->
              <!--                </span>-->
              <!--              </div>-->
            </div>
          </div>
        </div>
        <div class="col-md-6 mt-3">
          <div class="card card2">
            <img
                class="image"
                src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80">
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>
<script>
export default {
  name: "ConnexionPage",
  data() {
    return {
      register: false
    }
  },
  methods: {}
}
</script>

<style lang="css" scoped>

.card1 {
  height: 100%;
  width: 100%;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
}

.card2 {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
  transition: all 0.5s;
  display: flex;
  justify-content: center;
}

.card2:hover {
  transform: scale(1.1)
}

.input-field span {
  font-size: 22px;
  color: black;
  margin-top: 20px;
  display: flex;
  align-content: flex-start;
}

.form-control {
  font-size: 18px;
  color: black;
  height: 50px;
  font-weight: 500;
  padding-left: 10px;
  border: 1px solid black;
  margin: 20px 0;
}

.btn {
  height: 55px;
  width: 100%;
  background-color: #000;
  font-weight: 500;
  color: white;
  border: none;
  font-size: 15px
}

@media only screen and (max-width: 768px) {
  .card2 {
    margin-left: 40px;
    margin-top: 40px;
  }
}
@media only screen and (max-width: 7575px) {
  .card2 {
    margin-left: 0;
    margin-top: 40px;

  }
}

/*.image img{*/
/*  height: 75vh;*/
/*}*/
</style>

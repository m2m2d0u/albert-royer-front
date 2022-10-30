<template>
  <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn" data-wow-delay="0.1s">
    <v-container>
      <router-link to="/" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
        <img :src="require('@/assets/svg/logo.svg')" alt="" width="150"/>
      </router-link>
      <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
    </v-container>
    <v-container>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto p-4 p-lg-0 px-3" style="min-width: 650px">
          <router-link to="/" class="nav-item nav-link" exact-active-class="active">Acceuil</router-link>
          <router-link to="/about" class="nav-item nav-link" exact-active-class="active">A propos</router-link>
          <router-link to="/services" class="nav-item nav-link" active-class="active">Services</router-link>
          <router-link v-if="info?.role === 'Admin'" to="/admin" class="nav-item nav-link" active-class="active">Administration</router-link>
          <router-link to="/connexion" class="nav-item nav-link" active-class="active" v-if="!loggedIn">
            Connexion
          </router-link>
          <router-link to="#" @click.native="logout" class="nav-item nav-link" active-class="active" v-else>
            Déconnexion
          </router-link>
        </div>
      </div>
    </v-container>
  </nav>
</template>
<script>

export default {
  name: 'NavbarIndex',
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    },
    info(){
      return this.$store.state.auth.info
    }
  },
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch('utilities/setLoading', true)
      await new Promise(resolve => setTimeout(resolve, 800));
      await this.$store.dispatch('utilities/setLoading', false)
      await this.$store.dispatch('auth/logout')
      this.$notifyInfo("Vous êtes maintenant déconnecté");
    }
  }
}
</script>

<style scoped lang="css">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
</style>

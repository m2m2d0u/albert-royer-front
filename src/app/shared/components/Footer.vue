<template>
  <v-container fluid class="bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s"
               v-if="!this.$store.state.quiz.isLoading">
    <v-container class="container py-5">
      <v-container class="row g-5">
        <v-container class="col-lg-4 col-md-6">
          <h5 class="text-light mb-4">Address</h5>
          <p class="mb-2"><em class="fa fa-map-marker-alt me-3"></em>18 Boulevard de la Republique Dakar</p>
          <p class="mb-2"><em class="fa fa-phone-alt me-3"></em>33 889 08 21</p>
          <p class="mb-2"><em class="fa fa-envelope me-3"></em>dakar@dpworld.com</p>
          <v-container class="d-flex pt-2">
            <a class="btn btn-outline-light btn-social rounded-circle" href="https://twitter.com/DP_World"><em class="fab fa-twitter"></em></a>
            <a class="btn btn-outline-light btn-social rounded-circle" href="https://facebook.com/DPWorld"><em class="fab fa-facebook-f"></em></a>
            <a class="btn btn-outline-light btn-social rounded-circle" href="https://www.youtube.com/user/DPWorldinfo"><em class="fab fa-youtube"></em></a>
            <a class="btn btn-outline-light btn-social rounded-circle" href="https://www.linkedin.com/company/dp-world/"><em class="fab fa-linkedin-in"></em></a>
          </v-container>
        </v-container>
        <v-container class="col-lg-4 col-md-6">
          <h5 class="text-light mb-4">Services</h5>
          <router-link to="/services" class="btn btn-link">Professionals and managers</router-link>
          <router-link to="/services" class="btn btn-link">Contributors and frontline</router-link>
          <router-link to="/services" class="btn btn-link">SMES and Senior managers</router-link>
          <router-link to="/services" class="btn btn-link">Executives</router-link>
        </v-container>
        <v-container class="col-lg-4 col-md-6">
          <h5 class="text-light mb-4">Quick Links</h5>
          <router-link to="/" class="btn btn-link" href="">Home</router-link>
          <router-link to="/contact" class="btn btn-link" href="">Contact Us</router-link>
          <router-link to="/services" class="btn btn-link" href="">Services</router-link>
          <router-link to="/pages/connexion" class="btn btn-link" href="">Login & Register</router-link>
        </v-container>
      </v-container>
    </v-container>
    <v-container class="container">
      <v-container class="copyright">
        <v-container class="row">
          <v-container class="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <a class="border-bottom" href="#">Your Site Name</a>, All rights reserved
          </v-container>
          <v-container class="col-md-6 text-center text-md-end">
            Distributed By <a href="mailto: m.abassdiallo@gmail.com">Me</a>
          </v-container>
        </v-container>
      </v-container>
    </v-container>
  </v-container>
</template>
<script>
export default {
  name: 'FooterIndex'
}
</script>

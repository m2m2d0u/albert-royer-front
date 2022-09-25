<template>
  <v-container class="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
    <v-container class="container py-5">
      <v-container class="row g-5">
        <v-container class="col-lg-4 col-md-6">
          <h5 class="text-light mb-4">Address</h5>
          <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
          <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
          <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
          <v-container class="d-flex pt-2">
            <a class="btn btn-outline-light btn-social rounded-circle" href=""><i class="fab fa-twitter"></i></a>
            <a class="btn btn-outline-light btn-social rounded-circle" href=""><i class="fab fa-facebook-f"></i></a>
            <a class="btn btn-outline-light btn-social rounded-circle" href=""><i class="fab fa-youtube"></i></a>
            <a class="btn btn-outline-light btn-social rounded-circle" href=""><i class="fab fa-linkedin-in"></i></a>
          </v-container>
        </v-container>
        <v-container class="col-lg-4 col-md-6">
          <h5 class="text-light mb-4">Services</h5>
          <a class="btn btn-link" href="">Cardiology</a>
          <a class="btn btn-link" href="">Pulmonary</a>
          <a class="btn btn-link" href="">Neurology</a>
          <a class="btn btn-link" href="">Orthopedics</a>
          <a class="btn btn-link" href="">Laboratory</a>
        </v-container>
        <v-container class="col-lg-4 col-md-6">
          <h5 class="text-light mb-4">Quick Links</h5>
          <a class="btn btn-link" href="">About Us</a>
          <a class="btn btn-link" href="">Contact Us</a>
          <a class="btn btn-link" href="">Our Services</a>
          <a class="btn btn-link" href="">Terms & Condition</a>
          <a class="btn btn-link" href="">Support</a>
        </v-container>
      </v-container>
    </v-container>
    <v-container class="container">
      <v-container class="copyright">
        <v-container class="row">
          <v-container class="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <a class="border-bottom" href="#">Your Site Name</a>, Tous droits réservés
          </v-container>
          <v-container class="col-md-6 text-center text-md-end">
            <!--/*** This template is free as long as you keep the footer-index author’s credit link/attribution link/backlink. If you'd like to use the template without the footer-index author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
            Designed By <a class="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
            <br/>
            Distributed By <a class="border-bottom" href="https://themewagon.com" target="_blank">ThemeWagon</a>
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
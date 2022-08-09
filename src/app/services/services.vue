<template>
  <v-container>
    <!-- Page Header Start -->
    <v-container class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
      <v-container class="container py-5">
        <h1 class="display-3 text-white mb-3 animated slideInDown">Services</h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol class="breadcrumb text-uppercase mb-0">
            <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
            <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
            <li class="breadcrumb-item text-primary active" aria-current="page">Services</li>
          </ol>
        </nav>
      </v-container>
    </v-container>
    <!-- Page Header End -->
    <!-- Service Start -->
    <v-container class="container-xxl py-5">
      <v-container class="container">
        <v-container class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
          <p class="d-inline-block border rounded-pill py-1 px-4">Services</p>
          <h1>Health Care Solutions</h1>
        </v-container>
        <v-container class="row g-4">
          <quiz-service name="Sous-test 1"
                        link="subtest1"
                        router="Quiz1"
                        icon="fa fa-brain"
                        description="Les contributeurs et la ligne de front"/>
          <quiz-service name="Sous-test 2"
                        link="subtest2"
                        router="Quiz2"
                        icon="fa fa-heartbeat"
                        description="Professionnels et managers"/>
          <quiz-service name="Sous-test 3"
                        link="subtest3"
                        icon="fa fa-wheelchair"
                        router="Quiz3"
                        description="PME et Cadres supérieurs"/>
          <quiz-service name="Sous-test 4"
                        link="subtest4"
                        router="Quiz4"
                        icon="fa fa-tooth"
                        description="Les executifs"/>
        </v-container>
      </v-container>
    </v-container>
    <!-- Service End -->
  </v-container>
</template>

<script>
import QuizService from "@/app/services/components/QuizService";

export default {
  name: "ServicePage",
  components: {
    QuizService
  }
}
</script>

<style scoped>

</style>
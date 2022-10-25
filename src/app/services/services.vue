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
        <v-container class="">
          <v-row>
            <v-col v-for="(test, index) in tests" :key="index" :lg="6" :md="12" :sm="12" :xs="12">
              <quiz-service name="Sous-test 1"
                            :link="test.id"
                            router="Quiz"
                            icon="fa fa-brain"
                            :description="test.name"/>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-container>
    <!-- Service End -->
  </v-container>
</template>

<script>
import QuizService from "@/app/services/components/QuizService";
import {mapState} from "vuex";

export default {
  name: "ServicePage",
  components: {
    QuizService
  },
  computed: {
    ...mapState({
      tests: state => state.quiz.tests,
    })
  }
}
</script>

<style scoped>

</style>

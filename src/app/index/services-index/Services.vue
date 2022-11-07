<template>
  <div class="container-xxl py-5">
    <div class="container">
      <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
        <p class="d-inline-block border rounded-pill py-1 px-4">Services</p>
        <h1>Our Tests</h1>
      </div>
      <div class="row g-4">
        <v-container class="">
          <v-row>
            <v-col v-for="(test, index) in tests" :key="index" :lg="6" :md="12" :sm="12" :xs="12">
              <quiz-service :name="'Subtest '+(index+1)"
                            :link="test.id"
                            router="Quiz"
                            icon="fa fa-brain"
                            :description="test.name"/>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>
<script>
import QuizService from "@/app/services/components/QuizService";

export default {
  name: 'Services',
  components: {
    QuizService
  },
  computed: {
    tests() {
      return this.$store.state.quiz.tests;
    }
  }
}
</script>

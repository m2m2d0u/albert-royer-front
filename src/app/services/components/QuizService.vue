<template>
  <v-container class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
    <v-container class="service-item bg-light rounded h-100 p-5">
      <v-container class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                   style="width: 65px; height: 65px;">
        <i class="text-primary fs-4" :class="icon"></i>
      </v-container>
      <h4 class="mb-3">{{ name }}</h4>
      <p class="mb-4">{{ description }}</p>
      <a class="btn">
        <i class="fa fa-plus text-primary me-3"></i>
        <router-link :to="{name:'Quiz', params:{id:name}}">Lire plus</router-link>
      </a>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "QuizService",
  props: {
    name: String,
    icon: String,
    link: String,
    description: String
  }
}
</script>

<style scoped>

</style>
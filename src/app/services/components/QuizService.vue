<template>
  <v-container class="wow fadeInUp" data-wow-delay="0.5s">
    <v-container class="service-item bg-light rounded h-100 p-5">
      <v-container class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                   style="width: 65px; height: 65px;">
        <em class="text-primary fs-4" :class="icon"/>
      </v-container>
      <h4 class="mb-3">{{ name }}</h4>
      <p class="mb-4">{{ description }}</p>
      <router-link @click.native="scrollToTop"
                   tag="button"
                   :disabled="link!==info?.test"
                   :to="{name:router, params:{id:link}}"
                   class="btn">
        <v-icon color="green darken-2" v-if="link === info?.test">mdi-plus</v-icon>
        <v-icon color="red darken-2" v-else>mdi-clock-time-six-outline</v-icon>
        <span v-if="link === info?.test">Faire le test</span>
        <span v-else>Innéligible</span>
      </router-link>
    </v-container>
  </v-container>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "QuizService",
  props: {
    name: String,
    icon: String,
    link: String,
    router: String,
    description: String
  },
  computed: {
    ...mapState({
      info: state => state.auth.info,
    })
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }

}
</script>

<style scoped>

</style>

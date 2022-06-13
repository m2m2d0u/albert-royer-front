<template>
  <div class="container-fluid header bg-primary p-0 mb-5">
    <div class="row g-0 align-items-center flex-column-reverse flex-lg-row">
      <div class="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
        <h1 class="display-4 text-white mb-5">Good Health Is The Root Of All Happiness</h1>
        <div class="row g-4">
          <div class="col-sm-4">
            <div class="border-start border-light ps-4">
              <h2 class="text-white mb-1" data-toggle="counter-up">123</h2>
              <p class="text-light mb-0">Expert Doctors</p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="border-start border-light ps-4">
              <h2 class="text-white mb-1" data-toggle="counter-up">1234</h2>
              <p class="text-light mb-0">Medical Stuff</p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="border-start border-light ps-4">
              <h2 class="text-white mb-1" data-toggle="counter-up">12345</h2>
              <p class="text-light mb-0">Total Patients</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
        <v-carousel
            cycle
            height="90vh"
            show-arrows-on-hover
            delimiter-icon="mdi-minus">
          <template v-slot:prev="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on">
              <v-icon>mdi-skip-previous</v-icon>
            </v-btn>
          </template>
          <template v-slot:next="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on">
              <v-icon>mdi-skip-next</v-icon>
            </v-btn>
          </template>
          <v-carousel-item
              v-for="(item, i) in items"
              :src="item"
              :key="i">
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderIndex',
  data() {
    return {
      items: [
        {
          src: require('@/assets/img/carousel-1.jpg'),
        },
        {
          src: require('@/assets/img/carousel-2.jpg'),
        },
        {
          src: require('@/assets/img/carousel-3.jpg'),
        },
      ],
    }
  }
}
</script>
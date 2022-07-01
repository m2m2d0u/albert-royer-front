<template>
  <v-container class="mt-10">
    <div class="text-center mb-10">
      <h1>Premier test</h1>
    </div>
    <ul>
      <li>
        <v-row class="mb-6" no-gutters>
          <h2>Question 1</h2>
        </v-row>
        <v-row>
          <v-col v-for="n in 1" :key="n">
            <div>
              {{ quiz.title }}
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="n in quiz.response.length" :key="n" cols="3" md="3" sm="6">
            <v-card
                class="pa-2 text-center d-flex justify-center align-center text-xl-h6 text-sm-caption font-weight-regular"
                height="80">
              <button class="flex" style="height: 100%"
                      @click="quiz.response['n-1'].value = ! quiz.response['n-1'].value">
                {{ quiz.response[n - 1].title }}
              </button>
            </v-card>
          </v-col>
        </v-row>
      </li>
      <li class="mt-10">
        <v-row class="mb-6" no-gutters>
          <h2>Question 2</h2>
        </v-row>
        <v-row>
          <v-col v-for="n in 1" :key="n">
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </div>
            <div class="image-content">
              <gallery :images="images" :index="index" @close="index = null"></gallery>
              <div
                  class="image"
                  v-for="(image, imageIndex) in images"
                  :key="imageIndex"
                  @click="index = imageIndex"
                  :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }">
                <div class="text-image">
                  Abass
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="n in 4" :key="n" cols="3" xs="6">
            <v-card
                class="pa-2 text-center d-flex justify-center align-center text-xl-h6 text-sm-caption font-weight-regular"
                height="80">
              Choisir cette reponse
            </v-card>
          </v-col>
        </v-row>
      </li>
    </ul>
  </v-container>
</template>

<script>
import VueGallery from 'vue-gallery';

export default {
  name: "index",
  components: {
    'gallery': VueGallery
  }, data: function () {
    return {
      images: [
        require('@/assets/img/carousel-1.jpg'),
        require('@/assets/img/carousel-2.jpg'),
        require('@/assets/img/carousel-3.jpg'),
        require('@/assets/img/carousel-3.jpg'),
      ],
      index: null,
      quiz: {
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." +
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." +
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." +
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        response: [
          {title: "A", value: true},
          {title: "B", value: true},
          {title: "C", value: true},
          {title: "D", value: true}]
      }
    };
  },
}
</script>

<style scoped>

ul {
  list-style-type: none;
}

.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}

.text-image {
  display: block;
  top: 50%;
  left: 50%;
  margin: 0 auto;
  transform: translate(35%, 200%);
  font-family: sans-serif;
  color: black;
  font-size: 26px;
}

.image-content {
  display: flex;
  justify-content: space-between;
}
</style>
<template>
  <div>
    <ul>
      <li v-for="(quiz, indexQuiz) in data" :key="indexQuiz" class="mt-10">
        <v-row class="mb-6 text-md-h5 text-xl-h5 text-sm-caption" no-gutters>
          <h2>Question {{ indexQuiz + 1 }}</h2>
        </v-row>
        <v-row>
          <v-col v-for="n in 1" :key="n">
            <div class="text-md-h6 text-xl-h6 text-sm-caption">
              {{ quiz.text }}
            </div>
            <div class="image-content" v-show="quiz.images">
              <img
                  v-img
                  :src="quiz.images"
                  class="image"
                  :style="{ backgroundImage: 'url(' + quiz.images + ')', width: '700px', height: '40vh' }"/>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="n in data[0].response.length" :key="n" cols="3" md="3" sm="6">
            <v-card
                class="pa-2 text-center d-flex justify-center align-center text-xl-h6 text-sm-caption font-weight-regular"
                height="80">
              <button class="flex" style="height: 100%;"
                      :style="quiz.response[n-1].value? {'background-color': '#78deaf'}:''"
                      @click="chooseResponse(n, indexQuiz)">
                {{ quiz.response[n - 1].title }}
              </button>
            </v-card>
          </v-col>
        </v-row>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "QuizSelectResponseForImage",
  props: {
    data: Array,
  },
  methods: {
    chooseResponse(n, index) {
      const originalIndex = n - 1;
      if (this.data[index].type === 'one') {
        this.data[index].response.forEach((quiz) => quiz.value = false)
        this.data[index].response[originalIndex].value = true;
      }
      if (this.data[index].type === 'multiple') {
        this.data[index].response[originalIndex].value = !this.data[index].response[originalIndex].value;
      }
    },
  }
}
</script>

<style scoped>

.image-content {
  display: flex;
  justify-content: center;
}

.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}

ul {
  list-style-type: none;
}

</style>
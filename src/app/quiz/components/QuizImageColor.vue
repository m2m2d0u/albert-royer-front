<template>
  <v-container>
    <ul>
      <li v-for="(quiz, indexQuiz) in data" :key="indexQuiz" class="mt-10">
        <v-row class="mb-6" no-gutters>
          <h2>Question {{ indexQuiz + 1 }}</h2>
        </v-row>
        <v-row>
          <v-col v-for="n in 1" :key="n">
            <div>
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
          <v-col v-for="n in data[0].response.length" :key="n">
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
  </v-container>
</template>

<script>
export default {
  name: "QuizImageColor",
  props:{
    data: Array
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
ul{
  list-style: none;
}
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

</style>
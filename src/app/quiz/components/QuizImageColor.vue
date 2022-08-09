<template>
  <v-container>
    <ul>
      <v-container class="text-h3 text-md-h4">
        {{ data.text }}
      </v-container>
      <v-container>
        <li v-for="(quiz, indexQuiz) in data.values" :key="indexQuiz" class="mt-10">
          <v-row class="mb-6" no-gutters>
            <h2>Question {{ indexQuiz + 1 }}</h2>
          </v-row>
          <v-row>
            <v-col>
              <v-container class="text-h2 text-md-h2 text-h4 text-center mt-3 mb-3"
                           :style="{color: quiz.question.color}">
                {{ quiz.question.text }}
              </v-container>
            </v-col>
          </v-row>
          <v-row>
            <v-col v-for="n in data.values[0].response.length" :key="n">
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
      </v-container>
    </ul>
  </v-container>
</template>

<script>
export default {
  name: "QuizImageColor",
  props: {
    data: Object
  },
  methods: {
    chooseResponse(n, index) {
      const originalIndex = n - 1;
      if (this.data.values[index].type === 'one') {
        this.data.values[index].response.forEach((quiz) => quiz.value = false)
        this.data.values[index].response[originalIndex].value = true;
      }
      if (this.data.values[index].type === 'multiple') {
        this.data.values[index].response[originalIndex].value = !this.data.values[index].response[originalIndex].value;
      }
    },
  }
}
</script>

<style scoped>
ul {
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
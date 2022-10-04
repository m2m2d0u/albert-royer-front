<template>
  <v-container>
    <ul>
      <v-container class="text-h3 text-md-h4">
        {{ data.text }}
      </v-container>
      <v-container>
        <li v-for="(quiz, indexQuiz) in values" :key="indexQuiz" class="mt-10">
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
          <choose-response-component :questions="quiz.response" :index="indexQuiz" :type="quiz.type"
                                     @updateData="updateData"/>
        </li>
      </v-container>
    </ul>
  </v-container>
</template>

<script>
import ChooseResponseComponent from "@/app/quiz/components/shared/ChooseResponseComponent";

export default {
  name: "QuizImageColor",
  components: {ChooseResponseComponent},
  props: {
    data: Object
  },
  watch: {
    data: {
      immediate: true,
      deep: true,
      handler(val) {
        this.values = val.data;
      }
    }
  },
  data: () => {
    return {
      values: []
    }
  },
  methods: {
    updateData(data, index) {
      this.values[index].response = data
    }
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

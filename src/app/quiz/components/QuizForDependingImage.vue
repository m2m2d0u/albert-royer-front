<template>
  <div>
    <v-row class="mb-6" no-gutters v-if="choice">
      <h2>Choissisez une photo</h2>
      <v-row>
        <v-col v-for="(image, index) in values.images" :key="index">
          <v-container @click="choiceImage(image)">
            <img :src="require('../../../assets/img/'+image.value)"
                 style="width: 700px; height: 40vh; border: black 1px solid" alt="">
          </v-container>
        </v-col>
      </v-row>
    </v-row>
    <v-row>
      <ul v-if="!choice">
        <v-container class="d-flex justify-center">
          <img :src="require('../../../assets/img/'+imageChoice)"
               style="width: 700px; height: 40vh; border: black 1px solid" alt="">
        </v-container>
        <v-container>
          <li v-for="(quiz, indexQuiz) in questions" :key="indexQuiz" class="mt-10">
            <v-row class="mb-6" no-gutters>
              <h2>Question {{ indexQuiz + 1 }}</h2>
            </v-row>
            <v-row class="mb-6" no-gutters>
              <h5>{{ quiz.text }}</h5>
            </v-row>
            <choose-response-component :questions="quiz.question" :index="indexQuiz" :type="quiz.type"
                                       @updateData="updateData"/>
          </li>
        </v-container>

      </ul>
    </v-row>
  </div>
</template>

<script>
import ChooseResponseComponent from "@/app/quiz/components/shared/ChooseResponseComponent";

export default {
  name: "QuizForDependingImage",
  components: {ChooseResponseComponent},
  props: {
    data: Object,
    choice: Boolean
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
  data: function () {
    return {
      values: [],
      showQuestion: false,
      questions: [],
      imageChoice: null,
      indexChoice: null,
    }
  },
  methods: {
    choiceImage(image) {
      image.choice = image.index;
      // Get the right quiz to display when we choose some picture
      for (const image of this.values.images) {
        if (image.choice !== null) {
          this.showQuestion = true;
          this.questions = this.values[image.choice];
          this.imageChoice = image.value;
          this.indexChoice = image.choice;
        }
      }
      this.$emit("openDialogForConfirm", true);
    },
    updateData(data, index) {
      this.values[this.indexChoice][index] = data
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>

<template>
  <div>
    <v-row class="mb-6" no-gutters v-if="choice">
      <h2>Choissisez une photo</h2>
      <v-row>
        <v-col v-for="(image, index) in data.images" :key="index">
          <v-container @click="choiceImage(image)">
            <img :src="image.value" style="width: 700px; height: 40vh; border: black 1px solid" alt="">
          </v-container>
        </v-col>
      </v-row>
    </v-row>
    <v-row>
      <ul v-show="!choice">
        <v-container class="d-flex justify-center">
          <img :src="imageChoice"
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
          </li>
        </v-container>

      </ul>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "QuizForDependingImage",
  props: {
    data: Object,
    choice: Boolean
  },
  data: function () {
    return {
      showQuestion: false,
      questions: [],
      imageChoice: null,
    }
  },
  methods: {
    choiceImage(image) {
      image.choice = image.index;
      // Get the right quiz to display when we choose some picture
      for (const image of this.data.images) {
        if (image.choice !== null) {
          this.showQuestion = true;
          this.questions = this.data[image.choice];
          this.imageChoice = image.value;
        }
      }

      this.$emit("openDialogForConfirm", true);
    },
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
<template>
  <div>
    <Confirmation :active="openDialog" @resultOfConfirmation="resultOfConfirmation"/>
    <v-row class="mb-6" no-gutters v-if="!isChoose">
      <span class="text-body-2 text-sm-body-2 text-md-h6 text-xl-h5 text-sm-caption font-weight-bold">Choissisez une photo</span>
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
      <ul v-if="isChoose">
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
import Confirmation from "@/app/shared/components/Confirmation";

export default {
  name: "QuizForDependingImage",
  components: {Confirmation, ChooseResponseComponent},
  props: {
    data: Array,
  },
  watch: {
    data: {
      immediate: true,
      deep: true,
      handler(val) {
        this.values = val.data;
      }
    },
  },
  data: function () {
    return {
      values: [],
      isChoose: false,
      openDialog: false,
      dialogResponse: false,
      showQuestion: false,
      questions: [],
      imageChoice: null,
      supposedChoice: null,
      indexChoice: null,
    }
  },
  methods: {
    choiceImage(image) {
      this.openDialog = true
      this.supposedChoice = image
    },
    resultOfConfirmation(value) {
      if (value) {
        this.isChoose = true
        this.values.images.map(image => {
          if (image.index === this.supposedChoice.index) {
            image.choice = this.supposedChoice.index
          }
        })
        // Get the right quiz to display when we choose some picture
        for (const image of this.values.images) {
          if (image.choice !== null) {
            this.showQuestion = true;
            this.questions = this.values[image.choice];
            this.imageChoice = image.value;
            this.indexChoice = image.choice;
          }
        }
      }
      this.openDialog = false;
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

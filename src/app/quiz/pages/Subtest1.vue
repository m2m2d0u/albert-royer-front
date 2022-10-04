<template>
  <v-container class="mt-10">
    <div class="text-center mb-10">
      <h1>Test 1</h1>
    </div>
    <div>
      <md-steppers :md-active-step.sync="active" md-linear>
        <!--        First quiz concerning the question for slider-->
        <md-step id="first" md-label="Premier test" md-description="Obligatoire" :md-editable="true"
                 :md-done.sync="first">
          <quiz-for-slider :data="firstQuiz"/>
          <div class="next-button">
            <md-button class="md-raised md-primary change-page" @click="setDone('first', 'second')">Suivant</md-button>
          </div>
        </md-step>
        <!--        Second quiz, when we purpose some picture and the recipient take some response by different choice-->
        <md-step id="second" md-label="Deuxième test" md-description="Obligatoire" :md-error="secondStepError"
                 :md-editable="true"
                 :md-done.sync="second">
          <quiz-select-response-for-image :data="secondQuiz"/>
          <div class="next-button">
            <md-button class="md-raised md-primary change-page" @click="setDone('second')">Terminer</md-button>
          </div>
        </md-step>
      </md-steppers>
    </div>

  </v-container>
</template>

<script>
import QuizForSlider from "@/app/quiz/components/QuizForSlider";
import QuizSelectResponseForImage from "@/app/quiz/components/QuizSelectResponseForImage";

export default {
  name: "Subtest1",
  components: {
    QuizForSlider,
    QuizSelectResponseForImage,
  },
  data: function () {
    return {
      active: 'first',
      showChoice: true,
      first: false,
      second: false,
      third: false,
      secondStepError: null,
      openDialog: false,
      index: null,
    };
  },
  computed: {
    firstQuiz() {
      return this.$store.getters["quiz/getSubTestOfTest"]('Les contributeurs et la ligne de front', 'subtest 1-1')
    },
    secondQuiz() {
      return this.$store.getters["quiz/getSubTestOfTest"]('Les contributeurs et la ligne de front', 'subtest 1-2')
    },
  },

  methods: {
    setDone(id, index) {
      this.scrollToTop();
      this[id] = true
      this.secondStepError = null
      if (index) {
        this.active = index
      }
    },
    setError() {
      this.secondStepError = 'This is an error!'
    },
    resultOfConfirmation(value) {
      if (value === true)
        this.showChoice = false;
      this.openDialog = false;
    },
    openDialogForConfirm(value) {
      if (value)
        this.openDialog = value;
    },
    scrollToTop() {
      window.scrollTo(0,0);
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
}


.next-button {
  margin-top: 70px;
  display: flex;
  justify-content: flex-end;
}

.change-page {
  width: 150px
}
</style>

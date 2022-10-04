<template>
  <v-container class="mt-10">
    <v-container class="text-center mb-10">
      <h1>Name</h1>
    </v-container>
    <v-container class="fixed-top timer d-flex justify-content-end">
      <!--      <base-timer :time-left="2 * 24 * 60 * 60 * 1000"/>-->
      <base-timer :time-left=quizTime*1000 @countEnded="countEnded"/>
    </v-container>
    <div>
      <md-steppers :md-active-step.sync="active" md-linear>
        <!--        First quiz concerning the question for slider-->
        <md-step id="first"
                 md-label="Premier test"
                 md-description="Obligatoire"
                 :md-editable="true"
                 :md-done.sync="first.value">
          <quiz-for-slider :data="firstQuiz"/>
          <div class="next-button">
            <md-button
                class="md-raised md-primary change-page"
                @click="setDone('first', 'second')">
              Suivant
            </md-button>
          </div>
        </md-step>
        <!--        Second quiz, when we purpose some picture and the recipient take some response by different choice-->
        <md-step id="second"
                 md-label="Deuxième test"
                 md-description="Obligatoire"
                 :md-error="secondStepError"
                 :md-editable="true"
                 :md-done.sync="second.value">
          <quiz-select-response-for-image :data="secondQuiz"/>
          <div class="next-button">
            <md-button
                class="md-raised md-primary change-page"
                @click="setDone('second', 'third')">
              Suivant
            </md-button>
          </div>
        </md-step>
        <!--        Third quiz, we give to the recipient two different pictures and the response depend for his choice-->
        <md-step id="third"
                 md-label="Troisième test"
                 md-description="Obligatoire"
                 :md-editable="true"
                 :md-done.sync="third.value">
          <quiz-for-depending-image
              :data="thirdQuiz"
              :choice="showChoice"
              @openDialogForConfirm="openDialogForConfirm"/>
          <Confirmation :active="openDialog" @resultOfConfirmation="resultOfConfirmation"/>
          <div class="next-button">
            <md-button class="md-raised md-primary change-page"
                       @click="setDone('third', 'fourth')">
              Suivant
            </md-button>
          </div>
        </md-step>
        <md-step id="fourth"
                 md-label="Quatrième test"
                 md-description="Obligatoire"
                 :md-editable="true"
                 :md-done.sync="fourth.value">
          <quiz-image-color :data="fourthQuiz"/>
          <div class="next-button">
            <md-button class="md-raised md-primary change-page"
                       @click="setDone('fourth')">
              Terminer
            </md-button>
          </div>
        </md-step>
      </md-steppers>
    </div>

  </v-container>
</template>

<script>
import QuizForSlider from "@/app/quiz/components/QuizForSlider";
import QuizSelectResponseForImage from "@/app/quiz/components/QuizSelectResponseForImage";
import QuizForDependingImage from "@/app/quiz/components/QuizForDependingImage";
import Confirmation from "@/app/shared/components/Confirmation";
import QuizImageColor from "@/app/quiz/components/QuizImageColor";
import BaseTimer from "@/app/shared/components/BaseTimer";


export default {
  name: "Subtest4",
  components: {
    QuizForSlider,
    Confirmation,
    QuizSelectResponseForImage,
    QuizForDependingImage,
    QuizImageColor,
    BaseTimer
  },
  data: function () {
    return {
      active: 'first',
      showChoice: true,
      first: {
        value: false,
        time: 300
      },
      second: {
        value: false,
        time: 500
      },
      third: {
        value: false,
        time: 700
      },
      fourth: {
        value: false,
        time: 600
      },
      secondStepError: null,
      openDialog: false,
      index: null,
      quizTime: 600,
      quizIndex: 'first',
      // eslint-disable-next-line no-unused-vars
    };
  },
  computed: {
    firstQuiz() {
      return this.$store.getters["quiz/getSubTestOfTest"]('Les executifs', 'subtest 4-1')
    },
    secondQuiz() {
      return this.$store.getters["quiz/getSubTestOfTest"]('Les executifs', 'subtest 4-2')
    },
    thirdQuiz() {
      return this.$store.getters["quiz/getSubTestOfTest"]('Les executifs', 'subtest 4-3')
    },
    fourthQuiz() {
      return this.$store.getters["quiz/getSubTestOfTest"]('Les executifs', 'subtest 4-4')
    },
  },
  methods: {
    setDone(id, index) {
      this.scrollToTop();
      this[id].value = true
      this.secondStepError = null
      if (index) {
        this.active = index
      }
      this.quizTime = this[index].time;
      this.quizIndex = index;
    },
    setError() {
      this.secondStepError = 'This is an error! '
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
      window.scrollTo(0, 0);
    },
    countEnded() {
      switch (this.quizIndex) {
        case 'first':
          this.setDone('first', 'second');
          break;
        case 'second':
          this.setDone('second', 'third');
          break;
        case 'third':
          this.setDone('third', 'fourth');
          break;
        case 'fourth':
          break;
        default:
          break;
      }
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

.timer {
  top: 100px;
  right: 0;
}
</style>

<template>
  <v-container class="mt-10">
    <v-container class="text-center mb-10">
      <h1>Name</h1>
    </v-container>
    <v-container class="fixed-top timer d-flex justify-content-end">
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
                @click="thirdQuiz?setDone('second', 'third'): setDone('finish')">
              {{ thirdQuiz ? "Suivant" : "Terminer" }}
            </md-button>
          </div>
        </md-step>
        <!--        Third quiz, we give to the recipient two different pictures and the response depend for his choice-->
        <md-step v-if="thirdQuiz"
                 id="third"
                 md-label="Troisième test"
                 md-description="Obligatoire"
                 :md-editable="true"
                 :md-done.sync="third.value">
          <quiz-for-depending-image
              :data="thirdQuiz"/>
          <div class="next-button">
            <md-button class="md-raised md-primary change-page"
                       @click="fourthQuiz?setDone('third', 'fourth'):setDone('finish')">
              {{ fourthQuiz ? "Suivant" : "Terminer" }}
            </md-button>
          </div>
        </md-step>
        <md-step v-if="fourthQuiz"
                 id="fourth"
                 md-label="Quatrième test"
                 md-description="Obligatoire"
                 :md-editable="true"
                 :md-done.sync="fourth.value">
          <quiz-image-color :data="fourthQuiz"/>
          <div class="next-button">
            <md-button class="md-raised md-primary change-page"
                       @click="setDone('finish')">
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
import QuizImageColor from "@/app/quiz/components/QuizImageColor";
import BaseTimer from "@/app/shared/components/BaseTimer";
import {useRoute} from "vue-router/composables";
import {mapGetters} from "vuex";

export default {
  name: "Subtest",
  components: {
    QuizForSlider,
    QuizSelectResponseForImage,
    QuizImageColor,
    QuizForDependingImage,
    BaseTimer,
  },
  data: function () {
    return {
      active: 'first',
      first: {
        value: false,
        time: 30
      },
      second: {
        value: false,
        time: 40
      },
      third: {
        value: false,
        time: 50
      },
      fourth: {
        value: false,
        time: 60
      },
      secondStepError: null,
      index: null,
      quizTime: 30,
      quizIndex: 'first',
    };
  },
  computed: {
    ...mapGetters({
      getSubTestById: 'quiz/getSubTestById'
    }),
    firstQuiz() {
      return this.getSubTestById(useRoute().params.id)?.quiz.find((value) => value.name === 'subtest 1')
    },
    secondQuiz() {
      return this.getSubTestById(useRoute().params.id)?.quiz.find((value) => value.name === 'subtest 2')
    },
    thirdQuiz() {
      return this.getSubTestById(useRoute().params.id)?.quiz.find((value) => value.name === 'subtest 3')
    },
    fourthQuiz() {
      return this.getSubTestById(useRoute().params.id)?.quiz.find((value) => value.name === 'subtest 4')
    }
  },
  methods: {
    setDone(id, index) {
      if (id === 'finish') {
        this.$store.dispatch('quiz/submitResponse', {
          firstQuiz: this.firstQuiz,
          secondQuiz: this.secondQuiz,
          thirdQuiz: this.thirdQuiz,
          fourthQuiz: this.fourthQuiz
        })
      }
      this.scrollToTop();
      this[id].value = true
      if (index) {
        this.active = index
      }
      this.quizTime = this[index].time;
      this.quizIndex = index;

    },
    setError() {
      this.secondStepError = 'This is an error! '
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
    },
    scrollToTop() {
      window.scrollTo(0, 0);
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

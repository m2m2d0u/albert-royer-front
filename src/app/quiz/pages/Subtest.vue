<template>
  <v-container class="mt-10">
    <div class="center-screen" v-if="isLoading">
      <v-progress-circular
          :size="50"
          color="primary"
          indeterminate
      />
    </div>
    <div v-else>
      <v-container class="text-center mb-12">
        <h1>Name</h1>
      </v-container>
      <v-container class="fixed-top timer d-flex justify-content-end">
        <base-timer :time-left="active.time" :key="active.name" @countEnded="countEnded"/>
      </v-container>
      <div>
        <md-steppers :md-active-step.sync="active.name" md-linear>
          <!--        First quiz concerning the question for slider-->
          <md-step id="first"
                   md-label="Premier test"
                   md-description="Obligatoire">
            <quiz-for-slider :data="firstQuiz" @ended="firstTestEnded = $event"/>
            <div class="next-button">
              <md-button
                  :disabled="!firstTestEnded"
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
                   :md-done.sync="second.value">
            <quiz-select-response-for-image :data="secondQuiz" @ended="secondTestEnded = $event"/>
            <div class="next-button">
              <md-button
                  :disabled="!secondTestEnded"
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
      active: {
        name: 'first',
        time: 30
      },
      firstQuiz: {},
      secondQuiz: {},
      thirdQuiz: {},
      fourthQuiz: {},
      firstTestEnded: false,
      secondTestEnded: false,
      secondStepError: null,
      index: null,
      second: {
        value: false,
        time: null
      },
      third: {
        value: false,
        time: null
      },
      fourth: {
        value: false,
        time: null
      }
    };
  },
  computed: {
    ...mapGetters({
      getSubTestById: 'quiz/getSubTestById'
    }),
    isLoading() {
      return this.$store.state.quiz.isLoading
    },
  },
  async mounted() {
    await this.$store.dispatch('quiz/getTestById', useRoute().params.id);
    const test = this.$store.state.quiz.oneTest;
    this.firstQuiz = test.quiz.find((value) => value.name === 'subtest 1');
    this.secondQuiz = test.quiz.find(value => value.name === 'subtest 2');
    this.thirdQuiz = test.quiz.find(value => value.name === 'subtest 3');
    this.fourthQuiz = test.quiz.find(value => value.name === 'subtest 4');
    // Set all time
    this.active.time = this.firstQuiz.time;
    this.second.time = this.secondQuiz.time;
    this.third.time = this.thirdQuiz.time;
    this.fourth.time = this.fourthQuiz.time;

  },
  methods: {
    setDone(id, index) {
      if (id === 'finish') {
        this.$store.dispatch('quiz/submitResponse', {
          data: {
            firstQuiz: this.firstQuiz,
            secondQuiz: this.secondQuiz,
            thirdQuiz: this.thirdQuiz,
            fourthQuiz: this.fourthQuiz,
          },
          user: this.$store.state.auth.info.id,
          subtest: this.$store.state.auth.info.test
        }).then(async () => {
          await this.$store.dispatch('quiz/setLoading', true)
          await new Promise(resolve => setTimeout(resolve, 1000));
          await this.$store.dispatch('quiz/setLoading', false)
          await this.$router.push('/')
          this.$notifyInfo("Your test has been well recorded");
        }).catch(error => {
          this.$notifyError(error);
        })
      }
      this.scrollToTop();
      if (index) {
        this.active.name = index;
        this.active.time = this[index].time;
      }
    },
    setError() {
      this.secondStepError = 'This is an error! '
    },
    countEnded() {
      switch (this.active.name) {
        case 'first':
          this.setDone('first', 'second');
          break;
        case 'second':
          if (this.thirdQuiz)
            this.setDone('second', 'third');
          else
            this.setDone('finish')
          break;
        case 'third':
          if (this.fourthQuiz)
            this.setDone('third', 'fourth');
          else
            this.setDone('finish')
          break;
        case 'fourth':
          this.setDone('finish')
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

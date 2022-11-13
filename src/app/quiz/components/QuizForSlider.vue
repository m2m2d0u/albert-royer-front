<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-container class="text-body-2 text-sm-body-2 text-md-body-1 text-xl-h6 text-sm-caption ">
          {{ text }}
        </v-container>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-content-center">
        <mini-audio width=200 :audio-source="require('@/assets/audio/text-1.mp3')"/>
      </v-col>
    </v-row>
    <v-container>
      <v-row>
        <v-col cols="1" class="d-flex justify-content-center">
          <v-icon color="blue" x-large @click.prevent="previousQuestion" :disabled="!indexQuiz">
            mdi-chevron-left-circle
          </v-icon>
        </v-col>
        <v-col cols="10">
          <v-container class="content-slider">
            <v-row class="mb-6" no-gutters>
              <span class="text-body-2 text-sm-body-2 text-md-h6 text-xl-h5 text-sm-caption font-weight-bold">
                Question {{ indexQuiz + 1 }} sur {{ sizeData }}
              </span>
            </v-row>
            <v-row no-gutters>
              <v-col cols="11">
                <v-row class="mt-3 mb-3" no-gutters>
                  <v-col v-for="(numb, i) of getTheQuestionWithIndex(indexQuiz).question" :key="i">
                    <span class="text-body-2 text-sm-body-2 text-md-body-1 text-xl-h6 text-sm-caption">{{
                        numb.sup
                      }}</span>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col v-for="(numb) of getTheQuestionWithIndex(indexQuiz).question" :key="numb.index">
                    <circle-component :isActive="numb.isActive"
                                      @click.native="choiceInterval(getTheQuestionWithIndex(indexQuiz).question, numb.index)"/>
                  </v-col>
                </v-row>
                <v-row class="mt-1" no-gutters>
                  <v-col v-for="(numb, i) of getTheQuestionWithIndex(indexQuiz).question" :key="i">
                    <span class="text-body-2 text-sm-body-2 text-md-body-1 text-xl-h6 text-sm-caption">{{
                        numb.inf
                      }}</span>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="1" class="d-flex justify-content-between flex-column">
                <v-row no-gutters>
                  <v-col class="d-flex align-center pl-3">
                    <span class="text-body-2 text-sm-body-2 text-md-body-1 text-xl-h6 text-sm-caption mr-4 span-color">Toi:</span>
                    <span class="text-body-2 text-sm-body-2 text-md-body-1 text-xl-h6 text-sm-caption">{{
                        getTheSupBorne(getTheQuestionWithIndex(indexQuiz).question)
                      }}</span>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col class="d-flex align-center pl-3">
              <span
                  class="text-body-2 text-sm-body-2 text-md-body-1 text-xl-h6 text-sm-caption mr-4 span-color">Autre:</span>
                    <span class="text-body-2 text-sm-body-2 text-md-body-1 text-xl-h6 text-sm-caption">{{
                        getTheInfBorne(getTheQuestionWithIndex(indexQuiz).question)
                      }}</span>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>

        </v-col>
        <v-col cols="1" class="d-flex justify-content-center">
          <v-icon color="blue" x-large @click.prevent="nextQuestion" :disabled="indexQuiz >= (sizeData - 1)">
            mdi-chevron-right-circle
          </v-icon>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import CircleComponent from "@/app/quiz/components/shared/Circle";

export default {
  components: {
    CircleComponent,
  },
  name: "QuizForSlider",
  props: {
    data: Object,
  },
  watch: {
    data: {
      immediate: true,
      deep: true,
      handler(val) {
        this.values = val.data;
        this.text = val.text;
        this.sizeData = val.data && val.data.length
      }
    },
    indexQuiz: {
      immediate: true,
      deep: true,
      handler() {
        if ((this.indexQuiz + 1) === this.sizeData)
          this.$emit("ended", true);
        else
          this.$emit("ended", false);
      }
    }
  },
  data: function () {
    return {
      values: [],
      text: "",
      sizeData: 0,
      indexQuiz: 0,
      valueSlider: 0,
      playSoundColor: "none",
      option: {
        height: 20,
        dotSize: 30,
        width: 1000
      },
    }
  },
  methods: {
    choiceInterval(data, index) {
      data.forEach(c => c.isActive = false);
      data[index].isActive = true
    },
    getTheSupBorne(data) {
      for (const value of data) {
        if (value.isActive)
          return value.sup
      }
      return 0;
    },
    getTheInfBorne(data) {
      for (const value of data) {
        if (value.isActive)
          return value.inf
      }
      return 0;
    },
    getTheQuestionWithIndex(index) {
      return this.values[index];
    },
    nextQuestion() {
      this.indexQuiz += 1;
    },
    previousQuestion() {
      this.indexQuiz -= 1;
    }
  }
}
</script>

<style scoped>

.content-slider {
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;
}

.slider-text {
  font-size: 20px;
  font-weight: bold;
}

.span-color {
  color: #448AFF;
}
</style>

<template>
  <v-container>
    <v-container class="text-body-2 text-sm-body-2 text-md-body-1 text-xl-h6 text-sm-caption ">
      {{ text }}
    </v-container>
    <v-container class="content-slider" v-for="(questions, i) in values" :key="i">
      <v-row class="mb-6" no-gutters>
        <span class="text-body-2 text-sm-body-2 text-md-h6 text-xl-h5 text-sm-caption font-weight-bold">Question {{ i + 1 }}</span>
      </v-row>
      <v-row no-gutters>
        <v-col cols="10">
          <v-row class="mt-3 mb-3" no-gutters>
            <v-col v-for="(numb, i) of questions.question" :key="i">
              <span class="text-body-2 text-sm-body-2 text-md-body-1 text-xl-h6 text-sm-caption">{{ numb.sup }}</span>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col v-for="(numb) of questions.question" :key="numb.index">
              <circle-component :isActive="numb.isActive"
                                @click.native="choiceInterval(questions.question, numb.index)"/>
            </v-col>
          </v-row>
          <v-row class="mt-1" no-gutters>
            <v-col v-for="(numb, i) of questions.question" :key="i">
              <span class="text-body-2 text-sm-body-2 text-md-body-1 text-xl-h6 text-sm-caption">{{ numb.inf }}</span>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="2" class="d-flex justify-content-between flex-column">
          <v-row no-gutters>
            <v-col class="d-flex align-center pl-3">
              <span class="text-body-2 text-sm-body-2 text-md-body-1 text-xl-h6 text-sm-caption mr-4 span-color">Toi:</span>
              <span class="text-body-2 text-sm-body-2 text-md-body-1 text-xl-h6 text-sm-caption">{{
                  getTheSupBorne(questions.question)
                }}</span>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col class="d-flex align-center pl-3">
              <span
                  class="text-body-2 text-sm-body-2 text-md-body-1 text-xl-h6 text-sm-caption mr-4 span-color">Autre:</span>
              <span class="text-body-2 text-sm-body-2 text-md-body-1 text-xl-h6 text-sm-caption">{{
                  getTheInfBorne(questions.question)
                }}</span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import CircleComponent from "@/app/quiz/components/shared/Circle";

export default {
  components: {
    CircleComponent
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
      }
    }
  },
  data: function () {
    return {
      values: [],
      text: "",
      valueSlider: 0,
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

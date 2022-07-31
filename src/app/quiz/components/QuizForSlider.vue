<template>
  <v-container>
    <v-container class="content-slider" v-for="(value, index) in data" :key="index">
      <v-row class="mb-6" no-gutters>
        <h2>Question {{ index + 1 }}</h2>
      </v-row>
      <v-container class="slider-text">
        {{ value.text }}
      </v-container>
      <v-row no-gutters>
        <v-col cols="10">
          <v-row class="mt-3 mb-3" no-gutters>
            <v-col v-for="(numb, i) of value.data" :key="i">
              <h4>{{ numb.sup }}</h4>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col v-for="(numb) of value.data" :key="numb.index">
              <circle-component :isActive="numb.isActive" @click.native="choiceInterval(value.data, numb.index)"/>
            </v-col>
          </v-row>
          <v-row class="mt-1" no-gutters>
            <v-col v-for="(numb, i) of value.data" :key="i">
              <h4>{{ numb.inf }}</h4>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="2" class="d-flex justify-content-between flex-column">
          <v-row no-gutters>
            <v-col class="d-flex align-center pl-3">
              <span class="text-h5 mr-4 span-color">Toi:</span>
              <span class="text-h6">{{ getTheSupBorne(value.data) }}</span>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col class="d-flex align-center pl-3">
              <span class="text-h5 mr-4 span-color">Autre:</span>
              <span class="text-h6">{{ getTheInfBorne(value.data) }}</span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import CircleComponent from "@/app/quiz/components/Circle";

export default {
  components: {
    CircleComponent
  },
  name: "QuizForSlider",
  props: {
    data: Array,
  },
  data: function () {
    return {
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
  font-size: 18px;
}

.span-color {
  color: #448AFF;
}

</style>
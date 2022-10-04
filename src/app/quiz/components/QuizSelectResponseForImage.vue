<template>
  <div>
    <ul>
      <li v-for="(quiz, indexQuiz) in values" :key="indexQuiz" class="mt-10">
        <v-row class="mb-6 text-md-h5 text-xl-h5 text-sm-caption" no-gutters>
          <h2>Question {{ indexQuiz + 1 }}</h2>
        </v-row>
        <v-row>
          <v-col v-for="n in 1" :key="n">
            <div class="text-md-h6 text-xl-h6 text-sm-caption">
              {{ quiz.name }}
            </div>
            <div class="image-content" v-show="quiz.image">
              <img
                  v-img
                  :src="require('../../../assets/img/emotional/'+quiz.image)"
                  class="image"
                  :style="{ backgroundImage: 'url(' + require('../../../assets/img/emotional/'+quiz.image) + ')', width: '700px', height: '40vh' }"/>
            </div>
          </v-col>
        </v-row>
        <choose-response-component :questions="quiz.question" :index="indexQuiz" :type="quiz.type"
                                   @updateData="updateData"/>
      </li>
    </ul>
  </div>
</template>

<script>
import ChooseResponseComponent from "@/app/quiz/components/shared/ChooseResponseComponent";

export default {
  name: "QuizSelectResponseForImage",
  components: {ChooseResponseComponent},
  props: {
    data: Array,
  },
  watch: {
    data: {
      immediate: true,
      deep: true,
      handler(val) {
        this.values = val.data
      }
    }
  },
  data: () => {
    return {
      values: []
    }
  },
  methods: {
    updateData(data, index) {
      this.values[index].question = data
    },
  }
}
</script>

<style scoped>

.image-content {
  display: flex;
  justify-content: center;
}

.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}

ul {
  list-style-type: none;
}

</style>

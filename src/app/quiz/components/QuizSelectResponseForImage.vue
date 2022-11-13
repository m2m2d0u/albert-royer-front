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
        <mini-audio width=200 :audio-source="require('@/assets/audio/text-2.mp3')"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="1" class="d-flex justify-content-center">
        <v-icon color="blue" x-large @click.prevent="previousQuestion" :disabled="!indexQuiz">
          mdi-chevron-left-circle
        </v-icon>
      </v-col>
      <v-col cols="10">
        <v-row class="mb-6 text-md-h5 text-xl-h5 text-sm-caption" no-gutters>
          <span class="text-body-2 text-sm-body-2 text-md-h6 text-xl-h5 text-sm-caption font-weight-bold">
            Question {{ indexQuiz + 1 }} sur {{ sizeData }}
          </span>
        </v-row>
        <v-row>
          <v-col v-for="n in 1" :key="n">
            <div class="image-content" v-show="getTheQuestionWithIndex(indexQuiz).image">
              <img
                  v-img
                  :src="require('../../../assets/img/emotional/'+getTheQuestionWithIndex(indexQuiz).image)"
                  class="image"
                  alt=""
                  :style="{ backgroundImage: 'url(' + require('../../../assets/img/emotional/'+getTheQuestionWithIndex(indexQuiz).image) + ')', width: '700px', height: '40vh' }"/>
            </div>
          </v-col>
        </v-row>
        <choose-response-component :questions="getTheQuestionWithIndex(indexQuiz).question" :index="indexQuiz"
                                   :type="getTheQuestionWithIndex(indexQuiz).type"
                                   @updateData="updateData"/>
      </v-col>
      <v-col cols="1" class="d-flex justify-content-center">
        <v-icon color="blue" x-large @click.prevent="nextQuestion" :disabled="indexQuiz >= (sizeData - 1)">
          mdi-chevron-right-circle
        </v-icon>
      </v-col>
    </v-row>
    <ul>
    </ul>
  </v-container>
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
        this.text = val.text;
        this.values = val.data
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
  data: () => {
    return {
      values: [],
      indexQuiz: 0,
      text: "",
      sizeData: 0
    }
  },
  methods: {
    updateData(data, index) {
      this.values[index].question = data
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

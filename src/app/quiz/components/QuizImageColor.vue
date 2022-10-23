<template>
  <v-container>
    <ul>
      <v-container class="text-h3 text-md-h4">
        {{ values.text }}
      </v-container>
      <v-container class="d-flex justify-content-center">
        <v-card width="600">
          <span class="text-h2 text-md-h2 text-h4 text-center" v-for="(sample, index) in values.data[0].sample" :key="index"
                :style="{color: sample.value.color}">
            {{ sample.value.text }}
          </span>
        </v-card>
      </v-container>
      <v-container>
        <choose-response-component :questions="values.data[0].question" :index="index" :type="values.data[0].type"/>
      </v-container>
    </ul>
  </v-container>
</template>

<script>
import ChooseResponseComponent from "@/app/quiz/components/shared/ChooseResponseComponent";

export default {
  name: "QuizImageColor",
  components: {ChooseResponseComponent},
  props: {
    data: Object
  },
  watch: {
    data: {
      immediate: true,
      deep: true,
      handler(val) {
        this.values = val;
      }
    }
  },
  data: () => {
    return {
      values: {}
    }
  },
  methods: {
    updateData(data, index) {
      this.values[index].response = data
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
}

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

</style>

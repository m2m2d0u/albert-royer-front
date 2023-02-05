<template>
  <v-container>
    <ul>
      <v-container class="text-body-2 text-sm-body-2 text-md-body-1 text-xl-h6 text-sm-caption ">
        {{ values.text }}
      </v-container>
      <v-container class="d-flex justify-content-center">
        <v-card width="600">
          <img
              v-img
              :src="require('@/assets/img/cloche-figure.png')"
              class="image"
              alt=""
              :style="{ backgroundImage: 'url(' + require('@/assets/img/cloche-figure.png') + ')' }"/>

        </v-card>
      </v-container>
      <v-container>
        <choose-response-component :questions="values.data[0].question" :type="values.data[0].type"/>
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

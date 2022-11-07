<template>
  <v-row>
    <v-col v-for="n in data.length" :key="n">
      <v-card
          class="pa-2 text-center d-flex justify-center align-center text-xl-h6 text-sm-caption font-weight-regular"
          height="80">
        <button class="flex" style="height: 100%;"
                :style="data[n-1].value? {'background-color': '#78deaf'}:''"
                @click="chooseResponse(n)">
          {{ data[n - 1].title }}
        </button>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ChooseResponseComponent",
  props: {
    questions: Array,
    type: String,
    index: Number
  },
  watch: {
    questions: {
      immediate: true,
      deep: true,
      handler(val) {
        this.data = val
      }
    }
  },
  data: () => {
    return {
      data: [],
    }
  },
  methods: {
    chooseResponse(n) {
      const originalIndex = n - 1;
      if (this.type === 'one') {
        this.data.forEach((quiz) => quiz.value = false)
        this.data[originalIndex].value = true;
      }
      if (this.type === 'multiple') {
        this.data[originalIndex].value = !this.data[originalIndex].value;
      }
      this.$emit('updateData', this.data, this.index);
    },
  }
}
</script>

<style scoped>

</style>

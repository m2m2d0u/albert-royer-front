<template>
  <v-row justify="center">
    <v-dialog
        v-model="openDialog"
        persistent
        max-width="800"
    >

      <v-card>
        <v-container class="text-h4 text-center">
          <span class="light-green--text font-weight-bold">{{ data?.user?.name }}</span>
        </v-container>
        <v-container>
          <v-list-item-content class="">
            <v-list-item-title class="mb-5">
              <span class="font-weight-bold text-h6">Firstname:</span>&nbsp;
              <span>{{ firstname }}</span>
            </v-list-item-title>
            <v-list-item-title class="mb-5">
              <span class="font-weight-bold text-h6">Lastname:</span>&nbsp;
              <span>{{ lastname }}</span>
            </v-list-item-title>
            <v-list-item-title class="mb-5">
              <span class="font-weight-bold text-h6">Phone number:</span>&nbsp;
              <span>{{ data?.user?.phone }}</span>
            </v-list-item-title>
            <v-list-item-title class="mb-5">
              <span class="font-weight-bold text-h6">Email:</span>&nbsp;
              <span>{{ data?.user?.email }}</span>
            </v-list-item-title>
            <v-list-item-title class="mb-5">
              <span class="font-weight-bold text-h6">Test done:</span>&nbsp;
              <span>
                  {{
                  tests.find(test => test.id === data?.user?.subTestId)?.name
                }}
              </span>
            </v-list-item-title>
          </v-list-item-content>
        </v-container>
        <v-divider/>
        <v-container>
          <v-list-item-content class="">
            <v-list-item-title class="mb-5">
              <span class="font-weight-bold text-h6">Number of correct answers for the SVO test:</span>&nbsp;
              <span>{{ data?.result?.firstQuiz?.score }}</span>
            </v-list-item-title>
            <v-list-item-title class="mb-5">
              <span class="font-weight-bold text-h6">Number of correct answers for the RME test:</span>&nbsp;
              <span>{{ data?.result?.secondQuiz?.score }}</span>
            </v-list-item-title>
            <v-list-item-title class="mb-5" v-if="data?.result?.thirdQuiz">
              <span class="font-weight-bold text-h6">Number of correct answers for the Raven Dies test:</span>&nbsp;
              <span>{{ data?.result?.thirdQuiz?.score }}</span>
            </v-list-item-title>
            <v-list-item-title v-if="data?.result?.fourthQuiz">
              <span class="font-weight-bold text-h6">Number of correct answers for the Stroop test:</span>&nbsp;
              <span>{{ data?.result?.fourthQuiz?.score }}</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-container>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="red darken-1"
              text
              @click="closedDialog"
          >
            Fermer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "DialogDetails",
  props: {
    openDialog: Boolean,
    info: Object
  },
  data() {
    return {
      data: null
    }
  },
  watch: {
    info: {
      immediate: true,
      deep: true,
      handler(val) {
        this.data = val;
      }
    }
  },
  computed: {
    tests() {
      return this.$store.state.quiz.tests;
    },
    firstname() {
      return this.data?.user?.name?.split(' ').slice(0, -1)?.join(' ');
    },
    lastname() {
      return this.data?.user?.name?.split(' ').slice(-1)?.join(' ');
    }
  },
  methods: {
    closedDialog() {
      this.$emit("eventDialog", false);
    }
  }
}
</script>

<style scoped>

</style>

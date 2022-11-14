<template>
  <v-container>
    <add-decision :openDecisionDialog="openDecisionDialog" @closeDialog="openDecisionDialog.value = $event"
                  v-if="openDecisionDialog.value" @successUpdate="successUpdate"/>
    <dialog-details :open-dialog="openDialog" :info="data" @eventDialog="openDialog = $event"/>
    <div class="center-screen" v-if="isLoading">
      <v-progress-circular
          :size="50"
          color="primary"
          indeterminate/>
    </div>
    <v-container v-else>
      <v-card elevation="4" style="margin-top: 50px">
        <v-container>
          <v-container class="text-center mb-3 mt-3">
            <span class="text-h4">Search</span>
          </v-container>
          <v-row>
            <v-col cols="3">
              <v-text-field
                  v-model="search.name"
                  outlined
                  dense
                  placeholder="Firstname and/or Lastname"/>
            </v-col>
            <v-col cols="3">
              <v-select
                  :items="decisionList"
                  label="Filter by decision"
                  v-model="search.decision"
                  item-text="name"
                  item-value="value"
                  outlined
                  class="shrink"
                  dense
              ></v-select>
            </v-col>
            <v-col cols="3">
              <v-text-field
                  v-model="search.infScore"
                  placeholder="Minimum score"
                  dense outlined/>
            </v-col>
            <v-col cols="3">
              <v-text-field
                  v-model="search.supScore"
                  placeholder="Maximum score"
                  dense
                  outlined/>
            </v-col><!--
            <v-col cols="3">
              <v-menu
                  ref="menu1"
                  v-model="menu1"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                      v-model="dateFormatted"
                      label="Date"
                      persistent-hint
                      outlined
                      dense
                      v-bind="attrs"
                      @blur="date = parseDate(dateFormatted)"
                      v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                    v-model="date"
                    no-title
                    locale="fr-fr"
                    @input="menu1 = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
-->
          </v-row>
          <v-row>
            <v-col cols="3">
              <v-select
                  :items="tests"
                  label="Filter by test"
                  outlined
                  v-model="search.subtest"
                  class="shrink"
                  item-text="name"
                  item-value="id"
                  dense
              />
            </v-col>
          </v-row>
          <v-container class="d-flex justify-content-end">
            <v-btn color="primary" x-large @click.prevent="searchTest">
              Search
            </v-btn>
          </v-container>
        </v-container>
      </v-card>
      <v-container class="mt-10">
        <v-row>
          <v-col cols="12" sm="12" md="6" lg="4" xl="4" v-for="(data, index) in recipients?.data" :key="index">
            <v-card
                elevation="6"
                shaped>
              <v-container class="text-center text-h6">
                {{ data?.user?.name }}
                <v-icon color="green" v-if="data.decision === 'approved'">mdi-check-decagram</v-icon>
                <v-icon color="yellow" v-if="data.decision === 'waiting'">mdi-timer-sand</v-icon>
                <v-icon color="red" v-if="data.decision === 'rejected'">mdi-close-circle</v-icon>
              </v-container>
              <v-card-text>
                <v-row>
                  <v-col cols="6">
                    <v-card elevation="2" rounded>
                      <v-container class="d-flex align-items-center justify-content-center gap-3">
                        <span class="text-caption text-md-h6 font-weight-bold font-weight-light">SVO</span>
                        <span class="text-caption text-md-body-2 font-weight-light">
                          ({{ data.result?.firstQuiz?.decision }})
                        </span>
                      </v-container>
                    </v-card>
                  </v-col>
                  <v-col cols="6">
                    <v-card elevation="2">
                      <v-container class="d-flex align-items-center justify-content-center gap-3">
                        <span class="text-caption text-md-h6 font-weight-bold font-weight-light">RME</span>
                        <span class="text-caption text-md-body-2 font-weight-light">
                          ({{ data.result?.secondQuiz?.decision }})
                        </span>
                      </v-container>
                    </v-card>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-card elevation="2">
                      <v-container class="d-flex align-items-center justify-content-center gap-3">
                        <span class="text-caption text-md-h6 font-weight-bold font-weight-light">Raven Dies</span>
                        <span v-if="data.result?.fourthQuiz" class="text-caption text-md-body-2 font-weight-light">
                          ({{ data.result?.thirdQuiz?.decision }})
                        </span>
                        <span class="text-caption text-md-body-2 font-weight-light" v-else>(Not)</span>
                      </v-container>
                    </v-card>
                  </v-col>
                  <v-col cols="6">
                    <v-card elevation="2">
                      <v-container class="d-flex align-items-center justify-content-center gap-3">
                        <span class="text-caption text-md-h6 font-weight-bold font-weight-light">Stroop</span>
                        <span v-if="data.result?.fourthQuiz" class="text-caption text-md-body-2 font-weight-light">
                          ({{ data.result?.fourthQuiz?.decision }})
                        </span>
                        <span class="text-caption text-md-body-2 font-weight-light" v-else>(Not)</span>
                      </v-container>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-subtitle class="mt-1 mb-1">
                <v-btn x-small color="primary" @click="downloadReport(data)" :disabled="isClicked">Download report
                </v-btn>
              </v-card-subtitle>
              <v-card-actions class="d-flex justify-content-between">
                <v-btn
                    color="green"
                    text
                    @click="addDecision(data?.id)">
                  Decision
                </v-btn>
                <v-btn
                    color="red"
                    text
                    @click="moreInfo(data)"
                >
                  More details
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="mt-5">
          <v-col cols="12">
            <v-pagination
                v-model="page"
                circle
                :length="totalPages"
                :total-visible="7"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
import DialogDetails from "@/app/shared/components/DialogDetails";
import AddDecision from "@/app/shared/components/forms/AddDecision";
import {mapGetters} from "vuex";

export default {
  name: "DataTable",
  components: {
    DialogDetails,
    AddDecision
  },
  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date)
    },
    page: {
      immediate: true,
      deep: true,
      handler() {
        this.$store.dispatch('recipient/fetchOrSearchRecipient', {
          page: this.page,
          size: this.itemsPerPage,
          search: this.search
        })
      }
    }
  },
  computed: {
    ...mapGetters({
      getTestById: "quiz/getSubTestById"
    }),
    recipients() {
      return this.$store.state.recipient.recipients
    },
    tests() {
      return this.$store.state.quiz.tests
    },
    totalItems() {
      return this.$store.state.recipient.recipients?.totalItems
    },
    isLoading() {
      return this.$store.state.recipient.isLoading
    },
    totalPages() {
      if (this.itemsPerPage > this.totalItems) {
        return 1
      } else {
        return (this.totalItems % this.itemsPerPage === 0) ? this.totalItems / this.itemsPerPage : parseInt((this.totalItems / this.itemsPerPage)) + 1
      }
    },

  },
  mounted() {
    this.$store.dispatch('recipient/fetchOrSearchRecipient', {
      page: this.page,
      size: this.itemsPerPage,
      search: this.search
    })
  },
  data() {
    return {
      page: 1,
      isClicked: false,
      search: {
        name: '',
        infScore: '',
        supScore: '',
        subtest: '',
        decision: '',
      },
      itemsPerPage: 6,
      openDialog: false,
      openDecisionDialog: {
        value: false,
        id: '',
      },
      decisionList: [
        {name: 'Waiting', value: 'waiting'},
        {name: 'Rejected', value: 'rejected'},
        {name: 'Approved', value: 'approved'},
      ],
      date: null,
      dateFormatted: null,
      menu1: false,
      data: null,
    }
  },
  methods: {
    moreInfo(data) {
      this.data = data;
      this.openDialog = true;
    },
    searchTest() {
      this.$store.dispatch('recipient/fetchOrSearchRecipient', {
        page: this.page,
        size: this.itemsPerPage,
        search: this.search
      })
    },
    downloadReport(data) {
      this.isClicked = true;
      const nameUser = data?.user?.name;
      const phoneUser = data?.user?.phone;
      const emailUser = data?.user?.email;
      // console.log(data)
      const test = this.getTestById(data?.subtest?._id);
      // console.log(test)
      const nameTest = test.name;
      const subtest1 = test.quiz.find(v => v.name === 'subtest 1');
      const subtest2 = test.quiz.find(v => v.name === 'subtest 2');
      // const subtest3 = test.quiz.find(v => v.name === 'subtest 3');
      // const subtest4 = test.quiz.find(v => v.name === 'subtest 4');

      const numberQuestionForSubtest1 = subtest1.numberOfQuestions
      const numberQuestionForSubtest2 = subtest2.numberOfQuestions
      const numberQuestionForSubtest3 = 3
      const numberQuestionForSubtest4 = 1

      const resultFirstQuiz = {
        score: data?.result?.firstQuiz?.score,
        decision: data?.result?.firstQuiz?.decision
      }
      const resultSecondQuiz = {
        score: data?.result?.secondQuiz?.score,
        decision: data?.result?.secondQuiz?.decision
      }
      const resultThirdQuiz = {
        score: data?.result?.thirdQuiz?.score,
        decision: data?.result?.thirdQuiz?.decision
      }
      const resultFourthQuiz = {
        score: data?.result?.fourthQuiz?.score,
        decision: data?.result?.fourthQuiz?.decision
      }

      const jsonToSend = {
        nameUser,
        phoneUser,
        emailUser,
        nameTest,
        numberQuestionForSubtest1,
        numberQuestionForSubtest2,
        numberQuestionForSubtest3,
        numberQuestionForSubtest4,
        resultFirstQuiz,
        resultSecondQuiz,
        resultThirdQuiz,
        resultFourthQuiz,
      }

      this.$store.dispatch('quiz/downloadPdf', jsonToSend)
          .then(() => {
            this.isClicked = false
          })
          .catch(error => {
            this.$notifyError(error)
            this.isClicked = false
          });

      // console.log(jsonToSend)

    },
    addDecision(id) {
      this.openDecisionDialog.value = true
      this.openDecisionDialog.id = id
    },
    formatDate(date) {
      if (!date) return null
      const [year, month, day] = date.split('-')
      return `${day}/${month}/${year}`
    },
    parseDate(date) {
      if (!date) return null
      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
    successUpdate() {
      this.$store.dispatch('recipient/fetchOrSearchRecipient', {
        page: this.page,
        size: this.itemsPerPage,
        search: this.search
      })
    }

  }
}
</script>

<style scoped>

</style>

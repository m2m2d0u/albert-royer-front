<template>
  <v-container class="report-page">
    <v-container class="cover-page">
      <v-row>
        <!--        <v-col cols="3" class="sidebar"/>-->
        <v-col cols="12">
          <div>
            <img :src="require('@/assets/svg/logo.svg')" alt="" width="150"/>
          </div>
          <v-container class="d-flex flex-column align-items-center">
            <v-container style="margin-top: 40px" class="font-weight-bold d-flex flex-column align-items-center">
              <p style="font-size: 40px">REPORT</p>
            </v-container>
            <v-divider/>
            <v-container style="margin-top: 20px" class="font-weight-bold d-flex flex-column align-items-center">
              <p style="font-size: 30px">{{ nameTest }}</p>
            </v-container>
            <v-container style="margin-top: 40px" class="font-weight-bold d-flex flex-column align-items-center">
              <span style="font-size: 20px">{{ name }}</span>
            </v-container>
            <v-container style="margin-top: 10px" class="d-flex flex-column align-items-center">
              <span style="font-size: 20px">{{ email }}</span>
            </v-container>
            <v-container style="margin-top: 10px" class="d-flex flex-column align-items-center">
              <span style="font-size: 20px">{{ phone }}</span>
            </v-container>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <v-container style="margin-top: 400px">
      <v-container class="d-flex flex-column align-items-center gap-4">
        <div class="text-center text-h6 text-md-h5 text-xl-h4">
          According to the information recorded during the test, here is the psychological profile of
        </div>
        <p class="text-h6  text-md-h5 text-xl-h4">{{ name }}</p>
      </v-container>
      <v-container>
        <v-row>
          <v-col :cols="sizeCard">
            <v-card>
              <div class="d-flex flex-column align-items-center">
                <img :src="require('@/assets/svg/circle.svg')" alt="" width="150"/>
                <div class="font-weight-bold" style="font-size: 8px">
                  SVO(Social Value Orientation)
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <span>
                  <span style="font-size: 20px">{{ resultFirstQuiz?.score }}</span>
                </span>
              </div>
            </v-card>
          </v-col>
          <v-col :cols="sizeCard">
            <v-card>
              <div class="d-flex flex-column align-items-center">
                <img :src="require('@/assets/svg/eye-svgrepo-com.svg')" alt="" width="150"/>
                <div class="font-weight-bold" style="font-size: 8px">
                  RME(Read My Eyes)
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <span>
                  <span style="font-size: 20px">{{ resultSecondQuiz?.score }}</span>
                  <span style="font-size: 10px">/</span>
                  <span style="font-size: 10px">{{ numberQuestionForSubtest2 }}</span>
                </span>
              </div>
            </v-card>
          </v-col>
          <v-col :cols="sizeCard" v-if="resultThirdQuiz && Object.keys(resultThirdQuiz).length">
            <v-card>
              <div class="d-flex flex-column align-items-center">
                <img :src="require('@/assets/svg/choice.svg')" alt="" width="150"/>
                <div class="font-weight-bold" style="font-size: 8px">
                  Figures projectives(Raven Dies)
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <span>
                  <span style="font-size: 20px">{{ resultThirdQuiz?.score }}</span>
                  <span style="font-size: 10px">/</span>
                  <span style="font-size: 10px">{{ numberQuestionForSubtest3 }}</span>
                </span>
              </div>
            </v-card>
          </v-col>
          <v-col :cols="sizeCard" v-if="resultFourthQuiz && Object.keys(resultFourthQuiz).length">
            <v-card>
              <div class="d-flex flex-column align-items-center">
                <img :src="require('@/assets/svg/stroop.svg')" alt="" width="150"/>
                <div class="font-weight-bold" style="font-size: 8px">
                  Stroop
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <span>
                  <span style="font-size: 20px">{{ resultFourthQuiz?.score }}</span>
                  <span style="font-size: 10px">/</span>
                  <span style="font-size: 10px">{{ numberQuestionForSubtest4 }}</span>
                </span>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-container class="mt-5">
          <v-row>
            <v-col cols="12" class="d-flex flex-column">
            <span class="font-weight-bold text-h6">
              SVO (Social Value Orientation)
            </span>
              <span>
              <span class="font-weight-bold text-body-2">Global Score: {{ resultFirstQuiz?.score }}</span>
              that corresponds to an emotional intelligence ({{ resultFirstQuiz?.decision.toUpperCase() }})
            </span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="d-flex flex-column">
            <span class="font-weight-bold text-h6">
              RME (Read My Eyes)
            </span>
              <span>
              <span class="font-weight-bold text-body-2">Global Score: {{ resultSecondQuiz?.score }}</span>
              that corresponds to an orientation ({{ resultSecondQuiz?.decision.toUpperCase() }})
            </span>
            </v-col>
          </v-row>
          <v-row v-if="resultThirdQuiz && Object.keys(resultThirdQuiz).length">
            <v-col cols="12" class="d-flex flex-column">
            <span class="font-weight-bold text-h6">
              Figures Projectives(Raven Dies)
            </span>
              <span>
              <span class="font-weight-bold text-body-2">Global Score: {{ resultThirdQuiz?.score }}</span>
              that corresponds to a capacity of fluid and quantitative reasoning ({{
                  resultThirdQuiz?.decision.toUpperCase()
                }})
            </span>
            </v-col>
          </v-row>
          <v-row v-if="resultFourthQuiz && Object.keys(resultThirdQuiz).length">
            <v-col cols="12" class="d-flex flex-column">
            <span class="font-weight-bold text-h6">
              Stroop
            </span>
              <span>
              <span class="font-weight-bold text-body-2">Global Score: {{ resultFourthQuiz?.score }}</span>
              that corresponds to a capacity for cognitive flexibility ({{ resultFourthQuiz?.decision.toUpperCase() }})
            </span>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-container>
    <v-container v-if="build_better_future">
      <BarChart
          :build_better_future=build_better_future
          :adapt_and_evolve=adapt_and_evolve
          :deliver_growth=deliver_growth
          :collaborate_to_win=collaborate_to_win
          :prioritise_customers=prioritise_customers
      />
    </v-container>
  </v-container>
</template>

<script>
import BarChart from "@/app/quiz/components/BarChart.vue";

// Prioritise Customers : ((SVO/RME + 40) x 2 )x50/100
// Collaborate to Win : ((SVO/RME + 80) x 4 )x15/100
// Deliver Growth : ((SVO/RME + 100) x 5 )x10/100
// Adapt & Evolve : ((SVO/RME + 60) x 3 )x20/100
// Build for a Better Future : ((SVO/RME + 200) x 2 )x5/100

export default {
  name: "Report",
  components: {BarChart},
  data() {
    return {
      sizeCard: 6,
      nameTest: null,
      name: null,
      phone: null,
      email: null,
      numberQuestionForSubtest1: null,
      numberQuestionForSubtest2: null,
      numberQuestionForSubtest3: null,
      numberQuestionForSubtest4: null,
      resultFirstQuiz: null,
      resultSecondQuiz: null,
      resultThirdQuiz: null,
      resultFourthQuiz: null,
      build_better_future: null,
      adapt_and_evolve: null,
      deliver_growth: null,
      collaborate_to_win: null,
      prioritise_customers: null,
    }

  },
  mounted() {
    const search = JSON.parse(this.$route.params.search);
    // console.log(search)
    this.nameTest = search?.nameTest;
    this.name = search?.nameUser;
    this.phone = search?.phoneUser;
    this.email = search?.emailUser;
    this.numberQuestionForSubtest1 = search?.numberQuestionForSubtest1;
    this.numberQuestionForSubtest2 = search?.numberQuestionForSubtest2;
    this.numberQuestionForSubtest3 = search?.numberQuestionForSubtest3;
    this.numberQuestionForSubtest4 = search?.numberQuestionForSubtest4;
    this.resultFirstQuiz = search?.resultFirstQuiz;
    this.resultSecondQuiz = search?.resultSecondQuiz;
    this.resultThirdQuiz = search?.resultThirdQuiz;
    this.resultFourthQuiz = search.resultFourthQuiz;
    this.prioritise_customers = search?.prioritise_customers;
    this.collaborate_to_win = search?.collaborate_to_win;
    this.deliver_growth = search?.deliver_growth;
    this.build_better_future = search?.build_better_future;
    this.adapt_and_evolve = search?.adapt_and_evolve;

    console.log(this.prioritise_customers)
    console.log(this.collaborate_to_win)
    console.log(this.deliver_growth)
    console.log(this.build_better_future)
    console.log(this.adapt_and_evolve)

    if (Object.keys(search.resultThirdQuiz).length) {
      this.sizeCard = 4
    }
    if (Object.keys(search.resultFourthQuiz).length) {
      this.sizeCard = 3
    }
  }
}
</script>

<style scoped>

/*.sidebar {*/
/*  background-image: url("https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80");*/
/*  background-position: 50%;*/
/*  height: 95vh;*/
/*}*/
</style>

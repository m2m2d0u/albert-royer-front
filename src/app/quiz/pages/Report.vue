<template>
  <v-container class="report-page">
    <v-container class="cover-page">
      <v-row>
        <v-col cols="3" class="sidebar"/>
        <v-col cols="9">
          <div>
            <img :src="require('@/assets/svg/logo.svg')" alt="" width="150"/>
          </div>
          <v-container style="margin-top: 40px" class="font-weight-bold d-flex flex-column align-items-center">
            <p style="font-size: 40px">REPORT</p>
          </v-container>
          <v-divider/>
          <v-container style="margin-top: 20px" class="font-weight-bold d-flex flex-column align-items-center">
            <p style="font-size: 30px">Professionals and managers</p>
          </v-container>
          <v-container style="margin-top: 40px" class="font-weight-bold d-flex flex-column align-items-center">
            <span style="font-size: 20px">Mamadou Abass DIALLO</span>
          </v-container>
          <v-container style="margin-top: 10px" class="d-flex flex-column align-items-center">
            <span style="font-size: 20px">Cité Batrain</span>
          </v-container>
          <v-container style="margin-top: 10px" class="d-flex flex-column align-items-center">
            <span style="font-size: 20px">77 449 66 56</span>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-container class="d-flex flex-column align-items-center gap-4">
        <div class="text-center text-h6 text-md-h5 text-xl-h4">
          According to the information recorded during the test, here is the psychological profile of
        </div>
        <p class="text-h6  text-md-h5 text-xl-h4">Mamadou Abass DIALLO</p>
      </v-container>
      <v-container>
        <v-row>
          <v-col cols="3">
            <v-card>
              <div class="d-flex flex-column align-items-center">
                <img :src="require('@/assets/svg/circle.svg')" alt="" width="150"/>
                <div class="font-weight-bold" style="font-size: 8px">
                  SVO(Social Value Orientation)
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <span>
                  <span style="font-size: 20px">4</span>
                  <span style="font-size: 10px">/</span>
                  <span style="font-size: 10px">40</span>
                </span>
              </div>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card>
              <div class="d-flex flex-column align-items-center">
                <img :src="require('@/assets/svg/eye-svgrepo-com.svg')" alt="" width="150"/>
                <div class="font-weight-bold" style="font-size: 8px">
                  RME(Read My Eyes)
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <span>
                  <span style="font-size: 20px">4</span>
                  <span style="font-size: 10px">/</span>
                  <span style="font-size: 10px">40</span>
                </span>
              </div>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card>
              <div class="d-flex flex-column align-items-center">
                <img :src="require('@/assets/svg/choice.svg')" alt="" width="150"/>
                <div class="font-weight-bold" style="font-size: 8px">
                  Figures projectives(Raven Dies)
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <span>
                  <span style="font-size: 20px">4</span>
                  <span style="font-size: 10px">/</span>
                  <span style="font-size: 10px">40</span>
                </span>
              </div>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card>
              <div class="d-flex flex-column align-items-center">
                <img :src="require('@/assets/svg/stroop.svg')" alt="" width="150"/>
                <div class="font-weight-bold" style="font-size: 8px">
                  Stroop
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <span>
                  <span style="font-size: 20px">4</span>
                  <span style="font-size: 10px">/</span>
                  <span style="font-size: 10px">40</span>
                </span>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "Report"
}
</script>

<style scoped>

.sidebar {
  background-color: #6ea1ef;
  height: 95vh;
}

.report-page {
  background-color: white;
}
</style>

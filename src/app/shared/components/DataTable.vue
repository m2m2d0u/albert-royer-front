<template>
  <v-container>
    <v-container class="mt-10 d-flex justify-content-between">
      <dialog-details :open-dialog="openDialog" @eventDialog="openDialog = $event"/>
      <!--
            <v-text-field
                label="Nom et/ou Prénom"
                outlined
                dense
            ></v-text-field>
      -->
      <v-select
          :items="['OUI','NON','YES','NO']"
          label="Filtrer par décision"
          outlined
          class="shrink"
          prepend-icon="mdi-filter"
          dense
      ></v-select>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="6" lg="4" xl="3" v-for="n in 8" :key="n">
          <v-card
              elevation="6"
              shaped>
            <v-container class="text-center text-h6">
              Nom et prénom
            </v-container>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <v-card elevation="2" rounded>
                    <v-container class="d-flex gap-3">
                      <v-icon color="green">mdi-checkbox-marked-circle-outline</v-icon>
                      <span class="text-caption text-md-body-2 font-weight-light">TBIEN</span>
                    </v-container>
                  </v-card>
                </v-col>
                <v-col cols="6">
                  <v-card elevation="2">
                    <v-container class="d-flex gap-3">
                      <v-icon color="yellow">mdi-alert-circle-outline</v-icon>
                      <span class="text-caption font-weight-light">ABIEN</span>
                    </v-container>
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <v-card elevation="2">
                    <v-container class="d-flex gap-3">
                      <v-icon color="green">mdi-checkbox-marked-circle-outline</v-icon>
                      <span class="text-caption font-weight-light">TBIEN</span>
                    </v-container>
                  </v-card>
                </v-col>
                <v-col cols="6">
                  <v-card elevation="2">
                    <v-container class="d-flex gap-3">
                      <v-icon color="red">mdi-close-outline</v-icon>
                      <span class="text-caption font-weight-light">PASSABLE</span>
                    </v-container>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-subtitle class="pb-0">
              <span class="font-weight-light text-sm-body-1">Conseil:</span>
            </v-card-subtitle>
            <v-card-actions class="d-flex justify-content-between">
              <v-btn
                  color="green"
                  text
              >
                Décision
              </v-btn>
              <v-btn
                  color="red"
                  text
                  @click="openDialog = true"
              >
                Plus de détails
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import DialogDetails from "@/app/shared/components/DialogDetails";

export default {
  name: "DataTable",
  components: {
    DialogDetails
  },
  data() {
    return {
      openDialog: false
    }
  }
}
</script>

<style scoped>

</style>

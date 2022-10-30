<template>
  <v-row justify="center">
    <v-dialog
        v-model="openDialog"
        persistent
        max-width="800"
    >

      <v-card>
        <v-card-title class="text-h5">
          Détails du test de &nbsp;<span class="light-green--text">MAMADOU ABASS DIALLO</span>
        </v-card-title>
        <v-container>
          <v-list-item-content class="">
            <v-list-item-title class="mb-5">
              <span class="font-weight-bold text-body-1">Nom:</span>
            </v-list-item-title>
            <v-list-item-title class="mb-5">
              <span class="font-weight-bold text-body-1">Prénom:</span>
            </v-list-item-title>
            <v-list-item-title class="mb-5">
              <span class="font-weight-bold text-body-1">Numéro de téléphone:</span>
            </v-list-item-title>
            <v-list-item-title>
              <span class="font-weight-bold text-body-1">Email:</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-container>
        <v-divider/>
        <v-container>
          <v-list-item-content class="">
            <v-list-item-title class="mb-5">
              <span class="font-weight-bold text-body-1">Nombre de bonnes réponses pour le premier test:</span>
            </v-list-item-title>
            <v-list-item-title class="mb-5">
              <span class="font-weight-bold text-body-1">Nombre de bonnes réponses pour le deuxième test:</span>
            </v-list-item-title>
            <v-list-item-title class="mb-5">
              <span class="font-weight-bold text-body-1">Nombre de bonnes réponses pour le troisième test:</span>
            </v-list-item-title>
            <v-list-item-title>
              <span class="font-weight-bold text-body-1">Nombre de bonnes réponses pour le quatrième test:</span>
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
    openDialog: Boolean
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

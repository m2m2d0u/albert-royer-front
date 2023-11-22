<template>
  <v-row justify="center">
    <v-dialog
        v-model="openDecisionDialog.value"
        persistent
        max-width="600px"
    >
      <v-card>
        <v-card-title class="d-flex justify-content-center">
          <h3>Add a decision</h3>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-select
                    v-model="decision"
                    :items="decisionList"
                    item-text="name"
                    item-value="value"
                    label="Decision"
                    outlined
                    class="shrink"
                    dense
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field
                    placeholder="Decision comment"
                    v-model="decisionComment"
                    dense
                    outlined
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="red darken-1"
              text
              @click="$emit('closeDialog', false)"
          >
            Cancel
          </v-btn>
          <v-btn
              color="blue darken-1"
              text
              @click="addDecision"
          >
            Modify
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "AddDecision",
  props: {
    openDecisionDialog: Object,
  },
  data() {
    return {
      decision: null,
      decisionComment: null,
      decisionList: [
        {name: 'Waiting', value: 'waiting'},
        {name: 'Rejected', value: 'rejected'},
        {name: 'Approved', value: 'approved'},
      ]
    }
  },
  async mounted() {
    await this.$store.dispatch('recipient/findRecipientTestById', this.openDecisionDialog.id)
    const recipient = this.$store.state.recipient.recipient;
    this.decision = recipient && recipient.decision || null
    this.decisionComment = recipient && recipient.decisionComment || null
  },
  methods: {
    addDecision() {
      this.$store.dispatch('recipient/addDecision', {
        id: this.openDecisionDialog.id,
        decision: this.decision,
        decisionComment: this.decisionComment
      }).then(() => {
        this.$emit('closeDialog', false)
        this.$emit('successUpdate', true)
        this.$notifySuccess("Add decision is added.");
      }).catch(error => {
        this.$store.state.user.isLoading = false
        this.$notifyError(error);
      })
      this.$router
    },
  }
}
</script>

<style scoped>

</style>

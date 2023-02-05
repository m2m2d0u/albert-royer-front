<template>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
    >
      <v-card>
        <v-card-title class="d-flex justify-content-center">
          <h3>{{ id ? "Update" : "Add new" }} Job</h3>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field dense outlined placeholder="Name" v-model="name"/>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field dense outlined placeholder="Email" v-model="description"/>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-select
                    v-model="subtest"
                    :items="tests"
                    item-text="name"
                    item-value="id"
                    label="Test"
                    outlined
                    class="shrink"
                    dense
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
              @click="closeDialog"
          >
            Cancel
          </v-btn>
          <v-btn
              color="blue darken-1"
              text
              @click="submit"
          >
            {{ id ? "Update" : "Add" }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "AddJob",
  props: {
    openDialog: Object,
    updateId: String
  },
  watch: {
    openDialog: {
      immediate: true,
      deep: true,
      handler(val) {
        this.dialog = val;
      }
    },
    updateId: {
      immediate: true,
      deep: true,
      handler(val) {
        this.id = val;
      }
    }
  },
  data() {
    return {
      dialog: false,
      name: null,
      description: null,
      subtest: null,
      id: null
    }
  },
  async mounted() {
    if (this.id) {
      await this.$store.dispatch('jobs/fetchById', this.id)
      this.name = this.$store.state.jobs.job.name;
      this.description = this.$store.state.jobs.job.description;
      this.subtest = this.$store.state.jobs.job.subtest;
    }
  },
  computed: {
    tests() {
      return this.$store.state.quiz.tests;
    },
  },
  methods: {
    addJob() {
      this.$store.dispatch('jobs/addJob', {
        name: this.name,
        description: this.description,
        subtest: this.subtest
      }).then(() => {
        this.$emit('updateDialogOpen', false)
        this.$notifySuccess("Job added.");
      }).catch((error) => {
        this.$store.state.user.isLoading = false
        if (error instanceof Array) {
          error.map(v => {
            this.$notifyError(v);
          })
        } else {
          this.$notifyError(error);
        }
      })
    },
    updateJob() {
      this.$store.dispatch('jobs/updateJob', {
        id: this.id,
        name: this.name,
        description: this.description,
        subtest: this.subtest
      }).then(() => {
        this.$emit('updateDialogOpen', false)
        this.$notifySuccess("Job modified.");
      }).catch((error) => {
        this.$store.state.user.isLoading = false
        if (error instanceof Array) {
          error.map(v => {
            this.$notifyError(v);
          })
        } else {
          this.$notifyError(error);
        }
      })
    },
    closeDialog() {
      this.$emit('updateDialogOpen', false)
      this.$emit('setId', null)
      this.id = null
      this.name = null;
      this.description = null;
      this.subtest = null;
    },
    submit() {
      if (this.id) {
        this.updateJob()
      } else {
        this.addJob()
      }
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <v-container>
    <add-job :openDialog="dialogOpen" :updateId="updateJobId" @updateDialogOpen="updateDialogOpen"
             @setId="updateJobId =null" v-if="dialogOpen || updateJobId"/>
    <v-container>
      <v-card>
        <v-card-title class="d-flex justify-content-center">
          <h3>List of jobs</h3>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="4">
              <v-text-field placeholder="Name" dense outlined v-model="search.name"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field placeholder="Description" dense outlined v-model="search.description"></v-text-field>
            </v-col>
            <v-col cols="4" class="d-flex align-items-center">
              <v-select
                  v-model="search.subtest"
                  :items="tests"
                  item-text="name"
                  item-value="id"
                  label="Filter by test"
                  outlined
                  class="shrink"
                  dense
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-content-between">
              <v-btn
                  dark
                  large
                  @click.prevent="createNewJob"
              >
                Add Job
                <v-icon dark>
                  mdi-plus
                </v-icon>
              </v-btn>
              <v-btn color="primary" large @click.prevent="onSearch">
                Search
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>

    <v-container>
      <v-card>
        <v-data-table
            :headers="headers"
            :items-per-page="10"
            :loading="isLoading"
            loading-text="Loading... Please wait"
            hide-default-footer
            :items="jobs">
          <template v-slot:body="{items}">
            <tbody>
            <tr
                v-for="(item,k) in items"
                :key="k">
              <td>{{ item.name }}</td>
              <td>{{ item.description }}</td>
              <td>{{ tests.find(test => test.id === item.subtest)?.name }}</td>
              <td>
                <v-btn x-small color="primary" class="ml-4 mr-4" @click="updateJob(item.id)">Modifier</v-btn>
                <v-btn x-small color="red">Supprimer</v-btn>
              </td>
            </tr>
            </tbody>
          </template>
        </v-data-table>
        <v-card-subtitle>
          <div class="text-center mt-3">
            <v-pagination
                v-model="page"
                circle
                :length="totalPages"
                :total-visible="7"
            />
          </div>
        </v-card-subtitle>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
import AddJob from "@/app/shared/components/forms/AddJob.vue";

export default {
  name: "ListJobs",
  components: {
    AddJob
  },
  data() {
    return {
      updateJobId: null,
      headers: [
        {text: 'Name', value: 'name'},
        {text: 'Description', value: 'email'},
        {text: 'Test', value: 'phone'},
        {text: 'Actions', value: 'actions'},
      ],
      dialogOpen: false,
      search: {
        name: '',
        description: '',
        subtest: ''
      },
      page: 1,
      itemsPerPage: 10,
    }
  },
  computed: {
    jobs() {
      return this.$store.state.jobs.jobs?.data;
    },
    tests() {
      return this.$store.state.quiz.tests;
    },
    totalPages() {
      if (this.itemsPerPage > this.totalItems) {
        return 1
      } else {
        return (this.totalItems % this.itemsPerPage === 0) ? this.totalItems / this.itemsPerPage : parseInt((this.totalItems / this.itemsPerPage)) + 1
      }
    },
    isLoading() {
      return this.$store.state.jobs.isLoading;
    }
  },
  methods: {
    onSearch() {
      this.$store.dispatch('jobs/fetchOrSearchJobs', {page: this.page, size: this.itemsPerPage, search: this.search})
    },
    createNewJob() {
      this.dialogOpen = true;
    },
    updateJob(id) {
      this.updateJobId = id;
      this.dialogOpen = true;
    },
    updateDialogOpen(event) {
      this.dialogOpen = event;
      this.$store.dispatch('jobs/fetchOrSearchJobs', {page: this.page, size: this.itemsPerPage, search: this.search})

    }
  }
}
</script>

<style scoped>

</style>

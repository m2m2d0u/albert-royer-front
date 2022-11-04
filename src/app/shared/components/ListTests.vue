<template>
  <v-container>
    <dialog-details :open-dialog="openDialog" :info="data" @eventDialog="openDialog = $event"/>
    <div class="center-screen" v-if="isLoading">
      <v-progress-circular
          :size="50"
          color="primary"
          indeterminate/>
    </div>
    <v-container v-else>
      <v-card elevation="4">
        <v-container>
          <v-container class="text-center mb-3 mt-3">
            <span class="text-h4">Recherche</span>
          </v-container>
          <v-row>
            <v-col cols="3">
              <v-text-field
                  v-model="search.name"
                  outlined
                  dense
                  placeholder="Nom et/ou Prénom"/>
            </v-col>
            <v-col cols="3">
              <v-select
                  :items="['Accepté','Rejeté']"
                  label="Filtrer par décision"
                  v-model="search.decision"
                  outlined
                  class="shrink"
                  dense
              ></v-select>
            </v-col>
            <v-col cols="3">
              <v-select
                  :items="tests"
                  label="Filtrer par sous-tests"
                  outlined
                  v-model="search.subtest"
                  class="shrink"
                  item-text="name"
                  item-value="id"
                  dense
              ></v-select>
            </v-col>
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
          </v-row>
          <v-row>
            <v-col cols="3">
              <v-text-field
                  v-model="search.infScore"
                  placeholder="Score minimum"
                  dense outlined/>
            </v-col>
            <v-col cols="3">
              <v-text-field
                  v-model="search.supScore"
                  placeholder="Score maximum"
                  dense
                  outlined/>
            </v-col>
          </v-row>
          <v-container class="d-flex justify-content-end">
            <v-btn color="primary" x-large @click.prevent="searchTest">
              Rechercher
            </v-btn>
          </v-container>
        </v-container>
      </v-card>
      <v-container class="mt-10">
        <v-row>
          <v-col cols="12" sm="12" md="6" lg="4" xl="3" v-for="(data, index) in recipients?.data" :key="index">
            <v-card
                elevation="6"
                shaped>
              <v-container class="text-center text-h6">
                {{ data?.user?.name }}
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
                    @click="moreInfo(data)"
                >
                  Plus de détails
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

export default {
  name: "DataTable",
  components: {
    DialogDetails
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
      search: {
        name: '',
        infScore: '',
        supScore: '',
        subtest: '',
        decision: '',
      },
      itemsPerPage: 6,
      openDialog: false,
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      dateFormatted: this.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
      menu1: false,
      data: null,
    }
  },
  methods: {
    moreInfo(data) {
      this.data = data;
      this.openDialog = true;
    },
    searchTest(){
      this.$store.dispatch('recipient/fetchOrSearchRecipient', {
        page: this.page,
        size: this.itemsPerPage,
        search: this.search
      })

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
  }
}
</script>

<style scoped>

</style>

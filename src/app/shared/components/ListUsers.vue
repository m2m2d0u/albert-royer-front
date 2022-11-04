<template>
  <v-container>
    <update-user :dialogUpdate="dialogUpdate" @closeDialog="closeDialog" v-if="dialogUpdate.value"/>
    <v-container>
      <v-card>
        <v-card-title class="d-flex justify-content-center">
          <h3>List of users</h3>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="3">
              <v-text-field placeholder="Firstname or/and Lastname" dense outlined v-model="search.name"></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field placeholder="Phone number" dense outlined v-model="search.phone"></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field placeholder="Email" dense outlined v-model="search.email"></v-text-field>
            </v-col>
            <v-col cols="3" class="d-flex align-items-center">
              <v-select
                  v-model="search.role"
                  :items="roles"
                  item-text="name"
                  item-value="id"
                  label="Filter by role"
                  outlined
                  class="shrink"
                  dense
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn color="primary" x-large @click.prevent="onSearch">
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
            :items="users">
          <template v-slot:body="{items}">
            <tbody>
            <tr
                v-for="(item,k) in items"
                :key="k">
              <td>{{ item.name }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.phone }}</td>
              <td>{{ roles.find(role => role.id === item.role)?.name }}</td>
              <td>
                <v-btn x-small color="primary" @click="updateUser(item.id)" class="ml-4 mr-4">Modifier</v-btn>
                <v-btn x-small color="red" @click="deleteUser(item.id)">Supprimer</v-btn>
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
import UpdateUser from "@/app/shared/components/forms/UpdateUser";

export default {
  name: "ListUsers",
  components: {UpdateUser},
  data() {
    return {
      dialogUpdate: {
        value: false,
        id: null
      },
      search: {
        name: '',
        phone: '',
        role: '',
        email: '',
      },
      page: 1,
      itemsPerPage: 10,
      headers: [
        {text: 'Firstname and Lastname', value: 'name'},
        {text: 'Email', value: 'email'},
        {text: 'Phone', value: 'phone'},
        {text: 'Role', value: 'role'},
        {text: 'Actions', value: 'actions'},
      ],
    }
  },
  watch: {
    page: {
      immediate: true,
      deep: true,
      handler() {
        this.$store.dispatch('user/getUsers', {page: this.page, size: this.itemsPerPage, search: this.search})
      }
    }
  },
  computed: {
    users() {
      return this.$store.state.user.data?.data;
    },
    totalItems() {
      return this.$store.state.user.data?.totalItems;
    },
    roles() {
      return this.$store.state.user.roles;
    },
    totalPages() {
      if (this.itemsPerPage > this.totalItems) {
        return 1
      } else {
        return (this.totalItems % this.itemsPerPage === 0) ? this.totalItems / this.itemsPerPage : parseInt((this.totalItems / this.itemsPerPage)) + 1
      }
    },
    isLoading() {
      return this.$store.state.user.isLoading;
    }
  },
  methods: {
    closeDialog(event) {
      this.dialogUpdate.value = event;
      this.page = 1;
    },
    updateUser(id) {
      this.dialogUpdate.value = true;
      this.dialogUpdate.id = id;
    },
    onSearch() {
      this.$store.dispatch('user/getUsers', {page: this.page, size: this.itemsPerPage, search: this.search})
    },
    deleteUser(id) {
      console.log("Update id:", id)
    }
  }
}
</script>

<style scoped>

</style>

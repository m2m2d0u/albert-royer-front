<template>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
    >
      <v-card>
        <v-card-title class="d-flex justify-content-center">
          <h3>Update user</h3>
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
                <v-text-field dense outlined placeholder="Email" v-model="email"/>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field dense outlined placeholder="Phone" v-model="phone"/>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-select
                    v-model="role"
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
              <v-col cols="12">
                <v-select
                    v-model="isVerified"
                    :items="[false, true]"
                    label="Is verified"
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
              @click="$emit('closeDialog', false)"
          >
            Annuler
          </v-btn>
          <v-btn
              color="blue darken-1"
              text
              @click="updateUser"
          >
            Modifier
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "UpdateUser",
  props: {
    dialogUpdate: Object,
  },
  watch: {
    dialogUpdate: {
      immediate: true,
      deep: true,
      handler(val) {
        this.dialog = val.value;
      }
    }
  },
  data() {
    return {
      dialog: false,
      name: null,
      phone: null,
      email: null,
      role: null,
      isVerified: null,
    }
  },
  computed: {
    roles() {
      return this.$store.state.user.roles;
    },
  },
  async mounted() {
    await this.$store.dispatch('user/getUserById', this.dialogUpdate.id)
    this.name = this.$store.state.user.user.name;
    this.phone = this.$store.state.user.user.phone;
    this.email = this.$store.state.user.user.email;
    this.role = this.$store.state.user.user.role;
    this.isVerified = this.$store.state.user.user.isVerified;
  },
  methods: {
    updateUser() {
      this.$store.dispatch('user/updateUser', {
        id: this.dialogUpdate.id,
        name: this.name,
        phone: this.phone,
        email: this.email,
        role: this.role
      }).then(() => {
        this.$emit("successUpdate", true)
        this.$emit('closeDialog', false)
        this.$notifySuccess("User modified.");
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
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      app
      permanent>
    <v-list-item class="mt-4">
      <v-list-item-content>
        <v-list-item-title>
          <v-container class="d-flex justify-content-between align-items-center">
            <span class="text-body-1">Page d'administration</span>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
          </v-container>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider/>
    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" v-on:click="navigate(item.name)" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-sm-body-1">
            {{ item.title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Drawer",
  data() {
    return {
      mini: false,
      drawer: true,
      items: [
        {title: 'Tableau de bord', icon: 'mdi-view-dashboard', name: 'dashboard'},
        {title: 'Liste des tests', icon: 'mdi-test-tube', name: 'listTests'},
        {title: 'Liste des utilisateurs', icon: 'mdi-account-box-outline', name: 'listUsers'},
      ]
    }
  },
  computed: {},
  methods: {
    navigate(name) {
      this.$emit('togglePage', name);
    }
  }
}
</script>

<style scoped>

</style>

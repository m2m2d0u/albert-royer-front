<template>
  <v-navigation-drawer app>
    <v-list-item class="mt-4">
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          Page d'administration
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-sm-body-1">{{ item.title }}</v-list-item-title>
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
      items: [
        {title: 'Tableau de bord', icon: 'mdi-view-dashboard'},
        {title: 'List des tests', icon: 'mdi-test-tube'},
      ],
      right: null,
    }
  },
  computed: {
    isLarge() {
      console.log(this.$vuetify.breakpoint.name !== 'sm')
      return this.$vuetify.breakpoint.name !== 'sm'
    },
    showDrawer() {
      return this.isLarge || this.drawer
    }
  },
}
</script>

<style scoped>

</style>

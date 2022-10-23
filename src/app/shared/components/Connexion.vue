<template v-cloak>
  <v-container class="row connexion-form">
    <v-container class="col-6">
      <register/>
    </v-container>
    <v-container class="col-6">
      <div class="bg-image"/>
    </v-container>
  </v-container>
</template>
<script>
import Register from "@/app/shared/components/forms/Register";

export default {
  name: "ConnexionPage",
  components: {Register},
  methods: {
    handleForm(data) {
      this.feedback = data
      setTimeout(() => {
        this.setComponent('feedback')
      }, 280)
    },
    isDisabled(btnName) {
      return (this.currentComponent === btnName)
    },
    setComponent(componentName) {
      if (this.currentComponent !== componentName) {
        this.currentComponent = componentName
      }
    }
  }
}
</script>

<style lang="css" scoped>

</style>

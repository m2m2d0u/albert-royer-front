<template>
  <v-row>
    <v-col cols="6">
      <div class="container-form">
        <div class="forms">
          <login v-if="level === 'login'" :level="level" @changeLevel="level = $event"/>
          <register v-if="level === 'register'" @changeLevel="level = $event"/>
          <forget-password v-if="level === 'forgetPassword'" @changeLevel="level = $event"/>
        </div>
      </div>
    </v-col>
    <v-col cols="6" class="no-gutters d-none d-md-flex">
      <div class="bg-image"/>
    </v-col>
  </v-row>
</template>
<script>
import Login from "@/app/shared/components/forms/Login";
import Register from "@/app/shared/components/forms/Register";
import ForgetPassword from "@/app/shared/components/forms/ForgetPassword";

export default {
  name: "ConnexionPage",
  components: {
    Login,
    Register,
    ForgetPassword
  },
  data() {
    return {
      level: 'login',
      login: true,
      register: false,
      forgetPassword: false,
    }
  },
  methods: {}
}
</script>

<style lang="css" scoped>

</style>

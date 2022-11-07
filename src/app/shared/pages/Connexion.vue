<template>
  <div class="bg-image no-gutters">
    <div class="container-form">
      <div class="forms">
        <login v-if="level === 'login'" :level="level" @changeLevel="level = $event"/>
        <register v-if="level === 'register'" @changeLevel="level = $event"/>
        <forget-password v-if="level === 'forgetPassword'" @changeLevel="level = $event"/>
      </div>
    </div>
  </div>
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
    }
  },
  methods: {}
}
</script>

<style lang="css" scoped>
</style>

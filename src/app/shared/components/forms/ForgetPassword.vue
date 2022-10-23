<template>
  <v-container class="input-field d-flex flex-column">
    <span>Email:</span>
    <input class="form-control" id="email" :value="forgotPassword.email"
           placeholder="Email">
  </v-container>
</template>

<script>
/*import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().email().required(),
});*/
export default {
  name: "ForgetPassword",
  props: {
    forgotPasswordProps: Object
  },
  watch: {
    forgotPasswordProps: {
      immediate: true,
      deep: true,
      handler(val){
        this.forgotPassword = val
      }
    },
    forgotPassword: {
      immediate: true,
      deep: true,
      handler(val){
        this.$emit('handleChange', val)
      }
    }
  },
  data() {
    return {
      forgotPassword: {
        email: ''
      }
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>

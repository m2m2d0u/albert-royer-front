<template>
  <div>
    <md-dialog-confirm
        :md-active.sync="openDialog"
        md-title="Confirmation"
        md-content="Etes-vous sûr de confirmer votre choix?"
        md-confirm-text="Oui"
        md-cancel-text="Non"
        @md-cancel="onCancel"
        @md-confirm="onConfirm"/>
  </div>
</template>

<script>
export default {
  name: 'DialogConfirm',
  props: {
    active: Boolean,
  },
  watch: {
    active: {
      immediate: true,
      deep: true,
      handler(val) {
        this.openDialog = val
      }
    }
  },
  data: function () {
    return {
      openDialog: false,
    }
  },
  methods: {
    onConfirm() {
      this.$emit("resultOfConfirmation", true)
    },
    onCancel() {
      this.$emit("resultOfConfirmation", false)
    }
  }
}
</script>

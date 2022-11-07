<template>
  <div class="content-circle">
    <p class="circle" :style="circleStyles"></p>
  </div>
</template>

<script>
export default {
  name: "CircleComponent",
  props: {
    isActive: Boolean,
  },
  computed: {
    circleStyles() {
      return {
        "background-color": this.isActive ? 'green' : 'black',
        height: this.isActive ? '30px' : '30px',
        width: this.isActive ? '20px' : '10px'
      };
    }
  }
}
</script>

<style scoped>
.circle {
  border-radius: 50%;
}
.content-circle{
  margin-left: 6px;
}
</style>
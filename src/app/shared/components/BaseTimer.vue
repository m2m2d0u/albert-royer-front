<template>
  <vue-countdown
      :time="timeLeft"
      v-slot="{ days, hours, minutes, seconds }"
      class="timer" @end="countEnded">
    <!--    Time Remaining：{{ days }} days, {{ hours }} hours, {{ minutes }} minutes, {{ seconds }} seconds.-->
    <p :style="{color: changeColor(seconds)}">
      Temps restant：{{ minutes }} minutes, {{ seconds }} seconds.
    </p>
  </vue-countdown>
</template>
<script>
import VueCountdown from '@chenfengyuan/vue-countdown';

export default {
  name: "BaseTimer",
  components: {
    VueCountdown,
  },
  props: {
    timeLeft: {
      type: Number,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    countEnded() {
      this.$emit("countEnded", true);
    },
    changeColor(value) {
      if (value < 10)
        return '#A10035';
      else if (value >= 10 && value <= 20)
        return '#FEC260';
      else
        return 'black';
    }
  }
}
</script>

<style scoped>
.timer {
  font-size: 24px;
  font-weight: 900;
}
</style>

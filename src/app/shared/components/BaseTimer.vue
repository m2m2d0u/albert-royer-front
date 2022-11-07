<template>
  <v-container class="position-static">
    <vue-countdown
        :time="time"
        v-slot="{ days, hours, minutes, seconds }"
        class="position-absolute top-0 end-0" @end="countEnded">
      <!--    Time Remaining：{{ days }} days, {{ hours }} hours, {{ minutes }} minutes, {{ seconds }} seconds.-->
      <p :style="{color: changeColor(seconds)}"
         class="text-h6 text-md-body-2 text-sm-body-1 text-xs-body-1 text-xl-body-1">
        Temps restant：{{ minutes }} minutes, {{ seconds }} seconds.
      </p>
    </vue-countdown>
  </v-container>
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
  watch: {
    timeLeft: {
      immediate: true,
      deep: true,
      handler(val) {
        this.time = val * 1000;
      }
    }
  },
  data() {
    return {
      time: null
    };
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

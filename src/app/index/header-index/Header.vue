<template>
  <div class="container-fluid header p-0 mb-5" style="background-color: #1E1450 ">
    <div class="row g-0 align-items-center flex-column-reverse flex-lg-row">
      <div class="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
        <p class="display-3 text-white mb-5">DP WORLD Test Personnality</p>
        <div class="row g-5">
          <div class="col-6">
            <div class="border-start border-light ps-4">
              <h2 class="text-white mb-1" data-toggle="counter-up">SVO(Social Value Orientation)</h2>
              <p class="text-light mb-0" style="font-size: 12px">Narrow self-interest is often used as a simplifying
                assumption when studying
                people making decisions in social contexts. Nonetheless, people exhibit a wide range of different
                motivations when choosing among interdependent outcomes. Measuring the magnitude of the concern people
                have for others, sometimes called Social Value Orientation (SVO), has been an interest of many social
                scientists for decades and several different measurement methods have been developed thus far.</p>
            </div>
          </div>
          <div class="col-6">
            <div class="border-start border-light ps-4">
              <h2 class="text-white mb-1" data-toggle="counter-up">RME(Read My Eyes)</h2>
              <p class="text-light mb-0" style="font-size: 12px">
                Social Intelligence Test.
                How well can you read emotions of others just by looking at their eyes?
                Find out and compare yourself to others.
                The ability to read the emotions of others is linked to "social intelligence" which, in turn, is linked
                to performance on team-based problem-solving tasks
              </p>
            </div>
          </div>
        </div>
        <div class="row g-2">
          <div class="col-6">
            <div class="border-start border-light ps-4">
              <h2 class="text-white mb-1" data-toggle="counter-up">Figures Projectives(Raven Dies)</h2>
              <p class="text-light mb-0" style="font-size: 12px">
                This test evaluates fluent intelligence as well as the level of understanding and it allows you to see
                people who can anticipate complex problems and solve them through easy and affordable paths.
                What is this test we have the possibility of having a reference value with the quantitative notes
                obtained the absolute right and this will therefore allow us to draw a devolution court of collective
                intelligence.
              </p>
            </div>
          </div>
          <div class="col-6">
            <div class="border-start border-light ps-4">
              <h2 class="text-white mb-1" data-toggle="counter-up">Stroop</h2>
              <p class="text-light mb-0" style="font-size: 12px">
                This part of the test makes it possible to evaluate the functions of inhibition of categorization of
                planning as well as the functions with tension in order to allow to see the people most compatible with
                this position in the management and the risk is very important
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
        <v-carousel
            cycle
            height="90vh"
            show-arrows-on-hover
            delimiter-icon="mdi-minus">
          <v-carousel-item
              v-for="(item, i) in items"
              :src="item"
              :key="i">
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderIndex',
  data() {
    return {
      items: [
        {
          src: require('@/assets/img/dp3.png'),
        },
        {
          src: require('@/assets/img/dp6.jpg'),
        },
        {
          src: require('@/assets/img/dp5.jpg'),
        },
      ],
    }
  }
}
</script>

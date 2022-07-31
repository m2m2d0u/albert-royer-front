<template>
  <v-container class="mt-10">
    <div class="text-center mb-10">
      <h1>Test 1</h1>
    </div>
    <div>
      <md-steppers :md-active-step.sync="active" md-vertical md-linear>
        <!--        First quiz concerning the question for slider-->
        <md-step id="first" md-label="Premier test" md-description="Obligatoire" :md-editable="true"
                 :md-done.sync="first">
          <QuizForSlider :data="firstQuiz"/>
          <div class="next-button">
            <!--              <div></div>-->
            <md-button class="md-raised md-primary change-page" @click="setDone('first', 'second')">Suivant
            </md-button>
          </div>
        </md-step>
        <!--        Second quiz, when we purpose some picture and the recipient take some response by different choice-->
        <md-step id="second" md-label="Deuxième test" md-description="Obligatoire" :md-error="secondStepError"
                 :md-editable="true"
                 :md-done.sync="second">
          <quiz-select-response-for-image :data="secondQuiz"/>
          <div class="next-button">
            <md-button class="md-raised md-primary change-page" @click="setDone('second', 'third')">Suivant</md-button>
          </div>
          <!--          <md-button class="md-raised md-primary" @click="setError()">Set error!</md-button>-->
        </md-step>
        <!--Third quiz, we give to the recipient two different pictures and the response depend for his choice-->
        <md-step id="third" md-label="Troisième test" md-description="Obligatoire" :md-editable="true"
                 :md-done.sync="third">
          <quiz-for-depending-image :data="thirdQuiz" :choice="showChoice" @openDialogForConfirm="openDialogForConfirm"/>
          <Confirmation :active="openDialog" @resultOfConfirmation="resultOfConfirmation"/>
          <div class="next-button">
            <md-button class="md-raised md-primary change-page" @click="setDone('third', 'fourth')">Suivant</md-button>
          </div>
        </md-step>
        <md-step id="fourth" md-label="Quatrième test" md-description="Obligatoire" :md-editable="true"
                 :md-done.sync="fourth">
          <quiz-image-color :data="fourthQuiz"/>
          <div class="next-button">
            <md-button class="md-raised md-primary change-page" @click="setDone('fourth')">Terminer</md-button>
          </div>
        </md-step>
      </md-steppers>
    </div>

  </v-container>
</template>

<script>
// import VueGallery from 'vue-gallery';
import Confirmation from "@/app/shared/components/Confirmation";
import QuizForSlider from "@/app/quiz/components/QuizForSlider";
import QuizSelectResponseForImage from "@/app/quiz/components/QuizSelectResponseForImage";
import QuizForDependingImage from "@/app/quiz/components/QuizForDependingImage";
import QuizImageColor from "@/app/quiz/components/QuizImageColor";

export default {
  name: "index",
  components: {
    // 'gallery': VueGallery
    Confirmation,
    QuizForSlider,
    QuizSelectResponseForImage,
    QuizForDependingImage,
    QuizImageColor
  },
  data: function () {
    return {
      active: 'first',
      showChoice: true,
      first: false,
      second: false,
      third: false,
      secondStepError: null,
      openDialog: false,
      index: null,
      firstQuiz: [
        {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placea nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placea nulla.",
          data: [
            {isActive: false, index: 0, sup: 30, inf: 80},
            {isActive: false, index: 1, sup: 35, inf: 70},
            {isActive: false, index: 2, sup: 40, inf: 60},
            {isActive: false, index: 3, sup: 45, inf: 50},
            {isActive: false, index: 4, sup: 50, inf: 40},
            {isActive: false, index: 5, sup: 55, inf: 30},
            {isActive: false, index: 6, sup: 60, inf: 20},
            {isActive: false, index: 7, sup: 65, inf: 10},
            {isActive: false, index: 8, sup: 70, inf: 0},
          ]
        },
        {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placea nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placea nulla.",
          data: [
            {isActive: false, index: 0, sup: 85, inf: 85},
            {isActive: false, index: 1, sup: 85, inf: 76},
            {isActive: false, index: 2, sup: 85, inf: 68},
            {isActive: false, index: 3, sup: 85, inf: 59},
            {isActive: false, index: 4, sup: 50, inf: 50},
            {isActive: false, index: 5, sup: 85, inf: 41},
            {isActive: false, index: 6, sup: 85, inf: 33},
            {isActive: false, index: 7, sup: 85, inf: 24},
            {isActive: false, index: 8, sup: 85, inf: 15},
          ]
        },
        {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placea nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placea nulla.",
          data: [
            {isActive: false, index: 0, sup: 85, inf: 15},
            {isActive: false, index: 1, sup: 87, inf: 19},
            {isActive: false, index: 2, sup: 89, inf: 24},
            {isActive: false, index: 3, sup: 91, inf: 28},
            {isActive: false, index: 4, sup: 93, inf: 33},
            {isActive: false, index: 5, sup: 94, inf: 37},
            {isActive: false, index: 6, sup: 96, inf: 41},
            {isActive: false, index: 7, sup: 98, inf: 46},
            {isActive: false, index: 8, sup: 100, inf: 50},
          ]
        }
      ],
      secondQuiz: [
        {
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." +
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." +
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." +
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          response: [
            {title: "TRISTE", value: false},
            {title: "HEUREUX", value: false},
            {title: "ENERVE", value: false},
            {title: "DECU", value: false}
          ],
          type: 'one',
          index: null,
          images: require("@/assets/img/image-1.png"),
        },
        {
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." +
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." +
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." +
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          response: [
            {title: "TRISTE", value: false},
            {title: "HEUREUX", value: false},
            {title: "ENERVE", value: false},
            {title: "DECU", value: false}
          ],
          type: 'multiple',
          index: null,
          images: require("@/assets/img/image-2.png"),
        },
        {
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." +
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." +
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." +
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          response: [
            {title: "TRISTE", value: false},
            {title: "HEUREUX", value: false},
            {title: "ENERVE", value: false},
            {title: "DECU", value: false}
          ],
          type: 'multiple',
          index: null,
          images: require("@/assets/img/image-3.png"),
        },
        /*        {
                  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." +
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." +
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." +
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                  response: [
                    {title: "TRISTE", value: false},
                    {title: "HEUREUX", value: false},
                    {title: "ENERVE", value: false},
                    {title: "DECU", value: false}
                  ],
                  type: 'one',
                  index: null,
                  images: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmlnJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                },
                {
                  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." +
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." +
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." +
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                  response: [
                    {title: "TRISTE", value: false},
                    {title: "HEUREUX", value: false},
                    {title: "ENERVE", value: false},
                    {title: "DECU", value: false}
                  ],
                  type: 'one',
                  index: null,
                  images: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmlnJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                },*/

      ],
      thirdQuiz: {
        images: [
          {value: require('@/assets/img/choice-1.png'), choice: null, index: 'first'},
          {value: require('@/assets/img/choice-2.png'), choice: null, index: 'second'},
        ],
        first: [
          {
            text: "Premiere image",
          }
        ],
        second: [
          {
            text: "Deuxième image",
          }
        ]
      },
      fourthQuiz: [
        {
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." +
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." +
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." +
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          response: [
            {title: "VRAI", value: false},
            {title: "FAUX", value: false},
          ],
          type: 'one',
          index: null,
          images: require("@/assets/img/color-image.jpg"),
        }
      ],
    };
  },
  methods: {
    setDone(id, index) {
      this[id] = true
      this.secondStepError = null
      if (index) {
        this.active = index
      }
    },
    setError() {
      this.secondStepError = 'This is an error!'
    },
    resultOfConfirmation(value) {
      if (value === true)
        this.showChoice = false;
      this.openDialog = false;
    },
    openDialogForConfirm(value) {
      if (value)
        this.openDialog = value;
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
}


.next-button {
  margin-top: 70px;
  display: flex;
  justify-content: flex-end;
}

.change-page {
  width: 150px
}
</style>
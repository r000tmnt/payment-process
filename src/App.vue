<template>
  <div @click="ifOpen" class="h-100">
    <Header :lang="$i18n.locale" :open="open" @openSelection="openCustomLanguageSelect"></Header>

    <!-- 
      stpes is an array contain with various property. 
      FinishStep is a emit event for final step, which will change the value for result props to display 
    -->
    <Stepper :steps="steps" @finishStep="toNextStep" :result="result" />    
  </div>
</template>

<script>
  import Header from './components/header.vue';
  import Stepper from './components/stepper.vue';
  import Step_1 from './components/step_1.vue';
  import Step_2 from './components/step_2.vue';

  import { shallowRef } from 'vue';
  import axios from 'axios';

  const step_1 = shallowRef(Step_1)
  const step_2 = shallowRef(Step_2)

  export default {
    components: {
      Header,
      Stepper,
      Step_1,
      Step_2
    },
    data(){
      return{
        // Wether to open the language selection or not
        open: false,

        /* 
          title: the name of the step
          desc: deacription of the step,
          component: the content of the step
          finish: a boolean to decide if the step if done or not
        */
        steps: [
          {
            title: 'data',
            desc: 'data-desc',
            component: step_1,
            finish: false
          },
          {
            title: 'payment',
            desc: 'payment-desc',
            component: step_2,
            finish: false
          }
        ],
        /*
          the final result to display
        */
        result: {}
      }
    },
    methods: {
      ifOpen(){
        if(this.open) this.open = false
      },

      openCustomLanguageSelect(open){
        this.open = open
      },

      toNextStep(val, index, finish){
          
        // If the current step is the last one
        if(index === (this.steps.length - 1)){
          let payload = {}

          val.forEach((field) => {
            payload = { ...payload, ...field }
          });

          // calling api
          this.pushData(payload)          
        }else{
          this.steps[index].finish = finish
        }
      },

      async pushData(payload){
        try {
            let result = await axios.post('https://run.mocky.io/v3/5fd5b0a0-7cec-4ccf-bdec-b9c99c78e29f', payload)
            // console.log('result :>>>', result)

            if(result.data){
              // Rewtire the result to pass down as props
              this.result = {
                title: {
                  en: result.data.title.en,
                  cn: result.data.title.zh_CN
                },
                desc: {
                  en: result.data.message.en,
                  cn: result.data.message.zh_CN
                }
              }

              this.steps[ this.steps.length - 1 ].finish = true
            }

        } catch (error) {
            console.log(error)
        }
      }
    }
  }
</script>
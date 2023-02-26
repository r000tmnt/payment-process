<template>
  <Header :lang="$i18n.locale"></Header>

  <Stepper :steps="steps" @finishStep="toNextStep" :result="result" />
</template>

<script>
  import Header from './components/header.vue';
  import Stepper from './components/stepper.vue';
  import Step_1 from './components/step_1.vue';
  import Step_2 from './components/step_2.vue';

  import { shallowRef } from 'vue';
  import axiosClient from './axios';

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
        result: {}
      }
    },
    methods: {
      toNextStep(val, index, finish){
          
        // If the current step is the last one
        if(index === (this.steps.length - 1)){
          let payload = {}

          val.forEach((field) => {
            payload = { ...payload, ...field }
          });

          this.pushData(payload)          
        }else{
          this.steps[index].finish = finish
        }
      },

      async pushData(payload){
        try {
            let result = await axiosClient.post('5fd5b0a0-7cec-4ccf-bdec-b9c99c78e29f', payload)
            // console.log('result :>>>', result)

            this.result = {
              title: {
                en: result.title.en,
                cn: result.title.zh_CN
              },
              desc: {
                en: result.message.en,
                cn: result.message.zh_CN
              }
            }

            this.steps[ this.steps.length - 1 ].finish = true

        } catch (error) {
            console.log(error)
        }
      }
    }
  }
</script>
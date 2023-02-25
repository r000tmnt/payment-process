<template>
  <Header :lang="$i18n.locale"></Header>

  <Stepper :steps="steps" @finishStep="toNextStep" />
</template>

<script>
  import Header from './components/header.vue';
  import Stepper from './components/stepper.vue';
  import Step_1 from './components/step_1.vue';
  import Step_2 from './components/step_2.vue';

  import { shallowRef } from 'vue';

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
            title: this.$i18n.t('data'),
            desc: this.$i18n.t('data-desc'),
            component: step_1,
            finish: false
          },
          {
            title: this.$i18n.t('pay'),
            desc: this.$i18n.t('pay-desc'),
            component: step_2,
            finish: false
          }
        ]
      }
    },
    methods: {
      toNextStep(step){
        this.steps[step.index].finish = step.finish
      }
    }
  }
</script>
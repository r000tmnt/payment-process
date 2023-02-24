<template>
  <Header :lang="$i18n.locale"></Header>

  <!-- <Stepper /> -->
  <StepProgress />
</template>

<script>
  import Header from './components/header.vue';
  // import Stepper from './components/stepper.vue';
  import StepProgress from 'vue-step-progress';

  export default {
    components: {
      Header,
      // Stepper
      StepProgress
    }
  }
</script>
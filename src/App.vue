<template>
  <Header :lang="language"></Header>
</template>

<script>
  import Header from './components/header.vue';

  export default {
    components: {
      Header
    },
    data(){
      return {
        language: 'EN'
      }
    }
  }
</script>
<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/shared/NavBar.vue';
import FooterSection from './components/shared/FooterSection.vue';
</script>

<template>
    <NavBar />
  
  

  <RouterView />
  <FooterSection/>
</template>

<style scoped>

</style>

<script setup>
import { RouterView, useRoute } from 'vue-router'
import NavBar from './components/shared/NavBar.vue';
import ScrollToTop from './components/shared/ScrollToTop.vue';


const route = useRoute(); // Access the current route

</script>

<template>
  <div :class="route.path === '/selected-works' ? 'selected-works-bg' : 'default-bg'">

    <NavBar />
    <RouterView />
    <ScrollToTop />
  </div>

 
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}

/* Default background color for other views */
.default-bg {
  background-color: #ededed; /* #ededed */
}

/* Background color for Selected Works view */
.selected-works-bg {
  background-color: #161225; 
}
</style>

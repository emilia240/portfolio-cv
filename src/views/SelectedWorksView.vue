<template>
  <div class="selected-works">
    <h1>This is supposed to be the SelectedWorks page</h1>
  </div>


  <!-- Idea for the selected works page -->
  <div v-if="tab == 'personal'">personal
    
  </div>

  <div v-else-if="tab == 'school'">school

  </div>
  
  
  <div v-else="tab == 'initial'">landing

  </div>
</template>

<script setup>
import { ref } from 'vue'

let tab = ref("initial")
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
  }
}
</style>

<template>
    <footer
      :class="[
        'w-full !py-4 flex flex-col items-center justify-center text-center',
        bgClass
      ]"
    >
      <!-- First Line: Thank YOU -->
      <div class="flex flex-row items-baseline">
        <h2 class="text-2xl md:text-4xl font-forum" :class="textClass">Thank</h2>
        <h2 class="text-2xl md:text-4xl font-vina-sans" :class="textClass">YOU!</h2>
      </div>
  
      <!-- Second Line: Looking forward -->
      <p class="!mt-2  text-lg md:text-xl font-montserrat" :class="textClass">
        Looking forward to working with you!
      </p>
  
      <!-- Divider Line -->
      <div class="w-full h-[1px] !my-3" :class="dividerClass"></div>
  
      <!-- Third Line: Copyright -->
      <p class="text-sm md:text-xs font-montserrat" :class="textClass">
        © 2025. EMILIA MARIA SCORȚANU. ALL RIGHTS RESERVED.
      </p>
    </footer>
  </template>


<script setup>
import { computed } from 'vue';

// Accept a prop to switch color schemes
const props = defineProps({
  variant: {
    type: String,
    default: 'home', // or 'selected'
  },
});

// Color logic
const bgClass = computed(() =>
  props.variant === 'home' ? 'bg-[#161225]' : 'bg-[#DAC6E1]'
);
const textClass = computed(() =>
  props.variant === 'home' ? 'text-[#DAC6E1]' : 'text-[#161225]'
);
const dividerClass = computed(() =>
  props.variant === 'home' ? 'bg-[#DAC6E1]' : 'bg-[#161225]'
);

</script>



<style scoped>
.font-forum {
  font-family: "Forum", serif;
}
.font-vina-sans {
  font-family: "Vina Sans", sans-serif;
  font-weight: normal;
}
.font-montserrat {
  font-family: "Montserrat", sans-serif;
}
</style>
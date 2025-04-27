<template>
    <svg
      :class="svgClass"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      fill="none"
      :stroke="color"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        v-if="direction === 'right'"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
      <path
        v-else-if="direction === 'left'"
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
      <path
        v-else-if="direction === 'down'"
        d="M5 10l7 7m0 0l7-7m-7 7V3"
      />
    </svg>
  </template>
  
  <script setup>
  const props = defineProps({
    direction: { 
        type: String, 
        default: 'right'
     }, // 'right', 'left', 'down'
    color: {
         type: String, 
         default: '#E476E4'
     },
    size: { 
        type: [Number, String],
        default: 28
     },
    svgClass: { 
        type: String,
        default: ''
     }
  });
  </script>
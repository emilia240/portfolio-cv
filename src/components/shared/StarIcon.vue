<template>
    <svg
      :width="size"
      :height="size"
      viewBox="0 0 94.82 94.82"
      xmlns="http://www.w3.org/2000/svg"
      :style="{ color }"
      v-bind="$attrs"
    >
      <path
        d="M94.82,47.41c-32.02,8.5-38.91,15.38-47.41,47.41C38.91,62.79,32.02,55.9,0,47.41,32.02,38.91,38.91,32.02,47.41,0c8.5,32.02,15.38,38.91,47.41,47.41Z"
        :fill="color"
      />
    </svg>
  </template>
  
  <script setup>
  defineProps({
    color: { 
        type: String, 
        default: '#6381FF' 
    },
    size: { 
        type: [String, Number],
         default: 40 
    }
  });
  </script>
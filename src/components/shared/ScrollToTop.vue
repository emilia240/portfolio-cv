<template>
    <button
      class="scroll-to-top fixed right-6 bottom-8 z-50 bg-[#6381FF] hover:bg-[#E476E4] transition-colors w-14 h-14 rounded-lg flex items-center justify-center shadow-lg"
      @click="scrollToTop"
      aria-label="Scroll to top"
    >
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 19V5M12 5L6 11M12 5l6 6"
          stroke="#161225"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </template>
  
  <script setup>
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  </script>

  <style scoped>
  
  </style>
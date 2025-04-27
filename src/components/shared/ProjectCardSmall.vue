<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="project-card-small border-2 border-[#6381FF] rounded-lg p-4">
    <!-- Image Slider -->
    <div class="image-slider h-32 bg-gray-100">
      <img 
        :src="project.images[0]" 
        :alt="project.title" 
        class="w-full h-full object-cover"
      />
    </div>
    <!-- Title -->
    <div class="mt-2 text-center">
      <h3 class="text-lg font-bold">{{ project.title }}</h3>
    </div>
  </div>
</template>
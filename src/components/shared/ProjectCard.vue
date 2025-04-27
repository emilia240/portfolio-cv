<script setup>
import { ref, onMounted } from 'vue';

defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const currentImageIndex = ref(0);

onMounted(() => {
  setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % project.images.length;
  }, 3000); // Change image every 3 seconds
});
</script>

<template>
  <div 
    class="project-card border-2 rounded-lg overflow-hidden"
    :class="project.type === 'school' ? 'border-[#E476E4]' : 'border-[#6381FF]'"
  >
    <!-- Image Slider -->
    <div class="image-slider h-48 bg-gray-100">
      <img 
        :src="project.images[currentImageIndex]" 
        :alt="project.title" 
        class="w-full h-full object-cover"
      />
    </div>
    <!-- Title and Subtitle -->
    <div class="p-4 text-center">
      <h3 class="text-lg font-bold">{{ project.title }}</h3>
      <p class="text-sm text-gray-500">{{ project.subtitle }}</p>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}
</style>
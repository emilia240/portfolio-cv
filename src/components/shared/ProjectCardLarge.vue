<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="project-card-large border-2 border-[#E476E4] rounded-lg p-4 grid grid-cols-2 gap-4">
    <!-- Image Slider -->
    <div class="image-slider">
      <img 
        v-for="(image, index) in project.images" 
        :key="index" 
        :src="image" 
        :alt="project.title" 
        class="w-full h-48 object-cover"
      />
    </div>
    <!-- Project Details -->
    <div>
      <h3 class="text-xl font-bold">{{ project.title }}</h3>
      <p class="text-sm text-gray-500">{{ project.subtitle }}</p>
      <p class="mt-2">{{ project.description }}</p>
      <div class="mt-4">
        <a 
          v-for="(tool, index) in project.tools" 
          :key="index" 
          href="#" 
          class="text-sm text-blue-500 hover:underline"
        >
          {{ tool }}
        </a>
      </div>
    </div>
  </div>
</template>
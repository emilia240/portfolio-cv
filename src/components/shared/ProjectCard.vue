<script setup>
import { ref, onMounted } from 'vue';

const { project } = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const currentImageIndex = ref(0);

onMounted(() => {
  if (project.images.length > 1) {
    setInterval(() => {
      currentImageIndex.value = (currentImageIndex.value + 1) % project.images.length;
    }, 3000);
  }
});
</script>

<template>
  <div 
    class="project-card !p-4 border-2 rounded-lg overflow-hidden cursor-pointer !mx-[2rem]"
    :class="project.type === 'school' ? 'border-[#E476E4]' : 'border-[#6381FF]'"
    @click="$emit('redirect', project.type)" ><!-- Emit event to redirect -->
    <!-- Image Slider -->
    <div class="image-slider h-50 md:h-65 ">
      <img 
        :src="project.images[currentImageIndex]" 
        :alt="project.title" 
        class="w-full h-full object-contain" 
      />
    </div>
    <!-- Title and Subtitle -->
    <div class="!p-4 flex flex-col justify-center items-center text-center">
      <h2 
        class="md:text-4xl sm:text-10  font-vina-sans !mb-2"
        :style="{ color: project.type === 'school' ? '#E476E4' : '#6381FF' }"
      >
        {{ project.title }}
      </h2>
      <p 
        class="md:text-base sm:text-4 font-montserrat"
        :style="{ color: project.type === 'school' ? '#E476E4' : '#6381FF' }"
      >
        {{ project.subtitle }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.font-vina-sans {
  font-family: 'Vina Sans', sans-serif;
  font-weight: normal;
  text-transform: uppercase;
}

.font-montserrat {
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
}

.project-card {
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>
<script setup>
import { ref, onMounted } from 'vue';
import ArrowIcon from '@/components/shared/ArrowIcon.vue';

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

const showFullDescription = ref(false); // Add toggle for description

</script>




<template>
  <div class="project-card-small border-2 border-[#6381FF] rounded-lg !p-4 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 !mx-[2rem]">
    <!-- Image Slider -->
    <div class="image-slider !p-4">
      <img 
        :src="project.images[currentImageIndex]" 
        :alt="project.title" 
        class="w-full md:h-130 object-contain"
      />
    </div>
    <!-- Project Details -->
    <div class="flex flex-col justify-between gap-y-[0.5rem] !p-4">
      <div class="flex flex-col ">
        <h3 class="title !mb-[0.5rem] md:text-4xl sm:text-10 font-vina-sans text-[#6381FF]">{{ project.title }}</h3>
        <p class="subtitle !mb-[0.5rem] md:text-lg sm:text-6 font-montserrat text-[#6381FF]">{{ project.subtitle }}</p>
        <p class="description !mb-[0.5rem] text-[#DAC6E1]">
          <span class="hidden md:inline">{{ project.description }}</span>
          <span class="md:hidden">
            {{ showFullDescription ? project.description : project.description.slice(0, 100) + '...' }}
          </span>
          
          <!-- Button only visible on mobile/tablet (hidden on desktop) -->
          <button 
            class="toggle text-[#DAC6E1] underline cursor-pointer md:hidden"
            @click="showFullDescription = !showFullDescription"
          >
            {{ showFullDescription ? 'READ LESS' : 'READ MORE' }}
          </button>
        </p>
        <!-- Spotify Link -->
           <a
          v-if="project.linkSpotify" 
          :href="project.linkSpotify" 
          target="_blank"
          class="project-link group md:text-sm sm:text-6 flex items-center gap-2 text-[#DAC6E1] !mt-4"
          >
           Listen on Spotify
          <ArrowIcon class="arrow-icon transition-transform" direction="right" size="16" />
          </a>
     </div>
      <!-- Tools -->
      <div class="flex flex-wrap gap-2 justify-center items-center !p-4 !mt-4">
        <img 
          v-for="(tool, index) in project.tools" 
          :key="index" 
          :src="tool" 
          alt="Tool Icon" 
          class="tool md:w-10 md:h-10 w-8 h-8"
        />
      </div>
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
}

.project-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 2rem; /* Add left and right margins */
}

.project-link {
  position: relative;
  transition: color 0.3s;
}

.project-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: currentColor;
  transition: width 0.3s ease;
}

.project-link:hover::after {
  width: 15rem;
}

.project-link .arrow-icon {
  transition: transform 0.3s;
}

.project-link:hover .arrow-icon {
  transform: translateX(6px);
}
</style>
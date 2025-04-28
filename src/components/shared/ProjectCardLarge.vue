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
    }, 5000);
  }
});

const showFullDescription = ref(false); // Add toggle for description

</script>

<template>
  <div class="project-card-large border-2 border-[#E476E4] rounded-lg !p-4 grid grid-cols-2 !mx-[2rem]">
    <!-- Image Slider -->
    <div class="image-slider !p-4">
      <img 
        :src="project.images[currentImageIndex]" 
        :alt="project.title" 
        class="w-full h-30 md:h-100 object-contain"
      />
    </div>
    <!-- Project Details -->
    <div class="flex flex-col gap-y-[0.5rem] !p-4">
      <h3 class="title !mb-[0.5rem] md:text-4xl sm:text-10 font-vina-sans text-[#E476E4]">{{ project.title }}</h3>
      <p class="subtitle md:text-lg sm:text-6 font-montserrat text-[#E476E4]">{{ project.subtitle }}</p>
      <p class="duration !mb-[1rem] md:text-xs italic sm:text-4 text-[#DAC6E1]">{{ project.type }} | {{ project.duration }}</p>
      <p class="description text-sm text-[#DAC6E1]">
        {{ showFullDescription ? project.description : project.description.slice(0, 100) + '...' }}
        <button 
          class="toggle text-[#DAC6E1] underline cursor-pointer"
          @click="showFullDescription = !showFullDescription"
        >
          {{ showFullDescription ? 'READ LESS' : 'READ MORE' }}
        </button>
      </p>
      <!-- Links -->
      <div class="flex flex-col gap-2 !m-4">
        <a
          v-for="(link, index) in project.linksProject"
          :key="index"
          :href="link.url"
          target="_blank"
          class="project-link group md:text-sm sm:text-6 flex items-center gap-2 text-[#DAC6E1]"
        >
          <span>{{ link.text }}</span>
          <ArrowIcon class="arrow-icon transition-transform" direction="right" size="16" />
        </a>
      </div>
    </div>
    <!-- Tools -->
    <div class="flex flex-wrap gap-4 justify-center items-center !p-4 !mt-4">
      <img 
        v-for="(tool, index) in project.tools" 
        :key="index" 
        :src="tool" 
        alt="Tool Icon" 
        class="tool md:w-10 md:h-10 w-8 h-8"
      />
    </div>
    <!-- Contribution -->
    <div class="flex flex-wrap justify-evenly items-center gap-2 !mt-4">
      <span 
        v-for="(keyword, index) in project.contribution" 
        :key="index" 
        class="contribution uppercase text-sm font-montserrat text-[#DAC6E1] !px-2 !py-1"
      >
        {{ keyword }}
      </span>
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

.duration {
  font-family: 'Forum', sans-serif;
}

.project-list {
  display: flex;
  flex-direction: column;
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
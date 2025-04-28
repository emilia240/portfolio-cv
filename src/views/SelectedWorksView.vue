<template>
  <HeroSection
      h2-text=""
      h1-text="SELECTED WORKS"
      h5-text="Take a look at what I had worked on"
      circle-text="Enjoy"
      cta-text="BACK TO FRONTPAGE"
      cta-link="/"
      cta-arrow="left"
      variant="selected"
  />

  <div class="selected-works w-full !py-4 flex items-center justify-center">
    <!-- Filter Buttons -->
    <div class="tab-buttons flex justify-between  gap-15 !my-15 !py-20 !px-5">
      <button 
        @click="tab = 'school'" 
        :class="{ active: tab === 'school' }"
        class="text-lg font-medium text-[#E476E4] hover:text-accent transition-colors cursor-pointer"
      >
        SCHOOL PROJECTS
      </button>

      <div v-if="tab === 'initial'" class="text-lg font-medium text-[#DAC6E1]">
            Choose collection
        
      </div>


    
      <button 
        @click="tab = 'personal'" 
        :class="{ active: tab === 'personal' }"
        class="text-lg font-medium text-[#6381FF] hover:text-accent transition-colors cursor-pointer"
      >
        PERSONAL CREATIONS
      </button>

      <button 
        v-if="tab !== 'initial'" 
        @click="tab = 'initial'" 
        class="text-lg font-medium text-[#DAC6E1] hover:text-accent transition-colors cursor-pointer"
      >
        SEE ALL
      </button>
    </div>
  </div>
  <!-- Dynamic Content -->
  <div v-if="tab === 'initial'" class="project-grid grid grid-cols-2 gap-y-8">
      <!-- Render initial state cards -->
      <ProjectCard 
        v-for="project in allProjects" 
        :key="project.id" 
        :project="project" 
        @redirect="handleRedirect" 
      />
      <!-- Listen for the redirect event -->
    </div>

    <div v-else-if="tab === 'school'" class="project-list flex flex-col gap-y-8">
      <!-- Render school state cards -->
      <ProjectCardLarge 
        v-for="project in schoolProjects" 
        :key="project.id" 
        :project="project" 
      />
    </div>

    <div v-else-if="tab === 'personal'" class="project-grid flex flex-col gap-y-8">
      <!-- Render personal state cards -->
      <ProjectCardSmall 
        v-for="project in personalProjects" 
        :key="project.id" 
        :project="project" 
      />
    </div>

  <ContactSection id="contact" variant="selected"/>
  <FooterSection variant="selected" />
</template>

<script setup>
import { ref } from 'vue';
import { useProjects } from '@/modules/useProjects';

import HeroSection from '@/components/shared/HeroSection.vue';
import ContactSection from '@/components/shared/ContactSection.vue';
import FooterSection from '@/components/shared/FooterSection.vue';

import ProjectCard from '@/components/shared/ProjectCard.vue';
import ProjectCardLarge from '@/components/shared/ProjectCardLarge.vue';
import ProjectCardSmall from '@/components/shared/ProjectCardSmall.vue';

const { schoolProjects, personalProjects, allProjects } = useProjects(); // Get projects from the module
const tab = ref("initial"); // Reactive state for the current tab

// Handle the redirect event from ProjectCard
function handleRedirect(type) {
  tab.value = type; // Update the tab state based on the project type
}
</script>

<style scoped>
.tab-buttons button {
  position: relative;
}

.tab-buttons button::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: currentColor;
    transition: width 0.3s ease;
}
.tab-buttons button:hover::after {
  width: 100%;
}


/* .tab-buttons button.active {
  text-decoration: underline;
} */




</style>
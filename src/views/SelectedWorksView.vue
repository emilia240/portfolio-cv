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
const tab = ref("initial") // Reactive state for the current tab

</script>


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

  <div class="selected-works">
    <!-- Filter Buttons -->
    <div class="tab-buttons flex justify-center gap-4 mb-8">
      <button 
        @click="tab.value = 'school'" 
        :class="{ active: tab === 'school' }"
        class="text-lg font-medium text-[#E476E4] hover:underline"
      >
        SCHOOL PROJECTS
      </button>

      <div v-if="tab === 'initial'" class="text-lg font-medium text-[#DAC6E1]">
        Choose collection
      </div>

      <button 
        @click="tab.value = 'personal'" 
        :class="{ active: tab === 'personal' }"
        class="text-lg font-medium text-[#6381FF] hover:underline"
      >
        PERSONAL CREATIONS
      </button>

      <button 
        v-if="tab !== 'initial'" 
        @click="tab.value = 'initial'" 
        class="text-lg font-medium text-[#DAC6E1] hover:underline"
      >
        SEE ALL
      </button>
    </div>
  </div>
  <!-- Dynamic Content -->
  <div v-if="tab === 'initial'" class="project-grid grid grid-cols-2 gap-8">
      <!-- Render initial state cards -->
      <ProjectCard 
        v-for="project in allProjects" 
        :key="project.id" 
        :project="project" 
      />
    </div>

    <div v-else-if="tab === 'school'" class="project-list flex flex-col gap-8">
      <!-- Render school state cards -->
      <ProjectCardLarge 
        v-for="project in schoolProjects" 
        :key="project.id" 
        :project="project" 
      />
    </div>

    <div v-else-if="tab === 'personal'" class="project-grid grid grid-cols-2 gap-8">
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

<style scoped>
/* ensure that the active class is defined in your <style scoped> section to visually indicate the active tab.
 */


 .tab-buttons button {
  transition: color 0.3s ease;
}

.tab-buttons button.active {
  text-decoration: underline;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.project-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
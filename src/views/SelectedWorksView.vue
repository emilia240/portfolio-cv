<script setup>
import HeroSection from '@/components/shared/HeroSection.vue';


import { ref } from 'vue'

import { useProjects } from '@/modules/useProjects'
import ProjectCard from '@/components/shared/ProjectCard.vue'
import ProjectCardLarge from '@/components/shared/ProjectCardLarge.vue'

const tab = ref("initial")
const { schoolProjects, personalProjects, allProjects } = useProjects()

</script>


<template>
  <HeroSection
      h2-text=""
      h1-text="SELECTED WORKS"
      h5-text="Take a look at what I had worked on"
      circle-text="Enjoy"
      cta-text="BACK TO FRONTPAGE"
      cta-arrow="←"
      cta-link="/"
  />

  <div class="selected-works">
    <h1 class="page-title">Selected Works</h1>
    
    <div class="tab-buttons">
      <button 
        @click="tab = 'school'" 
        :class="{ active: tab === 'school' }"
      >
        SCHOOL PROJECTS
      </button>
      <button 
        @click="tab = 'initial'" 
        :class="{ active: tab === 'initial' }"
      >
        SEE ALL
      </button>
      <button 
        @click="tab = 'personal'" 
        :class="{ active: tab === 'personal' }"
      >
        PERSONAL CREATIONS
      </button>
    </div>

    <div v-if="tab === 'personal'" class="project-grid personal-view">
      <ProjectCard 
        v-for="project in personalProjects" 
        :key="project.id" 
        :project="project" 
      />
    </div>

    <div v-else-if="tab === 'school'" class="project-list school-view">
      <ProjectCardLarge 
        v-for="project in schoolProjects" 
        :key="project.id" 
        :project="project" 
      />
    </div>

    <div v-else class="project-grid initial-view">
      <ProjectCard 
        v-for="project in allProjects" 
        :key="project.id" 
        :project="project" 
      />
    </div>
  </div>
</template>

<style scoped>
/* ensure that the active class is defined in your <style scoped> section to visually indicate the active tab.
 */
 
</style>
<script setup>
import HeroSection from '@/components/shared/HeroSection.vue';
import AboutSection from '@/components/sections/AboutSection.vue';
import TableOfContents from '@/components/sections/TableOfContents.vue';
import VideoCV from '@/components/sections/VideoCV.vue';
import ProcessSection from '@/components/sections/ProcessSection.vue';
import SkillsSection from '@/components/sections/SkillsSection.vue';
import ContactSection from '@/components/shared/ContactSection.vue';
import FooterSection from '@/components/shared/FooterSection.vue';
</script>

<template>
  <main>
    <HeroSection
      h2-text="Welcome to my"
      h1-text="PORTFOLIO"
      h5-text="Adobe Photoshop crashed ... again"
      circle-text="Let’s start creating!"
      cta-text="SEE MY WORK"
      cta-link="/selected-works"
     />
    <AboutSection id="about" /> 
    <TableOfContents id="contents" /> 
    <VideoCV id="video-cv" />
    <ProcessSection id="my-process" /> 
    <SkillsSection id="skills" /> 
    <ContactSection id="contact" variant="home" />
    <FooterSection variant="home" />
  </main>
</template>

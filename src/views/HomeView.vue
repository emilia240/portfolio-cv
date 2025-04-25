<script setup>
import HeroSection from '@/components/shared/HeroSection.vue';
import AboutSection from '@/components/sections/AboutSection.vue';
import TableOfContents from '@/components/sections/TableOfContents.vue';
import VideoCV from '@/components/sections/VideoCV.vue';
import ProcessSection from '@/components/sections/ProcessSection.vue';
import ContactSection from '@/components/shared/ContactSection.vue';
</script>

<template>
  <main>
    <HeroSection
      h2-text="Welcome to my"
      h1-text="PORTFOLIO"
      h5-text="Adobe Photoshop crashed ... again"
      circle-text="Let’s start creating!"
      cta-text="SEE MY WORK"
      cta-arrow="→"
      cta-link="/selected-works"
     />
    <AboutSection />
    <TableOfContents />
    <VideoCV />
    <ProcessSection />
    <ContactSection />
  </main>
</template>

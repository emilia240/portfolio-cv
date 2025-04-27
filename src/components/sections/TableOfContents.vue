<template>
    <section class="relative w-full min-h-[600px] md:min-h-[1000px] bg-[#ededed] overflow-hidden flex flex-col items-center">
      <!-- Floating Circle -->
      <div class="floating-circle absolute top-[20%] right-[10%] transform -translate-y-1/2 text-center sm:top-[10%]">
        <div class="circle w-56 h-56 md:w-72 md:h-72 border-2 border-[#6381FF] rounded-full flex justify-center items-center text-[#6381FF] text-2xl md:text-4xl animate-float">
          <h3 class="text-xl sm:text-2xl md:text-4xl xs:text-sm">TABLE OF CONTENTS</h3>
        </div>
      </div>
  
      <!-- Rose Flower -->
      <img
        src="@/assets/images/flowers/rose-flower-small.png"
        alt="Rose Flower"
        class="rose absolute top-[50%] -right-10 w-[250px] md:w-[350px] h-auto  overflow-hidden sm:display-none"
      />
  
      <!-- Jump Links (no loop, just static text and lines) -->
      <div class="absolute top-[10%] left-[140px] flex flex-col gap-8 z-10 sm:gap-[10px] xs:gap-[5px] sm:!mt-[10%]">
        <div class="flex flex-col items-start h-[60px]">
          <a href="#about" class="relative z-10 !pl-[10%] text-[#E476E4] text-lg md:text-5xl sm:text-2xl mb-[10px]">ABOUT ME</a>
          <div class="w-[35vw] h-0.5 bg-[#161225]"></div>
        </div>
        <div class="flex flex-col items-start h-[60px]">
          <a href="#video-cv" class="relative z-10 !pl-[10%] text-[#E476E4] text-lg md:text-5xl sm:text-2xl mb-[10px]">VIDEO CV</a>
          <div class="w-[35vw] h-0.5 bg-[#161225]"></div>
        </div>
        <div class="flex flex-col items-start h-[60px]">
          <a href="#my-process" class="relative z-10 !pl-[10%] text-[#E476E4] text-lg md:text-5xl sm:text-2xl mb-[10px]">MY PROCESS</a>
          <div class="w-[35vw] h-0.5 bg-[#161225]"></div>
        </div>
        <div class="flex flex-col items-start h-[60px]">
          <a href="#skills" class="relative z-10 !pl-[10%] text-[#E476E4] text-lg md:text-5xl sm:text-2xl mb-[10px]">SKILLS</a>
          <div class="w-[35vw] h-0.5 bg-[#161225]"></div>
        </div>
        <div class="flex flex-col items-start h-[60px]">
          <a href="#contact" class="relative z-10 !pl-[10%] text-[#E476E4] text-lg md:text-5xl sm:text-2xl mb-[10px]">CONTACT ME</a>
          <div class="w-[35vw] h-0.5 bg-[#161225]"></div>
        </div>
      </div>
  
      <!-- Sticky Note CTA -->
      <div class="sticky-note-cta absolute left-3/6 bottom-[25%] transform -translate-x-1/2 z-20 -rotate-14 sm:top-[40%] sm:left-[80%] xs:sm:top-[20%] xs:left-[80%]">
        <div class="absolute -top-2 -left-8 w-30 h-8 sm:w-26 xs:w-24 bg-[#6381FF] opacity-90 -rotate-18 z-10"></div>
        <div class="w-45 h-45 md:w-65 md:h-65 bg-[#161225] flex flex-col justify-center items-center relative">
          <a
            href="/selected-works"
            class="flex flex-col items-center justify-center text-[#E476E4] text-2xl md:text-4xl text-center no-underline"
          >
            SELECTED WORKS
            <span class="block !mt-[10%]">
              <ArrowIcon direction="right" :size="32" class="arrow-icon animate-slide" />
            </span>
          </a>
        </div>
      </div>
    </section>
  </template>
  
<script setup>
import ArrowIcon from '@/components/shared/ArrowIcon.vue';

</script>



  <style scoped>
  a {
    font-family: "Vina Sans", sans-serif;
    font-weight: normal;
  }
  .arrow {
    display: inline-block;
  }
  @keyframes slide {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(12px); }
  }
  .animate-slide {
    animation: slide 1s infinite alternate;
  }
  </style>
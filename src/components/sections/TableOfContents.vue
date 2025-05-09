<template>
    <section class="relative w-full min-h-[600px] md:min-h-[600px] bg-[#ededed] overflow-hidden flex flex-col items-center">
      <!-- Floating Circle -->
      <div class="floating-circle absolute top-[30%] right-[20%] transform -translate-y-1/2 text-center">
        <div class="circle w-[30vw] min-w-[60px] max-w-[180px] md:w-[20vw] md:max-w-[250px] xl:max-w-[320px] h-auto aspect-square border-2 border-[#161225] rounded-full flex justify-center items-center text-[#161225] animate-float">
          <h3>TABLE OF CONTENTS</h3>
        </div>
      </div>
  
      <!-- Rose Flower -->
      <img
        src="@/assets/images/flowers/rose-flower-small.png"
        alt="Rose Flower"
        class="rose absolute top-[50%] right-2 w-[40vw] max-w-[180px] min-w-[60px] md:w-[22vw] md:max-w-[400px] h-auto overflow-hidden sm:display-none"
      />
  
      <!-- Jump Links (no loop, just static text and lines) -->
      <div class="jump-links absolute top-[20%] left-[140px] flex flex-col z-10 w-[30vw]">
        <div class="link flex flex-col items-start !mb-2">
          <a href="#about" class="relative z-10 !pl-2 sm:!pl-6 md:!pl-[10%] text-[#E476E4]"> <h3>ABOUT ME</h3></a>
          <div class="line w-full h-0.5 bg-[#161225]"></div>
        </div>
        <div class="link flex flex-col items-start !mb-2">
          <a href="#video-cv" class="relative z-10 !pl-2 sm:!pl-6 md:!pl-[10%] text-[#E476E4]"><h3>VIDEO CV</h3></a>
          <div class="line w-full h-0.5 bg-[#161225]"></div>
        </div>
        <div class="link flex flex-col items-start !mb-2">
          <a href="#my-process" class="relative z-10 !pl-2 sm:!pl-6 md:!pl-[10%] text-[#E476E4]"><h3>MY PROCESS</h3></a>
          <div class="line w-full h-0.5 bg-[#161225]"></div>
        </div>
        <div class="link flex flex-col items-start !mb-2">
          <a href="#skills" class="relative z-10 !pl-2 sm:!pl-6 md:!pl-[10%] text-[#E476E4]"><h3>SKILLS</h3></a>
          <div class="line w-full h-0.5 bg-[#161225]"></div>
        </div>
        <div class="link flex flex-col items-start !mb-2">
          <a href="#contact" class="relative z-10 !pl-2 sm:!pl-6 md:!pl-[10%] text-[#E476E4]"><h3>CONTACT ME</h3></a>
          <div class="line w-full h-0.5 bg-[#161225]"></div>
        </div>
      </div>
  
      <!-- Sticky Note CTA -->
      <div class="sticky-note-cta absolute left-3/7 bottom-[30%] transform -translate-x-1/2 z-20 -rotate-14">
        <div class="tape absolute -top-2 -left-8 w-[12vw] min-w-[50px] max-w-[80px] h-[3vw] min-h-[20px] max-h-[30px] md:w-[15vw] md:max-w-[100px] md:h-[5vw] md:max-h-[24px] bg-[#6381FF] opacity-90 -rotate-18 z-10"></div>
        <div class="w-[16vw] min-w-[60px] max-w-[120px] h-[16vw] min-h-[60px] max-h-[120px] md:w-[35vw] md:max-w-[200px] md:h-[35vw] md:max-h-[200px] bg-[#161225] flex flex-col justify-center items-center relative">
          <a
            href="/selected-works"
            class="flex flex-col items-center justify-center text-[#E476E4] text-center no-underline"
          >
            <h3>SELECTED WORKS</h3>
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
a h3 {
  font-size: clamp(1rem, 4vw, 2.5rem);
  line-height: 1.2;
}
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
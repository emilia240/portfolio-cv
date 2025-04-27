<template>
    <section class="relative w-full min-h-[600px] md:min-h-[800px] bg-[#ededed] overflow-hidden flex flex-col items-center">
      <!-- Floating Circle -->
      <div class="floating-circle absolute top-[25%] right-10 transform -translate-y-1/2">
        <div class="circle w-56 h-56 md:w-62 md:h-62 border-2 border-[#6381FF] rounded-full flex justify-center items-center text-[#6381FF] text-2xl md:text-4xl animate-float">
          <h3 class="text-xl sm:text-2xl md:text-4xl xs:text-sm">ABOUT ME</h3>
        </div>
      </div>
  
      <!-- About Me Text -->
      <div class="absolute top-1/5 left-1/2 transform -translate-x-1/2 text-left text-[#161225] !px-4 max-w-[600px]">
        <p class="text-base md:text-lg sm:text-[18px] ">
          I'm a hands-on learner and creative problem solver currently pursuing a degree in Multimedia Design in Denmark.
          <br /><br />
          Through practical projects, self-guided learning, and collaboration, I have developed skills in graphic design, motion graphics, and front-end development.
        </p>
      </div>
  
      <!-- About Me Picture -->
      <div class="absolute top-1/3 left-[10%] transform -translate-y-1/2 -rotate-8">
        <div class="relative">
          <!-- Picture -->
          <img
            src="@/assets/images/about-me/picture-about-me.jpg"
            alt="About Me"
            class="picture w-4/5 md:max-w-[300px] h-auto object-cover mx-auto sm:max-w-[100px] xs:max-w-[60px]"
          />
          <!-- Tape -->
          <div class="absolute -top-2 -left-6 md:w-20 md:h-6 xs:w-18 xs:h-5 bg-[#6381FF] opacity-90 -rotate-20 z-10"></div>
          <!-- Blue Flower -->
          <img
            src="@/assets/images/flowers/blue-flower-small.png"
            alt="Blue Flower"
            class="absolute w-16 h-auto sm:w-[100px] -bottom-30 -left-25"
          />
          <!-- Blue Star -->
          <StarIcon
            class="star-icon absolute -top-1/6  -right-20 z-20"
            :color="'#6381FF'"
            :size="40"
          />
        </div>
      </div>
  
      <!-- Sticky Note CTA -->
      <div class="sticky-note-cta absolute top-[45%] left-[70%] transform translate-x-[-50%] translate-y-[20px] rotate-14">
        <div class="relative">
          <!-- Pink Star -->
          <StarIcon
            class="star-icon absolute bottom-2/5  -left-50 z-20"
            :color="'#E476E4'"
            :size="60"
          />
          <!-- Sticky Note -->
          <div class="absolute -top-2 -left-4 w-20 h-5 bg-[#6381FF] opacity-90 -rotate-14 z-10"></div>
          <div class="w-35 h-35 md:w-48 md:h-48 bg-[#161225] flex justify-center items-center relative ">
            <a
              href="/CV-Emilia Maria Scortanu.pdf"
              download
              class="flex flex-col items-center justify-center text-[#E476E4] text-xs md:text-base text-center no-underline"
            >
              DOWNLOAD CV
              <ArrowIcon direction="down" :size="22" class="arrow-icon !mt-[5%] mx-auto mt-2 arrow-down" />
            </a>
          </div>
        </div>
      </div>
  
      <!-- Huge Text -->
      <div class="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 text-[#161225] whitespace-nowrap overflow-hidden">
        <h2 class="huge-text text-lg sm:text-2xl md:text-4xl xs:text-[22px]" ref="hugeText" style="font-size:clamp(1.5rem,8vw,4rem);">EMILIA MARIA SCORȚANU</h2>
      </div>
    </section>
  </template>
  
  <script setup>
import StarIcon from '@/components/shared/StarIcon.vue'
import ArrowIcon from '@/components/shared/ArrowIcon.vue';


  </script>
  
  <style scoped>
  /* Animations */
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  .arrow-down {
  animation: arrow-bounce-down 1.5s infinite alternate;
  }

  @keyframes arrow-bounce-down {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(15px);
    }
  }
  
  /* Fonts */
   h3{
    font-family: "Vina Sans" !important;
    font-weight: normal;
  }

  a {
    font-family: var(--body-font);
    font-weight: 600;
  }
  
  p {
    font-family: var(--body-font);
  }
  </style>
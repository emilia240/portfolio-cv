<template>
    <section class="relative w-full min-h-[700px] md:min-h-[900px] bg-[#ededed] overflow-visible flex flex-col items-center !mt-[10%]">
      <!-- Floating Circle -->
      <div class="floating-circle absolute top-[20%] left-[5%] transform -translate-y-1/2 z-10 sm:!-top-[60px]">
        <div class="circle w-56 h-56 md:w-72 md:h-72 border-2 border-[#6381FF] rounded-full flex justify-center items-center text-[#6381FF] text-2xl md:text-4xl font-vina-sans animate-float">
          <h3 class="text-xl sm:text-2xl md:text-4xl xs:text-sm">SKILLS</h3>
        </div>
      </div>
  
      <!-- First Row: Design -->
      <div class="flex items-center justify-end w-full !pr-[10%] sm:!mt-[5%] xs:flex-col">
        <!-- Design Label -->
        <div class="!mr-[10%] !mt-[25%]">
          <span class="font-forum text-3xl md:text-4xl sm:text-xl text-[#161225]">Design</span>
        </div>
        <!-- 3 Skill Cards -->
        <div class="flex sm:text-sm sm:gap-[10%] sm:justify-center">
          <!-- Card 1 -->
          <div class="w-[190px] h-[410px] sm:w-[120px] sm:h-[310px] xs:w-[80px] xs:h-[140px] border-t-4 border-l-4 border-[#E476E4] rounded-tl-[40px] rounded-bl-[40px] flex flex-col justify-center gap-[5%] !mr-5 !pl-[8%]">
            <span class="font-vina-sans text-2xl text-[#E476E4]">POSTER</span>
            <span class="font-vina-sans text-2xl text-[#E476E4]">LOGOS</span>
            <span class="font-vina-sans text-2xl text-[#E476E4]">LAYOUTS</span>
            <span class="font-vina-sans text-2xl text-[#E476E4]">BRANDING</span>
            <span class="font-vina-sans text-2xl text-[#E476E4]">MOCKUPS</span>
          </div>
          <!-- Card 2 -->
          <div class="w-[190px] h-[410px] sm:w-[120px] sm:h-[310px] xs:w-[80px] xs:h-[140px] border-t-4 border-l-4 border-[#E476E4] rounded-tl-[40px] rounded-bl-[40px] flex flex-col justify-center gap-[5%] !mr-5 !pl-[8%]">
            <span class="font-vina-sans text-2xl text-[#E476E4]">STORYBOARDING</span>
            <span class="font-vina-sans text-2xl text-[#E476E4]">VIDEO EDITING</span>
            <span class="font-vina-sans text-2xl text-[#E476E4]">SOUND DESIGN</span>
            <span class="font-vina-sans text-2xl text-[#E476E4]">MOTION GRAPHICS</span>
          </div>
          <!-- Card 3 -->
          <div class="w-[190px] h-[410px] sm:w-[120px] sm:h-[310px] xs:w-[80px] xs:h-[140px] border-t-4 border-l-4 border-[#E476E4] rounded-tl-[40px] rounded-bl-[40px] flex flex-col justify-center gap-[5%] !mr-5 !pl-[8%]">
            <span class="font-vina-sans text-2xl text-[#E476E4]">UX RESEARCH</span>
            <span class="font-vina-sans text-2xl text-[#E476E4]">WIREFRAMING</span>
            <span class="font-vina-sans text-2xl text-[#E476E4]">PROTOTYPING</span>
          </div>
        </div>
      </div>
  
      <!-- Second Row: Development -->
      <div class="flex items-center justify-center w-full !pr-[10%] !mt-[5%] relative">
        <!-- Flower -->
        <img
          src="@/assets/images/flowers/pink-flower-small.png"
          alt="Flower"
          class="pink absolute left-[10%] top-1/3 -translate-y-1/2 w-[80px] md:w-[250px] h-auto -rotate-14"
        />
        <!-- Development Label -->
        <div class="!mr-[10%] !mt-[25%]">
          <span class="font-forum text-3xl md:text-4xl sm:text-xl text-[#161225]">Development</span>
        </div>
        <!-- 2 Skill Cards -->
        <div class="flex sm:text-sm sm:gap-[10%] sm:justify-center xs:!p-[10px]">
          <!-- Card 1 -->
          <div class="w-[190px] h-[410px] sm:w-[120px] sm:h-[300px] xs:w-[80px] xs:h-[140px] border-t-4 border-l-4 border-[#E476E4] rounded-tl-[40px] rounded-bl-[40px] flex flex-col justify-center gap-[5%] !mr-5 !pl-[8%]">
            <span class="font-vina-sans text-2xl text-[#E476E4]">HTML</span>
            <span class="font-vina-sans text-2xl text-[#E476E4]">CSS</span>
            <span class="font-vina-sans text-2xl text-[#E476E4]">TAILWIND</span>
            <span class="font-vina-sans text-2xl text-[#E476E4]">GITHUB</span>
          </div>
          <!-- Card 2 -->
          <div class="w-[190px] h-[410px] sm:w-[120px] sm:h-[300px] xs:w-[80px] xs:h-[140px] border-t-4 border-l-4 border-[#E476E4] rounded-tl-[40px] rounded-bl-[40px] flex flex-col justify-center gap-[5%] !mr-5 !pl-[8%]">
            <span class="font-vina-sans text-2xl text-[#E476E4]">WORDPRESS</span>
            <span class="font-vina-sans text-2xl text-[#E476E4]">PHP</span>
            <span class="font-vina-sans text-2xl text-[#E476E4]">JAVASCRIPT</span>
            <span class="font-vina-sans text-2xl text-[#E476E4]">VUE.JS</span>
          </div>
        </div>
        <!-- Glasses svg -->
        <img
          src="@/assets/images/svg/glasses.svg"
          alt="Glasses"
          class="glasses section-svg absolute right-[5%] top-2/6 -translate-y-1/2 w-[100px] md:w-[250px] h-auto -rotate-14"
        />
        <!-- Stars -->

        <StarIcon
        class="star-icon absolute top-[60%] right-[10%] z-20 "
        :color="'#E476E4'"
        :size="50"
        />
        <StarIcon
          class="star-icon absolute top-[10%] right-[20%] z-20 rotate-12"
          :color="'#E476E4'"
          :size="25"
        />
        <StarIcon
          class="star-icon absolute top-[60%] left-[30%] z-20 rotate-12"
          :color="'#E476E4'"
          :size="30"
        />
        <StarIcon
          class="star-icon absolute top-[10%] left-[30%] z-20 rotate-12"
          :color="'#E476E4'"
          :size="25"
        />
        <StarIcon
          class="star-icon absolute top-[50%] left-[10%] z-20 rotate-45"
          :color="'#E476E4'"
          :size="20"
        />

      </div>
    </section>
  </template>
  
  <script setup>
  import StarIcon from '@/components/shared/StarIcon.vue'

  </script>


  <style scoped>
  .font-vina-sans {
    font-family: "Vina Sans", sans-serif;
    font-weight: normal;
  }
  .font-forum {
    font-family: "Forum", serif;
  }
  .animate-float {
    animation: float 2.5s ease-in-out infinite alternate;
  }
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  </style>
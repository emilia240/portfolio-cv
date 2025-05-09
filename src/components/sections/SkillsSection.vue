<template>
    <section class="relative w-full min-h-[700px] md:min-h-[1000px] bg-[#ededed] overflow-visible flex flex-col items-center">
      <!-- Floating Circle -->
      <div class="floating-circle absolute top-1/5 left-[10%] transform -translate-y-1/2 z-10">
        <div class="circle w-[30vw] min-w-[60px] max-w-[180px] md:w-[20vw] md:max-w-[250px] xl:max-w-[320px] h-auto aspect-square border-2 border-[#161225] rounded-full flex justify-center items-center text-[#161225] text-2xl md:text-4xl font-vina-sans animate-float">
          <h3>SKILLS</h3>
        </div>
      </div>
  
      <!-- First Row: Design -->
      <div class="flex items-center justify-end w-full !pr-[10%]">
        <!-- Design Label -->
        <div class="!mr-[10%] !mt-[25%]">
          <span class="font-forum text-[#161225]"><h5>Design</h5></span>
        </div>
        <!-- 3 Skill Cards -->
        <div class="flex">
          <!-- Card 1 -->
          <div class="w-[190px] h-[410px] border-t-2 border-l-4 border-[#E476E4] rounded-tl-[40px] rounded-bl-[40px] flex flex-col justify-center gap-[5%] !mr-5 !pl-[8%]">
            <span class="font-vina-sans text-[#E476E4]"><h4>POSTER</h4></span>
            <span class="font-vina-sans text-[#E476E4]"><h4>LOGOS</h4></span>
            <span class="font-vina-sans text-[#E476E4]"><h4>LAYOUTS</h4></span>
            <span class="font-vina-sans text-[#E476E4]"><h4>BRANDING</h4></span>
            <span class="font-vina-sans text-[#E476E4]"><h4>MOCKUPS</h4></span>
          </div>
          <!-- Card 2 -->
          <div class="w-[190px] h-[410px] border-t-2 border-l-4 border-[#E476E4] rounded-tl-[40px] rounded-bl-[40px] flex flex-col justify-center gap-[5%] !mr-5 !pl-[8%]">
            <span class="font-vina-sans  text-[#E476E4]"><h4>STORYBOARDING</h4></span>
            <span class="font-vina-sans  text-[#E476E4]"><h4>VIDEO EDITING</h4></span>
            <span class="font-vina-sans  text-[#E476E4]"><h4>SOUND DESIGN</h4></span>
            <span class="font-vina-sans  text-[#E476E4]"><h4>MOTION GRAPHICS</h4></span>
          </div>
          <!-- Card 3 -->
          <div class="w-[190px] h-[410px] border-t-2 border-l-4 border-[#E476E4] rounded-tl-[40px] rounded-bl-[40px] flex flex-col justify-center gap-[5%] !mr-5 !pl-[8%]">
            <span class="font-vina-sans  text-[#E476E4]"><h4>UX RESEARCH  </h4></span>
            <span class="font-vina-sans  text-[#E476E4]"><h4>WIREFRAMING</h4></span>
            <span class="font-vina-sans  text-[#E476E4]"><h4>PROTOTYPING</h4></span>
          </div>
        </div>
      </div>
  
      <!-- Second Row: Development -->
      <div class="flex items-center justify-center w-full !pr-[10%] !mt-[5%] relative">
        <!-- Flower -->
        <img
          src="@/assets/images/flowers/pink-flower-small.png"
          alt="Flower"
          class="pink absolute left-[10%] top-1/3 -translate-y-1/2 w-[30vw] max-w-[100px] min-w-[50px] md:w-[15vw] md:max-w-[320px] h-auto -rotate-14"
        />
        <!-- Development Label -->
        <div class="!mr-[10%] !mt-[25%]">
          <span class="font-forum text-[#161225]"><h5>Development</h5></span>
        </div>
        <!-- 2 Skill Cards -->
        <div class="flex">
          <!-- Card 1 -->
          <div class="w-[190px] h-[410px] border-t-2 border-l-4 border-[#E476E4] rounded-tl-[40px] rounded-bl-[40px] flex flex-col justify-center gap-[5%] !mr-5 !pl-[8%]">
            <span class="font-vina-sans  text-[#E476E4]"><h4>HTML</h4></span>
            <span class="font-vina-sans  text-[#E476E4]"><h4>CSS</h4></span>
            <span class="font-vina-sans  text-[#E476E4]"><h4>TAILWIND</h4></span>
            <span class="font-vina-sans  text-[#E476E4]"><h4>GITHUB</h4></span>
          </div>
          <!-- Card 2 -->
          <div class="w-[190px] h-[410px] border-t-2 border-l-4 border-[#E476E4] rounded-tl-[40px] rounded-bl-[40px] flex flex-col justify-center gap-[5%] !mr-5 !pl-[8%]">
            <span class="font-vina-sans text-[#E476E4]"><h4>WORDPRESS</h4></span>
            <span class="font-vina-sans text-[#E476E4]"><h4>PHP</h4></span>
            <span class="font-vina-sans text-[#E476E4]"><h4>JAVASCRIPT</h4></span>
            <span class="font-vina-sans text-[#E476E4]"><h4>VUE.JS</h4></span>
          </div>
        </div>
        <!-- Glasses svg -->
        <img
          src="@/assets/images/svg/glasses.svg"
          alt="Glasses"
          class="glasses section-svg absolute right-[5%] top-2/6 -translate-y-1/2 w-[8vw] max-w-[100px] min-w-[40px] md:w-[12vw] md:max-w-[230px] xl:max-w-[350px] h-auto -rotate-14"
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
  h5 {
    font-size: clamp(1rem, 1.8vw, 2rem);
    font-weight: 600;
  }
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
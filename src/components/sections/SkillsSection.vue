<template>
    <section class="relative w-full min-h-[900px] md:min-h-[1200px] bg-[#ededed] overflow-visible flex flex-col items-center">
      <!-- Floating Circle -->
      <div class="absolute top-[20%] left-[7%] transform -translate-y-1/2 z-10">
        <div class="w-56 h-56 md:w-72 md:h-72 border-2 border-[#E476E4] rounded-full flex justify-center items-center text-[#E476E4] text-2xl md:text-4xl font-vina-sans animate-float">
          SKILLS
        </div>
      </div>
  
      <!-- First Row: Design -->
      <div class="flex items-center justify-center w-full mt-32">
        <!-- Design Label -->
        <div class="mr-[100px]">
          <span class="font-forum text-3xl md:text-4xl text-[#161225]">Design</span>
        </div>
        <!-- 3 Skill Cards -->
        <div class="flex gap-[10px]">
          <!-- Card 1 -->
          <div class="w-[190px] h-[410px] border-t-4 border-l-4 border-[#E476E4] rounded-tl-[40px] rounded-bl-[40px] flex flex-col justify-center items-center">
            <span class="font-vina-sans text-xl text-[#161225] mb-4">POSTER</span>
            <span class="font-vina-sans text-xl text-[#161225] mb-4">LOGOS</span>
            <span class="font-vina-sans text-xl text-[#161225] mb-4">LAYOUTS</span>
            <span class="font-vina-sans text-xl text-[#161225] mb-4">BRANDING</span>
            <span class="font-vina-sans text-xl text-[#161225]">MOCKUPS</span>
          </div>
          <!-- Card 2 -->
          <div class="w-[190px] h-[410px] border-t-4 border-l-4 border-[#E476E4] rounded-tl-[40px] rounded-bl-[40px] flex flex-col justify-center items-center">
            <span class="font-vina-sans text-xl text-[#161225] mb-4">STORYBOARDING</span>
            <span class="font-vina-sans text-xl text-[#161225] mb-4">VIDEO EDITING</span>
            <span class="font-vina-sans text-xl text-[#161225] mb-4">SOUND DESIGN</span>
            <span class="font-vina-sans text-xl text-[#161225]">MOTION GRAPHICS</span>
          </div>
          <!-- Card 3 -->
          <div class="w-[190px] h-[410px] border-t-4 border-l-4 border-[#E476E4] rounded-tl-[40px] rounded-bl-[40px] flex flex-col justify-center items-center">
            <span class="font-vina-sans text-xl text-[#161225] mb-4">UX RESEARCH</span>
            <span class="font-vina-sans text-xl text-[#161225] mb-4">WIREFRAMING</span>
            <span class="font-vina-sans text-xl text-[#161225]">PROTOTYPING</span>
          </div>
        </div>
      </div>
  
      <!-- Second Row: Development -->
      <div class="flex items-center justify-center w-full mt-[100px] relative">
        <!-- Glasses SVG (left) -->
        <img
          src="@/assets/images/svg/glasses.svg"
          alt="Glasses"
          class="absolute left-[10%] top-1/2 -translate-y-1/2 w-[80px] md:w-[120px] h-auto"
        />
        <!-- Development Label -->
        <div class="mr-[100px] ml-[180px]">
          <span class="font-forum text-3xl md:text-4xl text-[#161225]">Development</span>
        </div>
        <!-- 2 Skill Cards -->
        <div class="flex gap-[10px]">
          <!-- Card 1 -->
          <div class="w-[190px] h-[410px] border-t-4 border-l-4 border-[#E476E4] rounded-tl-[40px] rounded-bl-[40px] flex flex-col justify-center items-center">
            <span class="font-vina-sans text-xl text-[#161225] mb-4">HTML</span>
            <span class="font-vina-sans text-xl text-[#161225] mb-4">CSS</span>
            <span class="font-vina-sans text-xl text-[#161225] mb-4">TAILWIND</span>
            <span class="font-vina-sans text-xl text-[#161225]">GITHUB</span>
          </div>
          <!-- Card 2 -->
          <div class="w-[190px] h-[410px] border-t-4 border-l-4 border-[#E476E4] rounded-tl-[40px] rounded-bl-[40px] flex flex-col justify-center items-center">
            <span class="font-vina-sans text-xl text-[#161225] mb-4">WORDPRESS</span>
            <span class="font-vina-sans text-xl text-[#161225] mb-4">PHP</span>
            <span class="font-vina-sans text-xl text-[#161225] mb-4">JAVASCRIPT</span>
            <span class="font-vina-sans text-xl text-[#161225]">VUE.JS</span>
          </div>
        </div>
        <!-- Flower PNG (right) -->
        <img
          src="@/assets/images/flowers/rose-flower-small.png"
          alt="Flower"
          class="absolute right-[7%] top-1/2 -translate-y-1/2 w-[100px] md:w-[140px] h-auto"
        />
      </div>
    </section>
  </template>
  
  <style scoped>
  .font-vina-sans {
    font-family: "Vina Sans", sans-serif;
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
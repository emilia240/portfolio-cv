<template>
    <section class="relative w-full h-screen bg-[#ededed] overflow-hidden flex flex-col items-center">
      <!-- Floating Circle -->
      <div class="absolute top-[80px] right-0 transform -translate-y-1/2">
        <div class="w-56 h-56 md:w-72 md:h-72 border-2 border-[#6381FF] rounded-full flex justify-center items-center text-[#6381FF] text-2xl md:text-4xl font-vina-sans animate-float">
          ABOUT ME
        </div>
      </div>
  
      <!-- About Me Text -->
      <div class="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-left text-[#161225] px-4 max-w-[600px]">
        <p class="font-body text-lg md:text-xl">
          I'm a hands-on learner and creative problem solver currently pursuing a degree in Multimedia Design in Denmark.
          <br /><br />
          Through practical projects, self-guided learning, and collaboration, I have developed skills in graphic design, motion graphics, and front-end development.
        </p>
      </div>
  
      <!-- About Me Picture -->
      <div class="absolute top-1/3 left-[10%] transform -translate-y-1/2">
        <div class="relative">
          <!-- Picture -->
          <img
            src=""
            alt="About Me"
            class="w-[300px] h-[400px] object-cover"
          />
          <!-- Tape -->
          <div class="absolute -top-2 -left-2 w-12 h-5 bg-[#6381FF] opacity-90 -rotate-14 z-10"></div>
          <!-- Blue Flower -->
          <img
            src="@/assets/images/flowers/blue-flower-small.png"
            alt="Blue Flower"
            class="absolute -bottom-10 -left-10 w-[100px] h-[100px]"
          />
          <!-- Star -->
         <!--  <img
            src="@/assets/images/svg/star.svg"
            alt="Star"
            class="absolute -top-10 right-10 w-[50px] h-[50px]"
          /> -->
        </div>
      </div>
  
      <!-- Sticky Note CTA -->
      <div class="absolute top-[calc(50%+100px)] left-[50%] transform translate-x-[-50%] translate-y-[20px]">
        <div class="relative">
          <!-- Pink Star -->
          <img
            src=""
            alt="Pink Star"
            class="absolute -top-10 -left-10 w-[50px] h-[50px] fill-[#E476E4]"
          />
          <!-- Sticky Note -->
          <div class="absolute -top-2 -left-2 w-12 h-5 bg-[#6381FF] opacity-90 -rotate-14 z-10"></div>
          <div class="w-[145px] h-[145px] bg-[#161225] flex justify-center items-center relative ">
            <a
              href=""
              download
              class="text-[#E476E4] text-lg md:text-xl text-center no-underline"
            >
              DOWNLOAD CV
              <span class="block mt-2 arrow animate-bounce font-bold">↓</span>
            </a>
          </div>
        </div>
      </div>
  
      <!-- Huge Text -->
      <div class="absolute bottom-[220px] left-1/2 transform -translate-x-1/2 text-[#161225] text-4xl md:text-6xl">
        <h2>EMILIA MARIA SCORȚANU</h2>
      </div>
    </section>
  </template>
  
  <script setup>
  // No additional logic is required for this static section
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
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  /* Fonts */

  
  .font-body {
    font-family: var(--body-font);
  }
  </style>
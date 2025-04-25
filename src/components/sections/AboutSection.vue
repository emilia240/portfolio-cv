<template>
    <section class="relative w-full min-h-[600px] md:min-h-[800px] bg-[#ededed] overflow-hidden flex flex-col items-center">
      <!-- Floating Circle -->
      <div class="absolute top-[25%] right-10 transform -translate-y-1/2">
        <div class="w-56 h-56 md:w-62 md:h-62 border-2 border-[#6381FF] rounded-full flex justify-center items-center text-[#6381FF] text-2xl md:text-4xl animate-float">
          <h3>ABOUT ME</h3>
        </div>
      </div>
  
      <!-- About Me Text -->
      <div class="absolute top-1/5 left-1/2 transform -translate-x-1/2 text-left text-[#161225] px-4 max-w-[600px]">
        <p class="text-base md:text-lg">
          I'm a hands-on learner and creative problem solver currently pursuing a degree in Multimedia Design in Denmark.
          <br /><br />
          Through practical projects, self-guided learning, and collaboration, I have developed skills in graphic design, motion graphics, and front-end development.
        </p>
      </div>
  
      <!-- About Me Picture -->
      <div class="absolute top-1/3 left-[10%] transform -translate-y-1/2 -rotate-14">
        <div class="relative">
          <!-- Picture -->
          <img
            src="@/assets/images/about-me/picture-about-me.png"
            alt="About Me"
            class="w-4/5 max-w-[200px] h-auto object-cover mx-auto md:h-[150] sm:h-[100] sm:w-[200px] sm:h-[300px]"
          />
          <!-- Tape -->
          <div class="absolute -top-2 -left-2 w-12 h-5 bg-[#6381FF] opacity-90 -rotate-14 z-10"></div>
          <!-- Blue Flower -->
          <img
            src="@/assets/images/flowers/blue-flower-small.png"
            alt="Blue Flower"
            class="absolute w-16 h-auto sm:w-[100px] -bottom-20 -left-15"
          />
          <!-- Star -->
          <img
            src="@/assets/images/svg/star.svg"
            alt="Blue Star"
            class="fill-[#6381FF] absolute -top-10 -right-20 w-[40px] h-[40px]"
          /> 
        </div>
      </div>
  
      <!-- Sticky Note CTA -->
      <div class="absolute top-[45%] left-[70%] transform translate-x-[-50%] translate-y-[20px] rotate-14">
        <div class="relative">
          <!-- Pink Star -->
          <img
            src="@/assets/images/svg/star.svg"
            alt="Pink Star"
            class="absolute -top-5 -left-20 w-[50px] h-[50px] fill-[#E476E4]"

          />
          <!-- Sticky Note -->
          <div class="absolute -top-2 -left-4 w-12 h-5 bg-[#6381FF] opacity-90 -rotate-14 z-10"></div>
          <div class="w-[150px] h-[150px] bg-[#161225] flex justify-center items-center relative ">
            <a
              href=""
              download
              class="flex flex-col items-center justify-center text-[#E476E4] text-lg md:text-base text-center no-underline"
            >
              DOWNLOAD CV
                <svg
                class="mx-auto mt-2 arrow-down transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                width="24"
                height="24"
              >
                <path
                  stroke="var(--pink-color)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5v14m0 0l-7-7m7 7l7-7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
  
      <!-- Huge Text -->
      <div class="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 text-[#161225] text-4xl md:text-6xl">
        <h2 class="huge-text" ref="hugeText">EMILIA MARIA SCORȚANU</h2>
      </div>
    </section>
  </template>
  
  <script setup>

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
  }

  a {
    font-family: var(--body-font);
    font-weight: 600;
  }
  
  p {
    font-family: var(--body-font);
  }
  </style>
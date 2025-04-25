<template>
    <section class="relative w-full min-h-[600px] md:min-h-[900px] bg-[#ededed] overflow-hidden flex flex-col items-center">
      <!-- Floating Circle -->
      <div class="absolute top-[20%] right-[10%] transform -translate-y-1/2">
        <div class="w-56 h-56 md:w-72 md:h-72 border-2 border-[#6381FF] rounded-full flex justify-center items-center text-[#6381FF] text-2xl md:text-4xl animate-float">
          <h3>TABLE OF CONTENTS</h3>
        </div>
      </div>
  
      <!-- Rose Flower -->
      <img
        src="@/assets/images/flowers/rose-flower-small.png"
        alt="Rose Flower"
        class="absolute top-[40%] right-0 w-[300px] md:w-[500px] h-auto"
      />
  
      <!-- Jump Links (no loop, just static text and lines) -->
      <div class="absolute top-[10%] left-[140px] flex flex-col gap-8 z-10">
        <div class="flex flex-col items-start h-[60px]">
          <a href="#about" class="relative z-10 !pl-[10%] text-[#E476E4] text-lg md:text-5xl mb-[10px]">ABOUT ME</a>
          <div class="w-[540px] h-0.5 bg-[#161225]"></div>
        </div>
        <div class="flex flex-col items-start h-[60px]">
          <a href="#video-cv" class="relative z-10 !pl-[10%] text-[#E476E4] text-lg md:text-5xl mb-[10px]">VIDEO CV</a>
          <div class="w-[540px] h-0.5 bg-[#161225]"></div>
        </div>
        <div class="flex flex-col items-start h-[60px]">
          <a href="#my-process" class="relative z-10 !pl-[10%] text-[#E476E4] text-lg md:text-5xl mb-[10px]">MY PROCESS</a>
          <div class="w-[540px] h-0.5 bg-[#161225]"></div>
        </div>
        <div class="flex flex-col items-start h-[60px]">
          <a href="#skills" class="relative z-10 !pl-[10%] text-[#E476E4] text-lg md:text-5xl mb-[10px]">SKILLS</a>
          <div class="w-[540px] h-0.5 bg-[#161225]"></div>
        </div>
        <div class="flex flex-col items-start h-[60px]">
          <a href="#contact" class="relative z-10 !pl-[10%] text-[#E476E4] text-lg md:text-5xl mb-[10px]">CONTACT ME</a>
          <div class="w-[540px] h-0.5 bg-[#161225]"></div>
        </div>
      </div>
  
      <!-- Sticky Note CTA -->
      <div class="absolute left-2/5 bottom-[25%] transform -translate-x-1/2 z-20 -rotate-14">
        <div class="absolute -top-4 -left-4 w-16 h-7 bg-[#6381FF] opacity-90 -rotate-14 z-10"></div>
        <div class="w-[260px] h-[260px] bg-[#161225] flex flex-col justify-center items-center relative">
          <a
            href="/selected-works"
            class="flex flex-col items-center justify-center text-[#E476E4] text-3xl md:text-4xl text-center no-underline"
          >
            SELECTED WORKS
            <span class="block mt-2 arrow animate-slide font-bold">
              <svg
                class="h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  stroke="var(--pink-color)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  </template>
  
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
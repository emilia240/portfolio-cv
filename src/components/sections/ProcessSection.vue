<template>
    <section class="relative w-full min-h-[900px] md:min-h-[1100px] bg-[#ededed] overflow-visible flex flex-col items-center">
      <!-- Floating Circle -->
      <div class="floating-circle absolute top-[15%] right-[8%] transform -translate-y-1/2 z-10 sm:!top-[10px] sm:!mt-[10px]">
        <div class="circle w-56 h-56 md:w-72 md:h-72 border-2 border-[#6381FF] rounded-full flex justify-center items-center text-[#6381FF] text-2xl md:text-4xl font-vina-sans animate-float">
          <h3 class="text-xl sm:text-2xl md:text-4xl xs:text-sm">MY PROCESS</h3>
        </div>
      </div>
  
      <!-- Lamp SVG on the right -->
      <img
        src="@/assets/images/svg/desk lamp.svg"
        alt="Lamp"
        class="lamp section-svg absolute top-[35%] left-[5%] w-[140px] md:w-[235px] h-[235px] md:h-[395px] -translate-y-1/2 z-0"
      />
  
      <!-- Flower PNG (right) -->
      <img
          src="@/assets/images/flowers/purple-flower-small.png"
          alt="Flower"
          class="purple absolute -right-[2%] top-3/6 -translate-y-1/2 w-[100px] md:w-[300px] h-auto  overflow-hidden"
        />

      <!-- Stars -->
      <StarIcon
        class="star-icon absolute top-[10%] left-[5%] z-20 "
        :color="'#6381FF'"
        :size="60"
      />
      <StarIcon
        class="star-icon absolute top-[30%] left-[20%] z-20 sm:left-[10%]"
        :color="'#6381FF'"
        :size="40"
      />
      <StarIcon
        class="star-icon absolute top-[70%] right-[10%] z-20 sm:right-[5%]"
        :color="'#6381FF'"
        :size="50"
      />
      <StarIcon
        class="star-icon absolute top-[30%] right-[10%] z-20 sm:right-[5%]"
        :color="'#6381FF'"
        :size="20"
      />
      <StarIcon
        class="star-icon absolute top-[80%] left-[20%] z-20 sm:left-[10%]"
        :color="'#6381FF'"
        :size="70"
      />
      <StarIcon
        class="star-icon absolute top-[60%] left-[15%] z-20 sm:left-[5%]"
        :color="'#6381FF'"
        :size="32"
      />
      

      <!-- Steps (Zig-Zag) -->
      <div class="relative !mt-[10%] flex flex-col gap-10 z-10 w-full max-w-3xl mx-auto sm:!mt-32 sm:!p-10">
        <!-- Step 1 -->
        <div class="flex items-start sm:text-sm" style="margin-left: 0;">
          <div class="flex-shrink-0 w-[50px] h-[50px] bg-[#161225] rounded-full flex items-center justify-center text-2xl text-[#E476E4] font-montserrat" style="font-weight: normal;">
            1
          </div>
          <div class="!ml-6 flex-1">
            <h5 class="font-forum text-xl md:text-2xl text-[#161225] font-normal">Research and Define</h5>
            <div class="mt-[10px] text-[#161225] text-base leading-relaxed font-montserrat" style="font-weight: normal;">
              I will dive into the brief/topic: gather definitions, articles, and examples.<br>
              Then I start taking structured notes to isolate key objectives and constraints.
            </div>
          </div>
        </div>
        <!-- Step 2 -->
        <div class="flex items-start" style="margin-left: 15%;">
          <div class="flex-shrink-0 w-[50px] h-[50px] bg-[#161225] rounded-full flex items-center justify-center text-2xl text-[#E476E4] font-montserrat" style="font-weight: normal;">
            2
          </div>
          <div class="!ml-6 flex-1">
            <h5 class="font-forum text-xl md:text-2xl text-[#161225] font-normal">Plan and Strategize</h5>
            <div class="mt-[10px] text-[#161225] text-base leading-relaxed font-montserrat" style="font-weight: normal;">
              I try to map out the "bigger picture" and break tasks into milestones.<br>
              Then I will estimate the time necessary for learning, execution, and iteration.
            </div>
          </div>
        </div>
        <!-- Step 3 -->
        <div class="flex items-start" style="margin-left: 0;">
          <div class="flex-shrink-0 w-[50px] h-[50px] bg-[#161225] rounded-full flex items-center justify-center text-2xl text-[#E476E4] font-montserrat" style="font-weight: normal;">
            3
          </div>
          <div class="!ml-6 flex-1">
            <h5 class="font-forum text-xl md:text-2xl text-[#161225] font-normal">Learn While Doing</h5>
            <div class="mt-[10px] text-[#161225] text-base leading-relaxed font-montserrat" style="font-weight: normal;">
              I learned to embrace uncertainty. I won’t shy away from trying to adopt new tools/methods mid-project.<br>
              I like to prioritize progress over perfection, but I will make sure to refine the project as I go.
            </div>
          </div>
        </div>
        <!-- Step 4 -->
        <div class="flex items-start" style="margin-left: 15%;">
          <div class="flex-shrink-0 w-[50px] h-[50px] bg-[#161225] rounded-full flex items-center justify-center text-2xl text-[#E476E4] font-montserrat" style="font-weight: normal;">
            4
          </div>
          <div class="!ml-6 flex-1">
            <h5 class="font-forum text-xl md:text-2xl text-[#161225] font-normal">Execute and Adapt</h5>
            <div class="mt-[10px] text-[#161225] text-base leading-relaxed font-montserrat" style="font-weight: normal;">
              It’s best to stay flexible—I will adjust plans based on feedback or new insights.<br>
              I prefer to meet deadlines without sacrificing craft. I strike to balance beauty and quality.
            </div>
          </div>
        </div>
        <!-- Step 5 -->
        <div class="flex items-start" style="margin-left: 30%;">
          <div class="flex-shrink-0 w-[50px] h-[50px] bg-[#161225] rounded-full flex items-center justify-center text-2xl text-[#E476E4] font-montserrat" style="font-weight: normal;">
            5
          </div>
          <div class="!ml-6 flex-1">
            <h5 class="font-forum text-xl md:text-2xl text-[#161225] font-normal">Reflect and Improve</h5>
            <div class="mt-[10px] text-[#161225] text-base leading-relaxed font-montserrat" style="font-weight: normal;">
              I will take my time to conduct post-project “autopsies”.<br>
              I will identify the mistakes/lacunes, solidify my lessons, and convert hindsight into checklists for future projects.
            </div>
          </div>
        </div>
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
  .font-montserrat {
    font-family: "Montserrat", sans-serif;
  }
  .animate-float {
    animation: float 2.5s ease-in-out infinite alternate;
  }
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  </style>
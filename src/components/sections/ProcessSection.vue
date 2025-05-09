<template>
    <section class="relative w-full min-h-[700px] md:min-h-[900px] bg-[#ededed] overflow-visible flex flex-col items-center">
      <!-- Floating Circle -->
      <div class="floating-circle absolute top-[15%] right-[8%] transform -translate-y-1/2 z-10">
        <div class="circle w-[30vw] min-w-[60px] max-w-[180px] md:w-[20vw] md:max-w-[250px] xl:max-w-[320px] h-auto aspect-square border-2 border-[#161225] rounded-full flex justify-center items-center text-[#161225] font-vina-sans animate-float">
          <h3>MY PROCESS</h3>
        </div>
      </div>
  
      <!-- Lamp SVG on the right -->
      <img
        src="@/assets/images/svg/desk lamp.svg"
        alt="Lamp"
        class="lamp section-svg absolute top-[40%] left-[5%] w-[30vw] max-w-[120px] min-w-[40px] md:w-[10vw] md:max-w-[230px]  xl:max-w-[300px] h-auto -translate-y-1/2 z-0"
      />
  
      <!-- Flower PNG (right) -->
      <img
          src="@/assets/images/flowers/purple-flower-small.png"
          alt="Flower"
          class="purple absolute right-[2%] top-3/6 -translate-y-1/2 w-[40vw] max-w-[150px] min-w-[40px] md:w-[15vw] md:max-w-[300px] h-auto  overflow-hidden"
        />

      <!-- Stars -->
      <StarIcon
        class="star-icon absolute top-[10%] left-[5%] z-20 "
        :color="'#6381FF'"
        :size="60"
      />
      <StarIcon
        class="star-icon absolute top-[30%] left-[20%] z-20"
        :color="'#6381FF'"
        :size="40"
      />
      <StarIcon
        class="star-icon absolute top-[70%] right-[10%] z-20"
        :color="'#6381FF'"
        :size="50"
      />
      <StarIcon
        class="star-icon absolute top-[30%] right-[10%] z-20"
        :color="'#6381FF'"
        :size="20"
      />
      <StarIcon
        class="star-icon absolute top-[70%] left-[20%] z-20"
        :color="'#6381FF'"
        :size="70"
      />
      <StarIcon
        class="star-icon absolute top-[60%] left-[15%] z-20"
        :color="'#6381FF'"
        :size="32"
      />
      

      <!-- Steps (Zig-Zag) -->
      <div class="relative !mt-[10%] flex flex-col gap-10 z-10 sm:max-w-4xl xl:max-w-6xl sm:!mt-32 sm:!p-10">
        <!-- Step 1 -->
        <div class="flex items-start sm:text-sm" style="margin-left: 0;">
          <div class="flex-shrink-0 w-[50px] h-[50px] bg-[#161225] rounded-full flex items-center justify-center text-2xl text-[#E476E4] font-montserrat" style="font-weight: normal;">
            1
          </div>
          <div class="!ml-6 flex-1">
            <h4 class="font-forum text-[#161225] font-normal">Research and Define</h4>
            <div class="mt-[10px] text-[#161225] leading-relaxed font-montserrat" style="font-weight: normal;">
              <p>I will dive into the brief/topic: gather definitions, articles, and examples.<br>
                Then I start taking structured notes to isolate key objectives and constraints.</p>
            </div>
          </div>
        </div>
        <!-- Step 2 -->
        <div class="flex items-start" style="margin-left: 15%;">
          <div class="flex-shrink-0 w-[50px] h-[50px] bg-[#161225] rounded-full flex items-center justify-center text-2xl text-[#E476E4] font-montserrat" style="font-weight: normal;">
            2
          </div>
          <div class="!ml-6 flex-1">
            <h4 class="font-forum text-[#161225] font-normal">Plan and Strategize</h4>
            <div class="mt-[10px] text-[#161225] leading-relaxed font-montserrat" style="font-weight: normal;">
              <p>I try to map out the "bigger picture" and break tasks into milestones.<br>
                Then I will estimate the time necessary for learning, execution, and iteration.</p>
            </div>
          </div>
        </div>
        <!-- Step 3 -->
        <div class="flex items-start" style="margin-left: 0;">
          <div class="flex-shrink-0 w-[50px] h-[50px] bg-[#161225] rounded-full flex items-center justify-center text-2xl text-[#E476E4] font-montserrat" style="font-weight: normal;">
            3
          </div>
          <div class="!ml-6 flex-1">
            <h4 class="font-forum text-[#161225] font-normal">Learn While Doing</h4>
            <div class="mt-[10px] text-[#161225] leading-relaxed font-montserrat" style="font-weight: normal;">
              <p>I learned to embrace uncertainty. I won’t shy away from trying to adopt new tools/methods mid-project.<br>
                I like to prioritize progress over perfection, but I will make sure to refine the project as I go.</p>
            </div>
          </div>
        </div>
        <!-- Step 4 -->
        <div class="flex items-start" style="margin-left: 15%;">
          <div class="flex-shrink-0 w-[50px] h-[50px] bg-[#161225] rounded-full flex items-center justify-center text-2xl text-[#E476E4] font-montserrat" style="font-weight: normal;">
            4
          </div>
          <div class="!ml-6 flex-1">
            <h4 class="font-forum text-[#161225] font-normal">Execute and Adapt</h4>
            <div class="mt-[10px] text-[#161225] leading-relaxed font-montserrat" style="font-weight: normal;">
              <p>It’s best to stay flexible—I will adjust plans based on feedback or new insights.<br>
                I prefer to meet deadlines without sacrificing craft. I strive to balance beauty and quality.</p>
            </div>
          </div>
        </div>
        <!-- Step 5 -->
        <div class="flex items-start" style="margin-left: 30%;">
          <div class="flex-shrink-0 w-[50px] h-[50px] bg-[#161225] rounded-full flex items-center justify-center text-2xl text-[#E476E4] font-montserrat" style="font-weight: normal;">
            5
          </div>
          <div class="!ml-6 flex-1">
            <h4 class="font-forum text-[#161225] font-normal">Reflect and Improve</h4>
            <div class="mt-[10px] text-[#161225] leading-relaxed font-montserrat" style="font-weight: normal;">
              <p>I will take my time to conduct post-project “autopsies”.<br>
                I will identify the mistakes/lacunes, solidify my lessons, and convert hindsight into checklists for future projects.</p>
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
  p {
  font-size: clamp(0.8rem, 1.5vw, 1rem);
  }
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
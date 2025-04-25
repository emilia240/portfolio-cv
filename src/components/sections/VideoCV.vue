<template>
    <section class="relative w-full min-h-[600px] md:min-h-[700px] bg-[#ededed] flex flex-col items-center justify-center">
      <!-- VIDEO CV Title -->
      <h3 class="text-lg md:text-4xl text-[#6381FF] !mb-[3%]">
        VIDEO CV
      </h3>
  
      <!-- Outer Purple Rectangle -->
      <div class="relative flex justify-center items-center">
        <!-- Top Left Tape -->
        <div class="absolute -top-2 -left-8 w-24 h-8 md:w-[135px] md:h-[60px] bg-[#6381FF] opacity-90" style="transform: rotate(-30deg); z-index:10;"></div>
        <!-- Top Right Tape (flipped) -->
        <div class="absolute -top-2 -right-8 w-24 h-8 md:w-[135px] md:h-[60px] bg-[#6381FF] opacity-90" style="transform: rotate(30deg); z-index:10;"></div>        <!-- Purple Rectangle -->
        <div class="w-[1000px] h-[500px] bg-[#161225] shadow-lg flex flex-col items-center justify-center">
          <!-- Inner Blue Rectangle for YouTube Video (centered) -->
          <div class="w-[480px] h-[230px] bg-[#6381FF] flex items-center justify-center">
            <!-- YouTube iframe placeholder -->
            <!--
            <iframe
              width="460"
              height="210"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              frameborder="0"
              allowfullscreen
            ></iframe>
            -->
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  h3 {
    font-family: "Vina Sans", sans-serif;
    font-weight: normal;
  }
  </style>
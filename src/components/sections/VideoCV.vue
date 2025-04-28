<template>
  <section class="relative w-full min-h-[400px] bg-[#ededed] flex flex-col items-center justify-center !py-8">
    <!-- VIDEO CV Title -->
    <h3 class="text-xl sm:text-2xl md:text-4xl xs:text-sm md:text-4xl text-[#161225] !mb-6 md:!mb-12">
      VIDEO CV
    </h3>
    <!-- Outer Rectangle with Tape, tapes now follow the rectangle -->
    <div class="flex justify-center items-center w-full">
      <div class="relative w-[92vw] max-w-[95vw] sm:max-w-[540px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] aspect-video bg-[#161225] flex flex-col items-center justify-center mx-auto">
        <!-- Top Left Tape -->
        <div
          class="absolute -top-2 -left-8 w-16 h-6 sm:w-20 sm:h-8 md:w-28 md:h-10 lg:w-36 lg:h-12 bg-[#6381FF] opacity-90"
          style="transform: rotate(-30deg); z-index:10;"
        ></div>
        <!-- Top Right Tape -->
        <div
          class="absolute -top-2 -right-8 w-16 h-6 sm:w-20 sm:h-8 md:w-28 md:h-10 lg:w-36 lg:h-12 bg-[#6381FF] opacity-90"
          style="transform: rotate(30deg); z-index:10;"
        ></div>
        <!-- Responsive Inner Rectangle for YouTube Video -->
        <div
          class="w-[88vw] max-w-[90vw] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[800px] xl:max-w-[1000px] aspect-video bg-[#6381FF] flex items-center justify-center mx-auto"
        >
          <div class="w-full h-full flex items-center justify-center">
            <iframe
              class="w-full h-full"
              src="https://www.youtube.com/embed/Eh9XIrxd1MM"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
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
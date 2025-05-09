<template>
  <section class="relative w-full min-h-[300px] md:min-h-[700px] bg-[#ededed] overflow-hidden grid md:grid-cols-12 sm:grid-cols-8 grid-cols-4 gap-4">
    <!-- About Me Picture (cols 1-4) -->
    <div class="md:col-start-1 md:col-end-5  md:row-start-1 md:row-end-2 flex flex-col items-center justify-center z-10 !mt-20">
      <div class="relative">
        <!-- Picture -->
        <img
          src="@/assets/images/about-me/picture-about-me.jpg"
          alt="About Me"
          class="picture w-[10vw] max-w-[150px] min-w-[60px] md:w-[15vw] md:max-w-[300px] h-auto object-cover mx-auto"
        />
        <!-- Tape -->
        <div class="absolute -top-2 -left-6 md:w-20 md:h-6 bg-[#6381FF] opacity-90 -rotate-20 z-10"></div>
        <!-- Blue Flower -->
        <img
          src="@/assets/images/flowers/blue-flower-small.png"
          alt="Blue Flower"
          class="absolute w-[4vw] max-w-[110px] min-w-[30px] md:w-[8vw] md:max-w-[200px] h-auto -bottom-30 -left-25"
        />
        <!-- Blue Star -->
        <StarIcon
          class="star-icon absolute -top-1/6 -right-20 z-20"
          :color="'#6381FF'"
          :size="40"
        />
      </div>
    </div>

    <!-- About Me Text -->
    <div class="md:col-start-5 md:col-end-10 flex flex-col justify-center z-10 !px-4 max-w-[600px]">
      <p>
        I'm a hands-on learner and creative problem solver currently pursuing a degree in Multimedia Design in Denmark.
        <br /><br />
        Through practical projects, self-guided learning, and collaboration, I have developed skills in graphic design, motion graphics, and front-end development.
      </p>
    </div>

    <!-- Floating Circle -->
    <div class="md:col-start-11 md:col-end-12 flex flex-col items-center justify-center z-10">
      <div class="circle w-[30vw] min-w-[60px] max-w-[180px] md:w-[20vw] md:max-w-[250px] xl:max-w-[320px] h-auto aspect-square border-2 border-[#161225] rounded-full flex justify-center items-center text-[#161225] animate-float">
        <h3>ABOUT ME</h3>
      </div>
    </div>

    <!-- Sticky Note CTA-->
    <div class="md:col-start-8 md:col-end-11 !-mt-20 !mb-10 flex flex-col items-center justify-center z-10 ">
      <div class="relative">
        <!-- Pink Star -->
        <StarIcon
          class="star-icon absolute bottom-3/5 -left-50 z-20"
          :color="'#E476E4'"
          :size="60"
        />
        <!-- Sticky Note -->
        <div class="tape absolute -top-2 -left-4 w-[10vw] min-w-[20px] max-w-[40px] h-[1.5vw] min-h-[15px] max-h-[15px] md:w-[10vw] md:max-w-[70px] md:h-[4vw] md:max-h-[20px] bg-[#6381FF] opacity-90 -rotate-14 z-10"></div>
        <div class="w-[10vw] min-w-[80px] max-w-[100px] h-[10vw] min-h-[80px] max-h-[100px] md:w-[16vw] md:max-w-[160px] md:h-[16vw] md:max-h-[160px] bg-[#161225] flex justify-center items-center relative">
          <a
            href="/CV-Emilia Maria Scortanu.pdf"
            download
            class="flex flex-col items-center justify-center text-[#E476E4] text-center no-underline"
          >
            <h5 class="font-montserrat">DOWNLOAD CV</h5>
            <ArrowIcon direction="down" :size="22" class="arrow-icon !mt-[5%] mx-auto mt-2 arrow-down" />
          </a>
        </div>
      </div>
    </div>

    <!-- Huge Text -->
    <div class="md:col-start-2 md:col-end-12 !mb-10 flex justify-center items-center">
      <h2 class="huge-text text-[#161225] whitespace-nowrap overflow-hidden" ref="hugeText" style="font-size:clamp(1.5rem,8vw,4rem);">
        EMILIA MARIA SCORȚANU
      </h2>
    </div>
  </section>
</template>

<script setup>
import StarIcon from '@/components/shared/StarIcon.vue'
import ArrowIcon from '@/components/shared/ArrowIcon.vue';
</script>

<style scoped>
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

h3 {
  font-family: "Vina Sans" !important;
  font-weight: normal;
}
h5 {
  font-size: clamp(0.5rem, 1.2vw, 1rem);
}
a {
  font-family: var(--body-font);
  font-weight: 600;
}
p {
  font-family: var(--body-font);
  font-size: clamp(0.9rem, 2vw, 1.1rem);
}
.font-montserrat {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
}
</style>
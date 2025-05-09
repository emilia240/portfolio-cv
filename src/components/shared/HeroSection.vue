<template>
  <section class="relative w-full md:h-[900px] sm:h-[600px] h-[400px] bg-[#161225] overflow-hidden grid md:grid-cols-12 sm:grid-cols-8 grid-cols-4 grid-rows-6 gap-4 ">
    <!-- Background Images -->
    <div class="absolute inset-0">
      <img
        src="@/assets/images/hero-section/flowers-group.png"
        alt="Flowers"
        class="absolute w-[15vw] max-w-[120px] min-w-[40px] md:w-[20vw] md:max-w-[400px] h-auto top-[calc(30%+100px)] left-[75%] transform -translate-y-1/2"
      />
      <img
        src="@/assets/images/hero-section/hero-image-modern-screen.webp"
        alt="Hero Screen"
        class="absolute inset-0 object-cover w-full h-full"
      />
    </div>

    <!-- Text Content with Stars Outline -->
    <div class="md:col-start-6 md:col-end-9 sm:col-start-6 sm:col-end-9 md:row-start-2 md:row-end-4 sm:row-start-4 sm:row-end-3 col-start-4 col-end-4 row-start-1 row-end-6 flex flex-col justify-center relative z-10 ">
      <div class="relative">
        <!-- Stars -->

       <!--  <StarIcon
          class="absolute -top-20 -left-20 z-50 rotate-10"
          :color="'#E476E4'"
          :size="32"
        />
        <StarIcon
          class="absolute -top-20 -right-30 z-50 -rotate-5"
          :color="'#6381FF'"
          :size="24"
        />
        <StarIcon
          class="absolute -top-5 right-5 z-50 -rotate-5"
          :color="'#E476E4'"
          :size="30"
        />
        <StarIcon
          class="absolute top-5 -left-20 z-50 rotate-10"
          :color="'#6381FF'"
          :size="32"
        /> -->

        <!-- Actual Text Content -->
        <h2 v-if="h2Text" class="text-[#DAC6E1]">{{ h2Text }}</h2>
        <h1 class="text-[#6381FF]">{{ h1Text }}</h1>
        <h5 class="typewriter text-[#DAC6E1]">
          <span>{{ typewriterText }}</span><span class="cursor"></span>
        </h5>
      </div>
    </div>

    <!-- Floating Circle -->
    <div class="col-start-2 col-end-4 row-start-3 row-end-3  flex flex-col items-center justify-center z-10">
      <div class="floating-circle-hero transform -translate-y-1/2 text-center">
        <div class="circle w-28 h-28 md:w-45 md:h-45 border-2 border-[#6381FF] rounded-full flex justify-center items-center text-[#161225] animate-float">
          {{ circleText }}
        </div>
      </div>
    </div>

    <!-- Sticky Note CTA -->
    <div class="col-start-2 col-end-4 row-start-6 row-end-6 flex flex-col items-center justify-center z-10">
      <div class="sticky-note-cta transform -translate-y-1/2">
        <div class="absolute -top-2 -left-4 w-[10vw] min-w-[20px] max-w-[40px] h-[1.5vw] min-h-[15px] max-h-[15px] md:w-[10vw] md:max-w-[60px] md:h-[2vw] md:max-h-[18px] bg-[#6381FF] opacity-90 -rotate-14 z-10"></div>
        <div class="w-[10vw] min-w-[80px] max-w-[100px] h-[10vw] min-h-[80px] max-h-[100px] md:w-[16vw] md:max-w-[160px] md:h-[16vw] md:max-h-[160px] bg-[#161225] flex justify-center items-center relative">
          <a :href="ctaLink" class="flex flex-col items-center justify-center text-[#E476E4] text-lg md:text-xl text-center no-underline">
            <h3>{{ ctaText }}</h3>
            <ArrowIcon :direction="ctaArrow" :size="28" class="arrow-icon !mt-[10%] animate-slide" />
          </a>
        </div>
      </div>
    </div>

    <!-- Right-Aligned Text (bottom right) -->
    <div class="col-start-10 col-end-12 row-start-6 row-end-6 flex flex-col items-end justify-end z-10 self-end !mb-8">
      <p class="text-right text-[#161225]">MULTIMEDIA <br>DESIGN<br> STUDENT</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import StarIcon from '@/components/shared/StarIcon.vue';
import ArrowIcon from '@/components/shared/ArrowIcon.vue';


defineProps({
  h2Text: { type: String, default: null },
  h1Text: { type: String, required: true },
  h5Text: { type: String, required: true },
  circleText: { type: String, required: true },
  ctaText: { type: String, required: true },
  ctaArrow: { type: String, required: true },
  ctaLink: { type: String, required: true },
  variant: { type: String, default: 'home' }, /* The positioning of my text content with stars goes to the left and down on SelectedWorks */

});

  const sentences = [
    "Adobe Photoshop crashed ... again",
    "It’s not safe to turn off your computer",
    "Error on line 2025",
    "Adobe After Effects said your memory sucks",
    "Are you sure you want to commit those changes?",
  ];
  const typewriterText = ref("");
  let sentenceIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeTimeout = null;

  function type() {
    const currentSentence = sentences[sentenceIndex];
    if (isDeleting) {
      typewriterText.value = currentSentence.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        sentenceIndex = (sentenceIndex + 1) % sentences.length;
      }
    } else {
      typewriterText.value = currentSentence.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentSentence.length) {
        isDeleting = true;
      }
    }
    typeTimeout = setTimeout(type, isDeleting ? 150 : 120);
  }

  onMounted(() => {
    type();
  });

  onBeforeUnmount(() => {
    if (typeTimeout) clearTimeout(typeTimeout);
  });

</script>

<style>
/* Animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes slide {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
}

@keyframes wiggle {
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(10deg);
  }
}

@keyframes typewriter {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

/* Typewriter Effect */

.typewriter {
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
}


.cursor {
  display: inline-block;
  width: 2px;
  height: 1em;
  background-color: #6381FF;
  margin-left: 2px;
  animation: blink 0.8s steps(2, start) infinite;
}

/* Floating Circle Animation */
.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Sliding Arrow Animation */
.animate-slide {
  animation: slide 1.5s ease-in-out infinite;
}

/* Fonts */
h2, h5 {
  font-family: "Forum", serif;
  font-weight: 400;
}

h1 {
  font-family: "Vina Sans", sans-serif;
  font-weight: normal;
  margin-bottom: 2rem;
}

a {
  font-family: var(--body-font);
  font-weight: 600;
}

a h3 {
  font-size: clamp(1rem, 2vw, 2rem);
  line-height: 1.2;
}

p {
  font-weight: 400;
  font-size: clamp(0.5rem, 2.5vw, 5rem);
  line-height: 1.2;
}

/*arrow*/

.animated-arrow {
  display: inline-block;
  vertical-align: middle;
  margin-left: 12px;
  width: 30px;
  height: 5px;
  background: #E476E4;
  animation: slide-arrow 1.2s ease-in-out infinite;
  border-radius: 5px;
  position: relative;
}
.animated-arrow::before,
.animated-arrow::after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 5px;
  right: -2px;
  height: 100%;
  width: 15px;
  background: #E476E4;
}
.animated-arrow::before {
  top: -4px;
  transform: rotate(45deg);
}
.animated-arrow::after {
  bottom: -4px;
  transform: rotate(-45deg);
}
@keyframes slide-arrow {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(12px);
  }
}
</style>
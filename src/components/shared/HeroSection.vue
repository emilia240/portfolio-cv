<template>
  <section class="relative w-full h-screen bg-[#161225] overflow-hidden flex flex-col items-center">
    <!-- Background Images -->
    <div class="absolute inset-0">
      <img
        src="@/assets/images/hero-section/flowers-group.png"
        alt="Flowers"
        class="absolute w-[300px] h-[300px] top-[calc(20%+100px)] left-[75%] transform -translate-y-1/2"
      />
      <img
        src="@/assets/images/hero-section/hero-image-modern-screen.png"
        alt="Hero Screen"
        class="absolute inset-0 w-full h-full object-cover"
      />
    </div>

    <!-- Stars -->
    
    <!-- COME BACK, JACK- add your stars and change color/or bring pngs already colored-->

    <!-- Text Content -->
    <div class="absolute top-1/5 left-[58.33%] transform -translate-x-1/2 text-left text-[#DAC6E1] px-4">
      <h2 v-if="h2Text" class="text-lg md:text-2xl font-serif">{{ h2Text }}</h2>
      <h1 class="md:text-9xl text-[#6381FF] font-sans mt-2">{{ h1Text }}</h1>
      <h5 class="text-lg md:text-xl mt-4 typewriter font-body">
        <span class="typewriter-text">{{ currentSentence }}</span>
        <span class="cursor">|</span>
      </h5>
    </div>

    <!-- Floating Circle -->
    <div class="absolute top-1/5 left-[8.33%] transform -translate-y-1/2">
      <div class="w-28 h-28 md:w-45 md:h-45 border-2 border-[#6381FF] rounded-full flex justify-center items-center text-[#161225] text-sm animate-float">
        {{ circleText }}
      </div>
    </div>

    <!-- Sticky Note CTA -->
    <div class="absolute top-[calc(40%+300px)] left-[8.33%] transform -translate-y-1/2">
      <div class="absolute -top-2 -left-2 w-12 h-5 bg-[#6381FF] opacity-90 -rotate-14 z-10"></div>
      <div class="w-40 h-40 md:w-48 md:h-48 bg-[#161225] flex justify-center items-center relative">
        <a :href="ctaLink" class="text-[#E476E4] text-lg md:text-xl text-center no-underline">
          {{ ctaText }}
          <span class="block mt-2 arrow animate-slide font-bold">{{ ctaArrow }}</span>
        </a>
      </div>
    </div>

    <!-- Right-Aligned Text -->
    <div class="absolute bottom-10 right-[8.33%] text-right text-[#161225] md:text-3xl">
      <p>MULTIMEDIA <br>DESIGN<br> STUDENT</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Props for dynamic content
defineProps({
  h2Text: { type: String, default: null },
  h1Text: { type: String, required: true },
  h5Text: { type: String, required: true },
  circleText: { type: String, required: true },
  ctaText: { type: String, required: true },
  ctaArrow: { type: String, required: true },
  ctaLink: { type: String, required: true },
});

// Reactive variable for the current sentence
const sentences = ref([]);
const currentSentence = ref("");

// Function to cycle through sentences
let sentenceIndex = 0;
const changeSentence = () => {
  sentenceIndex = (sentenceIndex + 1) % sentences.value.length;
  currentSentence.value = sentences.value[sentenceIndex];
};


// Start the loop when the component is mounted
onMounted(() => {
  sentences.value = [
    "Adobe Photoshop crashed ... again",
    "It’s not safe to turn off your computer",
    "Error on line 2025 |",
    "Adobe After Effects said your memory sucks",
    "Are you sure you want to commit those changes?",
  ];
  currentSentence.value = sentences.value[0];
  setInterval(changeSentence, 5000); // Change sentence every 5 seconds
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
/* COME BACK, JACK - redo this; css or anime.js pls work */

.typewriter {
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid transparent;
}

.typewriter-text {
  display: inline-block;
  animation: typewriter 4s steps(40, end) 1s 1 normal both;
}

.cursor {
  display: inline-block;
  width: 2px;
  height: 1em;
  background-color: #6381FF;
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
  font-style: normal;
}

h1 {
  font-family: "Vina Sans";
}

a {
  font-family: var(--body-font);
  font-weight: 600;
}

p {
  font-family: var(--body-font);
  font-weight: 400;
}

.arrow {
  font-size: 2rem;
  font-weight: 900;
}
</style>
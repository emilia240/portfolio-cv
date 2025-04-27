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
        src="@/assets/images/hero-section/hero-image-modern-screen.webp"
        alt="Hero Screen"
        class="absolute inset-0 w-full h-full object-cover"
      />
    </div>

    <!-- Text Content with Stars Outline -->
    <div class="absolute top-1/5 left-[58.33%] transform -translate-x-1/2 px-4">
      <div class="relative w-fit">
        <!-- Stars -->
        <StarIcon
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
        />
        

        <!-- Actual Text Content -->
        <h2 v-if="h2Text" class="text-lg md:text-2xl font-serif text-[#DAC6E1]">{{ h2Text }}</h2>
        <h1 class="md:text-9xl text-[#6381FF] font-sans !mb-[10%]">{{ h1Text }}</h1>
        <h5 class="text-lg md:text-xl typewriter font-body text-[#DAC6E1]">
          <span>{{ typewriterText }}</span><span class="cursor"></span>
        </h5>
      </div>
    </div>

    

    <!-- Floating Circle -->
    <div class="absolute top-1/5 left-[8.33%] transform -translate-y-1/2 text-center">
      <div class="w-28 h-28 md:w-45 md:h-45 border-2 border-[#6381FF] rounded-full flex justify-center items-center text-[#161225] text-sm animate-float">
        {{ circleText }}
      </div>
    </div>

    <!-- Sticky Note CTA -->
    <div class="absolute top-[calc(40%+300px)] left-[8.33%] transform -translate-y-1/2">
      <div class="absolute -top-2 -left-4 w-20 h-6 bg-[#6381FF] opacity-90 -rotate-14 z-10"></div>
      <div class="w-40 h-40 md:w-48 md:h-48 bg-[#161225] flex justify-center items-center relative">
        <a :href="ctaLink" class="flex flex-col items-center justify-center text-[#E476E4] text-lg md:text-xl text-center no-underline">
          {{ ctaText }}
          <ArrowIcon direction="right" :size="28" class="!mt-[10%] animate-slide" />
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

/*arrow*/


/* Arrow: Pink, centered with text, not absolute */
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
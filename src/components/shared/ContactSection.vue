<template >
    <section
      :class="[
        'relative w-full min-h-[400px] md:min-h-[500px] sm:min-h-[400px] flex flex-col items-center overflow-visible !mt-[5%]',
        bgClass
      ]"
    >
      <!-- Floating Circle -->
      <div class="floating-circle absolute top-[30%] left-[7%] transform -translate-y-1/2 z-10 ">
        <div
          class="circle w-56 h-56 md:w-72 md:h-72 border-2 rounded-full flex justify-center items-center text-2xl md:text-4xl font-vina-sans animate-float"
          :class="[circleBorderClass, circleTextClass]"
        >
          <h3 class="text-xl sm:text-2xl md:text-4xl xs:text-sm">CONTACT ME</h3>
        </div>
      </div>
  
      <!-- Sticky Note CTA (top right) -->
      <div class="sticky-note-cta absolute top-0 right-60 z-20 rotate-[-8deg] xs:left-[80%]">
      <div class="absolute -top-2 -left-4 w-20 h-6 bg-[#6381FF] opacity-90 -rotate-14 z-10"></div>
      <div class="w-35 h-35 md:w-48 md:h-48 flex justify-center items-center relative" :class="stickyBgClass">
        <a
          v-if="variant === 'home'"
          href="/selected-works"
          class="flex flex-col items-center justify-center text-xs md:text-lg text-center no-underline transition-colors duration-200"
          :class="stickyTextClass"
        >
          SELECTED WORKS
          <ArrowIcon direction="right" :size="22" :color="variant === 'home' ? '#E476E4' : '#161225'" class="arrow-icon !ml-2 !mt-[5%] animate-slide" />
        </a>
          <a
            v-else
            href="/cv.pdf"
            download
            class="flex flex-col items-center justify-center text-xs md:text-base text-center no-underline transition-colors duration-200"
            :class="stickyTextClass"
          >
            DOWNLOAD CV
            <ArrowIcon direction="down" :size="22" :color="variant === 'home' ? '#E476E4' : '#161225'" class="arrow-icon !mt-[5%] mx-auto mt-2 arrow-down"></ArrowIcon>
          </a>
        </div>
      </div>
  
      <!-- White Flower PNG (bottom right, overlay footer) -->
      <img
        src="@/assets/images/flowers/white-flower-small.png"
        alt="White Flower"
        class="white absolute right-20 top-80 w-[180px] md:w-[300px] h-auto z-30 pointer-events-none"
      />
  
      <!-- Contact Content -->
      <div class="flex flex-col items-center justify-center min-h-[400px] w-full z-20 !mt-[5%]">
        <p class="!mb-5 text-xl md:text-2xl font-forum text-[#161225]">Feel free to reach out to me</p>
        <div class="contact-buttons flex gap-8">
          <!-- LinkedIn Button -->
        <a
          href="https://www.linkedin.com/in/emiliamariascortanu"
          target="_blank"
          rel="noopener"
          class="group flex items-center !px-8 !py-4 border-2 rounded-2xl text-xl md:text-6xl font-vina-sans transition-colors duration-200"
          :class="buttonClass"
        >
          LINKEDIN
          <svg
            class="!ml-3 transition-colors duration-200"
            width="45"
            height="45"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            :class="{
              'stroke-[#E476E4]': variant === 'home',
              'stroke-[#DAC6E1] group-hover:stroke-[#161225]': variant === 'selected'
            }"
          >
            <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-6a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" rx="2" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>

        <!-- Email Button -->
        <a
          href="mailto:emiliamariascortanu@gmail.com"
          class="group flex items-center !px-8 !py-4 border-2 rounded-2xl text-xl md:text-6xl font-vina-sans transition-colors duration-200"
          :class="buttonClass"
        >
          EMAIL
          <svg
            class="!ml-3 transition-colors duration-200"
            width="45"
            height="45"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            :class="{
              'stroke-[#E476E4]': variant === 'home',
              'stroke-[#DAC6E1] group-hover:stroke-[#161225]': variant === 'selected'
            }"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" />
          </svg>
        </a>
                </div>
      </div>
    </section>
  </template>
  
  <script setup>
import ArrowIcon from '@/components/shared/ArrowIcon.vue';
import { computed } from 'vue';

// Accept a prop to switch color schemes
const props = defineProps({
  variant: {
    type: String,
    default: 'home', // or 'selected'
  },
});

// Color logic
const bgClass = computed(() =>
  props.variant === 'home' ? 'bg-[#ededed]' : 'bg-[#161225]'
);
const circleBorderClass = computed(() =>
  props.variant === 'home' ? 'border-[#6381FF]' : 'border-[#DAC6E1]'
);
const circleTextClass = computed(() =>
  props.variant === 'home' ? 'text-[#6381FF]' : 'text-[#DAC6E1]'
);
const stickyBgClass = computed(() =>
  props.variant === 'home' ? 'bg-[#161225]' : 'bg-[#DAC6E1]'
);
const stickyTextClass = computed(() =>
  props.variant === 'home' ? 'text-[#E476E4]' : 'text-[#161225]'
);
const buttonClass = computed(() =>
  props.variant === 'home'
    ? 'border-[#161225] text-[#E476E4] hover:bg-[#161225]'
    : 'border-[#DAC6E1] text-[#DAC6E1] hover:bg-[#DAC6E1] hover:text-[#161225]'
);
const buttonIconColor = computed(() =>
  props.variant === 'home' ? '#E476E4' : '#DAC6E1'
);
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
  
  /* Animated Arrow (pink, center-aligned) */
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
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(12px); }
  }
  .arrow-down {
    animation: arrow-bounce-down 1.5s infinite alternate;
  }
  @keyframes arrow-bounce-down {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(15px); }
  }
  </style>
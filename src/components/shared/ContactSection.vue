<template >
    <section
      :class="[
        'relative w-full min-h-[150px] md:min-h-[400px] sm:min-h-[300px] flex flex-col items-center overflow-visible !mt-[5%]',
        bgClass
      ]"
    >
      <!-- Floating Circle -->
      <div class="floating-circle absolute top-[30%] left-[7%] transform -translate-y-1/2 z-10 hidden md:block">
        <div
          class="circle w-[30vw] min-w-[60px] max-w-[180px] md:w-[20vw] md:max-w-[250px] xl:max-w-[320px] h-auto aspect-square border-2 rounded-full flex justify-center items-center font-vina-sans animate-float"
          :class="[circleBorderClass, circleTextClass]"
        >
          <h3>CONTACT ME</h3>
        </div>
      </div>
  
      <!-- Sticky Note CTA (top right) -->
      <div class="sticky-note-cta absolute md:top-0 md:right-45 top-4 right-50 z-20 rotate-[-8deg]">
      <div class="tape absolute -top-2 -left-4 w-[10vw] min-w-[20px] max-w-[40px] h-[1.5vw] min-h-[15px] max-h-[15px] md:w-[10vw] md:max-w-[60px] md:h-[2vw] md:max-h-[18px] bg-[#6381FF] opacity-90 -rotate-14 z-10"></div>
        <div class="w-[10vw] min-w-[60px] max-w-[100px] h-[10vw] min-h-[60px] max-h-[100px] md:w-[16vw] md:max-w-[160px] md:h-[16vw] md:max-h-[160px] flex justify-center items-center relative" :class="stickyBgClass">
          <a
            v-if="variant === 'home'"
            href="/selected-works"
            class="flex flex-col items-center justify-center  text-center no-underline transition-colors duration-200"
            :class="stickyTextClass"
          >
            <h4 class="font-vina-sans">SELECTED WORKS</h4>
            <ArrowIcon direction="right" :size="22" :color="variant === 'home' ? '#E476E4' : '#161225'" class="arrow-icon !ml-2 !mt-[5%] animate-slide" />
          </a>
            <a
              v-else
              href="/cv.pdf"
              download
              class="flex flex-col items-center justify-center text-center no-underline transition-colors duration-200"
              :class="stickyTextClass"
            >
              <h4 class="font-vina-sans">DOWNLOAD CV</h4>
              <ArrowIcon direction="down" :size="22" :color="variant === 'home' ? '#E476E4' : '#161225'" class="arrow-icon !mt-[5%] mx-auto arrow-down"></ArrowIcon>
            </a>
          </div>
        </div>
    
        <!-- White Flower PNG (bottom right, overlay footer) -->
        <img
          src="@/assets/images/flowers/white-flower-small.png"
          alt="White Flower"
          class="white absolute right-20 top-70 w-[30vw] max-w-[180px] min-w-[40px] md:w-[20vw] md:max-w-[250px] h-auto z-30 pointer-events-none"
        />
    
        <!-- Stars -->

        <StarIcon
        class="star-icon absolute top-[60%] right-[5%] z-20 "
        :color="'#E476E4'"
        :size="25"
        />
        <StarIcon
          class="star-icon absolute top-[10%] right-[10%] z-20 rotate-12"
          :color="'#6381FF'"
          :size="25"
        />
        <StarIcon
          class="star-icon absolute top-[70%] left-[20%] z-20 rotate-12"
          :color="'#E476E4'"
          :size="40"
        />
        <StarIcon
          class="star-icon absolute top-[10%] left-[30%] z-20 rotate-12"
          :color="'#6381FF'"
          :size="50"
        />


        <!-- Contact Content -->
        <div class="flex flex-col items-center justify-center min-h-[300px] w-full z-20 md:!mt-[5%] !mt-[20%]">
          <p class="!mb-5 font-forum" :class="textClass">Feel free to reach out to me</p>
          <div class="contact-buttons flex gap-8">
            <!-- LinkedIn Button -->
          <a
            href="https://www.linkedin.com/in/emiliamariascortanu"
            target="_blank"
            rel="noopener"
            class="group flex items-center !px-8 !py-4 border-2 rounded-2xl font-vina-sans transition-colors duration-200"
            :class="buttonClass"
          >
            <h3>LINKEDIN</h3>
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
            class="group flex items-center !px-8 !py-4 border-2 rounded-2xl font-vina-sans transition-colors duration-200"
            :class="buttonClass"
          >
            <h3>EMAIL</h3>
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
import StarIcon from '@/components/shared/StarIcon.vue';

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
  props.variant === 'home' ? 'border-[#161225]' : 'border-[#DAC6E1]'
);
const circleTextClass = computed(() =>
  props.variant === 'home' ? 'text-[#161225]' : 'text-[#DAC6E1]'
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
const textClass = computed(() =>
  props.variant === 'home' ? 'text-[#161225]' : 'text-[#DAC6E1]'
);
</script>


  <style scoped>
  p {
    font-size: clamp(1rem, 1.8vw, 2rem);
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
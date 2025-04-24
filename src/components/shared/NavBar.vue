<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <nav class="w-full p-0 m-0 relative z-50 bg-[#161225] text-[#DAC6E1]">
    <div class="mx-auto max-w-7xl !px-6 !lg:px-8">
      <div class="flex items-center justify-between !py-5">
        <div class="flex flex-1"></div>

        <!-- nav options -->
        <div class="hidden lg:flex lg:gap-x-12">
          <a 
            href="#about" 
            class="text-lg font-medium hover:text-accent transition-colors"
          >
            <h5>About me</h5>
          </a>
          <a 
            href="#contents" 
            class="text-lg font-medium hover:text-accent transition-colors"
          >
            <h5>Table of contents</h5>
          </a>
          <a 
            href="#contact" 
            class="text-lg font-medium hover:text-accent transition-colors"
          >
            <h5>Contact me</h5>
          </a>
        </div>

        <!-- Right side button to Selected Works -->
        <div class="flex flex-1 justify-end ">
          <RouterLink 
            v-if="$route.path === '/'" 
            to="/selected-works" 
            class="group flex items-center gap-2 text-lg font-medium hover:text-accent transition-colors"
          >
            <h5>Selected works</h5>
            <svg 
              class="h-5 w-5 transition-transform group-hover:translate-x-1" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
            >
              <path color="var( --pink-color)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </RouterLink>
          
          <RouterLink 
            v-else 
            to="/" 
            class="group flex items-center gap-2 text-lg font-medium hover:text-accent transition-colors"
          >
            <h5>Back to frontpage</h5> 
            <svg 
              class="h-5 w-5 transition-transform group-hover:-translate-x-1" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
            >
              <path color="var( --pink-color)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
          </RouterLink>
        </div>

        <!-- Mobile menu button -->
        <div class="flex lg:hidden">
          <button 
            type="button" 
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            @click="isOpen = true"
          >
            <span class="sr-only">Open menu</span>
            <svg 
              class="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div 
      v-if="isOpen" 
      class="lg:hidden"
    >
      <div class="fixed inset-0 z-50 bg-black/25" @click="isOpen = false"></div>
      <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#ededed] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[#161225]/10">
        <div class="flex items-center justify-end">
          <button 
            type="button" 
            class="-m-2.5 rounded-md p-2.5 text-[#161225]"
            @click="isOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <svg 
              class="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-[#161225]/10">
            <div class="space-y-2 py-6">
              <a 
                href="#about" 
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-[#161225] hover:bg-[#DAC6E1]"
                @click="isOpen = false"
              >
                <h5>About me</h5>
              </a>
              <a 
                href="#contents" 
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-[#161225] hover:bg-[#DAC6E1]"
                @click="isOpen = false"
              >
                <h5>Table of contents</h5>
              </a>
              <a 
                href="#contact" 
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-[#161225] hover:bg-[#DAC6E1]"
                @click="isOpen = false"
              >
                <h5>Contact me</h5>
              </a>
            </div>
            <div class="py-6">
              <RouterLink 
                :to="$route.path === '/' ? '/selected-works' : '/'" 
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-[#161225] hover:bg-[#DAC6E1]"
                @click="isOpen = false"
              >
                {{ $route.path === '/' ? 'Selected works' : 'Back to frontpage' }}
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>

nav {
  font-family: "Forum", serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
}



/*underline animation for desktop links */
@media (min-width: 1024px) {
  a:not(.router-link) {
    position: relative;
  }
  
  a:not(.router-link)::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: currentColor;
    transition: width 0.3s ease;
  }
  
  a:not(.router-link):hover::after {
    width: 100%;
  }
}
</style>
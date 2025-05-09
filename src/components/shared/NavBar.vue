<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const isOpen = ref(false); // Controls mobile menu visibility
</script>

<template>
  <nav class="w-full !p-0 !m-0 relative z-50 bg-[#161225] text-[#DAC6E1]">
    <div class="!mx-auto lg:!mx-[5rem] !px-8 lg:!px-4">
      <div class="flex items-center justify-between !py-4">

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex lg:gap-x-10">
          <!-- Show "Contact me" only on SelectedWorksView -->
          <a
            v-if="$route.path === '/selected-works'"
            href="#contact"
            class="hover:text-accent transition-colors"
          >
            <h5>Contact me</h5>
          </a>
          <!-- Show other links on HomeView -->
          <template v-else>
            <a href="#about" class="hover:text-accent transition-colors">
              <h5>About me</h5>
            </a>
            <a href="#contents" class="hover:text-accent transition-colors">
              <h5>Table of contents</h5>
            </a>
            <a href="#contact" class="hover:text-accent transition-colors">
              <h5>Contact me</h5>
            </a>
          </template>
        </div>

        <!-- Desktop Selected Works Button -->
        <div class="flex flex-1 justify-end">
          <RouterLink
            v-if="$route.path === '/'"
            to="/selected-works"
            class="group flex items-center gap-2 hover:text-accent transition-colors"
          >
            <h5>Selected works</h5>
            <svg
              class="h-5 w-5 transition-transform group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                color="var(--pink-color)"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </RouterLink>

          <RouterLink
            v-else
            to="/"
            class="group flex items-center gap-2 hover:text-accent transition-colors"
          >
            <h5>Back to frontpage</h5>
            <svg
              class="h-5 w-5 transition-transform group-hover:-translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                color="var(--pink-color)"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </RouterLink>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex lg:hidden">
          <button
            type="button"
            class="!ml-4 inline-flex items-center justify-center rounded-md hover:bg-[#DAC6E1]/20 transition-colors cursor-pointer"
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
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="lg:hidden">
      <!-- Clickable overlay to close menu -->
      <div class="fixed inset-0 z-50 bg-[#161225]/25" @click="isOpen = false"></div>

      <!-- Menu Content -->
      <div
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#ededed] sm:max-w-sm sm:ring-1 sm:ring-[#161225]/10"
      >
        <!-- Close Button -->
        <div class="flex items-center justify-end">
          <button
            type="button"
            class="rounded-md text-[#161225]"
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
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Menu Links -->
        <div class="!mt-3 flow-root">
          <div class="!-my-3 divide-y divide-[#161225]/10">
            <div class="!space-y-2">
              <!-- Show "Contact me" only on SelectedWorksView -->
              <a
                v-if="$route.path === '/selected-works'"
                href="#contact"
                class="text-center block text-[#161225] hover:bg-[#DAC6E1]"
                @click="isOpen = false"
              >
                <h5>Contact me</h5>
              </a>
              <!-- Show other links on HomeView -->
              <template v-else>
                <a
                  href="#about"
                  class="text-center block text-[#161225] hover:bg-[#DAC6E1]"
                  @click="isOpen = false"
                >
                  <h5>About me</h5>
                </a>
                <a
                  href="#contents"
                  class="text-center block text-[#161225] hover:bg-[#DAC6E1]"
                  @click="isOpen = false"
                >
                  <h5>Table of contents</h5>
                </a>
                <a
                  href="#contact"
                  class="text-center block text-[#161225] hover:bg-[#DAC6E1]"
                  @click="isOpen = false"
                >
                  <h5>Contact me</h5>
                </a>
              </template>
            </div>

            <!-- Mobile Selected Works Button -->
            <div class="page-buttons !py-3">
              <RouterLink
                v-if="$route.path === '/'"
                to="/selected-works"
                class="text-center block text-[#161225] hover:bg-[#DAC6E1]"
                @click="isOpen = false"
              >
                Selected works
              </RouterLink>

              <RouterLink
                v-else
                to="/"
                class="text-center block text-[#161225] hover:bg-[#DAC6E1]"
                @click="isOpen = false"
              >
                Back to frontpage
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

.page-buttons {
  font-family: var(--body-font);
  font-size: clamp(0.6rem, 1.5vw, 1rem);
}

/* Desktop link hover animation */
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
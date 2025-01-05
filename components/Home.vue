<template>
  <v-container>
    <div class="flex flex-col">
      <!-- Intro Section -->
      <div
        :class="['fade-in', { 'fade-out': !isScrolledIntro }]"
        class="h-[80vh]"
      >
        <SectionOne />
      </div>

      <!-- Projects Section -->
      <div
        :class="['fade-in', { 'fade-out': !isScrolledProject }]"
        class="flex flex-col gap-16 h-screen py-24"
      >
        <SectioneTwo />
      </div>

      <!-- Tabs Section -->
      <div class="h-[90vh] py-16">
        <p class="text-2xl font-bold">My Projects</p>
        <v-slide-group
          v-model="model"
          selected-class="bg-success"
          :show-arrows="false"
        >
          <v-slide-group-item
            v-for="project in projects"
            :key="project.id"
            v-slot="{ isSelected, toggle, selectedClass }"
          >
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                :class="['ma-4', selectedClass]"
                color="grey-lighten-1"
                height="500"
                width="375"
                v-bind="props"
                @click="toggle"
              >
                <v-img
                  :src="project.image"
                  class="align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                  cover
                >
                  <v-card-title class="text-white">{{
                    project.name
                  }}</v-card-title>
                </v-img>
                <v-overlay
                  :model-value="isHovering"
                  class="align-center justify-center"
                  scrim="#036358"
                  contained
                >
                  <v-btn variant="flat">See more info</v-btn>
                </v-overlay>
              </v-card>
            </v-hover>
          </v-slide-group-item>
        </v-slide-group>
        
      </div>
    </div>
  </v-container>
  <Footer />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import SectionOne from "./SectionOne.vue";
import SectioneTwo from "./SectioneTwo.vue";
import Footer from "./Footer.vue";
import { Project } from "@/src/assets/data/project.ts";

const isScrolledProject = ref(false);
const isScrolledIntro = ref(true);
const projects = Project;

const onScroll = () => {
  const scrollY = window.scrollY;
  isScrolledProject.value = scrollY > 200;
};

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<style lang="css" scoped>
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-50px);
  }
}

.fade-in {
  animation: fadeInUp 2s ease;
}

.fade-out {
  animation: fadeOut 2s ease;
}
</style>

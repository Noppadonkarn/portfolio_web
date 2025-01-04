<template>
  <div class="h-full">
    <v-tabs v-model="tab" align-tabs="end" color="deep-purple-accent-4">
      <v-container>
        <p class="text-2xl font-bold">My Projects</p>
      </v-container>
      <v-tab value="1">Web App</v-tab>
      <v-tab value="2">Mobile App</v-tab>
      <v-tab value="3">Responsive App</v-tab>
    </v-tabs>

    <v-tabs-window class="pt-10" v-model="tab">
      <v-tabs-window-item v-for="n in 3" :key="n" :value="n">
        <v-container fluid>
          <v-carousel show-arrows="hover" height="600" hide-delimiters>
            <v-carousel-item
              v-for="project in projects"
              :key="project.id"
              cover
            >
              <v-hover v-slot="{ isHovering, props }">
                <v-img
                  rounded="xl"
                  v-bind="props"
                  :src="project.image"
                  class="align-end cursor-pointer"
                  cover
                  :herf="project.link"
                >
                  <!-- <v-card-title class="text-white">{{
                    project.name
                  }}</v-card-title> -->
                  <v-overlay
                    :model-value="isHovering"
                    class="align-center justify-center text-white"
                    contained
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    ><p>{{ project.name }}</p>
                    <p>{{ project.descrpition }}</p>
                    <v-btn target="_blank" :href="project.link">
                      Go to website
                    </v-btn>
                  </v-overlay>
                </v-img>
              </v-hover>
            </v-carousel-item>
          </v-carousel>
        </v-container>
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Project } from "@/src/assets/data/project.ts";

const tab = ref(null);
const projects = Project;
</script>

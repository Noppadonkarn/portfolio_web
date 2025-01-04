<template>
  <div>
    <!-- Introduction Section -->
    <p class="text-2xl font-bold text-pink-500">HELLO, MY NAME IS KARN.</p>
    <p class="text-3xl font-semibold text-blue-400">
      I am a full-stack developer.
    </p>
    <p class="text-lg">
      Passionate junior Full Stack Developer with expertise in both front-end
      and back-end development. Thrives in collaborative team environments,
      effectively communicating and problem-solving. Seeking opportunities to
      work with Full-stack dev and Skills in order to develop with Leading
      Companies.
    </p>

    <!-- Skills Section -->
    <div class="skills-section pt-10">
      <div class="flex items-center gap-3">
        <p class="text-2xl font-semibold">Skills</p>
        <div class="border flex-grow"></div>
      </div>
      <div class="flex justify-between pt-5">
        <p
          @click="selectStack('front')"
          :class="{
            'text-blue-500 underline': selectedStack === 'front',
            'cursor-pointer hover:underline text-xl': true,
          }"
        >
          > Front-end
        </p>
        <p
          @click="selectStack('back')"
          :class="{
            'text-blue-500 underline': selectedStack === 'back',
            'cursor-pointer hover:underline text-xl': true,
          }"
        >
          Back-end <
        </p>
      </div>
      <div
        class="w-full flex gap-3 flex-wrap items-center justify-center pt-10"
      >
        <div v-for="stack in stacks" :key="stack.id" class="stack-item">
          <v-btn
            variant="outlined"
            :prepend-icon="stack.image"
            width="170"
            class="stack-btn py-5"
            :aria-label="stack.name"
          >
            <p class="text-sm font-medium">{{ stack.name }}</p>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Stack } from "@/src/assets/data/stack.ts";

const selectedStack = ref("all");
const stacks = Stack;

const selectStack = (type) => {
  selectedStack.value = type;
};
</script>

<style scoped>
.skills-section .border {
  height: 2px;
  background-color: #ddd;
}

.stack-item {
  padding: 8px;
}

.stack-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: none;
}
</style>

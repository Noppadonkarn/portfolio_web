<template>
  <div>
    <Header @update:tab="updateTab" />
    <div class="pt-16">
      <transition name="fade-in">
        <Home v-if="tab === 'home'" />
      </transition>

      <transition name="fade-in">
        <AboutMe v-if="tab === 'aboutme'" />
      </transition>

      <transition name="fade-in">
        <HireMe v-if="tab === 'hireme'" />
      </transition>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Home from "@/components/Home.vue";
import AboutMe from "@/components/AboutMe.vue";
import HireMe from "@/components/HireMe.vue";

export default {
  components: {
    Header,
    Home,
    AboutMe,
    HireMe,
  },
  data() {
    return {
      tab: "home",
    };
  },
  methods: {
    updateTab(newTab) {
      this.tab = newTab;
    },
  },
};
</script>

<template>
  <div>
    <Header :tab="tab" @update:tab="updateTab" />
    <Home v-if="tab === 'home'" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Home from "@/components/Home.vue";

export default {
  components: {
    Header,
    Home,
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

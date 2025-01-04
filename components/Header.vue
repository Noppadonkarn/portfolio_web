<template>
  <v-container>
    <v-tabs v-model="tab" align-tabs="end" color="deep-purple-accent-4">
      <v-container>
        <v-row class="gap-3" align="center">
          <v-avatar size="40" :image="avatarprofile"></v-avatar>
          <p>Noppadon Sangthong</p>
        </v-row>
      </v-container>
      <v-tab value="home">Home</v-tab>
      <v-tab value="aboutme">About Me</v-tab>
      <v-tab value="hireme">Hire me</v-tab>
      <v-btn
        class="mt-1 ml-2"
        icon="mdi-brush"
        size="small"
        variant="text"
      ></v-btn>
    </v-tabs>
  </v-container>
</template>

<script>
import avatarprofile from "@/src/assets/images/avater_profile.svg";

export default {
  data() {
    return {
      avatarprofile,
      tab: "home",
    };
  },
  watch: {
    tab(newTab) {
      this.$emit("update:tab", newTab);
    },
  },
};
</script>

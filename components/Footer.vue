<template>
    <v-footer class="d-flex flex-column border-t">
      <div class=" d-flex w-100 align-center px-4">
        <strong>Get connected with us on social networks!</strong>
  
        <v-spacer></v-spacer>
  
        <v-btn
          v-for="icon in icons"
          :key="icon"
          :icon="icon"
          class="mx-4"
          size="small"
          variant="plain"
        ></v-btn>
      </div>
  
      <div class="  bg-black text-center w-100">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </div>
    </v-footer>
  </template>

<script>
export default {
  data: () => ({
    icons: [
      'mdi-github',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
}
</script>
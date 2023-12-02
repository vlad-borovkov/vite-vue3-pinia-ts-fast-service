<template>
    <router-view></router-view>
</template>

<script lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  setup() {
    return {}
  },
};
</script>

<style>

body {
  margin: 0;
}

.main {
  display: flex;
  max-width: 98vw;
  flex-direction: column;
  align-items: center;
  height: 98vh;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: #65B3E4;
  border-radius: 4px;
}
/* Стилизация полосы прокрутки для Firefox */
scrollbar-width: thin;
scrollbar-color: #4a5568 transparent;

/* Стилизация полосы прокрутки для IE и Edge */
/* В старых версиях Edge используйте -ms-overflow-style */
* {
  scrollbar-face-color: #4a5568;
  scrollbar-shadow-color: transparent;
  scrollbar-highlight-color: transparent;
  scrollbar-3dlight-color: transparent;
  scrollbar-darkshadow-color: transparent;
  scrollbar-arrow-color: transparent;
}
</style>

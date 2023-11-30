<template>
  <div class="main">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
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
div,
p,
span,
h1,
h2,
h3,
h4,
input,
button,
ul,
li,
main,
header,
footer{
  font-family: "Roboto";
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

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
</style>

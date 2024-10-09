<template>
  <div class="flex flex-col min-h-screen">
    <TopNav/>
    <Navbar/>
    <main class="flex-grow">
      <RouterView/>
    </main>
    <Footer/>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import TopNav from '@/components/TopNav.vue';
import Footer from '@/components/Footer.vue';
import {  RouterView } from 'vue-router';
</script>

<style>
html, body {
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
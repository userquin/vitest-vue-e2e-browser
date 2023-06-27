<script setup lang="ts">
// import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
  <div class="home">
    <h1>Home</h1>
    <p>Home page content goes here.</p>
    <RouterLink to="about">
      Go to About
    </RouterLink>
    <HelloWorld msg="e2e testing home" />
  </div>
</template>

<style>
.home {
  display: grid;
  place-items: center;
  grid-template-columns: 1fr;
}
</style>

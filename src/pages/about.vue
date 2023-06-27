<script setup lang="ts">
</script>

<template>
  <div class="about">
    <h1>About</h1>
    <p>About page content goes here.</p>
    <RouterLink to="/">
      Go to Home
    </RouterLink>
    <!--
    <HelloWorld msg="e2e testing" />
-->
  </div>
</template>

<style>
.about {
  display: grid;
  place-items: center;
  grid-template-columns: 1fr;
}
</style>

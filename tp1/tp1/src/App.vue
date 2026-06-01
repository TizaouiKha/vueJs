<script setup lang="ts">
  const message = "Hello World!";
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>

  <p>{{message}}</p>
  <p>{{'2 + 2 = ' + (2 + 2)}}</p>
</template>

<style scoped></style>

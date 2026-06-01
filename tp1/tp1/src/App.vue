<script setup lang="ts">
  import {ref} from "vue";

  const message = "Hello World!";
  const nom = ref('')
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>

  <input type="text" v-model="nom" placeholder="Entrez votre nom" />

  <p>{{message + ' ' + nom}}</p>
  <p>{{'2 + 2 = ' + (2 + 2)}}</p>

</template>

<style scoped></style>

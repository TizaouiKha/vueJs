<script setup lang="ts">
import FormAddress from './FormAddress.vue';
</script>

<template>
  <div class="form-section">
    <h3>Adresse de facturation</h3>
    <FormAddress />
  </div>
</template>

<style scoped>
.form-section {
  margin-bottom: 16px;
}

h3 {
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 12px;
  margin-top: 0;
}
</style>

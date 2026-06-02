<script setup lang="ts">
import FormBilling from './FormBilling.vue';
import FormShipping from './FormShipping.vue';

let adresseDifferente = false;

const toggleAdresse = (event: Event) => {
  adresseDifferente = (event.target as HTMLInputElement).checked;
  const shippingSection = document.getElementById('shipping-section');
  if (shippingSection) {
    shippingSection.style.display = adresseDifferente ? 'block' : 'none';
  }
};

const passerCommande = () => {
  console.log('Commande passée !');
};
</script>

<template>
  <div class="form-card">
    <h2>Votre commande</h2>

    <div class="form-row">
      <div class="form-group">
        <label>Nom</label>
        <input type="text" placeholder="Nom" />
      </div>
      <div class="form-group">
        <label>Prénom</label>
        <input type="text" placeholder="Prénom" />
      </div>
    </div>

    <div class="form-group">
      <label>Email</label>
      <input type="email" placeholder="Email" />
    </div>

    <FormBilling />

    <div class="form-group">
      <label>Numéro de téléphone</label>
      <input type="tel" placeholder="Numéro de téléphone" />
    </div>

    <div class="form-check">
      <input type="checkbox" id="adresse-differente" @change="toggleAdresse" />
      <label for="adresse-differente">Expédier à une adresse différente</label>
    </div>

    <div id="shipping-section" style="display: none;">
      <FormShipping />
    </div>

    <button class="btn-commande" @click="passerCommande">Passer ma commande</button>
  </div>
</template>

<style scoped>
.form-card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 24px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

h2 {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 1.2rem;
  font-weight: 600;
}

.form-row {
  display: flex;
  gap: 12px;
}

.form-row .form-group {
  flex: 1;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
}

.form-group label {
  font-size: 0.8rem;
  color: #555;
  margin-bottom: 4px;
}

.form-group input {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 10px;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s;
}

.form-group input:focus {
  border-color: #1a1a2e;
}

.form-check {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  font-size: 0.9rem;
  color: #333;
}

.form-check input[type='checkbox'] {
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.btn-commande {
  width: 100%;
  padding: 12px;
  background-color: #1a1a2e;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-commande:hover {
  background-color: #2d2d4e;
}
</style>

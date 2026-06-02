<script setup lang="ts">
import { ref } from "vue";

const nom = ref("");
const prenom = ref("");
const email = ref("");
const adresse = ref("");
const codePostal = ref<number | null>(null);
const ville = ref("");
const telephone = ref("");

const adresseDifferente = ref(false);
const adresseLivraison = ref("");
const codePostalLivraison = ref<number | null>(null);
const villeLivraison = ref("");

const passerCommande = () => {
  console.log("Commande passée !", {
    nom: nom.value,
    prenom: prenom.value,
    email: email.value,
    adresse: adresse.value,
    codePostal: codePostal.value,
    ville: ville.value,
    telephone: telephone.value,
    livraison: adresseDifferente.value
      ? {
        adresse: adresseLivraison.value,
        codePostal: codePostalLivraison.value,
        ville: villeLivraison.value,
      }
      : null,
  });
};
</script>

<template>
  <div class="container">
    <div class="form-card">
      <h2>Votre commande</h2>

      <div class="form-row">
        <div class="form-group">
          <label>Nom</label>
          <input v-model="nom" type="text" placeholder="Nom" />
        </div>
        <div class="form-group">
          <label>Prénom</label>
          <input v-model="prenom" type="text" placeholder="Prénom" />
        </div>
      </div>

      <div class="form-group">
        <label>Email</label>
        <input v-model.trim="email" type="email" placeholder="Email" />
      </div>

      <div class="form-section">
        <h3>Adresse de facturation</h3>

        <div class="form-group">
          <label>Adresse</label>
          <input v-model="adresse" type="text" placeholder="Adresse" />
        </div>

        <div class="form-group">
          <label>Code Postal</label>
          <input v-model.number="codePostal" type="text" placeholder="Code Postal" />
        </div>

        <div class="form-group">
          <label>Ville</label>
          <input v-model="ville" type="text" placeholder="Ville" />
        </div>
      </div>

      <div class="form-group">
        <label>Numéro de téléphone</label>
        <input v-model="telephone" type="tel" placeholder="Numéro de téléphone" />
      </div>

      <div class="form-check">
        <input v-model="adresseDifferente" type="checkbox" id="adresse-differente" />
        <label for="adresse-differente">Expédier à une adresse différente</label>
      </div>

      <div v-if="adresseDifferente" class="form-section">
        <h3>Adresse de livraison</h3>

        <div class="form-group">
          <label>Adresse</label>
          <input v-model="adresseLivraison" type="text" placeholder="Adresse de livraison" />
        </div>

        <div class="form-group">
          <label>Code Postal</label>
          <input v-model.number="codePostalLivraison" type="text" placeholder="Code Postal" />
        </div>

        <div class="form-group">
          <label>Ville</label>
          <input v-model="villeLivraison" type="text" placeholder="Ville" />
        </div>
      </div>

      <button @click="passerCommande" class="btn-commande">Passer ma commande</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  font-family: sans-serif;
}

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

h3 {
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 12px;
  margin-top: 0;
}

.form-section {
  margin-bottom: 16px;
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

.form-check input[type="checkbox"] {
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

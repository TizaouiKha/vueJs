<script setup lang="ts"></script>

<template>
  <nav class="navbar">
    <router-link to="/">Accueil</router-link>
    <router-link to="/checkout">Commande</router-link>
    <router-link to="/dashboard">Dashboard</router-link>
  </nav>

  <router-view />
</template>

<style>
.navbar {
  display: flex;
  gap: 20px;
  padding: 14px 24px;
  background-color: #1a1a2e;
}

.navbar a {
  color: #ccc;
  text-decoration: none;
  font-size: 0.95rem;
}

.navbar a.router-link-active {
  color: white;
  font-weight: 600;
}
</style>

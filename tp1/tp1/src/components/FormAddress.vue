<template>
  <div class="form-group">
    <label>Adresse</label>
    <input type="text" placeholder="Adresse" />
  </div>

  <div class="form-group">
    <label>Code Postal</label>
    <input type="text" placeholder="Code Postal" />
  </div>

  <div class="form-group">
    <label>Ville</label>
    <input type="text" placeholder="Ville" />
  </div>
</template>

<style scoped>
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
</style>

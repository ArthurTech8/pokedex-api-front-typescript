<script setup lang="ts">
defineProps<{
  message: string
}>()
</script>

<template>
  <div class="error" role="alert">
    <p>{{ message }}</p>
    <RouterLink to="/">Voltar para a lista</RouterLink>
  </div>
</template>

<style scoped>
.error {
  padding: 32px 16px;
  text-align: center;
  background: var(--surface);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

p {
  margin: 0 0 12px;
  font-weight: 600;
}

a {
  color: var(--primary);
  text-decoration: underline;
}
</style>

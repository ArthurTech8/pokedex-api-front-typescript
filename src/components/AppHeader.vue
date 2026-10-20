<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <header class="app-header">
    <RouterLink to="/" class="brand">
      <span class="pokeball" aria-hidden="true"></span>
      {{ title }}
    </RouterLink>
  </header>
</template>

<style scoped>
.app-header {
  background: var(--primary);
  color: #fff;
  padding: 14px 16px;
  box-shadow: var(--shadow);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  font-weight: 700;
  max-width: 1100px;
}

.pokeball {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 3px solid #222;
  background: linear-gradient(#fff 0 0) center / 100% 3px no-repeat,
    linear-gradient(to bottom, #ff1c1c 50%, #fff 50%);
  position: relative;
}
</style>

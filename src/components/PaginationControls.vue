<script setup lang="ts">
defineProps<{
  page: number
  totalPages: number
}>()

const emit = defineEmits<{
  change: [page: number]
}>()
</script>

<template>
  <nav class="pagination" aria-label="Paginação">
    <button type="button" :disabled="page <= 1" @click="emit('change', page - 1)">‹ Anterior</button>
    <span>Página {{ page }} de {{ totalPages }}</span>
    <button type="button" :disabled="page >= totalPages" @click="emit('change', page + 1)">
      Próxima ›
    </button>
  </nav>
</template>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 32px;
}

button {
  padding: 8px 16px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  color: var(--text);
}

button:hover:not(:disabled) {
  border-color: var(--primary);
}

button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>

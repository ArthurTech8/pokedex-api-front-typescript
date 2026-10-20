<script setup lang="ts">
defineProps<{
  height: number
  weight: number
  baseExperience: number | null
}>()
</script>

<template>
  <section class="panel">
    <h2>Informações</h2>
    <dl>
      <div>
        <dt>Altura</dt>
        <!-- A API retorna altura em decímetros e peso em hectogramas -->
        <dd>{{ (height / 10).toFixed(1) }} m</dd>
      </div>
      <div>
        <dt>Peso</dt>
        <dd>{{ (weight / 10).toFixed(1) }} kg</dd>
      </div>
      <div>
        <dt>Experiência base</dt>
        <dd>{{ baseExperience ?? '—' }}</dd>
      </div>
    </dl>
  </section>
</template>

<style scoped>
.panel {
  padding: 20px;
  background: var(--surface);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

h2 {
  margin: 0 0 12px;
  font-size: 1.2rem;
}

dl {
  margin: 0;
  display: grid;
  gap: 8px;
}

dl div {
  display: flex;
  justify-content: space-between;
}

dt {
  color: var(--text-muted);
}

dd {
  margin: 0;
  font-weight: 600;
}
</style>

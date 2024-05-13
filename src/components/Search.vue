<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { searchStore } from '../store/searchStore'

const searchQuery = ref('')
const router = useRouter()
const route = useRoute()
const debounceTimer = ref<number | null>(null)

const performSearch = () => {
  if (debounceTimer.value) clearTimeout(debounceTimer.value)
  debounceTimer.value = setTimeout(() => {
    if (searchQuery.value.trim()) {
      searchStore.setQuery(searchQuery.value)
      router.push({ path: '/search', query: { q: searchQuery.value } }).catch(() => {})
    } else {
      router.push({ path: '/' })
    }
  }, 500) as unknown as number
}

watch(
  route,
  (to) => {
    if (to.path === '/') {
      searchQuery.value = ''
    }
  },
  { immediate: true }
)
</script>

<template>
  <div class="search">
    <input
      class="search__input"
      type="text"
      placeholder="Search for a show"
      v-model="searchQuery"
      @input="performSearch"
    />
  </div>
</template>

<style scoped lang="scss">
.search {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;

  &__input {
    flex: 1;
    width: 100%;
    padding: 0.5rem;
    color: var(--color-text);
    border: 1px solid var(--color-gray);
    border-radius: 8px;
    background-color: var(--color-gray);
    outline: none;

    @media (min-width: 768px) {
      width: 20rem;
    }

    &::placeholder,
    &:-ms-input-placeholder {
      color: var(--color-text);
    }
  }
}
</style>

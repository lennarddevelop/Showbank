<script setup lang="ts">
import { ref, watch } from 'vue'
import { searchStore } from '../store/searchStore'
import { fetchShowsBySearch } from '../services/tvmazeApi'
import ShowList from '../components/ShowList.vue'
import type { SearchResult } from '../types'

const searchResults = ref([])
const error = ref<string | null>(null)

watch(
  () => searchStore.query,
  async (newQuery: string) => {
    error.value = null
    if (newQuery.trim()) {
      try {
        const results = await fetchShowsBySearch(newQuery)
        searchResults.value = results.map((result: SearchResult) => result.show)
      } catch (err) {
        //console.error('Search failed:', err)
        error.value = 'Failed to load shows. Please try again later.'
        searchResults.value = []
      }
    } else {
      searchResults.value = []
    }
  },
  { immediate: true }
)
</script>

<template>
  <div class="search-results">
    <div v-if="error">{{ error }}</div>
    <div v-else-if="searchResults.length === 0" class="search-results__no-results">
      No search results found.
    </div>
    <div v-else>
      <ShowList :shows="searchResults" title="Search Results" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.search-results {
  &__no-results {
    font-size: 1rem;
    font-weight: 500;
    padding: 0 1rem;
  }
}
</style>

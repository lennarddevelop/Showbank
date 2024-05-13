<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { fetchShows } from '../services/tvmazeApi'
import ShowList from '../components/ShowList.vue'
import type { Show } from '../types'

let shows = ref<Show[]>([])
let error = ref<string | null>(null)

onMounted(async () => {
  try {
    const fetchedShows = await fetchShows()
    // Sort shows by rating
    if (fetchedShows) {
      shows.value = fetchedShows.sort(
        (a: Show, b: Show) => (b.rating.average ?? 0) - (a.rating.average ?? 0)
      )
    } else {
      //console.error('Shows is null or empty')
      error.value = 'Shows data is empty. Please try again later.'
    }
  } catch (err) {
    //console.error(err)
    error.value = 'Failed to load shows. Please try again later.'
  }
})

const uniqueGenres = computed(() => {
  const genres = new Set<string>()
  shows.value.forEach((show) => {
    show.genres?.forEach((genre) => genres.add(genre))
  })
  return Array.from(genres).sort()
})

function showsByGenre(genre: string) {
  return shows.value.filter((show) => show.genres?.includes(genre))
}
</script>

<template>
  <div class="home">
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="!error">
      <ShowList
        v-for="genre in uniqueGenres"
        :key="genre"
        :title="genre"
        :shows="showsByGenre(genre)"
      />
    </div>
  </div>
</template>

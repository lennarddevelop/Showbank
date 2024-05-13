<script setup lang="ts">
import { defineProps } from 'vue'
import type { Show } from '../types'

type ShowCardProps = Pick<Show, 'id' | 'image' | 'name'>

defineProps({
  show: Object as () => ShowCardProps
})
</script>

<template>
  <router-link v-if="show" :to="`/show/${show.id}`" class="show-card">
    <picture>
      <source
        :srcset="show.image?.original ?? '../images/original-image.jpeg'"
        media="(min-width: 1024px)"
      />
      <source :srcset="show.image?.medium ?? '../images/medium-image.png'" />
      <img
        v-lazy="show.image?.medium ?? '../images/medium-image.png'"
        :alt="show.name || ''"
        class="show-card__image"
      />
    </picture>
  </router-link>
</template>

<style scoped lang="scss">
.show-card {
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.3s;
  }
}
</style>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { fetchShowId } from '../services/tvmazeApi'
import type { Show } from '../types'

type ShowDetailInfo = Pick<
  Show,
  | 'id'
  | 'name'
  | 'image'
  | 'genres'
  | 'rating'
  | 'language'
  | 'premiered'
  | 'officialSite'
  | 'summary'
  | 'averageRuntime'
>

const route = useRoute()
const showId = Number(route.params.id)
const show = ref<ShowDetailInfo | null>(null)
const loading = ref(true)

onMounted(async () => {
  try {
    const fetchedShow = await fetchShowId(showId)
    if (fetchedShow) {
      show.value = fetchedShow
    }
  } catch (err) {
    //console.error('Failed to fetch show details:', error)
  } finally {
    loading.value = false
  }
})

const premieredYear = computed(() => {
  if (show.value && show.value.premiered) {
    return new Date(show.value.premiered).getFullYear()
  }
  return ''
})
</script>

<template>
  <div class="show-detail">
    <div v-if="show">
      <div class="show-detail__top">
        <h1 class="show-detail__title">{{ show.name }}</h1>
        <div class="show-detail__info">
          <span v-if="premieredYear">{{ premieredYear }}</span>
          <span v-if="show.rating.average"> - &#9733; {{ show.rating.average }}</span>
          <span v-if="show.averageRuntime"> - {{ show.averageRuntime }}m</span>
          <span v-if="show.language"> - {{ show.language }}</span>
        </div>
      </div>
      <div class="show-detail__wrapper">
        <div class="show-detail__content">
          <picture v-if="show.image" class="show-detail__image">
            <img v-lazy="show.image.original" alt="show.name" />
          </picture>
        </div>
        <div class="show-detail__content show-detail__content--padding">
          <div class="show-detail__genres">
            <span v-for="genre in show.genres" :key="genre" class="show-detail__genre">{{
              genre
            }}</span>
          </div>
          <div v-if="show.summary" v-html="show.summary" class="show-detail__summary"></div>
          <p v-if="show.premiered">Premiered: {{ show.premiered }}</p>
          <a
            v-if="show.officialSite"
            :href="show.officialSite"
            target="_blank"
            class="show-detail__link"
            >Official Site</a
          >
        </div>
      </div>
    </div>
    <div v-else-if="!loading">
      <h1 class="show-detail__not-found">Show not found.</h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
.show-detail {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 1rem 3rem;

  &__top {
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 0 2rem 0;
    }
    @media (min-width: 1024px) {
      justify-content: center;
    }
  }

  &__info {
    margin: 0 0 1rem 0;

    @media (min-width: 768px) {
      margin: 0;
    }

    @media (min-width: 1024px) {
      margin: 0 2rem;
    }
  }

  &__title {
    color: var(--color-text);
    font-size: 2rem;
  }

  &__image {
    margin: 0 auto;
    width: 100%;
    height: auto;
    border-radius: 8px;
    text-align: center;

    @media (min-width: 1024px) {
      width: 50vw;
    }

    img {
      width: auto;
      height: 50vh;
      border-radius: 8px;
    }
  }
  &__wrapper {
    display: block;

    @media (min-width: 768px) {
      display: flex;
      gap: 1rem;
      align-items: center;
    }
  }
  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;

    &--padding {
      @media (min-width: 1280px) {
        margin: 0 10rem 0 0;
      }
    }
  }
  &__genres {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin: 1rem 0;

    @media (min-width: 768px) {
      margin: 0 0 1rem;
    }
  }
  &__genre {
    color: var(--color-text);
    border: 1px solid var(--color-text);
    border-radius: 8px;
    padding: 0.2rem 1rem;
    gap: 5rem;
  }
  &__summary {
    margin: 1rem 0;
  }
  &__link {
    font-weight: 600;
  }
  &__not-found {
    font-size: 2rem;
    text-align: center;
  }
}
</style>

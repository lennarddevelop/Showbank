<script setup lang="ts">
import { defineProps, ref, watch, computed } from 'vue'
import type { Ref } from 'vue'
import ShowCard from './ShowCard.vue'
import IconChevronLeft from '@/components/icons/IconChevronLeft.vue'
import IconChevronRight from '@/components/icons/IconChevronRight.vue'
import type { Show } from '../types'

type ShowList = Pick<Show, 'id' | 'image' | 'name'>

const props = defineProps({
  shows: Array as () => ShowList[],
  title: String
})

const localShows = ref([...(props.shows ?? [])])
const inner: Ref<HTMLUListElement | null> = ref(null)
const wrapper: Ref<HTMLDivElement | null> = ref(null)
const nextClicked = ref(false)

watch(
  () => props.shows,
  (newShows) => {
    localShows.value = [...(newShows ?? [])]
  },
  { deep: true }
)

function next() {
  nextClicked.value = true
  const show = localShows.value.shift()
  if (show !== undefined) {
    localShows.value.push(show)
  }
}

function prev() {
  const show = localShows.value.pop()
  if (show !== undefined) {
    localShows.value.unshift(show)
  }
}

const isNextButtonVisible = computed(() => {
  if (!inner.value || !wrapper.value) return false
  return inner.value.scrollWidth > wrapper.value.offsetWidth
})
</script>

<template>
  <div v-if="localShows && localShows.length > 0" class="show-list">
    <h2 class="show-list__title">{{ title }}</h2>
    <div class="show-list__carousel">
      <button v-if="nextClicked" @click="prev()" class="show-list__button show-list__button--prev">
        <IconChevronLeft />
        <span class="sr-only">Previous</span>
      </button>
      <div class="show-list__wrapper" ref="wrapper">
        <ul class="show-list__list" ref="inner">
          <li
            v-for="(show, index) in localShows"
            :key="show.id || `fallback-${index}`"
            class="show-list__item"
          >
            <ShowCard :show="show" />
          </li>
        </ul>
      </div>
      <button
        v-if="isNextButtonVisible"
        @click="next()"
        class="show-list__button show-list__button--next"
      >
        <IconChevronRight />
        <span class="sr-only">Next</span>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.show-list {
  &__title {
    margin: 0 1rem;
    font-size: 1rem;
    font-weight: 500;
  }
  &__carousel {
    position: relative;
    width: 100%;
  }
  &__wrapper {
    overflow: hidden;
  }
  &__button {
    display: none;
    position: absolute;
    font-size: 2rem;
    top: 0;
    bottom: 1rem;
    width: 4rem;
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    color: var(--color-text);
    cursor: pointer;
    transition: all 0.4s;
    z-index: 1;

    &:hover {
      svg {
        transition: all 0.4s;
        transform: scale(1.3);
      }
    }

    @media (min-width: 768px) {
      display: block;
    }

    &--prev {
      left: 0;
      border-radius: 0 4px 4px 0;
    }
    &--next {
      right: 0;
      border-radius: 4px 0 0 4px;
    }
  }
  &__list {
    display: flex;
    overflow-x: auto;
    gap: 0.5rem;
    padding: 0 1rem;
    margin: 0 0 1rem 0;
    list-style: none;
    scrollbar-width: none;

    @media (min-width: 768px) {
      overflow-x: unset;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }
  &__item {
    flex: 0 0 auto;
    width: 20vw;
    height: auto;
    border-radius: 8px;
    overflow: hidden;

    @media (min-width: 768px) {
      display: inline-flex;
    }
    @media (min-width: 1024px) {
      width: 15vw;
    }
    @media (min-width: 1440px) {
      width: 10vw;
    }
    @media (min-width: 2560px) {
      width: 7vw;
    }
  }
}
</style>

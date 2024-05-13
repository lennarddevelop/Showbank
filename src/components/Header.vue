<script setup lang="ts">
import Search from './Search.vue'
</script>

<template>
  <div class="header">
    <div class="header__item">
      <header>
        <router-link to="/">
          <div class="header__title">ShowBank</div>
        </router-link>
      </header>
    </div>
    <div class="header__item">
      <Search />
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  padding: 1rem 1rem 0;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-size: 2rem;
    color: var(--vt-c-red);
    text-align: center;
    font-weight: 800;
    cursor: pointer;
  }
}
</style>

<script setup lang="ts">
import Header from './components/Header.vue'
import NeonSpots from './components/NeonSpots.vue'
</script>

<template>
  <Header />
  <NeonSpots />
  <main>
    <router-view></router-view>
  </main>
</template>

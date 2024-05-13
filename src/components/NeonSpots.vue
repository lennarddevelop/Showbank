<template>
  <div class="neon-spots neon-spots--left">
    <div class="neon-spots__spot neon-spots__spot--1"></div>
    <div class="neon-spots__spot neon-spots__spot--2"></div>
    <div class="neon-spots__spot neon-spots__spot--3"></div>
    <div class="neon-spots__spot neon-spots__spot--4"></div>
    <div class="neon-spots__spot neon-spots__spot--5"></div>
  </div>
  <div class="neon-spots neon-spots--right">
    <div class="neon-spots__spot neon-spots__spot--1"></div>
    <div class="neon-spots__spot neon-spots__spot--2"></div>
    <div class="neon-spots__spot neon-spots__spot--3"></div>
    <div class="neon-spots__spot neon-spots__spot--4"></div>
    <div class="neon-spots__spot neon-spots__spot--5"></div>
  </div>
</template>

<style scoped lang="scss">
$spot-step: 20%;
.neon-spots {
  position: fixed;
  opacity: 20%;

  &--left {
    left: 0;
  }
  &--right {
    right: 0;
  }
  &__spot {
    position: fixed;
    box-shadow:
      0 0 5px 2.5px #00e5ff,
      0 0 12.5px 5px #00e5ff,
      0 0 20px 7.5px #00e5ff,
      0 0 30px 10px #00e5ff;

    @for $i from 1 through 5 {
      &--#{$i} {
        top: $i * $spot-step;
      }
    }
  }
}
</style>

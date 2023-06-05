<template>
  <div :class="$style.general">
    <div :class="$style.todo__list">to do list</div>
  </div>
</template>

<script></script>

<style lang="scss" module>
.general {
  max-width: 540px;
  border: 1px solid #ffca93;
  position: relative;
  z-index: 2;
  .todo__list {
    background: #ffca93;
    font-family: "Open Sans";
    font-weight: 600;
    padding: 11px 228px;
    color: #7f4b13;
  }
}
</style>

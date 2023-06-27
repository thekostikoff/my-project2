<template>
  <div>
    <button
      id="button"
      :class="$style.task__btn"
      v-for="button in buttons"
      v-bind:key="button.id"
    >
      {{ button.info }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        { id: 1, info: "All" },
        { id: 2, info: "Active" },
        { id: 3, info: "Completed" },
      ],
    };
  },
};
</script>

<style lang="scss" module>
.task__btn {
  background: #ffca93;
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 19px;
  color: #c9955d;
  border: 0;
  padding: 0 2.5px;
}
</style>

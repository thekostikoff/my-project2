<template>
  <div class="post" id="post" v-bind:key="post.id">
    <!-- v-for="post in postss"  -->
    <div class="checkbox__task">
      <div class="task">
        <input class="checkbox__input" type="checkbox" :id="post.id" />
        <label class="checkbox__label" :for="post.id">
          {{ post.title }} {{ post.number }}
        </label>
      </div>
      <button class="cross"><span></span></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postss: [
        { id: 1, title: "Task", number: 1 },
        { id: 2, title: "Task", number: 2 },
        { id: 3, title: "Task", number: 3 },
      ],
    };
  },
};
</script>

<style lang="scss"></style>

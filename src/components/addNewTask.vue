<template>
  <button :class="$style.btn" @click="createPost">
    <p>Add a new task</p>
  </button>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    addNewTask() {
      const newPost = {
        id: Date.now(),
        title: "Task",
        number: 4,
      };
      this.postss.push(newPost);
    },
  },
};
</script>

<style lang="scss" module>
.btn {
  max-width: 480px;
  background: #ffecd8;
  border: 1.5px dashed #ffca93;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 15px 30px;
  padding: 11px 176px;
  cursor: pointer;
  & p {
    font-family: "Inter";
    font-weight: 400;
    font-size: 16px;
    color: #ffca93;
  }
}
</style>

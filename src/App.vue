<template>
  <div class="todoapp">
    <postsList v-bind:postss="postss" />
    <div class="general">
      <div class="todo__list">to do list</div>
      <addNewTask />
      <div class="todo__info">
        <div class="oneofthird">1/3 left</div>
        <div class="task__info">
          <button class="task__btn">All</button>
          <button class="task__btn">Active</button>
          <button class="task__btn">Completed</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import addNewTask from "@/components/addNewTask.vue";
import postsList from "@/components/postsList.vue";
export default {
  components: {
    postsList,
    addNewTask,
  },
  data() {
    return {
      postss: [
        { id: 1, title: "Task", number: 1 },
        { id: 2, title: "Task", number: 2 },
        { id: 3, title: "Task", number: 3 },
      ],
    };
  },
  methods: {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  position: relative;
  max-width: 100vw;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(104.11deg, #ff7e5f 14.52%, #feb567 87.26%);
}
.todoapp {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.general {
  max-width: 540px;
  border: 1px solid #ffca93;
  box-shadow: 0px 8px 35px 5px #fe9262;
  position: relative;
  z-index: 2;
  background: #fff4e9;
}
.todo__list {
  background: #ffca93;
  font-family: "Open Sans";
  font-weight: 600;
  padding: 11px 228px;
  color: #7f4b13;
}

.todo__info {
  display: flex;
  flex-direction: row;
  align-items: self-start;
  justify-content: center;
  gap: 200px;
  max-width: 540px;
  background: #ffca93;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #c9955d;
  line-height: 28px;
  padding: 11px 228px;
}
.task__info {
  display: flex;
  gap: 25px;
}
.task__btn {
  background: #ffca93;
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 19px;
  color: #c9955d;
  border: 0;
}
.task__info button:hover {
  border: 1px solid #c9955d;
  border-radius: 10px;
  cursor: pointer;
}
.oneofthird {
  font-family: "Open Sans";
  padding-left: 10px;
  min-width: 100px;
}
</style>

<template>
  <div class="todoapp">
    <div class="general">
      <div class="todo__list">to do list</div>
      <div class="post" id="post" v-for="post in postss" v-bind:key="post.id">
        <div class="checkbox__task">
          <div class="task">
            <input class="checkbox__input" type="checkbox" />
            <label class="checkbox__label" for="checkbox__one">
              {{ post.title }} {{ post.number }}
            </label>
          </div>
          <div class="cross"><span></span></div>
        </div>
        <button class="btn">
          <p>Add a new task</p>
        </button>
      </div>
      <div class="todo__info">
        <div class="oneofthird">1/3 left</div>
        <div class="task__info">
          <p>All</p>
          <p>Active</p>
          <p>Completed</p>
        </div>
      </div>
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
  width: 1178px;
  min-height: 640px;
  background: linear-gradient(104.11deg, #ff7e5f 14.52%, #feb567 87.26%);
}
.todoapp {
  position: absolute;
  top: 99px;
  left: 319px;
}
.general {
  max-width: 540px;
  border: 1px solid #ffca93;
  box-shadow: 0px 8px 35px 5px #fe9262;
  position: relative;
  z-index: 2;
}
.todo__list {
  background: #ffca93;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  padding: 11px 228px;
}
.post {
  background: #fff4e9;
  padding: 15px 30px 0px 30px;
}
.checkbox__input {
  width: 24px;
  height: 24px;
  margin-left: 20px;
}
.checkbox__task {
  max-width: 480px;
  background: #ffdfbe;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  padding: 13px 0;
}
.checkbox__label {
  font-family: "Inter";
  font-style: normal;
  font-size: 20px;
  padding-left: 20px;
  color: #7f4b13;
}
.cross {
  display: block;
  position: relative;
  width: 24px;
  height: 24px;
  border: 1.5px solid #ffca93;
  border-radius: 2px;
  margin-left: 320px;
}
.cross span {
  position: absolute;
  background-color: #ffca93;
  position: absolute;
  left: 1px;
  width: 90%;
  height: 2px;
  top: 10px;
  transform: rotate(135deg);
}
.cross:before,
.cross:after {
  content: "";
  background-color: #ffca93;
  position: absolute;
  width: 90%;
  height: 2px;
  left: 1px;
  top: 10px;
  transform: rotate(45deg);
}
.cross:hover {
  border: 1.5px solid #fc8f1a;
}
.cross:hover:before,
.cross:hover:after,
.cross:hover span {
  background-color: #fc8f1a;
  cursor: pointer;
}
.btn {
  max-width: 480px;
  background: #ffecd8;
  border: 1.5px dashed #ffca93;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 15px auto;
  padding: 11px 176px;
}
.btn p {
  font-family: "Inter";
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #ffca93;
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
.task__info p:hover {
  border: 1px solid #c9955d;
  border-radius: 10px;
}
.oneofthird {
  padding-left: 10px;
  min-width: 100px;
}
</style>

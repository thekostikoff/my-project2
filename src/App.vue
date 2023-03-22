<template>
  <div class="todoapp">
    <div class="general">
      <div class="todo__list">to do list</div>
      <div class="post" id="post" v-for="post in postss" v-bind:key="post.id">
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
      <button class="btn">
        <p>Add a new task</p>
      </button>
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
.post {
  background: #fff4e9;
  padding: 15px 0px 0px 30px;
}
.checkbox__task {
  max-width: 480px;
  background: #ffdfbe;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.task {
  position: relative;
  margin: 13px 15px;
}
.checkbox__input {
  -webkit-appearance: none;
  appearance: none;
  position: absolute;
}
.checkbox__label {
  padding-left: 40px;
  font-size: 20px;
  color: #7f4b13;
  cursor: pointer;
  user-select: none;
}
label.checkbox__label {
  font-family: "Inter";
  font-weight: 400;
}
.checkbox__label:before {
  content: "";
  display: block;
  width: 24px;
  height: 24px;
  border: 1.5px solid #feb567;
  border-radius: 5px;
  background: #ffdfbe;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.checkbox__label:after {
  content: "";
  display: block;
  width: 24px;
  height: 24px;
  background: url("../image/V.svg") no-repeat;
  background-size: 13.71px 9.43px;
  opacity: 0;
  position: absolute;
  top: 7px;
  left: 6px;
  z-index: 2;
}
.checkbox__input:checked + .checkbox__label:before {
  background: #feb567;
  border-radius: 5px;
}
.checkbox__input:checked + .checkbox__label:after {
  opacity: 1;
}
.cross {
  display: block;
  position: relative;
  width: 24px;
  height: 24px;
  border: 1.5px solid #ffca93;
  border-radius: 2px;
  margin-top: 13px;
  margin-right: 20px;
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
  cursor: pointer;
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
  margin: 15px 30px;
  padding: 11px 176px;
  cursor: pointer;
}
.btn p {
  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
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

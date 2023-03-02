<template>
  <div class="todoapp">
    <div class="general">
      <div class="todo__list">to do list</div>
      <div class="post" id="post" v-for="post in postss" v-bind:key="post.id">
        <div class="checkbox__task">
          <input class="checkbox__input" type="checkbox" />
          <label class="checkbox__label" for="checkbox__one">
            {{ post.title }} {{ post.number }}
          </label>
          <div class="cross"><span></span></div>
        </div>
      </div>
      <div class="btn">
        <p>Add a new task</p>
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
    <div class="img">
      <img :src="require('../image/list.png')" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: "../image/list.png",
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
  margin: 99px 319px 104px 319px;
}
.general {
  width: 540px;
  border: 1px solid #ffca93;
  box-shadow: 0px 8px 35px 5px #fe9262;
  position: relative;
  z-index: 2;
}
.todo__list {
  width: 540px;
  height: 50px;
  background: #ffca93;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  padding: 11px 228px;
}
.post {
  background: #fff4e9;
  padding: 15px 30px 10px 30px;
}
.checkbox__input {
  width: 24px;
  height: 24px;
  margin-left: 20px;
}
.checkbox__task {
  width: 480px;
  height: 50px;
  background: #ffdfbe;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  padding-top: 13px;
}
.checkbox__label {
  font-family: "Inter";
  font-style: normal;
  font-size: 20px;
  padding-left: 20px;
  color: #7f4b13;
}
.img {
  width: 400px;
  min-height: 512px;
  position: relative;
  top: -415px;
  left: 280px;
  z-index: 1;
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
.cross span:hover {
  background-color: #fc8f1a;
}
.cross:before,
.cross:after:hover {
  background-color: #fc8f1a;
}
.btn {
  width: 480px;
  height: 50px;
  background: #ffecd8;
  border: 1.5px dashed #ffca93;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 0px auto;
  padding: 11px 167px;
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
  width: 540px;
  height: 50px;
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

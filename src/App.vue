<template>
  <div class="todoapp">
    <div class="general">
      <div class="todo__list">to do list</div>
      <div class="post" id="post" v-bind="post in postss">
        <div class="checkbox__task">
          <input class="checkbox__input" type="checkbox" />
          <label class="checkbox__label" for="checkbox__one">
            {{ postss.title }}
          </label>
          <div class="cross"><span></span></div>
        </div>
      </div>
    </div>
    <div class="img"><img v-bind:src="image" />{{ image }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: "../image/list.png",
      postss: [
        { id: 1, title: "Task 1" },
        { id: 2, title: "Task 2" },
        { id: 3, title: "Task 3" },
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
  min-height: 437px;
  border: 2px solid #ffca93;
  box-shadow: 0px 8px 35px 5px #fe9262;
}
.todo__list {
  width: 540px;
  height: 50px;
  background: #ffca93;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  padding: 11px 228px;
}
.post {
  background: #fff4e9;
  min-height: 337px;
  padding: 30px 30px 25px 30px;
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
  height: 512px;
}
.cross {
  display: block;
  position: relative;
  width: 24px;
  height: 24px;
  border: 1.5px solid #ffca93;
  border-radius: 2px;
  margin-left: 330px;
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
</style>

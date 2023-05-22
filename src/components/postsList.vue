<template>
  <div class="post" id="post" v-bind:key="post.id">
    <!-- v-for="post in postss" -->
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
  props: {
    postss: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
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
  background: url("./V.svg") no-repeat;
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
</style>

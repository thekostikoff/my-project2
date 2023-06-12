<template>
  <div :class="$style.todoapp">
    <GeneralPanel />
    <PostsList />
    <AddNewTask />
    <FooterEnd />
  </div>
</template>

<script>
import AddNewTask from "@/components/AddNewTask.vue";
import PostsList from "@/components/PostsList.vue";
import FooterEnd from "@/components/FooterEnd.vue";
import GeneralPanel from "@/components/GeneralPanel.vue";
export default {
  components: {
    PostsList,
    AddNewTask,
    FooterEnd,
    GeneralPanel,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" module>
.todoapp {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff4e9;
}
</style>

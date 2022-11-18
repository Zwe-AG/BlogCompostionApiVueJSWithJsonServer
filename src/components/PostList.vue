<template>
  <div>
    <h1>Post List</h1>
    <div v-for="post in posts" :key="post.id">
      <SingalPost :post="post"></SingalPost>
    </div>
  </div>
</template>

<script>
import SingalPost from "./SingalPost";
export default {
  components: { SingalPost },
  props: ["posts"],
  setup() {},
};
</script>

<style></style>

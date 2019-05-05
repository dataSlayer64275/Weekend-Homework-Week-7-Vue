<template lang="html">
  <div v-if="posts">
  <ul>
    <PostListItem v-for="(post, index) in posts" :key="index" :post="post" />
  </ul>
  </div>
</template>

<script>

import PostListItem from './PostListItem';

export default {
  name:'TopPostsList',
  components: {
    PostListItem
  },
  props:['posts']
}
</script>

<style lang="css" scoped>
</style>

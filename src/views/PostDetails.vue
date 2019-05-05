<template lang="html">
<div v-if="post.media.reddit_video.fallback_url">
  <video width="320" height="240" controls autoplay>
    <source src="" type="video/mp4">
  </video>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>

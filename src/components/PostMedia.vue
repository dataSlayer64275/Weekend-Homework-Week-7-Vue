<template lang="html">
  <div>
<img v-if="mediaImage"  :src="mediaImage" height="300" width="400">
  </div>
</template>

<script>
export default {
  name: 'PostMedia',
  props: ['post','mediaImage','mediaVideo']
}
</script>

<style lang="css" scoped>
</style>

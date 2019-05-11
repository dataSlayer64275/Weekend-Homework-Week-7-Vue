<template lang="html">
  <div>
<img v-if="mediaImage"  :src="mediaImage" height="500" width="500">
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

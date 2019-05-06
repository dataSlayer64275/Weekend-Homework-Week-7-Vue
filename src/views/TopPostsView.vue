<template lang="html">
  <div id="view">
<TopPostsList :posts ="topPosts"/>
<PostMedia v-if="selectedPost" :post="selectedPost" :mediaImage="selectedPostMediaImage" :mediaVideo="selectedPostMediaVideo"/>
  </div>
</template>

<script>

import TopPostsList from '@/components/TopPostsList'
import PostMedia from '@/components/PostMedia'
import {eventBus} from '@/main.js'

export default {
  name: 'top-posts',
  components: {TopPostsList, PostMedia},
  data (){
    return {
      topPosts: [],
      selectedPost: null,
      selectedPostMediaVideo: null,
      selectedPostMediaImage: null
    }
  },
  methods: {

  },
  mounted (){
    fetch ('https://www.reddit.com/r/freefolk/top.json')
    .then(response => response.json())
    .then(results => {
      this.topPosts = results.data.children.map(postObj => postObj.data)
    })
    eventBus.$on('post-selected', (post) => {
        this.selectedPost = post;
    })
  },
  computed: {
    selectedPostMediaCheck () {
      const videoPost = this.selectedPost.is_video
      const imagePost = this.selectedPost.url
      if (videoPost == true) {
        this.selectedPostMediaVideo = videoPost;
      }
      else {
        this.selectedPostMediaImage = imagePost
      }
    }
  }
}
</script>

<style lang="css" scoped>

</style>

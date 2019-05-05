<template lang="html">
  <div id="view">
<TopPostsList :posts ="topPosts"/>
<PostDetail v-if="selectedPost" :post="selectedPost" />
  </div>
</template>

<script>

import TopPostsList from '@/components/TopPostsList'
import PostDetail from '@/components/PostDetail'
import {eventBus} from '@/main.js'

export default {
  name: 'top-posts',
  components: {TopPostsList, PostDetail},
  data (){
    return {
      topPosts: [],
      selectedPost: null,
      selectedPostMediaFilm: null
    }
  },
  methods: {
    selectedPostMediaCheck () {
      if (selectedPost.post.media.reddit_video.fallback_url =!null)
      selectedPost.post.media.reddit_video.fallback_url= this.selectedPostMediaFilm
    }
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
  }
}
</script>

<style lang="css" scoped>

</style>

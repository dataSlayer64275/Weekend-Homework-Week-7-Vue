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
    fetchData(subreddit){
      
    }
  },
  mounted (){
    fetch ('https://www.reddit.com/r/quityourbullshit.json')
    .then(response => response.json())
    .then(results => {
      this.topPosts = results.data.children.map(postObj => postObj.data)
    })
    eventBus.$on('post-selected', (post) => {
        this.selectedPost = post;
        const videoPost = post.is_video
        const imagePost = post.url
        if (videoPost == true) {
          this.selectedPostMediaVideo = videoPost;
        }
        else {
          this.selectedPostMediaImage = imagePost
        }
    })
  },
  computed: {
    selectedPostMediaCheck () {

    }
  }
}
</script>

<style lang="css" scoped>

</style>

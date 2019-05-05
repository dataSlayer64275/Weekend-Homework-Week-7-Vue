<template lang="html">
<li v-on:click="eventHandler">{{post.title}}</li>
</template>

<script>

import {eventBus} from '@/main.js'

export default {
  name:'PostListItem',
  props: ['post'],
  methods : {
    eventHandler(){
      eventBus.$emit('post-selected', this.post)
    }
  }

}
</script>

<style lang="css" scoped>
li {
    color:red;
    width: 40vw;
    list-style-type: none;
    display: block;
    background: #000;
    font-size: 16px;
    margin: 10px 0;
    padding: 10px;
    cursor: pointer;
    transition: 0.1s all ease-in;
    text-align: center;
    font-family:palatino;
    border: solid, 5px, yellow
  }

  li:hover {
    background: #dbe8ff;
    color: #222;
  }
</style>

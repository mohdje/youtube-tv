<template>
  <div id="youtubePlayer"></div>
</template>

<script>
import { DeferredMethodMixin } from "@/others/mixins";

export default {
  name: "YoutubePlayer",
  mixins: [ DeferredMethodMixin ],
  props: {
    videoId: String,
  },
  data(){
    return{
      videoIdChangedTime: null
    }
  },
  watch:{
    videoId(value){
      if(value) {
        this.deferMethod(1000, () => this.loadVideo(value));
      }
    }
  },
  mounted() {
    const iframeApiTag = document.createElement('script');
    iframeApiTag.src = "https://www.youtube.com/iframe_api";
   
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(iframeApiTag, firstScriptTag);
  },
  methods:{
    loadVideo(videoId){
      window.YoutubePlayer.loadVideoById(videoId, 0, "default");
      window.YoutubePlayer.playVideo();
      window.YoutubePlayer.setVolume(100);
    }
  }
};
</script>

<style>
</style>
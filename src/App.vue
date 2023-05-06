<template>
  <div id="app">
    <transition name="fade">
      <HomeScreen v-if="homeScreenVisible" @startClick="onHomeStartClick" />
    </transition>
    <YoutubePlayer :visible="homeScreenVisible" :videoId="selectedVideoId" />
    <transition name="slide-from-right">
      <SideChannelNavigation
        v-if="channelNavigationVisible && !homeScreenVisible"
        :channels="youtubeChannels"
        :selectedChannelIndex="selectedChannelIndex"
      />
    </transition>
  </div>
</template>

<script>
import YoutubePlayer from "@/components/YoutubePlayer.vue";
import { YoutubeChannels } from "@/others/youtubeChannels";
import SideChannelNavigation from "@/components/SideChannelNavigation.vue";
import HomeScreen from "@/components/HomeScreen.vue";
import { DeferredMethodMixin } from "@/others/mixins";

export default {
  name: "App",
  components: {
    YoutubePlayer,
    HomeScreen,
    SideChannelNavigation,
  },
  mixins: [ DeferredMethodMixin ],
  data() {
    return {
      homeScreenVisible: true,
      selectedChannelIndex: null,
      channelNavigationVisible: false
    };
  },
  computed: {
    selectedVideoId() {
      return this.selectedChannelIndex !== null
        ? YoutubeChannels[this.selectedChannelIndex].videoId
        : null;
    },
    youtubeChannels() {
      return YoutubeChannels;
    },
  },
  methods: {
    onHomeStartClick() {
      this.selectedChannelIndex = 0;
      setTimeout(() => {
        document.addEventListener("keydown", this.onKeydown, false);
        this.homeScreenVisible = false;
      }, 1000);
    },
    onKeydown(e) {
      if (e.key === "ArrowDown") {
        this.showChannelNavigation();
        this.selectedChannelIndex =
          this.selectedChannelIndex === YoutubeChannels.length - 1
            ? 0
            : this.selectedChannelIndex + 1;
      } else if (e.key === "ArrowUp") {
        this.showChannelNavigation();
        this.selectedChannelIndex =
          this.selectedChannelIndex === 0
            ? YoutubeChannels.length - 1
            : this.selectedChannelIndex - 1;
      }
    },
    showChannelNavigation() {
      this.channelNavigationVisible = true;
      this.deferMethod(3000, () => this.channelNavigationVisible = false);
    },
  },
};
</script>

<style src="@/styles/transitions.css"></style>
<style>
html,
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>

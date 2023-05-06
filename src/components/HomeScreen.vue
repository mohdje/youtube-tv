<template>
  <div class="home-screen">
    <img class="logo" :src="require('@/assets/tv_logo.png')" />
    <div class="loading-start-section">
      <transition name="fade">
        <img
          v-if="!youtubePlayerReady"
          class="spinner absolute-center"
          :src="require('@/assets/spinner.gif')"
        />
        <button v-else class="absolute-center" ref="startBtn" @click="onStartClick">Start</button>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeScreen",
  data() {
    return {
      youtubePlayerReady: false,
    };
  },
  mounted() {
    document.addEventListener(
      "youtubePlayerReady",
      this.onYoutubePlayerReady,
      false
    );

		document.addEventListener('keydown', this.onKeydown, false);
  },
  methods: {
    onYoutubePlayerReady() {
      this.youtubePlayerReady = true;
    },
		onKeydown(e){
			if(e.key === "Enter") {
        document.removeEventListener('keydown', this.onKeydown, false);
        this.$refs.startBtn.style.background = '#411111';
        this.$refs.startBtn.style.boxShadow = 'none';
				this.$refs.startBtn.click();
			}
		},
    onStartClick() {
      this.$emit("startClick");
    },
  },
};
</script>

<style scoped>
.home-screen {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.home-screen img.logo {
  height: 30%;
  width: auto;
}

.home-screen .loading-start-section{
	height: 10%;
	width: 100%;
	position: relative;
}

.home-screen img.spinner {
  height: 90%;
  width: auto;
}

.home-screen button{
	padding: 10px 50px; 
	font-size: 24px;
	font-weight: 600;
	border-radius: 20px;
	border: none;
	color: white;
  background: linear-gradient(90deg, rgba(251,37,37,1) 0%, rgba(126,0,16,1) 48%);
  box-shadow: rgba(221, 221, 221, 0.521) 0px 4px 12px;
}

.absolute-center {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
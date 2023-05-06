<template>
  <div ref="sidePannel" class="side-pannel">
    <div
      :ref="'channel' + index"
      :class="['channel-presentation', { selected: selectedChannelIndex === index }]"
      v-for="(channel, index) in channels"
      :key="index"
    >
      <img class="picture" :src="channel.picture" />
      <h3 class="name">{{ channel.name }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideChannelNavigation",
  props: {
    channels: Array,
    selectedChannelIndex: Number,
  },
  mounted() {
    this.scrollToSelectedChannel();
  },
  watch: {
    selectedChannelIndex() {
      this.scrollToSelectedChannel();
    },
  },
  methods: {
    scrollToSelectedChannel() {
      const channelElement = this.$refs["channel" + this.selectedChannelIndex][0];
      const rect = channelElement.getClientRects()[0];
      this.$refs.sidePannel.scrollTo({
        top: rect.top,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.side-pannel {
  position: fixed;
  height: 100%;
  width: 25%;
  background: rgb(85, 85, 85);
  background: linear-gradient(
    180deg,
    rgba(85, 85, 85, 1) 0%,
    rgba(47, 47, 47, 1) 35%,
    rgba(0, 0, 0, 1) 100%
  );
  right: 0;
  top: 0;
  overflow-y: auto;
}

.channel-presentation {
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.channel-presentation.selected {
  background: rgb(85, 85, 85);
  background: linear-gradient(
    90deg,
    rgba(85, 85, 85, 1) 0%,
    rgba(181, 27, 46, 1) 35%,
    rgba(0, 0, 0, 1) 100%
  );
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.channel-presentation .name {
  color: white;
  font-weight: 500;
}

.channel-presentation .picture {
  border-radius: 100%;
  height: 80px;
  width: 80px;
  margin: 10px;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgba(100, 100, 100, 0.473);
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(155, 155, 155, 0.856);
  border-radius: 10px;
}
</style>
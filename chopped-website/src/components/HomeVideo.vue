<template>
  <video autoplay muted loop id="chopped-video">
    <source src="../assets/video.mp4" type="video/mp4" />
  </video>
</template>

<style scoped>
#chopped-video {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  opacity: 0.8;
}
</style>

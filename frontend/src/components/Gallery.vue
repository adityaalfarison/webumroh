<template>
  <section id="galeri" class="section">
    <div class="container">
      <div class="section-title mx-auto text-center mb-5">
        <div class="eyebrow">Galeri</div>
        <h2 class="mt-2">Momen Perjalanan Bersama Jamaah</h2>
      </div>

      <div class="row g-3">

        <!-- FOTO -->
        <div
          v-for="photo in photos"
          :key="photo"
          class="col-6 col-lg-3"
        >
          <img
            class="gallery-item"
            :src="photo"
            alt="Galeri perjalanan umroh"
          />
        </div>

        <!-- VIDEO -->
        <div
          v-for="video in videos"
          :key="video"
          class="col-6 col-lg-3"
        >
          <video
            class="gallery-item gallery-video"
            controls
            preload="metadata"
            @play="pauseOtherVideos"
          >
            <source :src="video" type="video/mp4" />
            Browser Anda tidak mendukung video.
          </video>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const photos = [
  "/foto1.png",
  "/foto2.png",
  "/foto3.png",
  "/foto4.png"
];

const videos = [
  "/video1.mp4",
  "/video2.mp4",
  "/video3.mp4",
  "/video4.mp4",
  "/video5.mp4",
  "/video6.mp4"
];

const pauseOtherVideos = (event) => {
  const currentVideo = event.target;

  document.querySelectorAll(".gallery-video").forEach((video) => {
    if (video !== currentVideo) {
      video.pause();
    }
  });
};
</script>
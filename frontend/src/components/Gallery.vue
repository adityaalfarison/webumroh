<template>
  <section id="galeri" class="section">
    <div class="container">
      <div class="section-title mx-auto text-center mb-5">
        <div class="eyebrow">Galeri</div>
        <h2 class="mt-2">Momen Perjalanan Bersama Jamaah</h2>
      </div>

      <div class="row g-3">
        <div v-for="photo in photos" :key="photo" class="col-6 col-lg-3">
          <img class="gallery-item" :src="photo" alt="Galeri perjalanan umroh" />
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
</script>
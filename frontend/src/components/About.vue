<template>
  <section id="tentang" class="section bg-light">
    <div class="container">
      <div class="row align-items-center g-5">

        <!-- GAMBAR -->
        <div class="col-lg-4">
          <div class="main-about-image">
            <img
              class="about-image"
              src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85"
              alt="Masjid"
            />

            <div class="about-card">
              <div class="d-flex align-items-center gap-3">
                <div class="fs-1">
                  <i class="bi bi-moon-stars"></i>
                </div>

                <div>
                  <div class="fw-bold">
                    Amanah dalam melayani
                  </div>

                  <small class="text-white-50">
                    Mengutamakan kenyamanan jamaah
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- TULISAN -->
        <div class="col-lg-5">
          <div
            class="eyebrow text-uppercase fw-bold"
            style="color: var(--gold); letter-spacing:2px"
          >
            Tentang Kami
          </div>

          <h2
            class="display-5 mt-2"
            style="color: var(--green)"
          >
            Lebih dari Sekadar Perjalanan
          </h2>

          <p class="text-secondary mt-4">
            SAMIRA hadir untuk membantu masyarakat mempersiapkan perjalanan
            ibadah umroh dengan layanan yang terencana dan pendampingan yang jelas.
          </p>

          <p class="text-secondary">
            Kami percaya perjalanan umroh bukan hanya tentang sampai ke Tanah Suci,
            tetapi juga tentang mempersiapkan hati, ilmu, dan kebutuhan perjalanan
            dengan sebaik-baiknya.
          </p>

          <div class="row mt-4 g-3">
            <div class="col-12">
              <div class="fw-bold" style="color:var(--green)">
                <i
                  class="bi bi-check2-circle me-2"
                  style="color:var(--gold)"
                ></i>
                Program Terencana
              </div>
            </div>

            <div class="col-12">
              <div class="fw-bold" style="color:var(--green)">
                <i
                  class="bi bi-check2-circle me-2"
                  style="color:var(--gold)"
                ></i>
                Pendampingan Jamaah
              </div>
            </div>
          </div>
        </div>

        <!-- BROSUR PALING KANAN -->
        <div class="col-lg-3">
          <div class="brochure-list">

            <div
              v-for="brochure in brochures"
              :key="brochure"
              class="brochure-item"
              @click="openBrochure(brochure)"
            >
              <img
                :src="brochure"
                alt="Brosur paket umroh"
              />

              <div class="brochure-overlay">
                <i class="bi bi-zoom-in"></i>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

    <!-- POPUP BROSUR -->
    <div
      v-if="selectedBrochure"
      class="brochure-modal"
      @click="closeBrochure"
    >
      <button
        class="brochure-close"
        @click.stop="closeBrochure"
      >
        <i class="bi bi-x-lg"></i>
      </button>

      <img
        :src="selectedBrochure"
        alt="Brosur"
        @click.stop
      />
    </div>

  </section>
</template>

<script setup>
import { ref } from "vue";

const brochures = [
  "/brosur1.png",
  "/brosur2.png",
  "/brosur3.png"
];

const selectedBrochure = ref(null);

const openBrochure = (brochure) => {
  selectedBrochure.value = brochure;
};

const closeBrochure = () => {
  selectedBrochure.value = null;
};
</script>
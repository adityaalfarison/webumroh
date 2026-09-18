<template>
  <section id="profil" class="compro">
    <div class="container">

      <!-- JUDUL -->
      <div class="section-title text-center mx-auto profile-title">
        <div class="eyebrow">Tentang SAMIRA</div>

        <h2 class="mt-2">
          Profil Perusahaan
        </h2>

        <p>
          Mengenal lebih dekat SAMIRA Travel, layanan,
          legalitas, pengalaman, dan perjalanan kami.
        </p>
      </div>

      <!-- PROFIL PAGES -->
      <div class="profile-pages">

        <div
          v-for="page in pages"
          :key="page"
          class="profile-page"
        >
          <img
            :src="`/profile/page-${String(page).padStart(2, '0')}.jpg`"
            :alt="`Profil SAMIRA Travel halaman ${page}`"
            loading="lazy"
            @click="openImage(page)"
          />
        </div>

      </div>

    </div>

    <!-- MODAL GAMBAR -->
    <div
      v-if="selectedPage"
      class="profile-modal"
      @click.self="closeImage"
    >

      <button
        class="profile-close"
        @click="closeImage"
      >
        ×
      </button>

      <button
        class="profile-prev"
        @click="previousPage"
      >
        ‹
      </button>

      <img
        :src="`/profile/page-${String(selectedPage).padStart(2, '0')}.jpg`"
        :alt="`Profil SAMIRA Travel halaman ${selectedPage}`"
      />

      <button
        class="profile-next"
        @click="nextPage"
      >
        ›
      </button>

    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const pages = Array.from({ length: 15 }, (_, i) => i + 1);

const selectedPage = ref(null);

const openImage = (page) => {
  selectedPage.value = page;
};

const closeImage = () => {
  selectedPage.value = null;
};

const nextPage = () => {
  if (selectedPage.value < 15) {
    selectedPage.value++;
  }
};

const previousPage = () => {
  if (selectedPage.value > 1) {
    selectedPage.value--;
  }
};
</script>

<style scoped>
.company-profile-section {
  padding: 100px 0;
  background: #f8f5ed;
}

.profile-title {
  margin-bottom: 50px;
}

.profile-title p {
  color: #68736e;
  max-width: 650px;
  margin: 15px auto 0;
}

/* =========================
   HALAMAN PROFIL
========================= */

.profile-pages {
  display: flex;
  flex-direction: column;
  gap: 35px;
}

.profile-page {
  background: #fff;
  padding: 10px;
  border-radius: 18px;

  box-shadow:
    0 15px 45px rgba(17, 45, 37, .12);

  overflow: hidden;
}

.profile-page img {
  width: 100%;
  height: auto;
  display: block;

  border-radius: 10px;

  cursor: zoom-in;

  transition: transform .25s ease;
}

.profile-page img:hover {
  transform: scale(1.01);
}

/* =========================
   MODAL
========================= */

.profile-modal {
  position: fixed;
  inset: 0;

  z-index: 9999;

  background: rgba(0, 0, 0, .88);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 30px;
}

.profile-modal img {
  max-width: 92vw;
  max-height: 90vh;

  object-fit: contain;

  border-radius: 8px;
}

/* CLOSE */

.profile-close {
  position: fixed;

  top: 20px;
  right: 25px;

  width: 45px;
  height: 45px;

  border: 0;
  border-radius: 50%;

  background: #fff;
  color: #123d32;

  font-size: 32px;
  line-height: 1;

  cursor: pointer;

  z-index: 10001;
}

/* PREV / NEXT */

.profile-prev,
.profile-next {
  position: fixed;

  top: 50%;
  transform: translateY(-50%);

  width: 50px;
  height: 50px;

  border: 0;
  border-radius: 50%;

  background: rgba(255,255,255,.9);
  color: #123d32;

  font-size: 40px;
  line-height: 35px;

  cursor: pointer;

  z-index: 10001;
}

.profile-prev {
  left: 25px;
}

.profile-next {
  right: 25px;
}

.profile-prev:hover,
.profile-next:hover,
.profile-close:hover {
  background: #c9a45c;
  color: #fff;
}

/* =========================
   MOBILE
========================= */

@media (max-width: 767px) {

  .company-profile-section {
    padding: 65px 0;
  }

  .profile-title {
    margin-bottom: 30px;
  }

  .profile-title h2 {
    font-size: 32px;
  }

  .profile-title p {
    font-size: 14px;
  }

  .profile-pages {
    gap: 20px;
  }

  .profile-page {
    padding: 5px;
    border-radius: 12px;
  }

  .profile-page img {
    border-radius: 7px;
  }

  .profile-modal {
    padding: 15px;
  }

  .profile-modal img {
    max-width: 96vw;
    max-height: 85vh;
  }

  .profile-close {
    top: 12px;
    right: 12px;

    width: 40px;
    height: 40px;

    font-size: 28px;
  }

  .profile-prev,
  .profile-next {
    width: 40px;
    height: 40px;

    font-size: 30px;
  }

  .profile-prev {
    left: 10px;
  }

  .profile-next {
    right: 10px;
  }
}
</style>
<template>
  <section class="section">
    <div class="container">
      <div class="section-title text-center mx-auto mb-5">
        <div class="eyebrow">Kenapa Kami</div>
        <h2 class="mt-2">Mendampingi Anda dari Persiapan hingga Pulang</h2>
      </div>

      <div class="row g-4">
        <div v-for="item in reasons" :key="item.title" class="col-md-6 col-lg-3">
          <div class="why-box">
            <div class="icon-box"><i :class="item.icon"></i></div>
            <h4>{{ item.title }}</h4>
            <p class="text-secondary mb-0">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const reasons = [
  {
    icon: "bi bi-person-check",
    title: "Pembimbing Berpengalaman",
    text: "Didampingi pembimbing yang membantu jamaah memahami rangkaian ibadah."
  },
  {
    icon: "bi bi-building",
    title: "Hotel Nyaman",
    text: "Pilihan hotel disesuaikan dengan paket dan kebutuhan perjalanan."
  },
  {
    icon: "bi bi-bus-front",
    title: "Transportasi",
    text: "Transportasi perjalanan disiapkan agar jamaah dapat beribadah dengan nyaman."
  },
  {
    icon: "bi bi-headset",
    title: "Layanan Responsif",
    text: "Tim kami siap membantu konsultasi sebelum dan selama persiapan keberangkatan."
  }
];
</script>
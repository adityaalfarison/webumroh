<template>
  <section class="section bg-light">
    <div class="container">
      <div class="section-title text-center mx-auto mb-5">
        <div class="eyebrow">Cerita Jamaah</div>
        <h2 class="mt-2">Pengalaman Mereka</h2>
      </div>

      <div class="row g-4">
        <div v-for="item in testimonials" :key="item.name" class="col-md-4">
          <div class="testimonial">
            <div class="stars mb-3">★★★★★</div>
            <p class="text-secondary">“{{ item.text }}”</p>
            <div class="fw-bold mt-4">{{ item.name }}</div>
            <small class="text-secondary">{{ item.city }}</small>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: "Bapak Ahmad",
    city: "Jakarta",
    text: "Pelayanannya membantu sekali sejak persiapan sampai kepulangan."
  },
  {
    name: "Ibu Siti",
    city: "Depok",
    text: "Pembimbingnya sangat membantu kami memahami rangkaian ibadah."
  },
  {
    name: "Bapak Hendra",
    city: "Bogor",
    text: "Informasi keberangkatan disampaikan dengan jelas dan mudah dipahami."
  }
];
</script>
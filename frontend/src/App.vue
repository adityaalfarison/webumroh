<template>
  <div>
    <Navbar />

    <main>
      <Hero />
      <Stats />
      <Packages />
      <WhyUs />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
    </main>

    <Footer />

    <a
      class="floating-wa"
      href="https://wa.me/6281212301008?text=Assalamualaikum%20Sahabat%20SAMIRA%20saya%20ingin%20konsultasi%20umroh."
      target="_blank"
      aria-label="Hubungi WhatsApp"
    >
      <i class="bi bi-whatsapp"></i>
    </a>
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Stats from "./components/Stats.vue";
import Packages from "./components/Packages.vue";
import WhyUs from "./components/WhyUs.vue";
import About from "./components/About.vue";
import Gallery from "./components/Gallery.vue";
import Testimonials from "./components/Testimonials.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
</script>
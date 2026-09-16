<template>
  <section id="paket" class="section bg-light">
    <div class="container">
      <div class="section-title text-center mx-auto mb-5">
        <div class="eyebrow">Pilihan Paket</div>
        <h2 class="mt-2">Paket Umroh untuk Setiap Kebutuhan</h2>
        <p class="text-secondary mt-3">
          Pilih paket perjalanan yang sesuai dengan kebutuhan dan kenyamanan Anda.
        </p>
      </div>

      <div v-if="loading" class="text-center py-5">
        <div class="spinner-border text-success"></div>
        <p class="mt-3">Memuat paket...</p>
      </div>

      <div v-else-if="error" class="alert alert-warning text-center">
        {{ error }}
      </div>

      <div v-else class="row g-4">
        <div v-for="(item, index) in packages" :key="item.id" class="col-md-6 col-lg-4">
          <div class="package-card">
            <div class="package-top">
              <span class="badge bg-light text-dark mb-3">{{ index === 1 ? "Populer" : "Pilihan" }}</span>
              <h3 class="mb-1">{{ item.name }}</h3>
              <div>{{ item.duration }} perjalanan</div>
            </div>

            <div class="package-body">
              <div class="package-price">
                {{ formatPrice(item.price) }}
              </div>
              <small class="text-secondary">per jamaah</small>

              <hr class="my-4" />

              <ul class="feature-list">
                <li><i class="bi bi-check-circle-fill"></i>{{ item.airline }}</li>
                <li><i class="bi bi-check-circle-fill"></i>Hotel {{ item.hotel }}</li>
                <li><i class="bi bi-check-circle-fill"></i>Transportasi selama di Arab</li>
                <li><i class="bi bi-check-circle-fill"></i>Pembimbing ibadah</li>
              </ul>

              <p class="text-secondary small">{{ item.description }}</p>

              <a
                :href="`https://wa.me/6281212301008?text=${encodeURIComponent('Assalamualaikum, saya tertarik dengan paket ' + item.name)} `"
                target="_blank"
                class="btn btn-gold w-100 mt-2"
              >
                Tanya Paket
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";

const packages = ref([]);
const loading = ref(true);
const error = ref("");

const formatPrice = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(value);

onMounted(async () => {
  try {
    const response = await fetch("/api/packages");
    if (!response.ok) throw new Error("Gagal mengambil data");
    const result = await response.json();
    packages.value = result.data;
  } catch (err) {
    error.value = "Backend belum berjalan. Jalankan server Express terlebih dahulu.";
  } finally {
    loading.value = false;
  }
});
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-white sticky-top shadow-sm">
    <div class="container py-2">

      <!-- Logo + Brand -->
      <a class="navbar-brand d-flex align-items-center" href="#home">

        <span class="brand-mark">
          <img src="/logo.png" alt="SAMIRA Travel">
        </span>

        <div class="brand-text">
          <span>SAMIRA</span>
          <u>Sahabat Umroh & Haji Keluarga Anda</u>
        </div>

      </a>

      <!-- Hamburger -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNav"
        aria-controls="mainNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menu -->
      <div id="mainNav" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto align-items-lg-center">

          <li class="nav-item">
            <a class="nav-link" href="#home">Beranda</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#paket">Paket</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#tentang">Tentang</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#galeri">Galeri</a>
          </li>
          
          

          <li class="nav-item">
            <a class="nav-link" href="#compro">Company Profile</a>
          </li>

          <li class="nav-item ms-lg-3 mt-2 mt-lg-0">
            <a class="btn btn-gold w-100" href="#kontak">
              Konsultasi
            </a>
          </li>

        </ul>
      </div>

    </div>
  </nav>
</template>
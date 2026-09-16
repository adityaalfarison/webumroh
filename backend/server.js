const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const packages = [
  {
    id: 1,
    name: "Umroh Hemat",
    duration: "9 Hari",
    price: 28900000,
    airline: "Saudia Airlines",
    hotel: "Bintang 3",
    description: "Paket ekonomis dengan fasilitas nyaman untuk perjalanan ibadah yang tenang."
  },
  {
    id: 2,
    name: "Umroh Reguler",
    duration: "12 Hari",
    price: 32900000,
    airline: "Garuda Indonesia",
    hotel: "Bintang 4",
    description: "Pilihan populer dengan hotel nyaman dan jadwal perjalanan yang seimbang."
  },
  {
    id: 3,
    name: "Umroh Premium",
    duration: "14 Hari",
    price: 38900000,
    airline: "Garuda Indonesia",
    hotel: "Bintang 5",
    description: "Perjalanan premium dengan fasilitas terbaik dan lokasi hotel strategis."
  }
];

app.get("/api/packages", (req, res) => {
  res.json({
    success: true,
    data: packages
  });
});

app.get("/api/packages/:id", (req, res) => {
  const item = packages.find((p) => p.id === Number(req.params.id));

  if (!item) {
    return res.status(404).json({
      success: false,
      message: "Paket tidak ditemukan"
    });
  }

  res.json({
    success: true,
    data: item
  });
});

app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "API Travel Umroh aktif" });
});

app.listen(PORT, () => {
  console.log(`Backend berjalan di http://localhost:${PORT}`);
});
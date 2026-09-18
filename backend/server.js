const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const packages = [
  {
    id: 1,
    name: "SAFAWI",
    duration: "12 Hari",
    price: 33476000,
    airline: "Saudia Airlines, Turkish Airlines, Lion Air, Batik Air",
    hotel: "Le Meredien Tower, Grand Al Massa, Arkan Al manar",
    description: "Paket ekonomis dengan fasilitas nyaman untuk perjalanan ibadah yang tenang."
  },
  {
    id: 2,
    name: "SUKARI",
    duration: "12 Hari",
    price: 36476000,
    airline: "Saudia Airlines, Turkish Airlines, Lion Air, Batik Air",
    hotel: "Anjum, Rayyana, Grand Plaza, Durrat Al Eiman",
    description: "Pilihan populer dengan hotel nyaman dan jadwal perjalanan yang seimbang."
  },
  {
    id: 3,
    name: "MAJOL",
    duration: "16 Hari",
    price: 42976000,
    airline: "Saudia Airlines, Turkish Airlines, Lion Air, Batik Air",
    hotel: "Movenpick, Durr Al Eiman Royale, Zam - Zam Tower, Taiba Front, Al Aqeeq, Shaza Regency Plaza, Badar Al Maqam",
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
  res.json({
    success: true,
    message: "API Travel Umroh aktif"
  });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server Express berjalan di http://localhost:${PORT}`);
});
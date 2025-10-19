window.TIAN_STORE_CONFIG = {
  name: "Tian Store",
  description: "Toko online minimalis bergaya modern.",
  contactWA: "6282245682288",
  theme: {
    primary: ["#0B61FF", "#2A8DFF", "#79AFFF"],
    bg: "#FFFFFF",
    glassBlur: 12
  },
  categories: [
    {
      id: "cat-1",
      name: "Aksesori",
      children: [
        {
          id: "p-001",
          sku: "TS-AC-001",
          name: "Case iPhone Minimal",
          price: 129000,
          stock: 10,
          image: "https://placehold.co/300x300/0B61FF/FFFFFF?text=Case+iPhone",
          description: "Case tipis finishing matte, soft-touch."
        },
        {
          id: "p-002",
          sku: "TS-AC-002",
          name: "Kabel Charger Fast 20W",
          price: 89000,
          stock: 15,
          image: "https://placehold.co/300x300/2A8DFF/FFFFFF?text=Kabel+Charger",
          description: "Kabel braided tahan lama, mendukung fast charging."
        }
      ]
    },
    {
      id: "cat-2",
      name: "Gadget",
      children: [
        {
          id: "p-003",
          sku: "TS-GD-001",
          name: "Earbuds Wireless X5",
          price: 299000,
          stock: 8,
          image: "https://placehold.co/300x300/79AFFF/FFFFFF?text=Earbuds+X5",
          description: "Suara jernih, koneksi stabil, baterai tahan 20 jam."
        }
      ]
    }
  ]
};

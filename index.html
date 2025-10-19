<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Tian Store</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  <style>
    :root {
      --primary-500: #0B61FF;
      --primary-400: #2A8DFF;
      --primary-300: #79AFFF;
      --white: #FFFFFF;
      --glass-bg: rgba(255, 255, 255, 0.8);
      --glass-border: rgba(255, 255, 255, 0.2);
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, sans-serif;
    }

    body {
      background: linear-gradient(135deg, var(--primary-500), var(--primary-300));
      min-height: 100vh;
      padding: 20px;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0;
      max-width: 1200px;
      margin: 0 auto;
    }

    .logo {
      font-size: 24px;
      font-weight: 700;
      color: white;
    }

    .nav-links {
      display: flex;
      gap: 16px;
    }

    .nav-btn {
      background: rgba(255, 255, 255, 0.2);
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 12px;
      cursor: pointer;
      font-weight: 600;
      backdrop-filter: blur(10px);
      transition: background 0.2s ease;
    }

    .nav-btn:hover {
      background: rgba(255, 255, 255, 0.3);
    }

    .store-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .store-header {
      text-align: center;
      margin-bottom: 40px;
    }

    .store-title {
      font-size: 32px;
      color: white;
      margin-bottom: 10px;
    }

    .store-desc {
      color: rgba(255, 255, 255, 0.9);
      font-size: 18px;
    }

    .categories {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    .category {
      background: var(--glass-bg);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid var(--glass-border);
      border-radius: 20px;
      padding: 24px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    }

    .category-title {
      font-size: 22px;
      color: var(--primary-500);
      margin-bottom: 20px;
      font-weight: 600;
    }

    .products {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
    }

    .product-card {
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .product-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    }

    .product-img {
      width: 100%;
      height: 180px;
      object-fit: cover;
    }

    .product-info {
      padding: 16px;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }

    .product-name {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 8px;
      color: #333;
    }

    .product-desc {
      font-size: 13px;
      color: #666;
      margin-bottom: 12px;
      flex-grow: 1;
    }

    .product-price {
      font-size: 18px;
      font-weight: 700;
      color: var(--primary-500);
      margin-bottom: 12px;
    }

    .stock {
      font-size: 12px;
      color: #888;
      margin-bottom: 12px;
    }

    .btn-group {
      display: flex;
      gap: 8px;
    }

    .cart-btn, .buy-btn {
      flex: 1;
      padding: 8px;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s ease;
      border: none;
      font-size: 14px;
    }

    .cart-btn {
      background: #f0f5ff;
      color: var(--primary-500);
    }

    .cart-btn:hover {
      background: #e0eaff;
    }

    .buy-btn {
      background: var(--primary-500);
      color: white;
    }

    .buy-btn:hover {
      background: var(--primary-400);
    }

    .btn-group .disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .contact {
      text-align: center;
      margin-top: 40px;
      color: white;
      font-size: 16px;
    }

    .contact a {
      color: white;
      text-decoration: underline;
    }

    .notification {
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--primary-500);
      color: white;
      padding: 12px 24px;
      border-radius: 12px;
      font-weight: 500;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
      z-index: 1000;
    }

    .notification.show {
      opacity: 1;
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo">Tian Store</div>
    <div class="nav-links">
      <button class="nav-btn" onclick="window.location.href='profil.html'">Profil</button>
      <button class="nav-btn" onclick="logout()">Logout</button>
    </div>
  </div>

  <div class="store-container">
    <div class="store-header">
      <h1 class="store-title" id="storeName">Tian Store</h1>
      <p class="store-desc" id="storeDesc">Toko online minimalis bergaya modern.</p>
    </div>

    <div class="categories" id="categoriesContainer"></div>

    <div class="contact">
      Butuh bantuan? Hubungi kami di <a href="https://wa.me/6282245682288" target="_blank">WhatsApp</a>
    </div>
  </div>

  <div id="notification" class="notification"></div>

  <script src="config.js"></script>
  <script>
    if (!localStorage.getItem('loggedUser')) {
      window.location.href = 'login.html';
    }

    function showNotification(message) {
      const notif = document.getElementById('notification');
      notif.textContent = message;
      notif.classList.add('show');
      setTimeout(() => notif.classList.remove('show'), 3000);
    }

    function logout() {
      localStorage.removeItem('loggedUser');
      window.location.href = 'login.html';
    }

    function formatRupiah(angka) {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
      }).format(angka);
    }

    function addToCart(product) {
      if (product.stock <= 0) {
        showNotification('Stok habis!');
        return;
      }

      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      const existing = cart.find(item => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      showNotification('✅ Ditambahkan ke keranjang!');
    }

    function buyNow(product) {
      if (product.stock <= 0) {
        showNotification('Stok habis!');
        return;
      }

      const user = JSON.parse(localStorage.getItem('loggedUser'));
      let orders = JSON.parse(localStorage.getItem('orders')) || [];
      const newOrder = {
        id: 'order-' + Date.now(),
        productId: product.id,
        productName: product.name,
        price: product.price,
        date: new Date().toISOString(),
        status: 'diproses'
      };
      orders.push(newOrder);
      localStorage.setItem('orders', JSON.stringify(orders));

      // Kurangi stok (simulasi)
      showNotification('✅ Pesanan berhasil! Cek di Profil.');
    }

    function renderStore() {
      const config = window.TIAN_STORE_CONFIG;
      document.getElementById('storeName').textContent = config.name;
      document.getElementById('storeDesc').textContent = config.description;

      const categoriesContainer = document.getElementById('categoriesContainer');
      categoriesContainer.innerHTML = '';

      config.categories.forEach(category => {
        const categoryEl = document.createElement('div');
        categoryEl.className = 'category';
        categoryEl.innerHTML = `
          <h2 class="category-title">${category.name}</h2>
          <div class="products" id="cat-${category.id}"></div>
        `;
        categoriesContainer.appendChild(categoryEl);

        const productsContainer = document.getElementById(`cat-${category.id}`);
        category.children.forEach(product => {
          const disabled = product.stock <= 0;
          const productCard = document.createElement('div');
          productCard.className = 'product-card';
          productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img" />
            <div class="product-info">
              <div class="product-name">${product.name}</div>
              <div class="product-desc">${product.description}</div>
              <div class="product-price">${formatRupiah(product.price)}</div>
              <div class="stock">Stok: ${product.stock}</div>
              <div class="btn-group">
                <button class="cart-btn ${disabled ? 'disabled' : ''}" 
                  ${disabled ? 'disabled' : ''} 
                  onclick='addToCart(${JSON.stringify(product).replace(/'/g, "\\'")})'>
                  🛒 Keranjang
                </button>
                <button class="buy-btn ${disabled ? 'disabled' : ''}" 
                  ${disabled ? 'disabled' : ''} 
                  onclick='buyNow(${JSON.stringify(product).replace(/'/g, "\\'")})'>
                  💳 Beli
                </button>
              </div>
            </div>
          `;
          productsContainer.appendChild(productCard);
        });
      });
    }

    renderStore();
  </script>
</body>
</html>

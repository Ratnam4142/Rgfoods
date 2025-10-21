// src/pages/MenuPage.js
import React, { useState } from 'react';
import '../css/MenuPage.css';

const MenuPage = () => {
  const [cart, setCart] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [checkoutDetails, setCheckoutDetails] = useState({
    fullName: '',
    doorNumber: '',
    address: ''
  });

  const menuCategories = [
    {
      name: 'Sweets',
      items: [
        { id: 1, name: 'Bellam Sunnundalu', weight: '1kg', price: 899 },
        { id: 2, name: 'Bellam Ragi Laddu', weight: '1kg', price: 799 },
        { id: 3, name: 'Nuvvula Laddu', weight: '1kg', price: 699 },
        { id: 4, name: 'Palli Laddu', weight: '1kg', price: 599 },
        { id: 5, name: 'Rava Laddu', weight: '1kg', price: 599 }
      ]
    },
    {
      name: 'Snacks',
      items: [
        { id: 6, name: 'Murukulu', weight: '1kg', price: 699 },
        { id: 7, name: 'Janthikalu', weight: '1kg', price: 550 },
        { id: 8, name: 'Chekkalu', weight: '1kg', price: 550 },
        { id: 9, name: 'Aaku Pakodi', weight: '1kg', price: 550 },
        { id: 10, name: 'Kara Boondi', weight: '1kg', price: 599 }
      ]
    },
    {
      name: 'Pickles',
      items: [
        { id: 11, name: 'Chicken Pickle', weight: '1kg', price: 1400 },
        { id: 12, name: 'Chicken Gongora', weight: '1kg', price: 1400 }
      ]
    }
  ];

  const toggleCategory = (categoryName) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  const getImagePath = (itemId) => `/images/products/${itemId}.jpg`;

  const addToCart = (item, quantity) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.id === item.id);
      if (existing) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      } else {
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  const updateQuantity = (itemId, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === itemId
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    const { fullName, doorNumber, address } = checkoutDetails;

    if (!fullName || !doorNumber) {
      alert('Please enter your name and door number.');
      return;
    }

    // Hardcoded WhatsApp number (replace with your own)
    const yourWhatsAppNumber = '7981213612';

    const cartLines = cart.map(
      (item) =>
        `${item.name} (${item.weight}) x${item.quantity} = ₹${item.price * item.quantity}`
    );
    const cartText = cartLines.join('%0A');
    const total = getTotal();
    const addrText = address ? `%0A*Address:* ${address}` : '';

    const message = `*New Order*%0A%0A*Name:* ${fullName}%0A*Door No.:* ${doorNumber}${addrText}%0A%0A*Items:*%0A${cartText}%0A%0A*Total:* ₹${total}`;

    const whatsappUrl = `https://wa.me/91${yourWhatsAppNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');

    // Reset form and cart
    setCart([]);
    setShowCheckoutModal(false);
    setCheckoutDetails({ fullName: '', doorNumber: '', address: '' });
  };

  return (
    <div className="menu-layout">
      {/* LEFT: MENU */}
      <div className="menu-sidebar">
        {menuCategories.map((category) => (
          <div
            key={category.name}
            className={`menu-category ${expandedCategories[category.name] ? 'expanded' : ''}`}
          >
            <div className="category-header" onClick={() => toggleCategory(category.name)}>
              <h3 className="category-name">{category.name}</h3>
              <span className="toggle-icon">
                {expandedCategories[category.name] ? '▲' : '▼'}
              </span>
            </div>
            {expandedCategories[category.name] && (
              <ul className="menu-items">
                {category.items.map((item) => (
                  <li
                    key={item.id}
                    className={`menu-item ${selectedItem?.id === item.id ? 'active' : ''}`}
                    onClick={() => setSelectedItem(item)}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* CENTER: ITEM PREVIEW */}
      <div className="main-content">
        {selectedItem ? (
          <div className="product-card">
            <img
              src={getImagePath(selectedItem.id)}
              alt={selectedItem.name}
              className="product-image"
            />
            <h2>{selectedItem.name}</h2>
            <p className="weight-price">
              <strong>{selectedItem.weight}</strong> — ₹{selectedItem.price}
            </p>
            <p className="description">
              Freshly prepared with natural ingredients. Made daily in small batches for maximum freshness and flavor.
            </p>
            <div className="body-quantity-controls">
              <button className="qty-btn" onClick={() => updateQuantity(selectedItem.id, -1)}>−</button>
              <span className="qty-display">
                {cart.find((c) => c.id === selectedItem.id)?.quantity || 0}
              </span>
              <button className="qty-btn" onClick={() => updateQuantity(selectedItem.id, 1)}>+</button>
            </div>
            <button className="add-to-cart-btn" onClick={() => addToCart(selectedItem, 1)}>
              + Add to Cart
            </button>
          </div>
        ) : (
          <div className="placeholder">
            <p>Select an item from the menu to view details</p>
          </div>
        )}
      </div>

      {/* RIGHT: CART */}
      <div className="cart-sidebar">
        <h2 className="cart-title">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="cart-empty">No items added yet</p>
        ) : (
          <>
            <ul className="cart-items">
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <span>{item.name}</span>
                  </div>
                  <div className="cart-item-controls">
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, -1)}>−</button>
                    <span className="qty-display">{item.quantity}</span>
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => removeItem(item.id)}>✕</button>
                </li>
              ))}
            </ul>
            <div className="cart-total"><strong>Total: ₹{getTotal()}</strong></div>
            <button className="checkout-btn" onClick={() => setShowCheckoutModal(true)}>
              Checkout
            </button>
          </>
        )}
      </div>

      {/* CHECKOUT MODAL */}
      {showCheckoutModal && (
        <div className="modal-overlay" onClick={() => setShowCheckoutModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Order Details</h2>
            <form onSubmit={handleCheckout}>
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  value={checkoutDetails.fullName}
                  onChange={(e) =>
                    setCheckoutDetails({ ...checkoutDetails, fullName: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label>Door Number *</label>
                <input
                  type="text"
                  value={checkoutDetails.doorNumber}
                  onChange={(e) =>
                    setCheckoutDetails({ ...checkoutDetails, doorNumber: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label>Address (Optional)</label>
                <textarea
                  value={checkoutDetails.address}
                  onChange={(e) =>
                    setCheckoutDetails({ ...checkoutDetails, address: e.target.value })
                  }
                  rows="3"
                />
              </div>
              <div className="modal-actions">
                <button type="submit" className="checkout-btn">
                  Send via WhatsApp
                </button>
                <button type="button" className="cancel-btn" onClick={() => setShowCheckoutModal(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuPage;

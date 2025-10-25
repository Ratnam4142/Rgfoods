import React, { useState } from "react";
import "../css/Menu.css";

const MenuPage = () => {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [checkoutDetails, setCheckoutDetails] = useState({
    fullName: "",
    mobileNumber: "",
    doorNumber: "",
    address: "",
  });
  const [selectedWeights, setSelectedWeights] = useState({}); // track selected weight for each item

  const menuCategories = [
    {
      name: "Sweets",
      items: [
        { id: 1, name: "Bellam Sunnundalu", price1kg: 899, price500g: 450, image: "/images/products/1.png" },
        { id: 2, name: "Bellam Ragi Laddu", price1kg: 799, price500g: 400, image: "/images/products/2.png" },
        { id: 3, name: "Nuvvula Laddu", price1kg: 699, price500g: 350, image: "/images/products/3.png" },
        { id: 4, name: "Palli Laddu", price1kg: 599, price500g: 300, image: "/images/products/4.png" },
        { id: 5, name: "Rava Laddu", price1kg: 599, price500g: 300, image: "/images/products/5.png" },
        { id: 6, name: "Boondi laddu", price1kg: 599, price500g: 300, image: "/images/products/5.png" },
      ],
    },
    {
      name: "Snacks",
      items: [
        { id: 7, name: "Murukulu", price1kg: 699, price500g: 350, image: "/images/products/6.svg" },
        { id: 8, name: "Janthikalu", price1kg: 550, price500g: 280, image: "/images/products/7.svg" },
        { id: 9, name: "Chekkalu", price1kg: 550, price500g: 280, image: "/images/products/8.svg" },
        { id: 10, name: "Aaku Pakodi", price1kg: 550, price500g: 280, image: "/images/products/9.svg" },
        { id: 11, name: "Kara Boondi", price1kg: 599, price500g: 300, image: "/images/products/10.svg" },
      ],
    },
    {
      name: "Pickles",
      items: [
        { id: 12, name: "Chicken Pickle", price1kg: 1400, price500g: 700, image: "/images/products/11.svg" },
        { id: 13, name: "Chicken Gongura", price1kg: 1400, price500g: 700, image: "/images/products/12.svg" },
      ],
    },
  ];

  const toggleCategory = (categoryName) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  const ImageEnsurePng = ({ itemId, svgPath, alt, width = 400, height = 300, ...props }) => {
    const [src] = useState(`/images/products/${itemId}.png`);
    return <img src={src} alt={alt} {...props} />;
  };

  const addToCart = (item) => {
    const selectedWeight = selectedWeights[item.id];
    if (!selectedWeight) {
      alert("Please select a weight (500g or 1kg) before adding to cart.");
      return;
    }

    const price = selectedWeight === "1kg" ? item.price1kg : item.price500g;
    const uniqueId = `${item.id}-${selectedWeight}`;

    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.id === uniqueId);
      if (existing) {
        return prevCart.map((i) =>
          i.id === uniqueId ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [
          ...prevCart,
          { ...item, id: uniqueId, weight: selectedWeight, price, quantity: 1 },
        ];
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
    const { fullName, mobileNumber, doorNumber, address } = checkoutDetails;

    if (!fullName || !mobileNumber || !doorNumber || !address) {
      alert("Please fill all mandatory fields (Name, Mobile, Door No, Address).");
      return;
    }

    const yourWhatsAppNumber = "7981213612";
    const cartLines = cart.map(
      (item) =>
        `${item.name} (${item.weight}) x${item.quantity} = ₹${
          item.price * item.quantity
        }`
    );
    const cartText = cartLines.join("%0A");
    const total = getTotal();

    const message = `*New Order*%0A%0A*Name:* ${fullName}%0A*Mobile:* ${mobileNumber}%0A*Door No.:* ${doorNumber}%0A*Address:* ${address}%0A%0A*Items:*%0A${cartText}%0A%0A*Total:* ₹${total}`;
    const whatsappUrl = `https://wa.me/91${yourWhatsAppNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");

    setCart([]);
    setShowCheckoutModal(false);
    setCheckoutDetails({
      fullName: "",
      mobileNumber: "",
      doorNumber: "",
      address: "",
    });
  };

  return (
    <div className="menu-page">
      {/* LEFT SIDEBAR */}
      <div className="sidebar-left">
        {menuCategories.map((category) => (
          <div key={category.name} className="category">
            <div
              className="category-header"
              onClick={() => {
                toggleCategory(category.name);
                setSelectedCategory(category);
              }}
            >
              <h3>{category.name}</h3>
              <span>{expandedCategories[category.name] ? "▲" : "▼"}</span>
            </div>
          </div>
        ))}
      </div>

      {/* CENTER CONTENT */}
      <div className="menu-center">
        {selectedCategory ? (
          <div>
            <h2 className="category-title">{selectedCategory.name}</h2>
            <div className="menu-grid">
              {selectedCategory.items.map((item) => (
                <div key={item.id} className="menu-card">
                  <ImageEnsurePng
                    itemId={item.id}
                    svgPath={item.image}
                    alt={item.name}
                    className="menu-img"
                    width={300}
                    height={200}
                  />
                  <h3>{item.name}</h3>

                  {/* Weight options */}
                  <div className="weight-options">
                    <label>
                      <input
                        type="radio"
                        name={`weight-${item.id}`}
                        value="500g"
                        checked={selectedWeights[item.id] === "500g"}
                        onChange={() =>
                          setSelectedWeights((prev) => ({
                            ...prev,
                            [item.id]: "500g",
                          }))
                        }
                      />{" "}
                      500g — ₹{item.price500g}
                    </label>
                    <label>
                      <input
                        type="radio"
                        name={`weight-${item.id}`}
                        value="1kg"
                        checked={selectedWeights[item.id] === "1kg"}
                        onChange={() =>
                          setSelectedWeights((prev) => ({
                            ...prev,
                            [item.id]: "1kg",
                          }))
                        }
                      />{" "}
                      1kg — ₹{item.price1kg}
                    </label>
                  </div>

                  <button onClick={() => addToCart(item)}>+ Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="empty-category">
            <p>Select a category to view items 🍴</p>
          </div>
        )}
      </div>

      {/* RIGHT SIDEBAR (CART) */}
      <div className="sidebar-right">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p className="empty-cart">No items added yet</p>
        ) : (
          <>
            <ul className="cart-list">
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <div>
                    <p className="cart-name">
                      {item.name} ({item.weight})
                    </p>
                    <p className="cart-details">
                      ₹{item.price} × {item.quantity}
                    </p>
                  </div>
                  <div className="cart-controls">
                    <button onClick={() => updateQuantity(item.id, -1)}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                    <button
                      className="remove-btn"
                      onClick={() => removeItem(item.id)}
                    >
                      ✕
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-total">Total: ₹{getTotal()}</div>
            <button
              className="checkout-btn"
              onClick={() => setShowCheckoutModal(true)}
            >
              Checkout
            </button>
          </>
        )}
      </div>

      {/* CHECKOUT MODAL */}
      {showCheckoutModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowCheckoutModal(false)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Order Details</h2>
            <form onSubmit={handleCheckout}>
              <label>Full Name *</label>
              <input
                type="text"
                value={checkoutDetails.fullName}
                onChange={(e) =>
                  setCheckoutDetails({
                    ...checkoutDetails,
                    fullName: e.target.value,
                  })
                }
                required
              />

              <label>Mobile Number *</label>
              <input
                type="tel"
                value={checkoutDetails.mobileNumber}
                onChange={(e) =>
                  setCheckoutDetails({
                    ...checkoutDetails,
                    mobileNumber: e.target.value,
                  })
                }
                required
                pattern="[0-9]{10}"
                maxLength={10}
              />

              <label>Door Number *</label>
              <input
                type="text"
                value={checkoutDetails.doorNumber}
                onChange={(e) =>
                  setCheckoutDetails({
                    ...checkoutDetails,
                    doorNumber: e.target.value,
                  })
                }
                required
              />

              <label>Address *</label>
              <textarea
                value={checkoutDetails.address}
                onChange={(e) =>
                  setCheckoutDetails({
                    ...checkoutDetails,
                    address: e.target.value,
                  })
                }
                rows="3"
                required
              />

              <div className="modal-buttons">
                <button type="submit" className="whatsapp-btn">
                  Send via WhatsApp
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowCheckoutModal(false)}
                >
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

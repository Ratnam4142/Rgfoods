import React from 'react';
import '../css/Policy.css';
import PolicyNavigation from '../components/PolicyNavigation';

const ShippingPolicy = () => {
  return (
    <>
      <PolicyNavigation />
      <div className="policy-container">
      <h1>Shipping Policy</h1>
      
      <section>
        <h2>Delivery Areas</h2>
        <p>We currently deliver to Hyderabad and surrounding areas. Please contact us for delivery availability in your area.</p>
      </section>

      <section>
        <h2>Processing Time</h2>
        <ul>
          <li>Orders are processed within 24 hours of receipt</li>
          <li>Fresh items are prepared on the day of delivery</li>
          <li>Standard delivery: 1-2 business days</li>
          <li>Express delivery: Same day delivery (orders before 11 AM)</li>
        </ul>
      </section>

      <section>
        <h2>Shipping Costs</h2>
        <ul>
          <li>Free delivery on orders above ₹999</li>
          <li>Standard delivery charge: ₹50</li>
          <li>Express delivery charge: ₹100</li>
        </ul>
      </section>

      <section>
        <h2>Order Tracking</h2>
        <p>Once your order is dispatched, you will receive updates via WhatsApp about your delivery status.</p>
      </section>

      <section>
        <h2>Special Instructions</h2>
        <ul>
          <li>Please ensure someone is available to receive the delivery</li>
          <li>Specific delivery time requests can be mentioned in order notes</li>
          <li>For bulk orders, please contact us 24 hours in advance</li>
        </ul>
      </section>
    </div>
    </>
  );
};

export default ShippingPolicy;
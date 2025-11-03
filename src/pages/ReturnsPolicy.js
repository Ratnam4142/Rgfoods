import React from 'react';
import '../css/Policy.css';
import PolicyNavigation from '../components/PolicyNavigation';

const ReturnsPolicy = () => {
  return (
    <div>
      <PolicyNavigation />
      <div className="policy-container">
        <h1>Returns & Refunds Policy</h1>
        
        <section>
          <h2>Return Policy</h2>
          <p>As we deal with fresh, perishable food items, we have a strict but fair return policy:</p>
          <ul>
            <li>Inspect your order upon delivery</li>
            <li>Report any issues immediately to our customer service</li>
            <li>Take photos of damaged items if applicable</li>
          </ul>
        </section>

        <section>
          <h2>Valid Reasons for Returns</h2>
          <ul>
            <li>Damaged packaging upon delivery</li>
            <li>Wrong items delivered</li>
            <li>Quality issues (if reported within 24 hours)</li>
            <li>Items not matching the description</li>
          </ul>
        </section>

        <section>
          <h2>Refund Process</h2>
          <ul>
            <li>Full refund for valid quality issues</li>
            <li>Replacement or refund options available</li>
            <li>Refunds processed within 3-5 business days</li>
            <li>Original payment method will be used for refund</li>
          </ul>
        </section>

        <section>
          <h2>Non-Returnable Items</h2>
          <p>For food safety reasons, we cannot accept returns on:</p>
          <ul>
            <li>Consumed or partially consumed products</li>
            <li>Items damaged after delivery</li>
            <li>Products past 24 hours of delivery</li>
          </ul>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>For any return or refund queries, please contact us:</p>
          <ul>
            <li>WhatsApp: +91 7981213612</li>
            <li>Email: hello@rpfoods.example</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ReturnsPolicy;
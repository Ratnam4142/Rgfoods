import React from 'react';
import '../css/Policy.css';
import PolicyNavigation from '../components/PolicyNavigation';

const TermsOfService = () => {
  return (
    <>
      <PolicyNavigation />
      <div className="policy-container">
      <h1>Terms of Service</h1>

      <section>
        <h2>Acceptance of Terms</h2>
        <p>By accessing and placing an order with RP Foods, you confirm that you are agreeing to be bound by these Terms of Service.</p>
      </section>

      <section>
        <h2>Order & Payment Terms</h2>
        <ul>
          <li>All prices are in Indian Rupees (INR)</li>
          <li>Prices may change without prior notice</li>
          <li>Orders are subject to availability</li>
          <li>Payment must be completed before order processing</li>
          <li>We accept various payment methods including UPI, cards, and cash on delivery</li>
        </ul>
      </section>

      <section>
        <h2>Product Information</h2>
        <ul>
          <li>Product images are for illustration purposes only</li>
          <li>We strive to maintain accurate product descriptions</li>
          <li>Actual product may vary slightly from images</li>
          <li>All products are freshly made to order</li>
        </ul>
      </section>

      <section>
        <h2>Delivery Terms</h2>
        <ul>
          <li>Delivery times are estimates only</li>
          <li>We are not responsible for delays beyond our control</li>
          <li>Customer must ensure correct delivery information</li>
          <li>Someone must be available to receive the order</li>
        </ul>
      </section>

      <section>
        <h2>User Responsibilities</h2>
        <p>You agree to:</p>
        <ul>
          <li>Provide accurate order and contact information</li>
          <li>Make timely payments for orders</li>
          <li>Use our service in a lawful manner</li>
          <li>Not misuse or abuse our service</li>
        </ul>
      </section>

      <section>
        <h2>Limitation of Liability</h2>
        <p>RP Foods shall not be liable for:</p>
        <ul>
          <li>Delivery delays due to incorrect address information</li>
          <li>Product quality issues not reported within 24 hours</li>
          <li>Damages occurring after delivery</li>
          <li>Issues arising from force majeure events</li>
        </ul>
      </section>

      <section>
        <h2>Changes to Terms</h2>
        <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website.</p>
      </section>

      <section>
        <h2>Contact Information</h2>
        <p>For any queries regarding these terms:</p>
        <ul>
          <li>Email: hello@rpfoods.example</li>
          <li>Phone: +91 7981213612</li>
        </ul>
      </section>
    </div>
    </>
  );
};

export default TermsOfService;
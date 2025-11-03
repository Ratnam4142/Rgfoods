import React from 'react';
import '../css/Policy.css';
import PolicyNavigation from '../components/PolicyNavigation';

const PrivacyPolicy = () => {
  return (
    <>
      <PolicyNavigation />
      <div className="policy-container">
      <h1>Privacy Policy</h1>

      <section>
        <h2>Information We Collect</h2>
        <p>When you place an order with us, we collect:</p>
        <ul>
          <li>Name and contact information</li>
          <li>Delivery address</li>
          <li>Order history</li>
          <li>Payment information (processed securely through our payment partners)</li>
        </ul>
      </section>

      <section>
        <h2>How We Use Your Information</h2>
        <ul>
          <li>Process and deliver your orders</li>
          <li>Send order confirmations and updates</li>
          <li>Improve our products and services</li>
          <li>Contact you about special offers (with your consent)</li>
          <li>Resolve any disputes</li>
        </ul>
      </section>

      <section>
        <h2>Information Security</h2>
        <p>We implement various security measures to protect your personal information:</p>
        <ul>
          <li>Secure data storage</li>
          <li>Limited access to personal information</li>
          <li>Regular security assessments</li>
          <li>Staff training on data protection</li>
        </ul>
      </section>

      <section>
        <h2>Information Sharing</h2>
        <p>We do not sell or share your personal information with third parties except:</p>
        <ul>
          <li>Delivery partners (for order fulfillment)</li>
          <li>Payment processors</li>
          <li>When required by law</li>
        </ul>
      </section>

      <section>
        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Opt-out of marketing communications</li>
        </ul>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>For privacy-related queries, contact us at:</p>
        <ul>
          <li>Email: privacy@rpfoods.example</li>
          <li>Phone: +91 7981213612</li>
        </ul>
      </section>
    </div>
    </>
  );
};

export default PrivacyPolicy;
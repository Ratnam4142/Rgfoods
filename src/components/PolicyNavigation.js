import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Policy.css';

const PolicyNavigation = () => {
  const location = useLocation();

  const policies = [
    { path: '/shipping', label: 'Shipping Policy' },
    { path: '/returns', label: 'Returns & Refunds' },
    { path: '/privacy', label: 'Privacy Policy' },
    { path: '/terms', label: 'Terms of Service' }
  ];

  return (
    <>
      <Link to="/" className="back-button">
        Back to Home
      </Link>

      <nav className="policy-navigation">
        <div className="policy-nav-container">
          <div className="policy-nav-links">
            {policies.map((policy) => (
              <Link
                key={policy.path}
                to={policy.path}
                className={location.pathname === policy.path ? 'active' : ''}
              >
                {policy.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default PolicyNavigation;

// src/pages/Home.js
import React from 'react';
import '../css/Home.css';

const ITEMS = [
  {
    id: 'sunnundalu',
    titleEn: 'Bellam Sunnundalu',
    titleTe: 'బెల్లం సున్నుండలు',
    aboutEn: 'Traditional Andhra sweet made from roasted urad dal, pure jaggery, and ghee. Rich in protein and energy.',
    aboutTe: 'వేయించిన మినపపప్పు, శుద్ధమైన బెల్లం మరియు నెయ్యితో తయారు చేసిన సాంప్రదాయ ఆంధ్ర తీపి. ప్రోటీన్ మరియు శక్తితో నిండి ఉంటుంది.',
    benefitsEn: 'High in protein, boosts energy, supports bone health.',
    benefitsTe: 'ప్రోటీన్లు అధికంగా ఉన్నాయి, శక్తిని పెంచుతాయి, ఎముకల ఆరోగ్యానికి ఉపయోగపడతాయి.',
    caloriesEn: 'Approx. 120 kcal per laddu.',
    caloriesTe: 'ఒక లడ్డుకు సుమారు 120 క్యాలరీలు.',
    extraEn: 'Ideal for children, elders, and festive occasions.',
    extraTe: 'పిల్లలు, పెద్దలు మరియు పండుగల కోసం అనుకూలం.',
    image: process.env.PUBLIC_URL + '/images/products/1.png',
  },
  {
    id: 'ragi-laddu',
    titleEn: 'Bellam Ragi Laddu',
    titleTe: 'బెల్లం రాగి లడ్డు',
    aboutEn: 'Gluten-free laddu made from ragi (finger millet), jaggery, and ghee. Packed with calcium and fiber.',
    aboutTe: 'రాగితో (సామ), బెల్లం మరియు నెయ్యితో తయారు చేసిన గ్లూటెన్-రహిత లడ్డు. కాల్షియం మరియు ఫైబర్ శక్తివంతంగా ఉంటాయి.',
    benefitsEn: 'Rich in calcium, aids digestion, supports weight management.',
    benefitsTe: 'కాల్షియం అధికంగా ఉంటుంది, జీర్ణక్రియకు సహాయం చేస్తుంది, బరువు నిర్వహణకు మంచిది.',
    caloriesEn: 'Approx. 110 kcal per laddu.',
    caloriesTe: 'ఒక లడ్డుకు సుమారు 110 క్యాలరీలు.',
    extraEn: 'Perfect for health-conscious families.',
    extraTe: 'ఆరోగ్యంపై శ్రద్ధ చూపే కుటుంబాలకు సరిపోతుంది.',
    image: process.env.PUBLIC_URL + '/images/products/2.png',
  },
  {
    id: 'nuvvula-laddu',
    titleEn: 'Nuvvula Laddu',
    titleTe: 'నువ్వుల లడ్డు',
    aboutEn: 'Classic sesame-jaggery laddu loaded with healthy fats and calcium. A winter favorite.',
    aboutTe: 'సెసేం (నువ్వు) మరియు బెల్లంతో తయారు చేసిన సంప్రదాయ లడ్డు. ఆరోగ్యకరమైన కొవ్వులు మరియు కాల్షియంతో నిండి ఉంటుంది.',
    benefitsEn: 'Strengthens bones, improves skin, boosts immunity.',
    benefitsTe: 'ఎముకలను బలపరుస్తుంది, చర్మాన్ని మెరుగుపరుస్తుంది, రోగనిరోధక శక్తిని పెంచుతుంది.',
    caloriesEn: 'Approx. 115 kcal per laddu.',
    caloriesTe: 'ఒక లడ్డుకు సుమారు 115 క్యాలరీలు.',
    extraEn: 'Great source of natural warmth and nutrition.',
    extraTe: 'సహజ వేడుకలు మరియు పోషణ కోసం ఉత్తమ మూలం.',
    image: process.env.PUBLIC_URL + '/images/products/3.png',
  },
  {
    id: 'peanut-laddu',
    titleEn: 'Peanut Laddu',
    titleTe: 'వేరుశెనగ లడ్డు',
    aboutEn: 'Crunchy, protein-rich laddu made from roasted peanuts, jaggery, and ghee.',
    aboutTe: 'వేరుశెనగలు వేయించి, బెల్లం మరియు నెయ్యితో చేసిన క్రంచీ, ప్రోటీన్-సమృద్ధి లడ్డు.',
    benefitsEn: 'Boosts energy, supports muscle growth, heart-friendly.',
    benefitsTe: 'శక్తిని పెంచుతుంది, కండరాల వృద్ధికి తోడ్పడుతుంది, హృదయానికి మంచిది.',
    caloriesEn: 'Approx. 125 kcal per laddu.',
    caloriesTe: 'ఒక లడ్డుకు సుమారు 125 క్యాలరీలు.',
    extraEn: 'Favorite among athletes and growing kids.',
    extraTe: 'అథ్లెట్స్ మరియు పిల్లలలో ජනప్రియం.',
    image: process.env.PUBLIC_URL + '/images/products/4.png',
  },
  {
    id: 'rava-laddu',
    titleEn: 'Rava Laddu',
    titleTe: 'రవా లడ్డు',
    aboutEn: 'Soft, aromatic laddu made from roasted semolina, ghee, sugar, and dry fruits.',
    aboutTe: 'వేయించిన రవా, నెయ్యి, పంచదార మరియు ఎండుచెక్కలతో తయారు చేసిన సుగంధభరితమైన లడ్డు.',
    benefitsEn: 'Easy to digest, quick energy, kid-approved.',
    benefitsTe: 'జీర్ణానికి సౌకర్యంగా, తక్షణ శక్తి అందిస్తుంది, పిల్లలకు నచ్చుతుంది.',
    caloriesEn: 'Approx. 105 kcal per laddu.',
    caloriesTe: 'ఒక లడ్డుకు సుమారు 105 క్యాలరీలు.',
    extraEn: 'Essential for festivals like Ganesh Chaturthi.',
    extraTe: 'గణేష్ చతుర్ధి వంటి పండుగలకు తగిన అనివార్యమైన తీపి.',
    image: process.env.PUBLIC_URL + '/images/products/5.png',
  },
  // New items with Telugu fields
  {
    id: 'black-sesame-laddu',
    titleEn: 'Black Sesame Laddu',
    titleTe: 'నల్ల నువ్వుల లడ్డు',
    aboutEn: 'Made with roasted black sesame, jaggery, and ghee — packed with iron and antioxidants.',
    aboutTe: 'వేయించిన నల్ల నువ్వులు, బెల్లం మరియు నెయ్యితో తయారు చేయబడిన లడ్డు — ఐరన్ మరియు యాంటీఆక్సిడెంట్స్‌తో నిండి ఉంటుంది.',
    benefitsEn: 'Improves blood health, strengthens hair, and boosts immunity.',
    benefitsTe: 'రక్త ఆరోగ్యం మెరుగుపరచుతుంది, జుట్టును బలోపేతం చేస్తుంది మరియు రోగనిరోధక శక్తిని పెంచుతుంది.',
    caloriesEn: 'Approx. 130 kcal per laddu.',
    caloriesTe: 'ఒక లడ్డుకు సుమారు 130 క్యాలరీలు.',
    extraEn: 'Traditional winter favorite; rich and nutritious.',
    extraTe: 'సాంప్రదాయ శీతాకాల ఇష్టమైనది; సమృద్ధిగా పోషకాహారంతో ఉంటుంది.',
    image: process.env.PUBLIC_URL + '/images/products/20.png',
  },
  {
    id: 'boondi-laddu',
    titleEn: 'Boondi Laddu',
    titleTe: 'బూందీ లడ్డు',
    aboutEn: 'A festive favorite made with tiny gram flour pearls fried in ghee and soaked in sugar syrup.',
    aboutTe: 'గ్రామ్ ఫ్లోర్ చిన్న రద్దీలా పొడి గుడ్డులను నెయ్యిలో వేయించి చక్కెరతో నానబెట్టిన పండుగల ప్రియమైన స్వీట్లు.',
    benefitsEn: 'Rich in flavor, offers instant energy, and perfect for celebrations.',
    benefitsTe: 'రుచులతో సమృద్ధిగా ఉంటుంది, తక్షణ శక్తి ఇస్తుంది మరియు పండుగలకు ఉత్కృష్టం.',
    caloriesEn: 'Approx. 150 kcal per laddu.',
    caloriesTe: 'ఒక లడ్డుకు సుమారు 150 క్యాలరీలు.',
    extraEn: 'Seasonal favorite, best when fresh.',
    extraTe: 'కాలంతో సంబంధం ఉన్న ఇష్టమైనది, తాజా ఉంటే ఉత్తమం.',
    image: process.env.PUBLIC_URL + '/images/products/6.png',
  },
  {
    id: 'dryfruit-laddu',
    titleEn: 'Dry Fruit Laddu',
    titleTe: 'డ్రై ఫ్రూట్ లడ్డు',
    aboutEn: 'Premium laddu with almonds, cashews, dates, and figs bound in ghee.',
    aboutTe: 'బాదము, అముండ, ఖర్జూర్, అంజిర్ వంటి డ్రై ఫ్రూట్స్‌ను నెయ్యిలో బాగా కలిపి తయారు చేసిన ప్రీమియం లడ్డు.',
    benefitsEn: 'Improves stamina, boosts immunity, and heart healthy.',
    benefitsTe: 'శక్తి పెరుగుతుంది, రోగనిరోధక శక్తి మెరుగుపడుతుంది, హృదయానికి మేలు.',
    caloriesEn: 'Approx. 160 kcal per laddu.',
    caloriesTe: 'ఒక లడ్డుకు సుమారు 160 క్యాలరీలు.',
    extraEn: 'Great as a premium gift or festival sweet.',
    extraTe: 'ప్రీమియం బహుమతిగా లేదా పండుగల కోసం అద్భుతం.',
    image: process.env.PUBLIC_URL + '/images/products/21.png',
  },
  {
    id: 'coconut-laddu',
    titleEn: 'Coconut Laddu',
    titleTe: 'కొబ్బరి లడ్డు',
    aboutEn: 'Soft coconut-based sweet made with jaggery or condensed milk.',
    aboutTe: 'కొబ్బరి ఆధారిత మృదువైన తీపి, బెల్లం లేదా కాండెన్స్ చేసిన పాలు కలిపి తయారు చేస్తారు.',
    benefitsEn: 'Good for digestion and rich in healthy fats.',
    benefitsTe: 'జీర్ణానికి మంచిది మరియు ఆరోగ్యకరమైన కొవ్వులతో సమృద్ధిగా ఉంటుంది.',
    caloriesEn: 'Approx. 115 kcal per laddu.',
    caloriesTe: 'ఒక లడ్డుకు సుమారు 115 క్యాలరీలు.',
    extraEn: 'Light and tasty — loved by kids and elders.',
    extraTe: 'మెత్తగా, రుచికరంగా — పిల్లలు మరియు పెద్దలందరూ ఇష్టపడతారు.',
    image: process.env.PUBLIC_URL + '/images/products/22.png',
  },
];

export default function Home() {
  return (
    <main className="hf-home">
      {/* HERO */}
      <header className="hf-hero">
        <div className="hf-hero-inner container">
          <div className="hf-hero-left">
            <div className="brand-group">
              {/* <span className="eyebrow">RPfoods</span> */}
              <h1 className="hf-title">Rural Pantry — Handcrafted Laddus, Snacks and Pickles & Delights</h1>
            </div>

            <p className="hf-sub">
              From our village kitchen to your celebrations — premium ingredients,
              artisanal small-batch sweets, and that nostalgic taste of home.
            </p>

            {/* <div className="hf-cta-row">
              <a href="/menu" className="btn primary">
                Browse Menu & Order
              </a>
              <a href="#products" className="btn ghost">
                Our Products
              </a>
            </div> */}

            <div className="hf-highlights">
              <div className="hl-item">
                <strong>100% Natural: </strong>
                <span>Pure jaggery & ghee</span>
              </div>
              <div className="hl-item">
                <strong>Small Batch: </strong>
                <span>Handmade every day</span>
              </div>
              <div className="hl-item">
                <strong>Trusted: </strong>
                <span>Thousands of happy customers</span>
              </div>
            </div>
          </div>

          <div className="hf-hero-right" aria-hidden>
            <div className="hero-card">
              <div className="hero-media">
                <img src={process.env.PUBLIC_URL + '/images/hero.jpg'} alt="Handmade sweets" onError={(e)=>{e.currentTarget.style.display='none'}} />
                <div className="hero-fallback" />
              </div>
              <div className="hero-note">
                <strong>Fresh Today: </strong>
                <span>Made in small batches. Ships same day within region.</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* STORY / ABOUT */}
   {/* PRODUCTS — Alternating Layout */}
<section id="products" className="hf-products container">
  <h2 className="section-title">Featured Laddus & Delicacies</h2>

  <div className="alternating-grid">
    {ITEMS.map((it, index) => (
      <div key={it.id} className={`alternating-card ${index % 2 === 0 ? 'content-left' : 'content-right'}`}>
        <div className="alternating-media">
          <img src={it.image} alt={it.titleEn} onError={(e) => (e.currentTarget.style.display = 'none')} />
        </div>
        <div className="alternating-content">
          <h3>{it.titleEn}</h3>
          <p className="muted">{it.aboutEn}</p>
          <div className="product-meta">
            <span className="pill">{it.caloriesEn}</span>
          </div>

          {/* Telugu block */}
          <div className="telugu-block">
            <h4>{it.titleTe}</h4>
            <p><strong>వివరణ:</strong> {it.aboutTe}</p>
            <p><strong>ప్రయోజనాలు:</strong> {it.benefitsTe}</p>
            <p><strong>క్యాలరీలు:</strong> {it.caloriesTe}</p>
            <p><strong>అదనపు సమాచారం:</strong> {it.extraTe}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
{/* HIGH-LEVEL FOOTER */}
<footer className="hf-footer">
  <div className="container footer-grid">
    {/* Column 1: Brand */}
    <div className="footer-col">
      <h4>RPfoods</h4>
      <p className="muted">Missing mom's cooking? We're your food family.</p>
      <div className="footer-social">
        {/* WhatsApp (uses site's contact number) */}
        <a
          className="social-icon"
          href="https://wa.me/917981213612"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M20.52 3.47998C18.1199 1.07998 14.8599 0.159973 11.6699 0.999973C6.33993 2.37997 2.23995 6.71998 1.37995 12.03C0.749953 16.07 2.29995 19.95 5.34995 22.2499L4.18995 23.9999L6.56995 23.5199C8.63995 24.8699 11.0699 25.3999 13.4599 24.9499C18.8299 23.5899 22.9299 19.2499 23.7899 13.9399C24.6299 10.4399 23.8999 6.33998 20.52 3.47998Z" fill="#25D366"/>
            <path d="M17.42 14.08C17.16 13.78 15.7 12.69 15.45 12.55C15.2 12.41 15.02 12.38 14.82 12.72C14.61 13.05 13.88 13.76 13.69 13.97C13.5 14.18 12.89 14.17 12.05 13.92C10.46 13.45 8.65 11.99 7.88 10.9C7.32 10.11 6.9 9.04 7.23 8.46C7.39 8.17 8 7.69 8.7 7.42C9.07 7.27 9.44 7.36 9.66 7.64C9.86 7.91 10.48 8.88 10.68 9.18C10.88 9.48 11.06 9.64 11.53 9.89C11.99 10.14 12.47 10.54 12.69 10.79C12.89 11.04 13.02 11.29 12.98 11.57C12.94 11.86 12.58 12.41 12.44 12.63C12.3 12.85 12.09 13.02 11.75 13.22C11.41 13.43 10.88 13.53 10.4 13.54C9.92 13.55 9.52 13.49 9.18 13.41C8.84 13.33 8.29 13.12 8.06 12.99C7.83 12.85 7.61 12.66 7.45 12.43" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        {/* Instagram */}
        <a className="social-icon" href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="#555" strokeWidth="1.2"/>
            <circle cx="12" cy="12" r="3" stroke="#555" strokeWidth="1.2"/>
            <circle cx="17.5" cy="6.5" r="0.7" fill="#555"/>
          </svg>
        </a>

        {/* Facebook */}
        <a className="social-icon" href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M22 12.07C22 6.48 17.52 2 11.93 2C6.34 2 1.86 6.48 1.86 12.07C1.86 17.06 5.78 21.2 10.57 22V14.89H8.19V12.07H10.57V9.88C10.57 7.54 11.99 6.2 14.18 6.2C15.18 6.2 16.24 6.38 16.24 6.38V8.69H15.01C13.8 8.69 13.43 9.43 13.43 10.2V12.07H16.09L15.61 14.89H13.43V22C18.22 21.2 22 17.06 22 12.07Z" fill="#3b5998"/>
          </svg>
        </a>
      </div>
    </div>

    {/* Column 2: Contact */}
    <div className="footer-col">
      <h5>Contact Us</h5>
      <p className="muted">
        📞 <a href="tel:+917981213612">+91 7981213612</a><br />
        ✉️ <a href="mailto:hello@rpfoods.example">hello@rpfoods.example</a><br />
        📍 Hyderabad, Telangana
      </p>
    </div>

    {/* Column 3: Quick Links */}
    <div className="footer-col">
      <h5>Quick Links</h5>
      <ul className="footer-links">
        <li><a href="/#/menu">Menu & Order</a></li>
        <li><a href="/#/about">Our Story</a></li>
        <li><a href="/#/about">Contact</a></li>
      </ul>
    </div>

    {/* Column 4: Policies (Optional) */}
    <div className="footer-col">
      <h5>Help & Info</h5>
      <ul className="footer-links">
        <li><a href="/shipping">Shipping Policy</a></li>
        <li><a href="/returns">Returns & Refunds</a></li>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/terms">Terms of Service</a></li>
      </ul>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="footer-bottom container">
    <small>© {new Date().getFullYear()} RPfoods — Handcrafted with love from our village kitchen to yours.</small>
    <div className="footer-legal">
      <a href="/privacy">Privacy</a> • <a href="/terms">Terms</a> • <a href="/sitemap">Sitemap</a>
    </div>
  </div>
</footer>
    </main>
  );
}

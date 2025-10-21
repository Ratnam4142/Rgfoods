// src/pages/Home.js
import React from 'react';
import '../css/Home.css';

// Use a reliable public YouTube video (or replace with your own)
const HERO_VIDEO = 'https://www.youtube.com/embed/dQw4w9WgXcQ'; // Public & working

const ITEMS = [
  {
    id: 'sunnundalu',
    titleEn: 'Bellam Sunnundalu',
    titleTe: 'బెల్లం సున్నుండలు',
    aboutEn: 'Traditional Andhra sweet made from roasted urad dal, pure jaggery, and ghee. Rich in protein and energy.',
    aboutTe: 'వేయించిన మినపపప్పు, శుద్ధమైన బెల్లం మరియు నెయ్యితో తయారు చేసిన సాంప్రదాయ ఆంధ్ర తీపి. ప్రోటీన్ మరియు శక్తితో నిండి ఉంటుంది.',
    benefitsEn: 'High in protein, boosts energy, supports bone health.',
    benefitsTe: 'ప్రోటీన్ అధికంగా ఉంటుంది, శక్తిని పెంచుతుంది, ఎముకల ఆరోగ్యానికి మంచిది.',
    caloriesEn: 'Approx. 120 kcal per laddu.',
    caloriesTe: 'ఒక లడ్డుకు సుమారు 120 క్యాలరీలు.',
    extraEn: 'Ideal for children, elders, and festive occasions.',
    extraTe: 'పిల్లలు, పెద్దలు మరియు పండుగలకు అనుకూలం.',
    youtube: HERO_VIDEO,
  },
  {
    id: 'ragi-laddu',
    titleEn: 'Bellam Ragi Laddu',
    titleTe: 'బెల్లం రాగి లడ్డు',
    aboutEn: 'Gluten-free laddu made from ragi (finger millet), jaggery, and ghee. Packed with calcium and fiber.',
    aboutTe: 'రాగి (సామ), బెల్లం మరియు నెయ్యితో తయారు చేసిన గ్లూటెన్-రహిత లడ్డు. కాల్షియం మరియు ఫైబర్‌తో నిండి ఉంటుంది.',
    benefitsEn: 'Rich in calcium, aids digestion, supports weight management.',
    benefitsTe: 'కాల్షియం అధికంగా ఉంటుంది, జీర్ణక్రియకు సహాయపడుతుంది, బరువు నియంత్రణకు మద్దతు ఇస్తుంది.',
    caloriesEn: 'Approx. 110 kcal per laddu.',
    caloriesTe: 'ఒక లడ్డుకు సుమారు 110 క్యాలరీలు.',
    extraEn: 'Perfect for health-conscious families.',
    extraTe: 'ఆరోగ్య ప్రధాన కుటుంబాలకు సరిపోతుంది.',
    youtube: HERO_VIDEO,
  },
  {
    id: 'nuvvula-laddu',
    titleEn: 'Nuvvula Laddu',
    titleTe: 'నువ్వుల లడ్డు',
    aboutEn: 'Classic sesame-jaggery laddu loaded with healthy fats and calcium. A winter favorite.',
    aboutTe: 'ఆరోగ్యకరమైన కొవ్వులు మరియు కాల్షియంతో నిండిన సాంప్రదాయ నువ్వుల-బెల్లం లడ్డు. శీతాకాలపు ఇష్టమైన తీపి.',
    benefitsEn: 'Strengthens bones, improves skin, boosts immunity.',
    benefitsTe: 'ఎముకలను బలపరుస్తుంది, చర్మాన్ని మెరుగుపరుస్తుంది, రోగనిరోధక శక్తిని పెంచుతుంది.',
    caloriesEn: 'Approx. 115 kcal per laddu.',
    caloriesTe: 'ఒక లడ్డుకు సుమారు 115 క్యాలరీలు.',
    extraEn: 'Great source of natural warmth and nutrition.',
    extraTe: 'సహజ వెచ్చదనానికి మరియు పోషణకు మంచి మూలం.',
    youtube: HERO_VIDEO,
  },
  {
    id: 'peanut-laddu',
    titleEn: 'Peanut Laddu',
    titleTe: 'వేరుశెనగ లడ్డు',
    aboutEn: 'Crunchy, protein-rich laddu made from roasted peanuts, jaggery, and ghee.',
    aboutTe: 'వేయించిన వేరుశెనగలు, బెల్లం మరియు నెయ్యితో తయారు చేసిన క్రంచీ, ప్రోటీన్-సమృద్ధి లడ్డు.',
    benefitsEn: 'Boosts energy, supports muscle growth, heart-friendly.',
    benefitsTe: 'శక్తిని పెంచుతుంది, కండరాల వృద్ధికి సహాయపడుతుంది, హృదయానికి మంచిది.',
    caloriesEn: 'Approx. 125 kcal per laddu.',
    caloriesTe: 'ఒక లడ్డుకు సుమారు 125 క్యాలరీలు.',
    extraEn: 'Favorite among athletes and growing kids.',
    extraTe: 'ఆటగాళ్లు మరియు పెరుగుతున్న పిల్లలకు ఇష్టమైనది.',
    youtube: HERO_VIDEO,
  },
  {
    id: 'rava-laddu',
    titleEn: 'Rava Laddu',
    titleTe: 'రవా లడ్డు',
    aboutEn: 'Soft, aromatic laddu made from roasted semolina, ghee, sugar, and dry fruits.',
    aboutTe: 'వేయించిన రవా, నెయ్యి, పంచదార మరియు ఎండు పండ్లతో తయారు చేసిన మృదువైన, సువాసన గల లడ్డు.',
    benefitsEn: 'Easy to digest, quick energy, kid-approved.',
    benefitsTe: 'జీర్ణం కావడానికి సులభం, త్వరిత శక్తి, పిల్లలకు ఇష్టమైనది.',
    caloriesEn: 'Approx. 105 kcal per laddu.',
    caloriesTe: 'ఒక లడ్డుకు సుమారు 105 క్యాలరీలు.',
    extraEn: 'Essential for festivals like Ganesh Chaturthi.',
    extraTe: 'గణేష్ చతుర్థి వంటి పండుగలకు అవసరం.',
    youtube: HERO_VIDEO,
  },
];

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="text-content">
            <h1>Welcome to Healthyfood</h1>
            <p className="lead">Where tradition meets wellness in every sweet bite</p>
            <p>
              We craft our laddus using time-honored recipes and the finest ingredients,
              ensuring each piece brings joy and nourishment to your celebrations.
            </p>
            <ul className="feature-list">
              <li>✨ 100% Natural Ingredients</li>
              <li>🌾 Traditional Recipes</li>
              <li>🍯 Pure Jaggery & Ghee</li>
              <li>🌺 Fresh Daily Production</li>
            </ul>
          </div>
          <div className="media-content">
            <div className="iframe-wrapper hero-video">
              <iframe
                src={`${HERO_VIDEO}?autoplay=0&mute=1`}
                title="Healthyfood Intro"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <div className="items-card-list">
        {ITEMS.map((item, index) => (
          <div key={item.id} className={`item-card ${index % 2 === 1 ? 'reverse' : ''}`}>
            <div className="item-content">
              <h2>{item.titleEn}</h2>
              <div><span className="label">About:</span> {item.aboutEn}</div>
              <div><span className="label">Benefits:</span> {item.benefitsEn}</div>
              <div><span className="label">Calories:</span> {item.caloriesEn}</div>
              <div><span className="label">Extra:</span> {item.extraEn}</div>
              <hr />
              <h2>{item.titleTe}</h2>
              <div><span className="label">వివరణ:</span> {item.aboutTe}</div>
              <div><span className="label">ప్రయోజనాలు:</span> {item.benefitsTe}</div>
              <div><span className="label">క్యాలరీలు:</span> {item.caloriesTe}</div>
              <div><span className="label">అదనపు సమాచారం:</span> {item.extraTe}</div>
            </div>
            <div className="item-video">
              <div className="iframe-wrapper product-video">
                <iframe
                  src={`${item.youtube}?autoplay=0&mute=1`}
                  title={item.titleEn}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
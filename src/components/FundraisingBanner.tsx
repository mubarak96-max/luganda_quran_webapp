import React from 'react';

const FundraisingBanner = () => {
  return (
    <section className="fundraising-section">
      <div className="container">
        <div className="fundraising-card">
          {/* Decorative pattern */}
          <div className="fundraising-pattern">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="fundraising-content">
            <span className="fundraising-tag">Okusonda Sente z'Omuzikiti</span>
            <h2>Obuyambi ku Kifo ky'Omuzikiti</h2>
            <p>
              Abasiramu be mangaliba, Mukono-Katoosi road basaba oyo yenna alina obusobozi obubakwasizaako
              ku nsonga yokusonda sente zokugula ekifo ekyokuzimbamu omuzikiti abakwasizeeko.
              <strong>Tusaba Allah atwanguyize ensonga eno.</strong>
            </p>
          </div>

          <div className="fundraising-cta">
            <span className="cta-title">Additional Info or Contribution:</span>
            <div className="fundraising-buttons">
              <a href="tel:+256708581479" className="btn-fundraising call">
                <i className="fas fa-phone-alt"></i> Call
              </a>
              <a href="https://wa.me/256708581479" className="btn-fundraising whatsapp" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
            </div>
            <span className="cta-note">
              Jazākallāhu Khayran for your support in building the house of Allah.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundraisingBanner;

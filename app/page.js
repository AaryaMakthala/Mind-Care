import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-content">
            {/* Animated Sapling SVG */}
            <div className="hero-animation">
              <svg className="hero-svg" width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path className="sapling-path" d="M50 95V15" strokeLinecap="round"/>
                <path className="sapling-leaf-left" d="M50 35 C 30 35 30 55 50 55" strokeLinecap="round" />
                <path className="sapling-leaf-right" d="M50 25 C 70 25 70 45 50 45" strokeLinecap="round" />
              </svg>
            </div>
            <h1>Your Journey to Wellness Starts Here</h1>
            <p>A safe and confidential space for students to find support, resources, and professional help. You are not alone.</p>
            <Link href="#services" className="cta-button">Explore Services</Link>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="content-section-colored">
          <div className="container">
            <h2 className="section-title">Our Services</h2>
            <div className="services-grid">
              {/* Service Card 1 */}
              <div className="service-card">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <h3>AI-Guided Support</h3>
                <p>Get instant, 24/7 first-aid support from our interactive AI assistant designed to provide coping strategies.</p>
              </div>
              {/* Service Card 2 - Linked */}
              <Link href="/help" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="service-card">
                   <div className="service-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  </div>
                  <h3>Confidential Booking</h3>
                  <p>Easily book a secure and private appointment with a certified on-campus counselor at your convenience.</p>
                </div>
              </Link>
              {/* Service Card 3 - Linked */}
              <Link href="/inspired" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="service-card">
                   <div className="service-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                  </div>
                  <h3>Resource Hub</h3>
                  <p>Access a rich library of videos, articles, and audio guides on mental wellness in multiple languages.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Your Path Section */}
        <section id="your-path" className="content-section">
          <div className="container">
            <h2 className="section-title">Your Future is a Canvas</h2>
            <p className="section-subtitle">Life has many paths, and it's okay to explore. Your journey is unique and valuable.</p>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5c-4.286 1.35-4.286-2.55-6-3m6-4c.34-1.84.62-3.83.62-6a3 3 0 00-3-3 3 3 0 00-3 3c0 2.17.28 4.16.62 6m6 0c.34 1.84.62 3.83.62 6a3 3 0 01-3 3 3 3 0 01-3-3c0-2.17.28-4.16.62-6M12 12a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3z"/></svg>
                </div>
                <h3>Invest In Yourself</h3>
                <p>Focus on your well-being. Learn new skills, find hobbies you love, and practice self-compassion. Your growth is the greatest investment.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h3>Lean on Your Supporters</h3>
                <p>Talk with your parents, family, or trusted mentors. Sharing your thoughts can lighten the burden and open up new perspectives and support.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16.2 7.8l-2.1-2.1m-4.2 0L7.8 7.8m0 8.4l2.1 2.1m4.2 0l2.1-2.1M12 2v20M2 12h20"/></svg>
                </div>
                <h3>Explore New Horizons</h3>
                <p>Your career path is not set in stone. Explore different fields, from creative arts to technology. Success comes in many forms.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-about">
            <h3>Hopeful Minds</h3>
            <p>Your partner in mental and academic wellness.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="#about">About Us</Link></li>
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>Email: support@hopefulminds.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Hopeful Minds. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

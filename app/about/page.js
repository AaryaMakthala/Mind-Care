import Link from 'next/link';
import './page.css';
export default function AboutUsPage() {
  return (
    <>
      <main className="about-page">
        {/* Header Section */}
        <section className="about-hero">
          <div className="container">
            <h1 className="about-title">A Safe Space for Your Thoughts</h1>
            <p className="about-subtitle">Hum aapke saath hain. We understand the pressures of student life in India, and we're here to help you navigate them.</p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="content-section">
          <div className="container about-content">
            <h2 className="section-title">Our Mission: Your Wellbeing is Our Priority</h2>
            <p className="about-text">
              Student life in India is a unique journey. It's filled with aspirations, fierce competition, late-night study sessions, and the weight of expectations from family and society. While we celebrate the successes, we often forget to talk about the stress, anxiety, and the quiet struggles that happen behind the scenes. That’s why Hopeful Minds was created.
            </p>
            <p className="about-text">
              We are not just another website. We are a dedicated support system, built with an understanding of our culture and our challenges. Our goal is to provide a confidential and non-judgmental space where you can feel heard, understood, and empowered.
            </p>
          </div>
        </section>
        
        {/* What We Do Section */}
        <section className="content-section-colored">
          <div className="container">
            <h2 className="section-title">How We Support You</h2>
            <div className="services-grid">
              {/* Card 1 */}
              <div className="service-card">
                <div className="service-icon">
                   <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <h3>Immediate, Private Support</h3>
                <p>Feeling overwhelmed at 2 AM? Our AI-guided assistant is available 24/7 to offer coping strategies and a listening ear, anytime you need it, with complete privacy.</p>
              </div>
              {/* Card 2 */}
              <div className="service-card">
                 <div className="service-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <h3>Confidential Counselling Connect</h3>
                <p>Worried about "log kya kahenge?" We get it. Our platform allows you to book appointments with your college's counselors discreetly. Your identity and your conversations are kept secure.</p>
              </div>
              {/* Card 3 */}
              <div className="service-card">
                 <div className="service-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                </div>
                <h3>Resources in Your Language</h3>
                <p>Access articles, videos, and relaxation guides that understand our cultural context. We provide resources in English and regional languages to make you feel right at home.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Journeys of Hope: Real Stories */}
        <section className="content-section">
            <div className="container">
                <h2 className="section-title">Journeys of Hope: Real Stories</h2>
                <p className="section-subtitle">You are not the first to walk this path. Read stories from students who found their strength.</p>
                <div className="stories-grid">
                    {/* Story 1 */}
                    <div className="story-card">
                        <div className="story-icon-container">
                          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                        </div>
                        <div className="story-content">
                            <h4>Anjali, B.Com Final Year</h4>
                            <p>The pressure of placements was overwhelming. I felt like a failure before I even started. Talking to the AI-assistant helped me organize my thoughts at night, and booking a session with a counselor gave me the confidence to face interviews.</p>
                            <blockquote>"Hopeful Minds helped me see that my worth isn't defined by my job title."</blockquote>
                        </div>
                    </div>
                    {/* Story 2 */}
                    <div className="story-card">
                         <div className="story-icon-container">
                           <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </div>
                        <div className="story-content">
                            <h4>Rohan, First Year Engineering</h4>
                            <p>Moving to a new city was lonely. I struggled with social anxiety and felt completely isolated. The peer support resources and articles on building connections made me realize I'wasn't alone in feeling this way.</p>
                            <blockquote>"I learned that it's okay to feel lonely, and it's brave to do something about it."</blockquote>
                        </div>
                    </div>
                    {/* Story 3 */}
                    <div className="story-card">
                         <div className="story-icon-container">
                           <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
                        </div>
                        <div className="story-content">
                            <h4>Priya, Second Year Arts</h4>
                            <p>My parents wanted me to pursue medicine, but my heart was in literature. The constant arguments and guilt were unbearable. The resources on career choices and family communication gave me the vocabulary to have a constructive conversation with them.</p>
                            <blockquote>"I'm now studying what I love, and my parents are slowly starting to understand."</blockquote>
                        </div>
                    </div>
                    {/* Story 4 */}
                    <div className="story-card">
                         <div className="story-icon-container">
                           <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                        </div>
                        <div className="story-content">
                            <h4>Sameer, Final Year Law</h4>
                            <p>The final semester exams felt like an insurmountable wall. I had panic attacks and couldn't focus. The guided meditation and breathing exercise audios in the resource hub became my go-to tool before studying to calm my nerves.</p>
                            <blockquote>"Learning to manage my anxiety didn't just help me pass my exams; it changed my life."</blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Why Trust Us Section */}
        <section className="content-section-colored">
            <div className="container">
                <h2 className="section-title">Your Safe Harbour</h2>
                <ul className="trust-list">
                    <li><strong>Complete Anonymity:</strong> Your privacy is sacred. You can explore our resources and chat with our AI without revealing your identity.</li>
                    <li><strong>Built for Indian Students:</strong> Our approach is not one-size-fits-all. We address issues like exam pressure, career confusion, and family expectations from a perspective you can relate to.</li>
                    <li><strong>A Bridge, Not a Replacement:</strong> We aim to connect you with your college's existing support systems, making them more accessible and less intimidating.</li>
                    <li><strong>A Message of Hope:</strong> We believe that asking for help is a sign of strength. Your mental health is as important as your physical health, and taking care of it is the key to a successful future.</li>
                </ul>
            </div>
        </section>

        {/* Inspiration Corner */}
        <section className="content-section">
            <div className="container video-section-container">
                <h2 className="section-title">Inspiration Corner</h2>
                <p className="section-subtitle">A little motivation can go a long way. Watch these short videos to brighten your day.</p>
                <div className="video-grid">
                    <div className="video-wrapper">
                        <iframe src="https://www.youtube.com/embed/Hd_ptbiPoXM" title="Animated short on overcoming obstacles" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="video-wrapper">
                        <iframe src="https://www.youtube.com/embed/l-gQLqv9f4o" title="A Japanese technique to relax" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="video-wrapper">
                        <iframe src="https://www.youtube.com/embed/YR_wIb_n4ZU" title="How to stop overthinking" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="video-wrapper">
                        <iframe src="https://www.youtube.com/embed/rkZl2gsLUp4" title="Believe in yourself" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </section>

        {/* Call to Action */}
        <section className="content-section-colored">
            <div className="container cta-container">
                <h2>Take the First Step Today</h2>
                <p>You don't have to have it all figured out. Just start by exploring. Your journey to a more balanced life begins now.</p>
                <Link href="/" className="cta-button">Back to Home</Link>
            </div>
        </section>
//Done
      </main>
    </>
  );
}
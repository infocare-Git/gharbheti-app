"use client";

import { useState } from "react";

const listings = [
  { title: "Sunny 2BHK", area: "Baneshwor, Kathmandu", price: "Rs 28,000", beds: 2, baths: 1, tag: "Verified", hue: 24 },
  { title: "Cozy 1BHK Flat", area: "Jhamsikhel, Lalitpur", price: "Rs 18,500", beds: 1, baths: 1, tag: "New", hue: 160 },
  { title: "Family 3BHK", area: "Budhanilkantha, Kathmandu", price: "Rs 42,000", beds: 3, baths: 2, tag: "Verified", hue: 210 },
];

const features = [
  { icon: "✓", title: "Verified listings", text: "Every flat is checked so what you see is what you get." },
  { icon: "☎", title: "Talk to owners directly", text: "No middlemen, no surprise brokerage fees." },
  { icon: "⚡", title: "Move in faster", text: "Book visits and finalize agreements in days, not weeks." },
];

export default function Home() {
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  return (
    <>
      <header className="nav container">
        <a href="#" className="logo">
          <span className="logo-mark">⌂</span> Gharbheti
        </a>
        <nav>
          <a href="#listings">Flats</a>
          <a href="#features">Why us</a>
          <a href="#join" className="btn btn-small">Get early access</a>
        </nav>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-text">
            <span className="pill">🏠 Renting made simple</span>
            <h1>
              Find a flat you&apos;ll love <span className="accent">calling home.</span>
            </h1>
            <p className="lead">
              Browse verified flats, connect with owners directly, and skip the broker runaround.
            </p>

            <form
              className="search"
              onSubmit={(e) => {
                e.preventDefault();
                document.getElementById("listings")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <input
                aria-label="Location"
                placeholder="Where do you want to live?"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <select aria-label="Budget" value={budget} onChange={(e) => setBudget(e.target.value)}>
                <option value="">Any budget</option>
                <option value="20">Under Rs 20k</option>
                <option value="35">Rs 20k – 35k</option>
                <option value="50">Rs 35k+</option>
              </select>
              <button className="btn" type="submit">Search</button>
            </form>

            <div className="stats">
              <div><strong>2,000+</strong><span>Flats listed</span></div>
              <div><strong>800+</strong><span>Happy tenants</span></div>
              <div><strong>0%</strong><span>Broker fee</span></div>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="house">
              <div className="roof" />
              <div className="body">
                <div className="window" /><div className="window" />
                <div className="door" />
              </div>
            </div>
            <div className="float-card">
              <strong>Rs 28,000/mo</strong>
              <span>2BHK · Baneshwor</span>
            </div>
          </div>
        </section>

        <section id="listings" className="container section">
          <h2>Featured flats</h2>
          <p className="sub">A peek at what&apos;s available right now.</p>
          <div className="grid">
            {listings.map((l) => (
              <article key={l.title} className="card">
                <div
                  className="card-img"
                  style={{ background: `linear-gradient(135deg, hsl(${l.hue} 80% 70%), hsl(${l.hue + 30} 70% 55%))` }}
                >
                  <span className="tag">{l.tag}</span>
                </div>
                <div className="card-body">
                  <h3>{l.title}</h3>
                  <p className="muted">{l.area}</p>
                  <div className="card-meta">
                    <span>{l.beds} bed · {l.baths} bath</span>
                    <strong>{l.price}<small>/mo</small></strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="features" className="container section">
          <h2>Why Gharbheti?</h2>
          <div className="grid">
            {features.map((f) => (
              <div key={f.title} className="feature">
                <span className="feature-icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p className="muted">{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="join" className="container section">
          <div className="cta">
            <h2>Be the first to know</h2>
            <p>Join the waitlist and get early access when we launch in your city.</p>
            {joined ? (
              <p className="success">🎉 Thanks! We&apos;ll be in touch at {email}.</p>
            ) : (
              <form
                className="cta-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setJoined(true);
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  aria-label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn btn-light" type="submit">Join waitlist</button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="container footer">
        <span>© {new Date().getFullYear()} Gharbheti. All rights reserved.</span>
        <span className="muted">Made with ♥ in Nepal</span>
      </footer>
    </>
  );
}

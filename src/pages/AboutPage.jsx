import React from 'react';
import { BRAND } from '../data/brand';
import { Compass, ShieldCheck, Zap, Sparkles, ArrowRight, Award, CheckCircle2 } from 'lucide-react';

export default function AboutPage({ onNavigate }) {
  return (
    <div style={{ padding: '3rem 0 6rem 0' }}>
      <div className="container">
        {/* Hero Header */}
        <div style={{ maxWidth: '820px', marginBottom: '4rem' }}>
          <span className="badge badge-accent" style={{ marginBottom: '0.75rem' }}>
            ABOUT CULTURE KICKS
          </span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', lineHeight: 1.1, marginBottom: '1.25rem' }}>
            VADODARA'S DESTINATION FOR <span style={{ color: 'var(--accent)' }}>AUTHENTIC SNEAKER</span> CULTURE.
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Culture Kicks was born out of a genuine passion for authentic sneakers, street fashion, and hype grails. Located in the heart of Vadodara at 105 Aries Prime, we connect sneaker lovers across India to verified genuine pairs.
          </p>
        </div>

        {/* Store Editorial Banner */}
        <div
          style={{
            position: 'relative',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            aspectRatio: '21/9',
            marginBottom: '5rem',
            border: '1px solid var(--border-medium)',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1600&q=80"
            alt="Culture Kicks Store Vadodara"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(9, 10, 13, 0.9) 0%, transparent 70%)',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '2.5rem'
            }}
          >
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent)', marginBottom: '0.35rem' }}>
                105, ARIES PRIME, VASNA MAIN RD, VADODARA
              </div>
              <h3 style={{ fontSize: '1.5rem', color: '#fff' }}>
                OPEN EVERY DAY: 12:00 PM TO 10:00 PM
              </h3>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '5rem'
          }}
        >
          <div className="glass-card" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)' }}>
            <span className="badge badge-accent" style={{ marginBottom: '1rem' }}>01. VERIFICATION</span>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>100% AUTHENTICITY PLEDGE</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.92rem' }}>
              Every single pair that enters our store goes through multi-point inspections: stitching tension, blacklight luminescence, box font precision, smell test, and serial verification. Zero fakes, ever.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)' }}>
            <span className="badge badge-accent" style={{ marginBottom: '1rem' }}>02. RETAIL EXPERIENCE</span>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>TOUCH, TRY & CHOOSE</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.92rem' }}>
              Unlike nameless online resellers, we have a physical retail presence in Vadodara. Walk in, experience the actual materials, try on your exact UK size, and talk sneakers with our passionate team.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)' }}>
            <span className="badge badge-accent" style={{ marginBottom: '1rem' }}>03. COMMUNITY</span>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>11K+ STRONG SNEAKERHEADS</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.92rem' }}>
              Follow our daily unboxings, reel drops, and sneaker wall restocks on Instagram @culturkicks.store. We ship double-boxed and insured across all pin codes in India.
            </p>
          </div>
        </div>

        {/* Quote & CTA */}
        <div
          className="glass-panel"
          style={{
            padding: '3rem',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto',
            border: '1px solid var(--border-medium)'
          }}
        >
          <p style={{ fontSize: '1.4rem', fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
            "Sneakers aren't just shoes — they are history, art, and personal identity. We built Culture Kicks to ensure every sneakerhead gets the real deal."
          </p>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent)', marginBottom: '2rem' }}>
            — CULTURE KICKS VADODARA FOUNDERS
          </div>
          <button
            onClick={() => onNavigate('shop')}
            className="btn btn-primary"
            style={{ padding: '1rem 2.5rem' }}
          >
            <span>EXPLORE OUR SNEAKER CATALOG</span>
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { ArrowUpRight, Send, ShieldCheck, Sparkles } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { BRAND } from '../data/brand';

export default function Footer({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer
      style={{
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-subtle)',
        marginTop: '6rem',
        padding: '5rem 0 2rem 0'
      }}
    >
      <div className="container">
        {/* Top Newsletter / Brand Banner */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            borderRadius: 'var(--radius-lg)',
            marginBottom: '4rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            background: 'linear-gradient(135deg, rgba(24, 27, 34, 0.9) 0%, rgba(18, 20, 25, 0.95) 100%)',
            border: '1px solid var(--border-medium)'
          }}
        >
          <div style={{ maxWidth: '520px' }}>
            <span className="badge badge-accent" style={{ marginBottom: '0.75rem' }}>
              <Sparkles size={11} /> ATELIER DISPATCH
            </span>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '0.65rem', lineHeight: 1.2 }}>
              ACCESS LIMITED PROTOTYPE DROPS BEFORE PUBLIC RELEASE
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>
              Join 42,000+ athletes, designers, and sneaker collectors receiving our experimental design logs and drop dates.
            </p>
          </div>

          <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem', width: '100%', maxWidth: '420px' }}>
            {subscribed ? (
              <div
                style={{
                  background: 'rgba(212, 255, 0, 0.1)',
                  border: '1px solid var(--accent)',
                  color: 'var(--accent)',
                  padding: '0.9rem 1.25rem',
                  borderRadius: 'var(--radius-sm)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  width: '100%',
                  textAlign: 'center'
                }}
              >
                ✓ REGISTERED FOR DROP ALERTS
              </div>
            ) : (
              <>
                <input
                  type="email"
                  required
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '0.85rem 1rem',
                    background: 'var(--bg-main)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem'
                  }}
                />
                <button type="submit" className="btn btn-primary" style={{ padding: '0 1.5rem' }}>
                  <Send size={15} />
                  <span>JOIN</span>
                </button>
              </>
            )}
          </form>
        </div>

        {/* Footer Navigation Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}
        >
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <img src="/logo.svg" alt="Culture Kicks" style={{ width: '38px', height: '38px', borderRadius: '50%' }} />
              <span className="font-display" style={{ fontSize: '1.4rem' }}>{BRAND.name}</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {BRAND.tagline}
            </p>
            <a
              href={BRAND.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="badge badge-outline"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 0.85rem',
                textDecoration: 'none',
                color: 'var(--text-primary)'
              }}
            >
              <InstagramIcon size={14} color="var(--accent)" />
              <span>{BRAND.instagram.handle} ({BRAND.instagram.followerCount})</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.95rem', marginBottom: '1.25rem', color: 'var(--accent)' }}>NAVIGATION</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem' }}>
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', textAlign: 'left' }}
                >
                  Home Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', textAlign: 'left' }}
                >
                  Full Prototype Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('atelier')}
                  style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', textAlign: 'left' }}
                >
                  Interactive 3D Atelier
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', textAlign: 'left' }}
                >
                  Brand Heritage & Materials
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', textAlign: 'left' }}
                >
                  Atelier Concierge & Studio
                </button>
              </li>
            </ul>
          </div>

          {/* Technology & Atelier Specs */}
          <div>
            <h4 style={{ fontSize: '0.95rem', marginBottom: '1.25rem', color: 'var(--accent)' }}>ATELIER LAB</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.82rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
              <div>• 3D Carbon Torsional Shanks</div>
              <div>• Supercritical N2 Foam Formulation</div>
              <div>• 100% Recycled Monofilament Ripstop</div>
              <div>• Monolithic Direct EVA Molding</div>
              <div>• Biomechanical Gait Optimization</div>
            </div>
          </div>

          {/* Legal & Proposal Note */}
          <div>
            <h4 style={{ fontSize: '0.95rem', marginBottom: '1.25rem', color: 'var(--accent)' }}>SHOWCASE MODE</h4>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
              This storefront was developed as a live proposal demonstration featuring Three.js 3D rendering, interactive cart, responsive catalog, and mock checkout.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
              <ShieldCheck size={14} />
              <span>PROPOSAL PROTOTYPE v1.0</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)'
          }}
        >
          <div>
            © {new Date().getFullYear()} {BRAND.fullName}. ALL RIGHTS RESERVED.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>PRIVACY PROTOCOL (DEMO)</span>
            <span>TERMS OF ATELIER (DEMO)</span>
            <span>AUTHENTICITY DISCLOSURE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

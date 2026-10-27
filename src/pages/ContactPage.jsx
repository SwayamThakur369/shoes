import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { InstagramIcon } from '../components/Icons';
import { BRAND } from '../data/brand';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'fitting', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: 'fitting', message: '' });
    }, 4000);
  };

  return (
    <div style={{ padding: '3rem 0 6rem 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '720px', marginBottom: '3.5rem' }}>
          <span className="badge badge-accent" style={{ marginBottom: '0.75rem' }}>
            VISIT CULTURE KICKS VADODARA
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
            VISIT OUR STORE OR <span style={{ color: 'var(--accent)' }}>CONTACT US</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
            Drop by our physical store on Vasna Main Road in Vadodara to check out the latest sneaker wall drops, or WhatsApp our team for size inquiries and nationwide shipping.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.3fr',
            gap: '3.5rem',
            alignItems: 'start'
          }}
          className="contact-grid"
        >
          {/* Left Info Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Store Location */}
            <div className="glass-card" style={{ padding: '1.75rem', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--accent)' }}>VADODARA STORE</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1rem' }}>Culture Kicks Retail Store</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                    105, Aries Prime, Vasna Main Rd, Vadodara, Gujarat 390007
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--accent)', fontFamily: 'var(--font-mono)', marginTop: '0.4rem' }}>
                    ⏰ STORE TIMING: 12:00 PM TO 10:00 PM (EVERY DAY)
                  </div>
                </div>

                <a
                  href={BRAND.store.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  style={{ width: '100%', marginTop: '0.5rem', textDecoration: 'none' }}
                >
                  <MapPin size={16} />
                  <span>OPEN IN GOOGLE MAPS</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="glass-card" style={{ padding: '1.75rem', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--accent)' }}>PHONE & WHATSAPP</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
                <a
                  href={`tel:${BRAND.store.phone}`}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)', textDecoration: 'none' }}
                >
                  <Phone size={16} color="var(--accent)" />
                  <span style={{ fontFamily: 'var(--font-mono)' }}>{BRAND.store.phone} (Call Directly)</span>
                </a>

                <a
                  href={`https://wa.me/${BRAND.store.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}
                >
                  <Send size={16} />
                  <span>WhatsApp Chat: +91 8866059560</span>
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href={BRAND.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)', textDecoration: 'none' }}
                >
                  <InstagramIcon size={16} color="var(--accent)" />
                  <span>Instagram: {BRAND.instagram.handle} ({BRAND.instagram.followerCount})</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>SEND DISPATCH INQUIRY</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1.75rem' }}>
              Fill in your inquiry below. All test submissions are acknowledged immediately in demo mode.
            </p>

            {submitted ? (
              <div
                style={{
                  padding: '2rem',
                  background: 'rgba(212, 255, 0, 0.1)',
                  border: '1px solid var(--accent)',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'center'
                }}
              >
                <CheckCircle2 size={36} color="var(--accent)" style={{ margin: '0 auto 0.75rem auto' }} />
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.35rem' }}>MESSAGE TRANSMITTED</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Our concierge team has received your communication and will follow up shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Vikram Malhotra"
                    style={{ width: '100%', padding: '0.75rem', background: 'var(--bg-main)', border: '1px solid var(--border-subtle)', color: '#fff', borderRadius: '4px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. vikram@domain.com"
                    style={{ width: '100%', padding: '0.75rem', background: 'var(--bg-main)', border: '1px solid var(--border-subtle)', color: '#fff', borderRadius: '4px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                    SUBJECT MATTER
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', background: 'var(--bg-main)', border: '1px solid var(--border-subtle)', color: '#fff', borderRadius: '4px', cursor: 'pointer' }}
                  >
                    <option value="fitting">Private Atelier Fitting Session</option>
                    <option value="sizing">Biomechanical Sizing Consultation</option>
                    <option value="press">Editorial Press & Collaboration</option>
                    <option value="order">Order Tracking Inquiry</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                    MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your requirements..."
                    style={{ width: '100%', padding: '0.75rem', background: 'var(--bg-main)', border: '1px solid var(--border-subtle)', color: '#fff', borderRadius: '4px', resize: 'vertical' }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ padding: '0.85rem' }}>
                  <Send size={15} />
                  <span>TRANSMIT MESSAGE</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

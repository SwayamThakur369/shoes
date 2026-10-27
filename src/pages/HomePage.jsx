import React, { useState } from 'react';
import { ArrowRight, Compass, Shield, Zap, Sparkles, Star, Award, Layers, CheckCircle2 } from 'lucide-react';
import { InstagramIcon } from '../components/Icons';
import ThreeHeroShoe from '../components/ThreeHeroShoe';
import ProductCard from '../components/ProductCard';
import { BRAND } from '../data/brand';
import { PRODUCTS } from '../data/products';

export default function HomePage({
  onSelectProduct,
  onAddToCart,
  wishlistIds,
  onToggleWishlist,
  onOpenSizeGuide,
  onNavigate
}) {
  const heroProduct = PRODUCTS.find((p) => p.isHero) || PRODUCTS[0];
  const [activeColorway, setActiveColorway] = useState(heroProduct.colorways[0]);
  const [activeCategoryTab, setActiveCategoryTab] = useState('All');

  const filteredFeatured = activeCategoryTab === 'All'
    ? PRODUCTS.slice(0, 6)
    : PRODUCTS.filter((p) => p.category.toLowerCase().includes(activeCategoryTab.toLowerCase())).slice(0, 6);

  return (
    <div style={{ minHeight: '100vh', overflowX: 'hidden' }}>
      {/* ========================================================
          HERO SECTION WITH THREE.JS 3D SNEAKER
          ======================================================== */}
      {/* ========================================================
          HERO SECTION WITH CONTINUOUS LOOPING SNEAKER VIDEO BACKGROUND
          ======================================================== */}
      <section
        style={{
          position: 'relative',
          minHeight: 'calc(100vh - 110px)',
          display: 'flex',
          alignItems: 'center',
          padding: '4rem 0',
          borderBottom: '1px solid var(--border-subtle)',
          overflow: 'hidden',
          backgroundColor: '#090A0D'
        }}
      >
        {/* Full-bleed Continuous Looping Video Background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
            zIndex: 1
          }}
        >
          <video
            src="/shoe-loop-1.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'right 15% center',
              opacity: 1,
              filter: 'contrast(1.15) brightness(1.12)',
              transform: 'scale(1.01)'
            }}
          />

          {/* Lightweight Gradient Scrim only on Left Edge for Text Legibility */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, rgba(9, 10, 13, 0.82) 0%, rgba(9, 10, 13, 0.60) 38%, rgba(9, 10, 13, 0.15) 60%, transparent 75%), linear-gradient(0deg, #090A0D 0%, transparent 18%)',
              pointerEvents: 'none'
            }}
          />
        </div>

        {/* Glow ambient background lights */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(226, 241, 60, 0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
            zIndex: 2
          }}
        />

        <div className="container" style={{ width: '100%', position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '680px' }}>
            {/* Monogram Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <span className="badge badge-accent">
                <Sparkles size={12} /> 100% VERIFIED AUTHENTIC
              </span>
              <span className="badge badge-outline">VADODARA • 105 ARIES PRIME</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.6rem, 5vw, 4.5rem)',
                lineHeight: 1.04,
                marginBottom: '1.25rem',
                letterSpacing: '-0.03em',
                textShadow: '0 4px 20px rgba(0,0,0,0.9)'
              }}
            >
              CULTURE <span style={{ color: 'var(--accent)' }}>KICKS</span> STORE
            </h1>

            {/* Tagline / Subtitle */}
            <p
              style={{
                fontSize: '1.15rem',
                color: '#E0E3EB',
                lineHeight: 1.65,
                marginBottom: '2rem',
                textShadow: '0 2px 12px rgba(0,0,0,0.95)'
              }}
            >
              {BRAND.tagline}. Discover rare Travis Scott Grails, Air Jordans, On Running, Dunks, and Sambas in stock for immediate dispatch.
            </p>

            {/* CTA Actions */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginBottom: '2.5rem' }}>
              <button
                onClick={() => onSelectProduct(heroProduct)}
                className="btn btn-primary"
                style={{ padding: '1rem 2.2rem', fontSize: '0.95rem' }}
              >
                <span>SHOP TRAVIS SCOTT FRAGMENT</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => onNavigate('shop')}
                className="btn btn-secondary"
                style={{ padding: '1rem 2rem' }}
              >
                <Compass size={17} />
                <span>VIEW ALL 8 SILHOUETTES</span>
              </button>
            </div>

            {/* Key Store Specs Pill Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.25rem',
                paddingTop: '1.75rem',
                borderTop: '1px solid var(--border-subtle)',
                marginBottom: '1.75rem'
              }}
            >
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent)' }}>
                  11K<span style={{ fontSize: '0.85rem' }}>+</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  INSTAGRAM COMMUNITY
                </div>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  100<span style={{ fontSize: '0.85rem' }}>%</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  VERIFIED AUTHENTIC
                </div>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent)' }}>
                  12–10<span style={{ fontSize: '0.85rem' }}>PM</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  STORE OPEN DAILY
                </div>
              </div>
            </div>

            {/* Interactive Colorway Selector */}
            <div
              className="glass-panel"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid var(--border-medium)'
              }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                SWITCH COLORWAY:
              </span>
              {heroProduct.colorways.map((c) => (
                <button
                  key={c.code}
                  onClick={() => setActiveColorway(c)}
                  title={c.name}
                  style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${c.hex} 50%, ${c.accentHex} 50%)`,
                    border: activeColorway?.code === c.code ? '2px solid var(--accent)' : '2px solid rgba(255,255,255,0.25)',
                    boxShadow: activeColorway?.code === c.code ? '0 0 12px var(--accent-glow)' : 'none',
                    cursor: 'pointer',
                    transform: activeColorway?.code === c.code ? 'scale(1.15)' : 'scale(1)',
                    transition: 'all 0.2s ease'
                  }}
                />
              ))}
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)', marginLeft: '0.25rem' }}>
                {activeColorway.name}
              </span>
            </div>
          </div>
        </div>

        {/* Floating Featured Product Badge on the Right */}
        <div
          onClick={() => onSelectProduct(heroProduct)}
          className="glass-card"
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            right: '2.5rem',
            padding: '1.1rem 1.4rem',
            borderRadius: 'var(--radius-lg)',
            cursor: 'pointer',
            maxWidth: '340px',
            border: '1px solid var(--border-medium)',
            background: 'rgba(18, 20, 25, 0.85)',
            backdropFilter: 'blur(16px)',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.35rem'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="badge badge-accent" style={{ fontSize: '0.65rem' }}>IN STOCK AT VADODARA</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>UK 7–11</span>
          </div>
          <div style={{ fontWeight: 800, fontSize: '0.98rem', color: '#fff', marginTop: '0.2rem' }}>
            {heroProduct.name}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.25rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontWeight: 800, fontSize: '1.1rem' }}>
              {BRAND.currency.symbol}{heroProduct.price.toLocaleString('en-IN')}
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
              View Details →
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================
          CURATED PROTOTYPES / FEATURED COLLECTION
          ======================================================== */}
      <section style={{ padding: '6rem 0 4rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '1.5rem',
              marginBottom: '3rem'
            }}
          >
            <div>
              <span className="badge badge-accent" style={{ marginBottom: '0.75rem' }}>
                CURRENT ATELIER BATCH
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}>
                FEATURED <span style={{ color: 'var(--accent)' }}>SILHOUETTES</span>
              </h2>
            </div>

            {/* Category Filter Tabs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {["All", "Running", "Trail", "Streetwear", "Lifestyle"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategoryTab(cat)}
                  className="badge"
                  style={{
                    cursor: 'pointer',
                    padding: '0.55rem 1rem',
                    background: activeCategoryTab === cat ? 'var(--accent)' : 'var(--bg-card)',
                    color: activeCategoryTab === cat ? '#000' : 'var(--text-secondary)',
                    border: '1px solid',
                    borderColor: activeCategoryTab === cat ? 'var(--accent)' : 'var(--border-subtle)',
                    fontSize: '0.8rem'
                  }}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
              gap: '2rem'
            }}
          >
            {filteredFeatured.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
                onAddToCart={onAddToCart}
                isWishlisted={wishlistIds.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
              />
            ))}
          </div>

          {/* View All Button */}
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button
              onClick={() => onNavigate('shop')}
              className="btn btn-secondary"
              style={{ padding: '1rem 2.5rem', fontSize: '0.95rem' }}
            >
              <span>VIEW FULL 8-MODEL ARCHIVE</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          ENGINEERING LAB HIGHLIGHTS / 3D BREAKDOWN
          ======================================================== */}
      <section
        style={{
          padding: '6rem 0',
          background: 'var(--bg-surface)',
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)'
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4.5rem auto' }}>
            <span className="badge badge-accent" style={{ marginBottom: '0.85rem' }}>
              MATERIALS & ARCHITECTURE
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1rem' }}>
              THE SCIENCE OF <span style={{ color: 'var(--accent)' }}>PROPULSION</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
              Every pair in the Culture Kicks vault undergoes rigorous multi-point authentication. From deadstock Travis Scott grails to Swiss On CloudTec geometry.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem'
            }}
          >
            <div className="glass-card" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  background: 'rgba(212, 255, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  marginBottom: '1.5rem'
                }}
              >
                <Layers size={24} />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.65rem' }}>PARAMETRIC TORSIONAL PLATE</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Full-length aerospace 3D carbon shank provides rigid torsional stiffness through midfoot pronation, translating downward heel impact into explosive forward momentum.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  background: 'rgba(212, 255, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  marginBottom: '1.5rem'
                }}
              >
                <Zap size={24} />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.65rem' }}>NITROGEN-INFUSED COMPOUND</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Micro-cellular supercritical nitrogen gas chambers create a foam matrix that remains 40% lighter than standard EVA while resisting mechanical pack-out over 800+ kilometers.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  background: 'rgba(212, 255, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  marginBottom: '1.5rem'
                }}
              >
                <Shield size={24} />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.65rem' }}>HYDROPHOBIC MONOFILAMENT</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Woven from single-strand recycled ocean polymers. Repels heavy monsoon rainwater while maintaining full lateral breathability and zero water weight retention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          BRAND STORY & ATELIER ETHOS
          ======================================================== */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              alignItems: 'center',
              gap: '4rem'
            }}
            className="brand-story-grid"
          >
            {/* Left Image Showcase */}
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                aspectRatio: '4/3',
                border: '1px solid var(--border-medium)',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=80"
                alt="Culture Kicks Store Vadodara"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(9, 10, 13, 0.9) 0%, transparent 60%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '2rem'
                }}
              >
                <span className="badge badge-accent" style={{ width: 'fit-content', marginBottom: '0.5rem' }}>
                  VADODARA STORE // 105 ARIES PRIME
                </span>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                  VASNA MAIN ROAD • OPEN DAILY 12:00 PM TO 10:00 PM
                </div>
              </div>
            </div>

            {/* Right Story Text */}
            <div>
              <span className="badge badge-accent" style={{ marginBottom: '0.75rem' }}>
                VADODARA'S SNEAKER DESTINATION
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', marginBottom: '1.25rem', lineHeight: 1.15 }}>
                100% AUTHENTIC HYPE, RUNNING & STREETWEAR CULTURE.
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Culture Kicks was founded to give Gujarat and sneakerheads across India a trusted destination for 100% verified authentic grails. From limited Travis Scott collaborations and Air Jordan 4 retros to cutting-edge On Running Cloudtec trainers, every pair on our shelves is rigorously authenticated.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                Walk into our physical store at 105 Aries Prime, Vasna Main Road in Vadodara to try on pairs in person, or order online with guaranteed express dispatch and WhatsApp video inspection.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href={BRAND.store.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  style={{ textDecoration: 'none' }}
                >
                  <span>GET STORE DIRECTIONS</span>
                  <ArrowRight size={16} />
                </a>
                <a
                  href={`https://wa.me/${BRAND.store.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                  style={{ textDecoration: 'none' }}
                >
                  <span>WHATSAPP US (+91 8866059560)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          ATHLETE SOCIAL PROOF & REVIEWS
          ======================================================== */}
      <section
        style={{
          padding: '5rem 0',
          background: 'var(--bg-surface)',
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)'
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge badge-accent" style={{ marginBottom: '0.65rem' }}>
              VERIFIED COMMUNITY DISPATCHES
            </span>
            <h2 style={{ fontSize: '2.2rem' }}>
              TESTED BY ATHLETES & SNEAKER ARCHIVISTS
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {[
              {
                quote: "Picked up the Travis Scott Fragment 1 Low directly from Culture Kicks store at Aries Prime. UV light check passed, zero flaws, original blue box and all 4 lace sets intact.",
                author: "Harshil Patel",
                role: "Sneakerhead & Collector (Vadodara)",
                stars: 5,
                shoe: "Travis Scott x Fragment Jordan 1 Low"
              },
              {
                quote: "Saw their reel on the On Cloudmonster 2 and visited the store the same evening. Amazing in-hand experience, got the right UK 9 fit immediately.",
                author: "Rohan Dave",
                role: "Marathon Runner & Fitness Coach",
                stars: 5,
                shoe: "On Cloudmonster 2"
              },
              {
                quote: "Culture Kicks has put Vadodara on the national sneaker map. 100% authentic deadstock, clean store vibe, and super helpful staff.",
                author: "Manan Kothari",
                role: "Streetwear Enthusiast (Surat)",
                stars: 5,
                shoe: "Air Jordan 4 Retro 'Bred Reimagined'"
              }
            ].map((rev, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '2rem',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '0.25rem', color: '#ffb703', marginBottom: '1rem' }}>
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} size={15} fill="#ffb703" />
                    ))}
                  </div>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                    "{rev.quote}"
                  </p>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--accent)' }}>{rev.author}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{rev.role}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>
                    Verified Owner of {rev.shoe}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          INSTAGRAM FEED & SOCIAL PROOF
          ======================================================== */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '2.5rem',
              gap: '1rem'
            }}
          >
            <div>
              <span className="badge badge-accent" style={{ marginBottom: '0.65rem' }}>
                SOCIAL RADAR
              </span>
              <h2 style={{ fontSize: '2.2rem' }}>
                FOLLOW OUR ATELIER ON INSTAGRAM
              </h2>
            </div>

            <a
              href={BRAND.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <InstagramIcon size={17} color="var(--accent)" />
              <span>{BRAND.instagram.handle} ({BRAND.instagram.followerCount})</span>
            </a>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {BRAND.instagram.featuredPosts.map((post) => (
              <a
                key={post.id}
                href={BRAND.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="glass-card"
                style={{
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ position: 'relative', paddingTop: '100%', overflow: 'hidden' }}>
                  <img
                    src={post.image}
                    alt={post.caption}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      right: '0.75rem',
                      background: 'rgba(0,0,0,0.6)',
                      padding: '0.35rem 0.65rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--accent)'
                    }}
                  >
                    ♥ {post.likes}
                  </div>
                </div>

                <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                    {post.caption}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    <span>{post.date}</span>
                    <span>{post.comments} comments</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive Breakpoints CSS */}
      <style>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .brand-story-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { BRAND } from '../data/brand';

export default function Header({
  currentPage,
  onNavigate,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Demo Banner */}
      <div className="demo-banner">
        <ShieldCheck size={14} />
        <span>{BRAND.demoNotice.title} — {BRAND.demoNotice.message}</span>
      </div>

      {/* Main Luxury Header */}
      <header
        className="glass-panel"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 90,
          borderBottom: '1px solid var(--border-subtle)',
          transition: 'all 0.3s ease'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '74px'
          }}
        >
          {/* Brand Logo & Monogram */}
          <div
            onClick={() => handleNavClick('home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              cursor: 'pointer',
              userSelect: 'none'
            }}
          >
            <img
              src="/logo.svg"
              alt="Culture Kicks Logo"
              style={{ width: '42px', height: '42px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)' }}
            />
            <div>
              <div
                className="font-display"
                style={{
                  fontSize: '1.45rem',
                  lineHeight: 1,
                  letterSpacing: '0.04em',
                  color: 'var(--text-primary)'
                }}
              >
                {BRAND.name}
              </div>
              <div
                className="font-mono"
                style={{
                  fontSize: '0.62rem',
                  color: 'var(--accent)',
                  letterSpacing: '0.12em',
                  marginTop: '2px'
                }}
              >
                VADODARA • 105 ARIES PRIME
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2.2rem'
            }}
            className="desktop-nav"
          >
            <button
              onClick={() => handleNavClick('home')}
              style={{
                background: 'none',
                border: 'none',
                color: currentPage === 'home' ? 'var(--accent)' : 'var(--text-secondary)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.88rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                cursor: 'pointer',
                transition: 'color var(--transition-fast)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.2rem'
              }}
            >
              HOME
            </button>

            <button
              onClick={() => handleNavClick('shop')}
              style={{
                background: 'none',
                border: 'none',
                color: currentPage === 'shop' ? 'var(--accent)' : 'var(--text-secondary)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.88rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                cursor: 'pointer',
                transition: 'color var(--transition-fast)'
              }}
            >
              CATALOG
            </button>

            <button
              onClick={() => handleNavClick('atelier')}
              style={{
                background: 'none',
                border: 'none',
                color: currentPage === 'atelier' ? 'var(--accent)' : 'var(--text-secondary)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.88rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                cursor: 'pointer',
                transition: 'color var(--transition-fast)'
              }}
            >
              3D ATELIER
            </button>

            <button
              onClick={() => handleNavClick('about')}
              style={{
                background: 'none',
                border: 'none',
                color: currentPage === 'about' ? 'var(--accent)' : 'var(--text-secondary)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.88rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                cursor: 'pointer',
                transition: 'color var(--transition-fast)'
              }}
            >
              BRAND STORY
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              style={{
                background: 'none',
                border: 'none',
                color: currentPage === 'contact' ? 'var(--accent)' : 'var(--text-secondary)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.88rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                cursor: 'pointer',
                transition: 'color var(--transition-fast)'
              }}
            >
              CONTACT
            </button>
          </nav>

          {/* Action Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="btn-outline"
              style={{
                width: '42px',
                height: '42px',
                padding: 0,
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Search Catalog"
              title="Search (Press / or click)"
            >
              <Search size={18} />
            </button>

            {/* Wishlist Trigger */}
            <button
              onClick={onOpenWishlist}
              className="btn-outline"
              style={{
                width: '42px',
                height: '42px',
                padding: 0,
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}
              aria-label="Wishlist"
              title="Saved Items"
            >
              <Heart size={18} />
              {wishlistCount > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-4px',
                    right: '-4px',
                    background: 'var(--text-primary)',
                    color: 'var(--bg-main)',
                    fontSize: '0.68rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="btn btn-primary"
              style={{
                height: '42px',
                padding: '0 1.25rem',
                position: 'relative',
                fontSize: '0.82rem'
              }}
              aria-label="Cart"
            >
              <ShoppingBag size={17} />
              <span className="cart-text">CART</span>
              <span
                style={{
                  background: 'var(--bg-main)',
                  color: 'var(--accent)',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 800,
                  padding: '0.1rem 0.45rem',
                  borderRadius: 'var(--radius-pill)',
                  marginLeft: '0.25rem'
                }}
              >
                {cartCount}
              </span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="btn-outline mobile-menu-btn"
              style={{
                width: '42px',
                height: '42px',
                padding: 0,
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            className="glass-panel animate-slide-down"
            style={{
              padding: '1.5rem',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            <button
              onClick={() => handleNavClick('home')}
              style={{
                background: 'none',
                border: 'none',
                textAlign: 'left',
                color: currentPage === 'home' ? 'var(--accent)' : 'var(--text-primary)',
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem',
                cursor: 'pointer'
              }}
            >
              HOME
            </button>
            <button
              onClick={() => handleNavClick('shop')}
              style={{
                background: 'none',
                border: 'none',
                textAlign: 'left',
                color: currentPage === 'shop' ? 'var(--accent)' : 'var(--text-primary)',
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem',
                cursor: 'pointer'
              }}
            >
              CATALOG
            </button>
            <button
              onClick={() => handleNavClick('atelier')}
              style={{
                background: 'none',
                border: 'none',
                textAlign: 'left',
                color: currentPage === 'atelier' ? 'var(--accent)' : 'var(--text-primary)',
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem',
                cursor: 'pointer'
              }}
            >
              3D ATELIER
            </button>
            <button
              onClick={() => handleNavClick('about')}
              style={{
                background: 'none',
                border: 'none',
                textAlign: 'left',
                color: currentPage === 'about' ? 'var(--accent)' : 'var(--text-primary)',
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem',
                cursor: 'pointer'
              }}
            >
              BRAND STORY
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              style={{
                background: 'none',
                border: 'none',
                textAlign: 'left',
                color: currentPage === 'contact' ? 'var(--accent)' : 'var(--text-primary)',
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem',
                cursor: 'pointer'
              }}
            >
              CONTACT
            </button>
            <a
              href={BRAND.instagram.url}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 1rem',
                background: 'var(--bg-card)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--accent)',
                textDecoration: 'none',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                marginTop: '0.5rem'
              }}
            >
              <span>INSTAGRAM {BRAND.instagram.handle}</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        )}
      </header>

      {/* Responsive CSS for Header */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
          .cart-text {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

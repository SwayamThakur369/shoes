import React, { useState } from 'react';
import { Heart, Star, ShoppingBag, Eye, ArrowUpRight } from 'lucide-react';
import { BRAND } from '../data/brand';

export default function ProductCard({
  product,
  onSelectProduct,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
  onQuickView
}) {
  const [selectedColorway, setSelectedColorway] = useState(product.colorways[0]);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="glass-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}
    >
      {/* Image Container with Badges & Quick Action Overlay */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '92%',
          background: 'linear-gradient(180deg, #181b22 0%, #111317 100%)',
          overflow: 'hidden',
          cursor: 'pointer'
        }}
        onClick={() => onSelectProduct(product)}
      >
        <img
          src={selectedColorway.image || product.colorways[0].image}
          alt={product.name}
          loading="lazy"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: isHovered ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        />

        {/* Top Badges */}
        <div
          style={{
            position: 'absolute',
            top: '0.85rem',
            left: '0.85rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.35rem',
            zIndex: 2
          }}
        >
          {product.isNew && (
            <span className="badge badge-accent">NEW RELEASE</span>
          )}
          {product.isBestSeller && (
            <span className="badge badge-dark">ARCHIVE ESSENTIAL</span>
          )}
          {product.isHero && (
            <span className="badge badge-outline" style={{ background: 'rgba(0,0,0,0.7)', color: 'var(--accent)', borderColor: 'var(--accent)' }}>
              ★ FLAGSHIP
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          style={{
            position: 'absolute',
            top: '0.85rem',
            right: '0.85rem',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: isWishlisted ? 'var(--accent)' : 'rgba(9, 10, 13, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: isWishlisted ? '#000' : 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 2,
            transition: 'all 0.2s ease'
          }}
          aria-label="Save to Wishlist"
        >
          <Heart size={16} fill={isWishlisted ? '#000' : 'none'} />
        </button>

        {/* Quick View Button on Hover */}
        <div
          style={{
            position: 'absolute',
            bottom: '0.85rem',
            left: '0.85rem',
            right: '0.85rem',
            display: 'flex',
            gap: '0.5rem',
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
            transition: 'all 0.25s ease',
            zIndex: 3
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectProduct(product);
            }}
            className="btn btn-secondary"
            style={{ flex: 1, padding: '0.55rem', fontSize: '0.75rem', backdropFilter: 'blur(8px)', background: 'rgba(18, 20, 25, 0.85)' }}
          >
            <Eye size={14} />
            <span>VIEW SPECS</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product, selectedColorway, product.sizes[1] || 8, 1);
            }}
            className="btn btn-primary"
            style={{ padding: '0.55rem 0.85rem', fontSize: '0.75rem' }}
            title="Quick Add (Size UK 8)"
          >
            <ShoppingBag size={14} />
            <span>ADD</span>
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Category & Rating */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
            {product.category}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', color: '#ffb703' }}>
            <Star size={12} fill="#ffb703" />
            <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{product.rating}</span>
            <span style={{ color: 'var(--text-muted)' }}>({product.reviewCount})</span>
          </div>
        </div>

        {/* Title */}
        <h4
          onClick={() => onSelectProduct(product)}
          style={{
            fontSize: '1.05rem',
            marginBottom: '0.35rem',
            cursor: 'pointer',
            transition: 'color 0.2s ease',
            color: isHovered ? 'var(--accent)' : 'var(--text-primary)'
          }}
        >
          {product.name}
        </h4>

        {/* Sub-tagline */}
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.85rem', lineHeight: 1.4 }}>
          {product.tagline}
        </p>

        {/* Colorway swatches & Price */}
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.65rem', borderTop: '1px solid var(--border-subtle)' }}>
          {/* Swatches */}
          <div style={{ display: 'flex', gap: '0.35rem', alignItems: 'center' }}>
            {product.colorways.map((cw) => (
              <button
                key={cw.code}
                onClick={() => setSelectedColorway(cw)}
                title={cw.name}
                style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: cw.hex,
                  border: selectedColorway.code === cw.code ? '2px solid var(--accent)' : '1px solid rgba(255,255,255,0.2)',
                  cursor: 'pointer',
                  transform: selectedColorway.code === cw.code ? 'scale(1.2)' : 'scale(1)',
                  transition: 'transform 0.15s ease'
                }}
              />
            ))}
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginLeft: '0.25rem', fontFamily: 'var(--font-mono)' }}>
              {product.colorways.length}C
            </span>
          </div>

          {/* Price */}
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)' }}>
              {BRAND.currency.symbol}{product.price.toLocaleString('en-IN')}
            </div>
            {product.originalPrice > product.price && (
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                {BRAND.currency.symbol}{product.originalPrice.toLocaleString('en-IN')}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

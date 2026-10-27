import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { BRAND } from '../data/brand';

export default function WishlistDrawer({
  isOpen,
  onClose,
  wishlistItems,
  onRemoveFromWishlist,
  onAddToCart,
  onNavigateToShop
}) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 200,
        display: 'flex',
        justifyContent: 'flex-end',
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px)',
        animation: 'fadeIn 0.2s ease'
      }}
    >
      <div onClick={onClose} style={{ position: 'absolute', inset: 0 }} />

      <div
        className="glass-panel"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '460px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'var(--bg-surface)',
          borderLeft: '1px solid var(--border-medium)',
          zIndex: 1
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <h3 style={{ fontSize: '1.1rem', margin: 0 }}>SAVED ATELIER ARCHIVE</h3>
            <span className="badge badge-accent">{wishlistItems.length} SAVED</span>
          </div>
          <button
            onClick={onClose}
            className="btn-outline"
            style={{ width: '36px', height: '36px', padding: 0, borderRadius: '50%' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Wishlist Items List */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          {wishlistItems.length === 0 ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                textAlign: 'center',
                gap: '1rem'
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'var(--bg-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-muted)'
                }}
              >
                ♥
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', marginBottom: '0.35rem' }}>NO SAVED PAIRS</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Save your desired prototypes to monitor stock and compare silhouettes.
                </p>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onNavigateToShop();
                }}
                className="btn btn-primary"
              >
                DISCOVER SILHOUETTES
              </button>
            </div>
          ) : (
            wishlistItems.map((product) => (
              <div
                key={product.id}
                className="glass-card"
                style={{
                  padding: '0.85rem',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'center'
                }}
              >
                <img
                  src={product.colorways[0].image}
                  alt={product.name}
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: 'var(--radius-sm)',
                    objectFit: 'cover'
                  }}
                />

                <div style={{ flex: 1, minWidth: 0 }}>
                  <h4 style={{ fontSize: '0.9rem', marginBottom: '0.2rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {product.name}
                  </h4>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>
                    {BRAND.currency.symbol}{product.price.toLocaleString('en-IN')}
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                      onClick={() => {
                        onAddToCart(product, product.colorways[0], product.sizes[1] || 8, 1);
                        onRemoveFromWishlist(product.id);
                      }}
                      className="btn btn-primary"
                      style={{ padding: '0.35rem 0.75rem', fontSize: '0.72rem' }}
                    >
                      <ShoppingBag size={12} />
                      <span>MOVE TO CART</span>
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveFromWishlist(product.id)}
                  style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

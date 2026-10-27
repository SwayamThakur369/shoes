import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { BRAND } from '../data/brand';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  onNavigateToShop
}) {
  const [promoCode, setPromoCode] = useState('');
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [promoMessage, setPromoMessage] = useState(null);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 15000;
  const progressToFreeShipping = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const shippingCost = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 499;
  const discountAmount = Math.round(subtotal * promoDiscount);
  const total = Math.max(0, subtotal - discountAmount + shippingCost);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'CULTURE10' || promoCode.trim().toUpperCase() === 'STRATA10' || promoCode.trim().toUpperCase() === 'VIP') {
      setPromoDiscount(0.10);
      setPromoMessage({ type: 'success', text: '10% Culture Kicks VIP discount applied!' });
    } else {
      setPromoMessage({ type: 'error', text: 'Invalid code. Try "CULTURE10"' });
    }
  };

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
      {/* Click outside to close backdrop */}
      <div
        onClick={onClose}
        style={{ position: 'absolute', inset: 0 }}
      />

      {/* Slide-out Drawer Panel */}
      <div
        className="glass-panel"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '480px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'var(--bg-surface)',
          borderLeft: '1px solid var(--border-medium)',
          boxShadow: 'var(--shadow-lg)',
          zIndex: 1
        }}
      >
        {/* Drawer Header */}
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
            <h3 style={{ fontSize: '1.1rem', margin: 0 }}>CART</h3>
            <span className="badge badge-accent">
              {cartItems.reduce((acc, i) => acc + i.quantity, 0)} ITEMS
            </span>
          </div>

          <button
            onClick={onClose}
            className="btn-outline"
            style={{ width: '36px', height: '36px', padding: 0, borderRadius: '50%' }}
            aria-label="Close Cart"
          >
            <X size={18} />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div
          style={{
            padding: '0.85rem 1.5rem',
            background: 'var(--bg-card)',
            borderBottom: '1px solid var(--border-subtle)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
            <span>
              {subtotal >= freeShippingThreshold ? (
                <span style={{ color: 'var(--accent)' }}>✓ FREE EXPRESS DISPATCH UNLOCKED</span>
              ) : (
                `Add ${BRAND.currency.symbol}${(freeShippingThreshold - subtotal).toLocaleString('en-IN')} for Free Dispatch`
              )}
            </span>
            <span style={{ color: 'var(--text-muted)' }}>{Math.round(progressToFreeShipping)}%</span>
          </div>
          <div style={{ width: '100%', height: '4px', background: 'var(--border-subtle)', borderRadius: '2px', overflow: 'hidden' }}>
            <div
              style={{
                width: `${progressToFreeShipping}%`,
                height: '100%',
                background: 'var(--accent)',
                transition: 'width 0.4s ease'
              }}
            />
          </div>
        </div>

        {/* Cart Items List */}
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
          {cartItems.length === 0 ? (
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
                  color: 'var(--text-muted)',
                  border: '1px dashed var(--border-medium)'
                }}
              >
                ✕
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', marginBottom: '0.35rem' }}>YOUR CART IS EMPTY</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Explore our kinetic silhouettes and add your preferred size.
                </p>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onNavigateToShop();
                }}
                className="btn btn-primary"
                style={{ marginTop: '0.5rem' }}
              >
                BROWSE COLLECTION
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={`${item.product.id}-${item.colorway.code}-${item.size}`}
                className="glass-card"
                style={{
                  padding: '0.85rem',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'center'
                }}
              >
                {/* Thumbnail */}
                <div
                  style={{
                    width: '74px',
                    height: '74px',
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden',
                    background: '#1a1d24',
                    flexShrink: 0
                  }}
                >
                  <img
                    src={item.colorway.image || item.product.colorways[0].image}
                    alt={item.product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Details */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h4 style={{ fontSize: '0.9rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: '0.2rem' }}>
                    {item.product.name}
                  </h4>
                  <div style={{ display: 'flex', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    <span>SIZE: UK {item.size}</span>
                    <span>•</span>
                    <span style={{ color: 'var(--accent)' }}>{item.colorway.name.split('&')[0]}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {/* Quantity stepper */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        background: 'var(--bg-main)',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      <button
                        onClick={() => onUpdateQuantity(item, item.quantity - 1)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--text-secondary)',
                          width: '26px',
                          height: '26px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Minus size={12} />
                      </button>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', width: '22px', textAlign: 'center' }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item, item.quantity + 1)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--text-secondary)',
                          width: '26px',
                          height: '26px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    {/* Price */}
                    <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.9rem' }}>
                      {BRAND.currency.symbol}{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>

                {/* Remove Item */}
                <button
                  onClick={() => onRemoveItem(item)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    padding: '0.35rem'
                  }}
                  title="Remove"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer with Totals & Checkout */}
        {cartItems.length > 0 && (
          <div
            style={{
              padding: '1.25rem 1.5rem',
              borderTop: '1px solid var(--border-subtle)',
              background: 'var(--bg-card)'
            }}
          >
            {/* Promo Code Input */}
            <form onSubmit={handleApplyPromo} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{ position: 'relative', flex: 1 }}>
                <input
                  type="text"
                  placeholder="PROMO CODE (e.g. CULTURE10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    background: 'var(--bg-main)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem'
                  }}
                />
              </div>
              <button type="submit" className="btn btn-secondary" style={{ padding: '0.65rem 1rem', fontSize: '0.75rem' }}>
                APPLY
              </button>
            </form>

            {promoMessage && (
              <div
                style={{
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  marginBottom: '0.75rem',
                  color: promoMessage.type === 'success' ? 'var(--accent)' : '#ff6b6b'
                }}
              >
                {promoMessage.text}
              </div>
            )}

            {/* Calculations */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Subtotal</span>
                <span style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                  {BRAND.currency.symbol}{subtotal.toLocaleString('en-IN')}
                </span>
              </div>

              {promoDiscount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--accent)' }}>
                  <span>VIP Atelier Discount (10%)</span>
                  <span style={{ fontFamily: 'var(--font-mono)' }}>
                    -{BRAND.currency.symbol}{discountAmount.toLocaleString('en-IN')}
                  </span>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Express Insured Courier</span>
                <span style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                  {shippingCost === 0 ? 'FREE' : `${BRAND.currency.symbol}${shippingCost}`}
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingTop: '0.65rem',
                  marginTop: '0.2rem',
                  borderTop: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  fontWeight: 700,
                  fontSize: '1.05rem'
                }}
              >
                <span>ESTIMATED TOTAL</span>
                <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>
                  {BRAND.currency.symbol}{total.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={() => {
                onClose();
                onProceedToCheckout();
              }}
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.95rem', fontSize: '0.92rem' }}
            >
              <span>PROCEED TO DEMO CHECKOUT</span>
              <ArrowRight size={17} />
            </button>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                fontSize: '0.68rem',
                color: 'var(--text-muted)',
                marginTop: '0.75rem',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <ShieldCheck size={13} color="var(--accent)" />
              <span>TEST TRANSACTIONS ONLY • NO CHARGE INCURRED</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

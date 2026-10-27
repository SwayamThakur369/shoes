import React, { useState } from 'react';
import { X, Check, ShieldCheck, ArrowRight, ArrowLeft, Truck, CreditCard, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BRAND } from '../data/brand';

export default function CheckoutModal({
  isOpen,
  onClose,
  cartItems,
  onClearCart,
  onOrderComplete
}) {
  const [step, setStep] = useState(1); // 1: Address, 2: Shipping, 3: Payment, 4: Success
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderId, setOrderId] = useState('');

  // Form states
  const [formData, setFormData] = useState({
    fullName: 'Arjun Mehta',
    email: 'arjun.mehta@example.com',
    phone: '+91 98765 43210',
    address: 'B-402, Horizon Sky Towers, Lower Parel',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400013',
    shippingMethod: 'express',
    paymentMethod: 'upi',
    upiId: 'arjun@okaxis'
  });

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shippingFee = formData.shippingMethod === 'priority' ? 799 : (subtotal >= 15000 ? 0 : 499);
  const total = subtotal + shippingFee;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Simulate Payment Processing
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        const generatedId = `CK-${Math.floor(100000 + Math.random() * 900000)}`;
        setOrderId(generatedId);
        setStep(4);
        onClearCart();
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }, 1400);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 260,
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(14px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'fadeIn 0.25s ease'
      }}
    >
      <div
        className="glass-panel"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '820px',
          maxHeight: '92vh',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-medium)',
          boxShadow: 'var(--shadow-lg)'
        }}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'var(--bg-card)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <span className="badge badge-accent">DEMO ATELIER CHECKOUT</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
              NO CHARGES INCURRED
            </span>
          </div>

          <button
            onClick={onClose}
            className="btn-outline"
            style={{ width: '36px', height: '36px', padding: 0, borderRadius: '50%' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Step Indicator (Steps 1 to 3) */}
        {step < 4 && (
          <div
            style={{
              display: 'flex',
              borderBottom: '1px solid var(--border-subtle)',
              background: 'var(--bg-main)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem'
            }}
          >
            {[
              { num: 1, label: '01. SHIPPING ADDRESS' },
              { num: 2, label: '02. DISPATCH SPEED' },
              { num: 3, label: '03. DEMO PAYMENT' }
            ].map((s) => (
              <div
                key={s.num}
                style={{
                  flex: 1,
                  padding: '0.85rem 1rem',
                  textAlign: 'center',
                  borderBottom: step === s.num ? '2px solid var(--accent)' : '2px solid transparent',
                  color: step === s.num ? 'var(--accent)' : step > s.num ? 'var(--text-primary)' : 'var(--text-muted)',
                  fontWeight: step === s.num ? 700 : 400
                }}
              >
                {step > s.num ? `✓ ${s.label}` : s.label}
              </div>
            ))}
          </div>
        )}

        {/* Modal Body */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.75rem' }}>
          {isProcessing ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  border: '3px solid var(--border-subtle)',
                  borderTopColor: 'var(--accent)',
                  borderRadius: '50%',
                  margin: '0 auto 1.5rem auto',
                  animation: 'spin 0.8s linear infinite'
                }}
              />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>AUTHORIZING TEST ENCRYPTION...</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Simulating secure D2C order generation</p>
              <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
            </div>
          ) : step === 1 ? (
            /* STEP 1: ADDRESS */
            <form onSubmit={handleNext} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>ENTER DISPATCH DESTINATION</h4>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '0.75rem', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', color: '#fff', borderRadius: '4px' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '0.75rem', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', color: '#fff', borderRadius: '4px' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                    DELIVERY ADDRESS
                  </label>
                  <input
                    type="text"
                    required
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '0.75rem', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', color: '#fff', borderRadius: '4px' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '0.75rem', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', color: '#fff', borderRadius: '4px' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                    CITY
                  </label>
                  <input
                    type="text"
                    required
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '0.75rem', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', color: '#fff', borderRadius: '4px' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                    STATE
                  </label>
                  <input
                    type="text"
                    required
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '0.75rem', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', color: '#fff', borderRadius: '4px' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                    PIN CODE
                  </label>
                  <input
                    type="text"
                    required
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '0.75rem', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', color: '#fff', borderRadius: '4px' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                <button type="submit" className="btn btn-primary" style={{ padding: '0.85rem 2rem' }}>
                  <span>CONTINUE TO SHIPPING</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          ) : step === 2 ? (
            /* STEP 2: SHIPPING SPEED */
            <form onSubmit={handleNext} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>SELECT LOGISTICS METHOD</h4>

              <div
                onClick={() => setFormData({ ...formData, shippingMethod: 'express' })}
                className="glass-card"
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  border: formData.shippingMethod === 'express' ? '2px solid var(--accent)' : '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <Truck size={24} color="var(--accent)" />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Standard Insured Courier (2–4 Days)</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Tracked surface dispatch with shockproof packaging</div>
                  </div>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                  {subtotal >= 15000 ? 'FREE' : `${BRAND.currency.symbol}499`}
                </div>
              </div>

              <div
                onClick={() => setFormData({ ...formData, shippingMethod: 'priority' })}
                className="glass-card"
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  border: formData.shippingMethod === 'priority' ? '2px solid var(--accent)' : '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <Sparkles size={24} color="var(--accent)" />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Priority Flight Express (Next Business Day)</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Air cargo dispatch directly from Culture Kicks Vadodara hub</div>
                  </div>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                  {BRAND.currency.symbol}799
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                <button type="button" onClick={() => setStep(1)} className="btn btn-secondary">
                  <ArrowLeft size={16} />
                  <span>BACK</span>
                </button>
                <button type="submit" className="btn btn-primary" style={{ padding: '0.85rem 2rem' }}>
                  <span>CONTINUE TO PAYMENT</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          ) : step === 3 ? (
            /* STEP 3: DEMO PAYMENT */
            <form onSubmit={handleNext} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', margin: 0 }}>DEMO PAYMENT GATEWAY</h4>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: 'var(--accent)', fontWeight: 800 }}>
                  TOTAL: {BRAND.currency.symbol}{total.toLocaleString('en-IN')}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                {[
                  { id: 'upi', label: 'UPI / QR', icon: '⚡' },
                  { id: 'card', label: 'CREDIT / DEBIT', icon: '💳' },
                  { id: 'cod', label: 'DEMO COD', icon: '📦' }
                ].map((m) => (
                  <div
                    key={m.id}
                    onClick={() => setFormData({ ...formData, paymentMethod: m.id })}
                    className="glass-card"
                    style={{
                      padding: '1rem',
                      textAlign: 'center',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      border: formData.paymentMethod === m.id ? '2px solid var(--accent)' : '1px solid var(--border-subtle)'
                    }}
                  >
                    <div style={{ fontSize: '1.4rem', marginBottom: '0.35rem' }}>{m.icon}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700 }}>{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="glass-card" style={{ padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.65rem' }}>
                  {formData.paymentMethod === 'upi' ? 'Simulate Instant UPI Verification:' : 'Demo Card Sandbox Active:'}
                </div>
                <input
                  type="text"
                  value={formData.paymentMethod === 'upi' ? formData.upiId : '4242 •••• •••• 4242 (Demo Visa)'}
                  readOnly
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'var(--bg-main)',
                    border: '1px solid var(--border-medium)',
                    color: 'var(--accent)',
                    fontFamily: 'var(--font-mono)',
                    borderRadius: '4px'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                <button type="button" onClick={() => setStep(2)} className="btn btn-secondary">
                  <ArrowLeft size={16} />
                  <span>BACK</span>
                </button>
                <button type="submit" className="btn btn-primary" style={{ padding: '0.85rem 2rem' }}>
                  <ShieldCheck size={16} />
                  <span>CONFIRM DEMO ORDER</span>
                </button>
              </div>
            </form>
          ) : (
            /* STEP 4: ORDER SUCCESS */
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <div
                style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  color: '#000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto'
                }}
              >
                <Check size={36} strokeWidth={3} />
              </div>

              <span className="badge badge-accent" style={{ marginBottom: '0.75rem' }}>
                ORDER CONFIRMED • DEMO ONLY
              </span>

              <h2 style={{ fontSize: '1.9rem', marginBottom: '0.4rem' }}>THANK YOU, {formData.fullName.toUpperCase()}</h2>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--accent)', marginBottom: '1.25rem' }}>
                ORDER DISPATCH ID: #{orderId}
              </div>

              <p style={{ maxWidth: '480px', margin: '0 auto 1.75rem auto', color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                Your demo order has been queued for simulated dispatch. Confirmation dispatch notes were simulated to <strong style={{ color: '#fff' }}>{formData.email}</strong>.
              </p>

              {/* Order Highlights Box */}
              <div
                className="glass-card"
                style={{
                  maxWidth: '520px',
                  margin: '0 auto 2rem auto',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'left'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>DESTINATION:</span>
                  <span>{formData.city}, {formData.state} ({formData.pincode})</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>METHOD:</span>
                  <span>{formData.shippingMethod === 'priority' ? 'Air Flight Priority' : 'Standard Express'}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontWeight: 700 }}>
                  <span>PAID (MOCK):</span>
                  <span>{BRAND.currency.symbol}{total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOrderComplete();
                }}
                className="btn btn-primary"
                style={{ padding: '0.9rem 2.5rem' }}
              >
                RETURN TO STOREFRONT
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

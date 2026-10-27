import React, { useState } from 'react';
import ThreeHeroShoe from '../components/ThreeHeroShoe';
import { PRODUCTS } from '../data/products';
import { BRAND } from '../data/brand';
import { ShoppingBag, Eye, Layers, Sparkles, Sliders } from 'lucide-react';

export default function AtelierPage({ onSelectProduct, onAddToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [activeColorway, setActiveColorway] = useState(selectedProduct.colorways[0]);

  const handleSwitchShoe = (shoe) => {
    setSelectedProduct(shoe);
    setActiveColorway(shoe.colorways[0]);
  };

  return (
    <div style={{ minHeight: '90vh', padding: '2rem 0 5rem 0' }}>
      <div className="container">
        {/* Title */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
          <span className="badge badge-accent" style={{ marginBottom: '0.65rem' }}>
            INTERACTIVE 360° SNEAKER INSPECTOR
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', marginBottom: '0.65rem' }}>
            3D SNEAKER <span style={{ color: 'var(--accent)' }}>LAB</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
            Inspect deadstock silhouettes in 360 degrees, examine panel stitching, switch colorways, and view technical details before visiting our Vadodara store.
          </p>
        </div>

        {/* Silhouette Picker Pill Carousel */}
        <div
          style={{
            display: 'flex',
            overflowX: 'auto',
            gap: '0.75rem',
            paddingBottom: '1rem',
            marginBottom: '2rem',
            justifyContent: 'center'
          }}
        >
          {PRODUCTS.slice(0, 5).map((shoe) => (
            <button
              key={shoe.id}
              onClick={() => handleSwitchShoe(shoe)}
              className="badge"
              style={{
                cursor: 'pointer',
                padding: '0.6rem 1.25rem',
                background: selectedProduct.id === shoe.id ? 'var(--accent)' : 'var(--bg-card)',
                color: selectedProduct.id === shoe.id ? '#000' : 'var(--text-primary)',
                border: '1px solid',
                borderColor: selectedProduct.id === shoe.id ? 'var(--accent)' : 'var(--border-subtle)',
                fontSize: '0.85rem',
                flexShrink: 0
              }}
            >
              {shoe.name}
            </button>
          ))}
        </div>

        {/* Central 3D Canvas Viewport */}
        <div
          className="glass-card"
          style={{
            position: 'relative',
            height: '620px',
            width: '100%',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            background: 'radial-gradient(circle at 50% 50%, #15181f 0%, #0c0e12 100%)',
            border: '1px solid var(--border-medium)',
            boxShadow: 'var(--shadow-lg)',
            marginBottom: '2rem'
          }}
        >
          <ThreeHeroShoe
            activeColorway={activeColorway}
            onSelectColorway={setActiveColorway}
            colorways={selectedProduct.colorways}
          />
        </div>

        {/* Bottom Quick Action Card */}
        <div
          className="glass-panel"
          style={{
            padding: '1.75rem 2rem',
            borderRadius: 'var(--radius-lg)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            border: '1px solid var(--border-medium)'
          }}
        >
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent)', marginBottom: '0.2rem' }}>
              CURRENT INSPECTION
            </div>
            <h3 style={{ fontSize: '1.4rem', margin: 0 }}>{selectedProduct.name}</h3>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Colorway: {activeColorway.name} • {selectedProduct.category}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent)' }}>
                {BRAND.currency.symbol}{selectedProduct.price.toLocaleString('en-IN')}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Ready for dispatch</div>
            </div>

            <button
              onClick={() => onSelectProduct(selectedProduct)}
              className="btn btn-secondary"
            >
              <Eye size={16} />
              <span>FULL DETAILS</span>
            </button>

            <button
              onClick={() => onAddToCart(selectedProduct, activeColorway, selectedProduct.sizes[1] || 8, 1)}
              className="btn btn-primary"
            >
              <ShoppingBag size={16} />
              <span>ADD TO CART</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

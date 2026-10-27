import React, { useState } from 'react';
import { Star, ShieldCheck, Truck, RefreshCw, Ruler, Heart, ShoppingBag, ArrowLeft, Check, Sparkles, Eye } from 'lucide-react';
import ThreeHeroShoe from '../components/ThreeHeroShoe';
import { BRAND } from '../data/brand';
import { PRODUCTS } from '../data/products';

export default function ProductDetailPage({
  product,
  onBack,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
  onOpenSizeGuide,
  onSelectProduct
}) {
  const [selectedColorway, setSelectedColorway] = useState(product.colorways[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizesInStock[0] || product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [viewMode, setViewMode] = useState('photo'); // 'photo' | '3d'
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [addedNotice, setAddedNotice] = useState(false);

  // Review submission state
  const [reviewsList, setReviewsList] = useState(product.reviews || []);
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewComment, setNewReviewComment] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const images = selectedColorway.gallery || product.colorways[0].gallery || [selectedColorway.image];
  const activeImage = images[activeImageIdx] || selectedColorway.image;

  const handleAddToCart = () => {
    onAddToCart(product, selectedColorway, selectedSize, quantity);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2500);
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    if (newReviewAuthor.trim() && newReviewComment.trim()) {
      const newRev = {
        author: newReviewAuthor,
        verified: true,
        rating: newReviewRating,
        date: "Just now",
        title: "Verified Athlete Review",
        comment: newReviewComment
      };
      setReviewsList([newRev, ...reviewsList]);
      setNewReviewAuthor('');
      setNewReviewComment('');
      setReviewSubmitted(true);
      setTimeout(() => setReviewSubmitted(false), 3000);
    }
  };

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div style={{ padding: '2.5rem 0 6rem 0' }}>
      <div className="container">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="btn-outline"
          style={{ marginBottom: '2rem', padding: '0.5rem 1rem', fontSize: '0.8rem', gap: '0.4rem' }}
        >
          <ArrowLeft size={15} />
          <span>BACK TO CATALOG</span>
        </button>

        {/* Main Product Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '3.5rem',
            marginBottom: '5rem'
          }}
          className="pdp-grid"
        >
          {/* Left Column: Visuals (3D Viewport or Photo Gallery) */}
          <div>
            {/* View Mode Toggle Bar (Photo vs 3D) */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              <button
                onClick={() => setViewMode('photo')}
                className="badge"
                style={{
                  cursor: 'pointer',
                  padding: '0.55rem 1rem',
                  background: viewMode === 'photo' ? 'var(--accent)' : 'var(--bg-card)',
                  color: viewMode === 'photo' ? '#000' : 'var(--text-secondary)',
                  border: '1px solid',
                  borderColor: viewMode === 'photo' ? 'var(--accent)' : 'var(--border-subtle)',
                  fontSize: '0.8rem'
                }}
              >
                STUDIO PHOTOGRAPHY
              </button>

              <button
                onClick={() => setViewMode('3d')}
                className="badge"
                style={{
                  cursor: 'pointer',
                  padding: '0.55rem 1rem',
                  background: viewMode === '3d' ? 'var(--accent)' : 'var(--bg-card)',
                  color: viewMode === '3d' ? '#000' : 'var(--text-secondary)',
                  border: '1px solid',
                  borderColor: viewMode === '3d' ? 'var(--accent)' : 'var(--border-subtle)',
                  fontSize: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                <Sparkles size={13} />
                <span>INTERACTIVE 3D VIEWER</span>
              </button>
            </div>

            {/* Viewport Frame */}
            <div
              className="glass-card"
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                aspectRatio: '1/1',
                background: 'radial-gradient(circle at 50% 50%, #171a22 0%, #0d0f14 100%)',
                border: '1px solid var(--border-medium)',
                marginBottom: '1rem'
              }}
            >
              {viewMode === '3d' ? (
                <ThreeHeroShoe
                  activeColorway={selectedColorway}
                  onSelectColorway={setSelectedColorway}
                  colorways={product.colorways}
                />
              ) : (
                <img
                  src={activeImage}
                  alt={product.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              )}
            </div>

            {/* Thumbnails if in photo mode */}
            {viewMode === 'photo' && images.length > 1 && (
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    style={{
                      width: '76px',
                      height: '76px',
                      borderRadius: 'var(--radius-sm)',
                      overflow: 'hidden',
                      border: activeImageIdx === idx ? '2px solid var(--accent)' : '1px solid var(--border-subtle)',
                      cursor: 'pointer',
                      padding: 0,
                      background: '#1a1d24'
                    }}
                  >
                    <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Buying Details & Specs */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.65rem' }}>
              <span className="badge badge-accent">{product.category}</span>
              {product.isNew && <span className="badge badge-dark">NEW RELEASE</span>}
            </div>

            <h1 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.7rem)', lineHeight: 1.15, marginBottom: '0.4rem' }}>
              {product.name}
            </h1>

            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              {product.tagline}
            </p>

            {/* Price & Rating Row */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '2rem', fontWeight: 800, color: 'var(--accent)' }}>
                {BRAND.currency.symbol}{product.price.toLocaleString('en-IN')}
              </div>
              {product.originalPrice > product.price && (
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                  {BRAND.currency.symbol}{product.originalPrice.toLocaleString('en-IN')}
                </div>
              )}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginLeft: 'auto', fontSize: '0.85rem' }}>
                <Star size={15} fill="#ffb703" color="#ffb703" />
                <span style={{ fontWeight: 700 }}>{product.rating}</span>
                <span style={{ color: 'var(--text-muted)' }}>({reviewsList.length} reviews)</span>
              </div>
            </div>

            {/* Description */}
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '2rem' }}>
              {product.description}
            </p>

            {/* Colorway Selection */}
            <div style={{ marginBottom: '1.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '0.65rem', fontFamily: 'var(--font-mono)' }}>
                <span style={{ color: 'var(--text-muted)' }}>COLORWAY:</span>
                <span style={{ color: 'var(--accent)', fontWeight: 700 }}>{selectedColorway.name}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.65rem' }}>
                {product.colorways.map((cw) => (
                  <button
                    key={cw.code}
                    onClick={() => {
                      setSelectedColorway(cw);
                      setActiveImageIdx(0);
                    }}
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${cw.hex} 50%, ${cw.accentHex} 50%)`,
                      border: selectedColorway.code === cw.code ? '2px solid var(--accent)' : '2px solid rgba(255,255,255,0.2)',
                      boxShadow: selectedColorway.code === cw.code ? '0 0 14px var(--accent-glow)' : 'none',
                      cursor: 'pointer',
                      transform: selectedColorway.code === cw.code ? 'scale(1.12)' : 'scale(1)',
                      transition: 'all 0.2s ease'
                    }}
                    title={cw.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  SELECT UK SIZE:
                </span>
                <button
                  onClick={onOpenSizeGuide}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--accent)',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <Ruler size={13} />
                  <span>SIZE GUIDE</span>
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem' }}>
                {product.sizes.map((sz) => {
                  const inStock = product.sizesInStock.includes(sz);
                  const isSelected = selectedSize === sz;
                  return (
                    <button
                      key={sz}
                      disabled={!inStock}
                      onClick={() => setSelectedSize(sz)}
                      style={{
                        padding: '0.75rem 0',
                        background: isSelected ? 'var(--accent)' : inStock ? 'var(--bg-card)' : 'rgba(0,0,0,0.3)',
                        color: isSelected ? '#000' : inStock ? 'var(--text-primary)' : 'var(--text-muted)',
                        border: '1px solid',
                        borderColor: isSelected ? 'var(--accent)' : 'var(--border-subtle)',
                        borderRadius: 'var(--radius-sm)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        cursor: inStock ? 'pointer' : 'not-allowed',
                        textDecoration: inStock ? 'none' : 'line-through',
                        opacity: inStock ? 1 : 0.4
                      }}
                      title={inStock ? `UK ${sz}` : `UK ${sz} Out of Stock`}
                    >
                      {sz}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity & CTA Actions */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '2rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-sm)',
                  height: '50px'
                }}
              >
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{ background: 'none', border: 'none', color: '#fff', width: '38px', height: '100%', cursor: 'pointer', fontSize: '1.1rem' }}
                >
                  -
                </button>
                <span style={{ fontFamily: 'var(--font-mono)', width: '30px', textAlign: 'center', fontWeight: 700 }}>
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  style={{ background: 'none', border: 'none', color: '#fff', width: '38px', height: '100%', cursor: 'pointer', fontSize: '1.1rem' }}
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="btn btn-primary"
                style={{ flex: 1, height: '50px', fontSize: '0.95rem' }}
              >
                <ShoppingBag size={18} />
                <span>ADD TO CART • {BRAND.currency.symbol}{(product.price * quantity).toLocaleString('en-IN')}</span>
              </button>

              <button
                onClick={() => onToggleWishlist(product)}
                className="btn-outline"
                style={{
                  width: '50px',
                  height: '50px',
                  padding: 0,
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: isWishlisted ? 'var(--accent)' : 'transparent',
                  color: isWishlisted ? '#000' : 'var(--text-primary)'
                }}
                title={isWishlisted ? "Remove from Saved" : "Save for Later"}
              >
                <Heart size={20} fill={isWishlisted ? '#000' : 'none'} />
              </button>
            </div>

            {/* Added to Cart Feedback Toast */}
            {addedNotice && (
              <div
                className="badge badge-accent animate-slide-down"
                style={{ width: '100%', padding: '0.75rem', justifyContent: 'center', marginBottom: '1.5rem', fontSize: '0.85rem' }}
              >
                <Check size={16} />
                <span>ADDED {quantity} PAIR(S) (SIZE UK {selectedSize}) TO YOUR CART</span>
              </div>
            )}

            {/* Delivery & Assurance Guarantees */}
            <div
              className="glass-card"
              style={{
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                fontSize: '0.82rem',
                color: 'var(--text-secondary)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Truck size={16} color="var(--accent)" />
                <span>Free express courier on orders over ₹15,000. Tracked dispatch in 24 hours.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <RefreshCw size={16} color="var(--accent)" />
                <span>14-day hassle-free size exchange guarantee in original box.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <ShieldCheck size={16} color="var(--accent)" />
                <span>Serialized authenticity badge accompanying every pair.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Blueprint Specifications Table */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ borderBottom: '1px solid var(--border-medium)', paddingBottom: '1rem', marginBottom: '2rem' }}>
            <span className="badge badge-accent" style={{ marginBottom: '0.5rem' }}>LAB DATA</span>
            <h2 style={{ fontSize: '2rem' }}>TECHNICAL SPECIFICATIONS</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {product.specs.map((sp, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)', marginBottom: '0.35rem' }}>
                  {sp.label}
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {sp.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Reviews Section with Form */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ borderBottom: '1px solid var(--border-medium)', paddingBottom: '1rem', marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span className="badge badge-accent" style={{ marginBottom: '0.5rem' }}>ATHLETE LOGS</span>
              <h2 style={{ fontSize: '2rem' }}>VERIFIED REVIEWS ({reviewsList.length})</h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '3rem' }} className="reviews-grid">
            {/* Reviews List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {reviewsList.map((rev, i) => (
                <div key={i} className="glass-card" style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <div style={{ display: 'flex', gap: '0.2rem', color: '#ffb703' }}>
                      {[...Array(rev.rating)].map((_, r) => (
                        <Star key={r} size={14} fill="#ffb703" />
                      ))}
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      {rev.date}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.35rem' }}>{rev.title}</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                    "{rev.comment}"
                  </p>
                  <div style={{ fontSize: '0.78rem', color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>
                    ✓ {rev.author} (Verified Runner)
                  </div>
                </div>
              ))}
            </div>

            {/* Submit Review Form */}
            <div className="glass-panel" style={{ padding: '1.75rem', borderRadius: 'var(--radius-lg)', height: 'fit-content' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>WRITE AN ATELIER REVIEW</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                Share your biomechanical experience with other runners.
              </p>

              {reviewSubmitted ? (
                <div style={{ padding: '1rem', background: 'rgba(212, 255, 0, 0.1)', border: '1px solid var(--accent)', color: 'var(--accent)', borderRadius: '4px', textAlign: 'center', fontSize: '0.85rem' }}>
                  ✓ Your review has been logged and published.
                </div>
              ) : (
                <form onSubmit={handleAddReview} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                      RATING
                    </label>
                    <select
                      value={newReviewRating}
                      onChange={(e) => setNewReviewRating(Number(e.target.value))}
                      style={{ width: '100%', padding: '0.65rem', background: 'var(--bg-main)', border: '1px solid var(--border-subtle)', color: '#fff', borderRadius: '4px' }}
                    >
                      <option value={5}>5 Stars - Elite Responsiveness</option>
                      <option value={4}>4 Stars - Great Performance</option>
                      <option value={3}>3 Stars - Average</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Siddharth M."
                      value={newReviewAuthor}
                      onChange={(e) => setNewReviewAuthor(e.target.value)}
                      style={{ width: '100%', padding: '0.65rem', background: 'var(--bg-main)', border: '1px solid var(--border-subtle)', color: '#fff', borderRadius: '4px' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                      EXPERIENCE FEEDBACK
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Discuss comfort, drop feel, upper lock..."
                      value={newReviewComment}
                      onChange={(e) => setNewReviewComment(e.target.value)}
                      style={{ width: '100%', padding: '0.65rem', background: 'var(--bg-main)', border: '1px solid var(--border-subtle)', color: '#fff', borderRadius: '4px', resize: 'vertical' }}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ padding: '0.75rem' }}>
                    SUBMIT REVIEW
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Related Silhouettes */}
        <div>
          <div style={{ borderBottom: '1px solid var(--border-medium)', paddingBottom: '1rem', marginBottom: '2rem' }}>
            <span className="badge badge-accent" style={{ marginBottom: '0.5rem' }}>COMPATIBLE SILHOUETTES</span>
            <h2 style={{ fontSize: '2rem' }}>MORE FROM THE ATELIER</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {relatedProducts.map((rel) => (
              <div
                key={rel.id}
                onClick={() => {
                  onSelectProduct(rel);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="glass-card"
                style={{ padding: '1rem', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}
              >
                <img
                  src={rel.colorways[0].image}
                  alt={rel.name}
                  style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', marginBottom: '0.75rem' }}
                />
                <h4 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>{rel.name}</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>{rel.category}</span>
                  <span style={{ color: 'var(--accent)', fontWeight: 700 }}>{BRAND.currency.symbol}{rel.price.toLocaleString('en-IN')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pdp-grid {
            grid-template-columns: 1fr !important;
          }
          .reviews-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

import React, { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal, RotateCcw, Search, Sparkles } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, CATEGORIES, ALL_SIZES, PRICE_RANGES } from '../data/products';
import { BRAND } from '../data/brand';

export default function ShopPage({
  onSelectProduct,
  onAddToCart,
  wishlistIds,
  onToggleWishlist
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(PRICE_RANGES[0]);
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filter & sort logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category filter
      if (selectedCategory !== 'All' && p.category !== selectedCategory) {
        return false;
      }
      // Size filter
      if (selectedSize && !p.sizesInStock.includes(selectedSize)) {
        return false;
      }
      // Price filter
      if (p.price < selectedPriceRange.min || p.price > selectedPriceRange.max) {
        return false;
      }
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matches =
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q);
        if (!matches) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return 0; // featured default
    });
  }, [selectedCategory, selectedSize, selectedPriceRange, sortBy, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSelectedSize(null);
    setSelectedPriceRange(PRICE_RANGES[0]);
    setSortBy('featured');
    setSearchQuery('');
  };

  const hasActiveFilters =
    selectedCategory !== 'All' ||
    selectedSize !== null ||
    selectedPriceRange.min !== 0 ||
    searchQuery !== '';

  return (
    <div style={{ padding: '3rem 0 6rem 0', minHeight: '80vh' }}>
      <div className="container">
        {/* Header Breadcrumb & Title */}
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="badge badge-accent" style={{ marginBottom: '0.65rem' }}>
            ARCHIVE CATALOG // 8 SILHOUETTES
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', marginBottom: '0.5rem' }}>
            ALL <span style={{ color: 'var(--accent)' }}>FOOTWEAR</span> RELEASES
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '640px' }}>
            Filter by biomechanical category, UK sizing, or price threshold. Every pair is crafted with dynamic kinetic dampening.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div
          className="glass-card"
          style={{
            padding: '1.25rem',
            borderRadius: 'var(--radius-lg)',
            marginBottom: '2.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}
        >
          {/* Quick Search */}
          <div style={{ position: 'relative', width: '280px' }}>
            <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Search catalog..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.85rem 0.65rem 2.4rem',
                background: 'var(--bg-main)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem'
              }}
            />
          </div>

          {/* Sort By Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>SORT:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                background: 'var(--bg-main)',
                border: '1px solid var(--border-medium)',
                color: 'var(--text-primary)',
                padding: '0.65rem 1rem',
                borderRadius: 'var(--radius-sm)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                cursor: 'pointer'
              }}
            >
              <option value="featured">Featured / Curated</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">New Releases First</option>
            </select>

            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="btn-outline"
                style={{ padding: '0.65rem 1rem', fontSize: '0.75rem', gap: '0.4rem' }}
                title="Reset all filters"
              >
                <RotateCcw size={13} />
                <span>RESET</span>
              </button>
            )}
          </div>
        </div>

        {/* Main Content Layout: Sidebar Filters + Products Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '260px 1fr',
            gap: '2.5rem',
            alignItems: 'start'
          }}
          className="shop-layout"
        >
          {/* Left Filter Sidebar */}
          <aside
            className="glass-panel"
            style={{
              padding: '1.5rem',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            {/* Category Filter */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent)', fontWeight: 700, marginBottom: '0.85rem' }}>
                CATEGORIES
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      padding: '0.4rem 0.65rem',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-body)',
                      color: selectedCategory === cat ? 'var(--accent)' : 'var(--text-secondary)',
                      backgroundColor: selectedCategory === cat ? 'rgba(212, 255, 0, 0.08)' : 'transparent',
                      fontWeight: selectedCategory === cat ? 700 : 400,
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Filter */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent)', fontWeight: 700, marginBottom: '0.85rem' }}>
                SIZE (UK)
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.4rem' }}>
                {ALL_SIZES.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(selectedSize === sz ? null : sz)}
                    style={{
                      padding: '0.55rem',
                      background: selectedSize === sz ? 'var(--accent)' : 'var(--bg-main)',
                      color: selectedSize === sz ? '#000' : 'var(--text-primary)',
                      border: '1px solid',
                      borderColor: selectedSize === sz ? 'var(--accent)' : 'var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent)', fontWeight: 700, marginBottom: '0.85rem' }}>
                PRICE SPECS
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {PRICE_RANGES.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => setSelectedPriceRange(range)}
                    style={{
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      padding: '0.4rem 0.65rem',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      fontSize: '0.82rem',
                      fontFamily: 'var(--font-mono)',
                      color: selectedPriceRange.label === range.label ? 'var(--accent)' : 'var(--text-secondary)',
                      backgroundColor: selectedPriceRange.label === range.label ? 'rgba(212, 255, 0, 0.08)' : 'transparent',
                      fontWeight: selectedPriceRange.label === range.label ? 700 : 400
                    }}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Right Product Grid */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
              <span>SHOWING {filteredProducts.length} SILHOUETTES</span>
              <span>FILTER: {selectedCategory.toUpperCase()}</span>
            </div>

            {filteredProducts.length === 0 ? (
              <div
                className="glass-card"
                style={{
                  padding: '4rem 2rem',
                  textAlign: 'center',
                  borderRadius: 'var(--radius-lg)'
                }}
              >
                <div style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 700 }}>NO PAIRS FOUND</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  No silhouettes match your chosen combination of filters and sizing.
                </p>
                <button onClick={handleResetFilters} className="btn btn-primary">
                  CLEAR ALL FILTERS
                </button>
              </div>
            ) : (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '1.75rem'
                }}
              >
                {filteredProducts.map((product) => (
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
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .shop-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

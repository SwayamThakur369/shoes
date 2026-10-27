import React, { useState } from 'react';
import { X, Ruler, CheckCircle2 } from 'lucide-react';

export default function SizeGuideModal({ isOpen, onClose }) {
  const [unit, setUnit] = useState('UK');

  if (!isOpen) return null;

  const sizeTable = [
    { uk: 6, us: 7, eu: 40, cm: 24.5 },
    { uk: 7, us: 8, eu: 41, cm: 25.5 },
    { uk: 8, us: 9, eu: 42.5, cm: 26.5 },
    { uk: 9, us: 10, eu: 44, cm: 27.5 },
    { uk: 10, us: 11, eu: 45, cm: 28.5 },
    { uk: 11, us: 12, eu: 46, cm: 29.5 },
    { uk: 12, us: 13, eu: 47.5, cm: 30.5 }
  ];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 300,
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
    >
      <div onClick={onClose} style={{ position: 'absolute', inset: 0 }} />

      <div
        className="glass-panel"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '560px',
          borderRadius: 'var(--radius-lg)',
          padding: '1.75rem',
          zIndex: 1,
          border: '1px solid var(--border-medium)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Ruler size={20} color="var(--accent)" />
            <h3 style={{ fontSize: '1.2rem', margin: 0 }}>KINETIC FIT & SIZE MATRIX</h3>
          </div>
          <button onClick={onClose} className="btn-outline" style={{ width: '36px', height: '36px', padding: 0, borderRadius: '50%' }}>
            <X size={18} />
          </button>
        </div>

        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
          Culture Kicks curated footwear features an authentic athletic fit. If you are between sizes or prefer a relaxed toe box, we recommend sizing up a half size.
        </p>

        {/* Matrix Table */}
        <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.82rem' }}>
            <thead>
              <tr style={{ background: 'var(--bg-card)', borderBottom: '1px solid var(--border-medium)' }}>
                <th style={{ padding: '0.65rem', color: 'var(--accent)' }}>UK</th>
                <th style={{ padding: '0.65rem' }}>US (M)</th>
                <th style={{ padding: '0.65rem' }}>EU</th>
                <th style={{ padding: '0.65rem' }}>FOOT LENGTH (CM)</th>
              </tr>
            </thead>
            <tbody>
              {sizeTable.map((row) => (
                <tr key={row.uk} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <td style={{ padding: '0.65rem', fontWeight: 700, color: 'var(--text-primary)' }}>{row.uk}</td>
                  <td style={{ padding: '0.65rem', color: 'var(--text-secondary)' }}>{row.us}</td>
                  <td style={{ padding: '0.65rem', color: 'var(--text-secondary)' }}>{row.eu}</td>
                  <td style={{ padding: '0.65rem', color: 'var(--accent)' }}>{row.cm} cm</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Measuring Tip */}
        <div
          style={{
            background: 'var(--bg-card)',
            padding: '1rem',
            borderRadius: 'var(--radius-md)',
            borderLeft: '3px solid var(--accent)',
            fontSize: '0.8rem',
            color: 'var(--text-secondary)',
            display: 'flex',
            gap: '0.75rem'
          }}
        >
          <CheckCircle2 size={18} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <strong style={{ color: 'var(--text-primary)' }}>How to Measure:</strong> Place a piece of paper on a hard floor against a wall. Stand upright on the paper with your heel against the wall. Mark the longest point of your toe and measure with a ruler in centimeters.
          </div>
        </div>
      </div>
    </div>
  );
}

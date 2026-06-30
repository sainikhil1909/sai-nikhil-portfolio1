/**
 * Preloader.jsx
 * ─────────────
 * Fullscreen red (#ff2a2a) preloader with:
 *   1. Dark transparent "Leeshark." as background layer
 *   2. White foreground text that fills upward via clip-path (1.6 s)
 *   3. Short pause → logo fades + scales down
 *   4. Entire screen slides upward off-screen (shutter reveal)
 *
 * Props
 *   onDone  () => void   called when the exit animation finishes
 */

import React, { useEffect, useRef } from 'react';

/* ─── Inline styles ──────────────────────────────────────────── */
const styles = {
  overlay: {
    position:        'fixed',
    inset:           0,
    background:      '#ff2a2a',
    zIndex:          100000,
    display:         'flex',
    alignItems:      'center',
    justifyContent:  'center',
    transition:      'transform 0.9s cubic-bezier(0.76, 0, 0.24, 1)',
  },
  overlayOut: {
    transform: 'translateY(-100%)',
  },
  textWrap: {
    position: 'relative',
    overflow: 'hidden',
  },
  textBase: {
    fontFamily:    "'Inter', sans-serif",
    fontSize:      'clamp(60px, 12vw, 120px)',
    fontWeight:    900,
    letterSpacing: '-0.04em',
    color:         'rgba(0, 0, 0, 0.15)',
    lineHeight:    1,
    userSelect:    'none',
  },
  textFg: {
    position:    'absolute',
    inset:       0,
    fontFamily:  "'Inter', sans-serif",
    fontSize:    'clamp(60px, 12vw, 120px)',
    fontWeight:  900,
    letterSpacing: '-0.04em',
    color:       '#fff',
    lineHeight:  1,
    clipPath:    'inset(100% 0 0 0)',
    transition:  'clip-path 1.6s cubic-bezier(0.76, 0, 0.24, 1)',
  },
  textFgFilled: {
    clipPath: 'inset(0% 0 0 0)',
  },
  textFgOut: {
    opacity:    0,
    transform:  'scale(0.95)',
    transition: 'clip-path 1.6s cubic-bezier(0.76, 0, 0.24, 1), opacity 0.4s ease, transform 0.4s ease',
  },
};

export default function Preloader({ onDone }) {
  const overlayRef = useRef(null);
  const fgRef      = useRef(null);

  useEffect(() => {
    /* Step 1 — start the fill animation (300 ms after mount) */
    const t1 = setTimeout(() => {
      if (fgRef.current) {
        Object.assign(fgRef.current.style, styles.textFgFilled);
      }
    }, 300);

    /* Step 2 — fade + scale the logo out */
    const t2 = setTimeout(() => {
      if (fgRef.current) {
        fgRef.current.style.opacity   = '0';
        fgRef.current.style.transform = 'scale(0.95)';
        fgRef.current.style.transition =
          'clip-path 1.6s cubic-bezier(0.76, 0, 0.24, 1), opacity 0.4s ease, transform 0.4s ease';
      }
    }, 2200);

    /* Step 3 — shutter slide-up */
    const t3 = setTimeout(() => {
      if (overlayRef.current) {
        Object.assign(overlayRef.current.style, styles.overlayOut);
      }
    }, 2600);

    /* Step 4 — unmount */
    const t4 = setTimeout(() => onDone(), 3500);

    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [onDone]);

  return (
    <div ref={overlayRef} style={styles.overlay}>
      <div style={styles.textWrap}>
        {/* Background dark layer */}
        <span style={styles.textBase}>SAI NIKHIL.</span>

        {/* Foreground white fill */}
        <span ref={fgRef} style={styles.textFg}>
          SAI NIKHIL.
        </span>
      </div>
    </div>
  );
}

/**
 * Tome plugin: Kyan custom theme.
 * Injects Geist fonts, Kyan design system color overrides,
 * sidebar logo, heading font fix, and Card→LinkCard bridge CSS.
 */
export default {
  name: "kyan-theme",
  hooks: {
    headTags() {
      return [
        // Geist fonts
        `<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin />`,
        `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-sans/style.css" />`,
        `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-mono/style.css" />`,

        // Custom CSS
        `<style>
          body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
          ::-webkit-scrollbar { width: 6px; height: 6px; }
          ::-webkit-scrollbar-track { background: transparent; }
          ::-webkit-scrollbar-thumb { background: oklch(0.28 0.037 260); border-radius: 3px; }

          /* ── Shared: fonts ── */
          .tome-grain {
            --font-heading: "Geist", -apple-system, BlinkMacSystemFont, sans-serif !important;
            --font-body: "Geist", -apple-system, BlinkMacSystemFont, sans-serif !important;
            --font-code: "Geist Mono", "SF Mono", "Fira Code", monospace !important;
          }

          /* ── Dark Mode ── */
          .dark .tome-grain {
            --bg: oklch(0.1449 0.0195 283.7) !important;
            --sf: oklch(0.1138 0.0268 253.7) !important;
            --sfH: oklch(0.18 0.025 258) !important;
            --bd: oklch(0.2800 0.0369 259.974) !important;
            --tx: oklch(0.9762 0.0162 221.07) !important;
            --tx2: oklch(0.83 0.02 272) !important;
            --txM: oklch(0.5275 0.0205 253.45) !important;
            --ac: oklch(0.5484 0.2459 274.43) !important;
            --acD: oklch(0.5484 0.2459 274.43 / 0.10) !important;
            --acT: oklch(0.6335 0.2324 299.6) !important;
            --cdBg: oklch(0.10 0.02 253) !important;
            --cdTx: oklch(0.83 0.02 272) !important;
            --sbBg: oklch(0.10 0.015 283) !important;
            --hdBg: oklch(0.1449 0.0195 283.7 / 0.90) !important;
          }

          /* ── Light Mode ── */
          html:not(.dark) .tome-grain {
            --bg: oklch(0.97 0.01 286.15) !important;
            --sf: oklch(1.0 0 0) !important;
            --sfH: oklch(0.93 0.01 286) !important;
            --bd: oklch(0.8699 0.0163 253.91) !important;
            --tx: oklch(0.30 0.05 282.41) !important;
            --tx2: oklch(0.5275 0.0205 253.45) !important;
            --txM: oklch(0.65 0.02 253) !important;
            --ac: oklch(0.6387 0.1928 269.67) !important;
            --acD: oklch(0.6387 0.1928 269.67 / 0.08) !important;
            --acT: oklch(0.5334 0.2535 268.38) !important;
            --cdBg: oklch(0.93 0.01 253) !important;
            --cdTx: oklch(0.30 0.05 282.41) !important;
            --sbBg: oklch(0.95 0.01 286.14) !important;
            --hdBg: oklch(0.97 0.01 286.15 / 0.90) !important;
          }

          /* Sidebar logo: replace text with logo image */
          aside > a[href="/"] > span {
            visibility: hidden !important;
            font-size: 0 !important;
            width: 0 !important;
            overflow: hidden !important;
          }
          aside > a[href="/"] {
            position: relative !important;
            min-height: 24px !important;
            padding-left: 24px !important;
          }
          aside > a[href="/"]::before {
            content: "" !important;
            display: block !important;
            width: 80px !important;
            height: 24px !important;
            background: url("/logo.png") no-repeat left center / contain !important;
            visibility: visible !important;
            margin-left: 2px !important;
          }
          html:not(.dark) aside > a[href="/"]::before {
            filter: brightness(0) !important;
          }

          /* Override heading font */
          h1, h2, h3, h4, h5, h6 {
            font-family: "Geist", -apple-system, BlinkMacSystemFont, sans-serif !important;
            font-style: normal !important;
          }

          /* Card → LinkCard visual bridge */
          [style*="margin-bottom: 20px"][style*="display: grid"] > a {
            display: flex !important;
          }
          [style*="margin-bottom: 20px"][style*="display: grid"] > a > div[style*="box-shadow"] {
            flex: 1 !important;
            background: var(--sf) !important;
            box-shadow: none !important;
            padding: 16px 20px !important;
            transition: border-color 0.15s, background 0.15s !important;
          }
          [style*="margin-bottom: 20px"][style*="display: grid"] > a > div[style*="box-shadow"]:hover {
            background: var(--sfH) !important;
            box-shadow: none !important;
          }
        </style>`,
      ];
    },
  },
};

# Kyan Docs

Documentation for [Kyan](https://kyan.blue) — a decentralized derivatives exchange for crypto options and perpetual futures.

**Live site:** [kyan.tome.center](https://kyan.tome.center)

## Structure

This site follows the [Diataxis](https://diataxis.fr/) documentation framework across 38 pages:

| Section | Purpose | Path | Pages |
|---------|---------|------|-------|
| **Tutorials** | Step-by-step learning paths for newcomers | `pages/tutorials/` | 4 |
| **How-to Guides** | Task-oriented recipes for practitioners | `pages/guides/` | 4 |
| **Reference** | API specs, WebSocket channels, MCP, signatures | `pages/reference/` | 17 |
| **Concepts** | Platform architecture and trading mechanics | `pages/concepts/` | 9 |

### Reference breakdown

- **API:** Overview, REST API, Order Types, Error Codes, API Keys, EIP-712 Signatures
- **WebSocket:** Authentication, Commands, Connection, Session Recovery, Market Data, Orderbook, Account
- **Platform:** MCP Server, Smart Contracts, WebSocket overview

## Development

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## Build

```bash
pnpm build      # Static output in out/
```

## Deploy

```bash
# Tome Cloud
pnpm build && pnpm deploy

# Vercel (static)
pnpm build && npx vercel deploy ./out --prod
```

## Theme

The site uses a custom Kyan theme (`kyan-theme-plugin.mjs`) that injects:

- **Fonts:** Geist Sans (headings + body) and Geist Mono (code)
- **Colors:** Kyan design system tokens for both dark and light modes
- **Logo:** Kyan brandmark in the sidebar header
- **Card styling:** SVG icon cards with LinkCard-matching hover behavior

## Security

Pre-commit hook via [sanitize](https://github.com/vxcozy/sanitize) runs 12-point secret detection on every commit.

Built with [Tome](https://tome.center).

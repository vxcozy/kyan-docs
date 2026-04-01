# Kyan Docs

Documentation for [Kyan](https://kyan.blue) — a decentralized derivatives exchange for crypto options and perpetual futures.

**Live site:** [kyan.tome.center](https://kyan.tome.center)

## Structure

This site follows the [Diataxis](https://diataxis.fr/) documentation framework:

| Section | Purpose | Path |
|---------|---------|------|
| **Tutorials** | Step-by-step learning paths for newcomers | `pages/tutorials/` |
| **How-to Guides** | Task-oriented recipes for practitioners | `pages/guides/` |
| **Reference** | Technical specs, API endpoints, error codes | `pages/reference/` |
| **Concepts** | Explanations of how things work under the hood | `pages/concepts/` |

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
pnpm deploy     # Deploys to kyan.tome.center via Tome Cloud
```

## Theme

The site uses a custom Kyan theme (`kyan-theme-plugin.mjs`) that injects:

- **Fonts:** Geist Sans (headings + body) and Geist Mono (code)
- **Colors:** Kyan design system tokens for both dark and light modes
- **Logo:** Kyan brandmark in the sidebar header
- **Card styling:** SVG icon cards with LinkCard-matching hover behavior

Built with [Tome](https://tome.center).

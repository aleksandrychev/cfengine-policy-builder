# CFEngine Policy Builder

Desktop application for building CFEngine policy.

**Stack:** Electron + React + TypeScript + [MUI](https://mui.com/), themed with
the shared Mission Portal theme. Bundled with
[electron-vite](https://electron-vite.org/) and packaged with
[electron-builder](https://www.electron.build/).

## Requirements

- Node.js 22.12+
- npm 10+

## Getting started

```sh
npm install
npm run dev # launches Electron with renderer HMR + main/preload hot reload
```

## Project structure

electron-vite builds three targets from `src/`:

```
src/
├── main/      # Electron main process: window creation, ipcMain handlers
├── preload/   # contextBridge exposing `window.api`
└── renderer/  # React app
    └── src/theme/ # Mission Portal MUI theme, vendored
```

## Scripts

| Script                  | What it does                                               |
| ----------------------- | ---------------------------------------------------------- |
| `npm run dev`           | Dev app with hot reload                                    |
| `npm run build`         | Type-check then build main/preload/renderer bundles        |
| `npm start`             | Preview the production build                               |
| `npm run build:mac`     | Build + package a macOS app (`dmg`, `zip`)                 |
| `npm run build:win`     | Build + package a Windows installer (`nsis`)               |
| `npm run build:linux`   | Build + package Linux artifacts (`AppImage`, `deb`, `rpm`) |
| `npm run lint`          | ESLint (flat config)                                       |
| `npm run format`        | Prettier write                                             |
| `npm run typecheck`     | `tsc --noEmit` for node + web projects                     |
| `npm test`              | Vitest unit tests (jsdom)                                  |


## Theme

The MUI theme is **copied verbatim** from Mission Portal
(`mission-portal/public/scripts/src/themes/`) into
[src/renderer/src/theme/](src/renderer/src/theme/). Those files are excluded
from lint/format so they stay in sync with upstream.

**@todo:** replace the copy with a single shared source of truth -@northern.tech/theme package consumed by both Mission Portal and this app. See [theme/README.md](src/renderer/src/theme/README.md).

## CI

GitHub Actions ([.github/workflows/ci.yml](.github/workflows/ci.yml)) runs
lint + format check, type check, and unit tests on every push and PR.

## Release
@todo write section how app will be relesed

# Monorepo Boilerplate

A modern TypeScript monorepo starter using **pnpm workspaces** for dependency management, featuring a NestJS API, a Vite + React web app, and shared internal packages (UI components, utilities, and ESLint config). Designed to be minimal, fast, and extensible.

## ✨ Features
- Fast installs & isolated builds via **pnpm**
- **TypeScript** across all packages & apps
- **NestJS** backend (`apps/api`)
- **Vite + React 19** frontend (`apps/web`)
- **Shared UI library** with shadcn-inspired components (`packages/ui`)
- **Shared utilities** package (`packages/utils`)
- **Centralized ESLint config** (`packages/eslint-config`)
- **Tailwind CSS v4** + Radix + lucide icons in UI + Web
- Unified scripts for dev / build / lint / test
- Opinionated formatting with Prettier
- Ready for future publishing / versioning strategies

## 🗂 Repository Layout
```
.
├── apps/
│   ├── api/            # NestJS backend service
│   └── web/            # React + Vite frontend
├── packages/
│   ├── ui/             # Reusable UI components (Tailwind, Radix, shadcn style)
│   ├── utils/          # Internal utility helpers
│   └── eslint-config/  # Centralized ESLint presets
├── package.json        # Root scripts & workspace config
├── pnpm-workspace.yaml # Workspace definition
├── tsconfig.base.json  # Shared TS config base
└── README.md
```

## 🧱 Tech Stack
| Area        | Tech |
|-------------|------|
| Package Manager | pnpm workspaces |
| Backend     | NestJS 11, RxJS |
| Frontend    | React 19, Vite, Tailwind CSS 4 |
| UI Library  | Radix UI primitives, shadcn-style components |
| Language    | TypeScript 5 |
| Linting     | ESLint 9 + custom config |
| Formatting  | Prettier |

## 🚀 Getting Started
### 1. Install Dependencies
```bash
pnpm install
```

### 2. Start Development (API + Web concurrently)
```bash
pnpm dev
```
- API: http://localhost:3000 (NestJS)
- Web: http://localhost:5173 (default Vite port)

### 3. Run Individually
```bash
pnpm dev:api
pnpm dev:web
```

### 4. Build Everything
```bash
pnpm build
```

### 5. Lint All Packages
```bash
pnpm lint
```

### 6. Test (recursive)
```bash
pnpm test
```
_(Currently only backend has tests; add more in other packages as needed.)_

## 📦 Workspace Scripts (Root)
| Script | Purpose |
|--------|---------|
| `pnpm dev` | Run API + Web concurrently |
| `pnpm dev:api` | Start NestJS backend in watch mode |
| `pnpm dev:web` | Start Vite dev server |
| `pnpm build` | Run `build` in all workspaces (topo order) |
| `pnpm lint` | Run lint across all workspaces |
| `pnpm test` | Run tests across all workspaces |

## 🧩 Shared Packages
### `packages/ui`
Component library with Tailwind + Radix. To add a new component using shadcn tooling:
```bash
pnpm --filter ui run components:add
```
Export components via `packages/ui/src/index.ts` and consume from apps with:
```ts
import { Button } from 'ui'
```

### `packages/utils`
Place pure, framework-agnostic helpers here and export through `src/index.ts`.

### `packages/eslint-config`
Centralized ESLint presets (base / node / react, etc.). Extend them in each project via flat config imports.

## 🛠 Adding a New Package
1. Create folder under `packages/my-new-pkg`
2. Add a `package.json` with `name`, `version`, `type` (module) and any scripts
3. Add `tsconfig.json` extending `../../tsconfig.base.json`
4. Add source under `src/`
5. Export public API in `src/index.ts`
6. (Optional) Reference from another workspace:
```bash
pnpm add my-new-pkg --filter web
```

## 🏗 Adding a New App
1. Create `apps/new-app`
2. Add its `package.json` (include scripts: dev/build/lint)
3. Add tsconfig extending base
4. Reference shared packages as needed (`pnpm add ui --filter new-app`)
5. Add start script alias at root if convenience needed

## 🔗 Cross-Package Development Tips
- Use `pnpm --filter <name> <command>` to scope actions
- `pnpm why <dep>` to see dependency provenance
- Leverage TypeScript path mapping via `tsconfig.base.json` if added later

## 🧪 Testing Strategy
Currently only the API uses Jest (unit + e2e). To add testing to other workspaces:
- Install Jest (or Vitest for frontend) locally to that package
- Add `test` script
- The root `pnpm test` will pick it up automatically

Example (Vitest in `web`):
```bash
pnpm add -D vitest @testing-library/react @testing-library/jest-dom --filter web
```

## 🧹 Linting & Formatting
- ESLint config lives in `packages/eslint-config`
- Each workspace has its own `eslint.config.ts` referencing shared rules
- Run `pnpm lint` to check/fix
- Prettier is configured; integrate with your editor for on-save formatting

## 📦 (Optional) Publishing Strategy
Currently packages are private. To publish selected internal packages later:
1. Remove `"private": true` from the package
2. Add proper license & README to that package folder
3. Use a versioning strategy (manual bumping or a tool like Changesets)
4. Run `pnpm publish -r --filter <package>` (after building)

## 🛡 Environment Variables
- API typical env would go in `.env` (not yet included). Add `@nestjs/config` if needed.
- Web env variables: create `.env.local` with `VITE_*` prefixed vars to expose to client

## 🐞 Troubleshooting
| Issue | Fix |
|-------|-----|
| Dependency not found after add | Ensure you ran `pnpm install` at root, not inside subfolder |
| Types not updating | Restart TS server or run `pnpm install` to refresh symlinks |
| Port conflicts | Change Vite port via `vite --port 5174` or Nest via env vars |
| Build order problems | Ensure dependent package has a `build` script and proper `exports` if using Node features |

## 🚧 Future Improvements (Ideas)
- Add CI (GitHub Actions): lint, test, build
- Add Changesets for versioning/publishing
- Add Dockerfiles for API & Web
- Add Vitest + React Testing Library to web
- Add Storybook for `ui`
- Add path aliases and tsconfig project references (composite builds)
- Setup commit linting + husky hooks

## 🤝 Contribution Workflow
1. Create a feature branch
2. Implement changes & add/update tests
3. Run: `pnpm lint && pnpm test && pnpm build`
4. Open PR with summary + screenshots (if UI)

## 🧾 License
Currently UNLICENSED (internal use). Add a proper open-source license if distributing.

## 📬 Contact / Meta
Add maintainer info or links here.

---
Happy hacking! 🚀

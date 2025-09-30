# Monorepo Boilerplate

A modern TypeScript monorepo starter using **pnpm workspaces** for dependency management, featuring a NestJS API, a Vite + React web app, and shared internal packages (UI components, utilities, and ESLint config). Designed to be minimal, fast, and extensible.

## ✨ Features

- Fast installs & isolated builds via **pnpm**
- **TypeScript** across all packages & apps
- **NestJS** backend (`apps/api`)
- **Vite + React 19** frontend (`apps/web`)
- **Shared UI library** with shadcn components (`packages/ui`)
- **Shared utilities** package (`packages/utils`)
- **Centralized ESLint config** (`packages/eslint-config`)
- **Tailwind CSS v4** + Radix + lucide icons in UI + Web

## 🗂 Repository Layout

```
.
├── apps/
│   ├── api/            # NestJS backend service
│   └── web/            # React + Vite frontend
├── packages/
│   ├── ui/             # Reusable shadcn UI
│   ├── utils/          # Internal utility helpers
│   └── eslint-config/  # Centralized ESLint presets
├── package.json        # Root scripts & workspace config
├── pnpm-workspace.yaml # Workspace definition
├── tsconfig.base.json  # Shared TS config base
└── README.md
```

## 🧱 Tech Stack

| Area            | Tech                                   |
| --------------- | -------------------------------------- |
| Package Manager | pnpm workspaces                        |
| Backend         | NestJS 11, RxJS                        |
| Frontend        | React 19, Vite, Tailwind CSS 4         |
| UI Library      | Radix UI primitives, shadcn components |
| Language        | TypeScript 5                           |
| Linting         | ESLint 9 + custom config               |
| Formatting      | Prettier                               |

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

## 🧩 Shared Packages

### `packages/ui`

Component library with Tailwind + Radix. To add a new component using shadcn tooling:

```bash
pnpm --filter ui run components:add
```

Export components via `packages/ui/src/index.ts` and consume from apps with:

```ts
import { Button } from '@packages/ui';
```

### `packages/utils`

Place pure, framework-agnostic helpers here and export through `src/index.ts`.

### `packages/eslint-config`

Centralized ESLint presets (base / node / react, etc.). Extend them in each project via flat config imports.

## 🔗 Cross-Package Development Tips

- Use `pnpm --filter <name> <command>` to scope actions
- `pnpm why <dep>` to see dependency provenance
- Leverage TypeScript path mapping via `tsconfig.base.json` if added later

## 🧹 Linting & Formatting

- ESLint config lives in `packages/eslint-config`
- Each workspace has its own `eslint.config.ts` referencing shared rules
- Run `pnpm lint` to check/fix
- Prettier is configured; integrate with your editor for on-save formatting

## 🛡 Environment Variables

- API typical env would go in `.env` (not yet included). Add `@nestjs/config` if needed.
- Web env variables: create `.env.local` with `VITE_*` prefixed vars to expose to client

## 🐞 Troubleshooting

| Issue                          | Fix                                                                                       |
| ------------------------------ | ----------------------------------------------------------------------------------------- |
| Dependency not found after add | Ensure you ran `pnpm install` at root, not inside subfolder                               |
| Types not updating             | Restart TS server or run `pnpm install` to refresh symlinks                               |
| Port conflicts                 | Change Vite port via `vite --port 5174` or Nest via env vars                              |
| Build order problems           | Ensure dependent package has a `build` script and proper `exports` if using Node features |

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

# GraphQL + Vite Monorepo Boilerplate

A TypeScript-first workspace that bundles a NestJS GraphQL API, a Vite + React app, and shared packages for UI, utilities, and linting.

<p align="center">
	<a href="https://pnpm.io/workspaces"><img src="https://img.shields.io/badge/pnpm-workspaces-orange?style=flat-square" alt="pnpm workspaces" /></a>
	<a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript" alt="TypeScript" /></a>
	<a href="https://nestjs.com/"><img src="https://img.shields.io/badge/NestJS-GraphQL-red?style=flat-square&logo=nestjs" alt="NestJS" /></a>
	<a href="https://vite.dev/"><img src="https://img.shields.io/badge/Vite-React%2019-purple?style=flat-square&logo=vite" alt="Vite React" /></a>
</p>

## Why this repo

- **pnpm workspaces** for fast installs and isolated scripts
- **TypeScript everywhere** with a single `tsconfig.base.json`
- **API & Web apps** ready to ship (NestJS + Vite/React 19)
- **Shared packages** for UI (shadcn + Radix), utilities, and ESLint presets
- **Tailwind CSS v4** styling in both the UI library and web app

## Quick start

```bash
pnpm install
pnpm dev          # runs API + Web together

# or target a workspace
pnpm --filter api start:dev
pnpm --filter web dev
```

Common maintenance commands:

```bash
pnpm build        # build every workspace
pnpm lint         # run eslint via shared config
pnpm test         # execute package-level tests when present
```

## Working with workspaces

- `pnpm --filter <name> <command>` scopes execution to a single package or app.
- `pnpm run <command>` at the root executes that script in every workspace that defines it (`pnpm -r`).
- `pnpm list --depth -1 --filter <name>` shows dependencies for a specific workspace.
- Path aliases are centralised in `tsconfig.base.json`; individual packages extend it via their `tsconfig.json`.

### Layout at a glance

```
apps/
	api/   # NestJS GraphQL server
	web/   # React 19 + Vite client
packages/
	ui/            # Shadcn-based component library
	utils/         # Shared helpers
	eslint-config/ # Flat config presets
```

## UI component workflow

The UI package exposes a TypeScript automation script that handles shadcn installs and re-exports.

```bash
pnpm --filter ui run components:add button
```

- Runs `scripts/components-add.ts` through `tsx`.
- Installs the requested component from `shadcn` and regenerates `packages/ui/src/index.ts` exports.
- To rebuild exports without adding a component (e.g. after deleting files):

```bash
pnpm --filter ui run components:add -- --refresh
```

Consume UI components from any workspace via:

```ts
import { Button } from '@boilerplate/ui';
```

## Tips for day-to-day development

- Keep package-specific scripts local (e.g. `apps/web/package.json`) and wire orchestration scripts at the root.
- Use `pnpm install --filter <workspace>... <dep>` to add dependencies scoped to a package.
- Prefer TypeScript entry points for scripts; `tsx` is already available to run them without manual builds.
- Tailwind is configured for both the web app and UI package—reuse design tokens through shared CSS in `packages/ui/src/styles`.

## Next steps

Potential upgrades include GitHub Actions for CI, Changesets for publishing, Storybook for the UI library, and Vitest for richer test coverage. Contributions welcome!

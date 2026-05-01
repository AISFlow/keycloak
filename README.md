# AISFlow Keycloak

[![ci](https://github.com/AISFlow/keycloak/actions/workflows/ci.yml/badge.svg)](https://github.com/AISFlow/keycloak/actions/workflows/ci.yml)
[![GHCR](https://img.shields.io/badge/ghcr.io-aisflow%2Fkeycloak-1B2D5E?logo=docker)](https://github.com/AISFlow/keycloak/pkgs/container/keycloak)
[![Storybook](https://img.shields.io/badge/storybook-keycloak--aisflow.pages.dev-F97316)](https://keycloak-aisflow.pages.dev)

AISFlow's Keycloak distribution — a [Keycloakify](https://keycloakify.dev)-based

The repo ships two artifacts:

1. **Theme JAR** — `keycloak-theme-for-kc-all-other-versions.jar`
   attached to each [GitHub Release](https://github.com/AISFlow/keycloak/releases).
   Drop it into `/opt/keycloak/providers/` of any compatible Keycloak.
2. **Docker image** — `ghcr.io/aisflow/keycloak`, multi-arch
   (`linux/amd64` + `linux/arm64`), with the theme pre-baked and KC
   running with `start --optimized`.

## Quick start (Docker)

```bash
docker run --rm -p 8080:8080 \
  -e KC_BOOTSTRAP_ADMIN_USERNAME=admin \
  -e KC_BOOTSTRAP_ADMIN_PASSWORD=admin \
  ghcr.io/aisflow/keycloak:latest \
  start-dev
```

Then in the admin console (Realm settings → Themes) pick `aisflow`
for the Login + Email theme.

## Tag taxonomy

Each release publishes several tag flavours so you can pin precisely:

```
ghcr.io/aisflow/keycloak:1.0.1-kc26.6.1   ← fully pinned (recommended for prod)
ghcr.io/aisflow/keycloak:1.0.1-kc26       ← theme pinned, KC tracks 26.x
ghcr.io/aisflow/keycloak:kc26.6.1         ← KC pinned, theme = latest released
ghcr.io/aisflow/keycloak:1.0.1            ← theme pinned, KC = primary
ghcr.io/aisflow/keycloak:latest           ← both float (primary KC, default branch)
```

Currently primary Keycloak is `26.6.1`, with back-compat builds for
`25.0.6` and `24.0.5` (see [`.keycloak-versions`](.keycloak-versions)).

## Storybook preview

Every PR gets an automatic Cloudflare Pages preview at
`https://pr-<N>.keycloak-aisflow.pages.dev`. The `main` branch is
served at <https://keycloak-aisflow.pages.dev>.

## Development

```bash
pnpm install
pnpm dev                       # vite dev server with mocked KC context
pnpm run build-keycloak-theme  # produce dist_keycloak/keycloak-theme-*.jar
pnpm run check                 # biome lint + format + import sort
pnpm run build-storybook       # static storybook
pnpm run emails:preview        # local email preview server
```

Requirements: Node 24, pnpm 10, Java 21 (Temurin) for the jar build.

## Customising the theme

- Brand assets: `src/login/assets/img/auth-logo.svg`,
  `public/favicon.svg`, `public/aisflow-wordmark.svg`.
- Welcome / login copy (per language): `src/login/i18n.ts`.
- Korean message catalogue: `src/login/i18n.ko.ts`.
- Email templates (jsx-email): `src/email/templates/*.tsx`,
  `src/email/locales/<lang>/translation.json`.

> ⚠️ Many files under `src/login/components/` and `src/login/pages/`
> are owned by the upstream `@oussemasahbeni/keycloakify-login-shadcn`
> package and recreated on every `pnpm install` by
> `keycloakify sync-extensions`. **Before editing one, claim ownership:**
>
> ```bash
> npx keycloakify own --path "<path-relative-to-src>"
> ```
>
> See [`CLAUDE.md`](CLAUDE.md) for the full ownership model and other
> design notes.

## CI/CD overview

| Workflow              | Fires on                            | Outcome                                                                                                |
| --------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `ci.yml`              | push main, push tag `v*`, PR        | verify (Biome + tsc + jar) → Storybook preview gate → release on version bump → multi-arch docker push |
| `_docker-build.yml`   | reusable                            | per-(kc × arch) native build, manifest merge, `:latest` promoted last for GHCR sort ranking            |
| `docker-kc.yml`       | `.keycloak-versions` change on main | rebakes images for the new KC base using the latest released theme                                     |
| `update-keycloak.yml` | cron                                | opens a bot PR when upstream Keycloak ships a new stable release                                       |

The Storybook preview deploy is a hard gate — if the Cloudflare Pages
deploy fails, release / docker won't run. Catches "works locally,
breaks on CF" issues before publishing artifacts.

## Stack

Vite 8 · React 19 · Tailwind v4 · Keycloakify 11 · Biome 2.4 · pnpm 10

Korean glyphs use Noto Sans KR (single-file woff2 per weight, mirrored
from Google Fonts gstatic). Latin glyphs use Inter / Geist.

## Contributing

PRs welcome. The Storybook preview attached to each PR is the primary
review surface — open it, click through the pages your change touches,
and confirm both light and dark mode render cleanly. Biome enforces
formatting; run `pnpm run check` before pushing if your editor isn't
configured for it.

For a deeper architecture walkthrough (CI gating logic, ownership
model, font mirroring, branding decisions, gotchas), see
[`CLAUDE.md`](CLAUDE.md).

## License

MIT. The bundled keycloakify-shadcn extension is also MIT-licensed.
Keycloak itself is Apache 2.0.

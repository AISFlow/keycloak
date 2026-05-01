# AISFlow Keycloak Theme

Keycloakify-based login + email theme for **AISFlow** (Accounting
Information System Flow), positioned for both AIS and MIS contexts —
keep brand copy inclusive of management-information-systems use cases,
not just accounting.

Output is a Keycloak provider JAR plus a multi-arch Docker image
(`ghcr.io/aisflow/keycloak`) baking the theme into a Keycloak server.

## Stack

| Layer       | Choice                                                                     | Note                                                               |
| ----------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| Build       | Vite 8 + Keycloakify 11                                                    | `vite.config.ts` drives both login bundle + email theme post-build |
| UI          | React 19, Tailwind v4, shadcn (`@oussemasahbeni/keycloakify-login-shadcn`) | `@theme` block in `src/login/index.css`                            |
| i18n        | `keycloakify` builtin + `i18next` (emails)                                 | `src/login/i18n.ts` (UI), `src/email/i18n.ts` (email)              |
| Lint/format | **Biome 2.4** (replaced ESLint)                                            | `biome.json`; tabs, single quotes, no semicolons                   |
| Pkg mgr     | pnpm 10                                                                    | `pnpm-workspace.yaml` exists but no actual workspaces              |
| Theme name  | `aisflow`                                                                  | declared in `vite.config.ts`                                       |

## Commands

```bash
pnpm dev                       # vite dev server
pnpm run build-keycloak-theme  # tsc -b && vite build && keycloakify build
pnpm run check                 # biome check --write . (lint + format + import sort)
pnpm run lint                  # biome lint . (no writes)
pnpm run format                # biome format --write .
pnpm run build-storybook       # storybook static build
pnpm run emails:check          # validate email templates
pnpm run emails:preview        # local email preview server
```

## Repo layout

```
src/
├── login/                          # Keycloak login UI
│   ├── i18n.ts                     # custom translations (welcome msg etc.)
│   ├── i18n.ko.ts                  # full Korean message set
│   ├── index.css                   # Tailwind v4 + theme tokens (Biome-excluded)
│   ├── KcContext.ts, KcPage.tsx    # keycloakify entrypoints (managed)
│   ├── components/                 # mostly keycloakify-managed; Template.tsx has APP_NAME
│   ├── pages/                      # all individual flow pages (managed)
│   └── assets/
│       ├── img/auth-logo.svg       # AISFlow brand mark (owned)
│       └── fonts/
│           ├── inter/, geist/      # Latin fonts (managed)
│           └── notosanskr/         # Korean — single woff2 per weight from Google Fonts
├── email/                          # email theme (jsx-email)
│   ├── constants.ts                # primaryColor, companyLogo URL
│   ├── layout.tsx                  # shared header + Noto Sans KR CDN link
│   ├── locales/<lang>/             # 30+ translations
│   └── templates/                  # one .tsx per email type
├── main-kc.tsx, main.tsx, kc.gen.tsx  # entrypoints (kc.gen.tsx is auto-generated)
public/
├── favicon.svg                     # AISFlow mark, text-stripped for tiny sizes
└── aisflow-wordmark.svg            # mark + "AISFlow" text for email use
.github/
├── workflows/                      # ci.yml, _docker-build.yml, docker-kc.yml, update-keycloak.yml
└── actions/                        # setup-toolchain, docker-setup, keycloak-version
```

## Fonts

- **Noto Sans KR** is the default sans (defined in `--font-sans` /
  `--default-font-family` in `src/login/index.css`). Single woff2 per
  weight (400/500/700) at `src/login/assets/fonts/notosanskr/`.
- Sourced from Google Fonts gstatic via google-webfonts-helper —
  re-sync recipe in `src/login/assets/fonts/notosanskr/index.css`.
- **Inter** + **Geist** are kept for Latin coverage and live as
  keycloakify-managed assets in their own dirs.
- **Email** uses the `noto-sans-kr@0.1.1` jsdelivr CDN as a
  best-effort link (most email clients strip `<link>`); Apple SD
  Gothic Neo / Malgun Gothic system fonts are the real fallback.

## Keycloakify ownership model

This is the **#1 footgun**. Many files under `src/login/components/`,
`src/login/pages/`, `src/login/assets/img/`, `src/login/assets/fonts/`
are managed by `@oussemasahbeni/keycloakify-login-shadcn` (and a few
by `@keycloakify/login-ui-storybook`). They are recreated by the
`postinstall` script `keycloakify sync-extensions` on every
`pnpm install`.

**Before editing** any file with a `WARNING: Before modifying this
file, run …` header, claim ownership:

```bash
npx keycloakify own --path "<path-relative-to-src>"
```

Without that step, edits get reverted on the next install. Already-owned
files have a `claimed for ownership` header instead.

The mock files `src/login/mocks/{KcPageStory.tsx,getKcContextMock.ts}`
are gitignored and _only_ exist after `keycloakify sync-extensions`
runs — `setup-toolchain` invokes it explicitly to guarantee they're
present for `tsc -b`.

## CI/CD pipelines

Five workflows, all under `.github/workflows/`:

| Workflow              | Trigger                                                   | Purpose                                                                                                                                                                   |
| --------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ci.yml`              | push main, push tag v\*, PR to main (paths-ignore docs)   | verify (lint + tsc + jar) → storybook preview (CF Pages) → release → docker. Verify is **skipped on tag pushes** (downstream of already-verified main push).              |
| `_docker-build.yml`   | reusable                                                  | `discover` → `build` (kc × {amd64,arm64} on native runners) → `merge` (per-kc multi-arch manifest) → `promote-latest` (re-pushes `:latest` last so GHCR sorts it on top). |
| `docker-kc.yml`       | push main on `.keycloak-versions` change, manual dispatch | Re-bakes images when the KC base bumps; uses the _latest released_ theme jar.                                                                                             |
| `update-keycloak.yml` | cron `*/5 * * * *` (aggressive — candidate for reduction) | Polls upstream KC releases and opens a PR bumping `.keycloak-versions`.                                                                                                   |

Notable design points:

- **Storybook preview is a CI gate**: release/docker won't run unless
  the Cloudflare Pages deploy succeeded. Catches "builds locally but
  fails on CF" regressions before publishing artifacts.
- **PR Docker validation** is gated by `dorny/paths-filter` — only
  fires on Dockerfile / `.keycloak-versions` / build infra changes.
- **OCI image name lowercase**: `github.repository_owner` is `AISFlow`
  (uppercase) but OCI requires lowercase. `discover` job emits
  `image_name` output via `${OWNER,,}/keycloak`; downstream jobs
  reference `needs.discover.outputs.image_name`, never the raw owner.
- **`:latest` ranking**: pushed by a separate `promote-latest` job
  _after_ every `merge` finishes, so GHCR's "sort by recency" puts it
  on top of the package's tag list.
- **Native ARM runners** (`ubuntu-24.04-arm`) instead of QEMU —
  multi-arch builds are fast.
- **`type=cacheonly`** for PR builds — runs the full Dockerfile but
  doesn't export anything; just seeds the GHA cache.

### Required secrets (per repo)

- `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID` — Storybook preview
  deploys to `keycloak-aisflow.pages.dev`. Without them the build job
  still runs (sentinel value) but the deploy step is skipped with a
  warning notice.

## Code style

Biome enforces. Key choices in `biome.json`:

- Tabs, single quotes (incl. JSX), no semicolons, trailing comma none, LF.
- `useIgnoreFile: true` honours `.gitignore` (incl. `src/.gitignore`,
  which keycloakify maintains for managed files).
- **Excluded**: `src/kc.gen.tsx` (auto-generated), `src/login/index.css`
  (Tailwind v4 directives don't parse in Biome's CSS analyser),
  `src/login/assets/fonts/**/*.css`.
- **Rule overrides**: `noNonNullAssertion` off in `main-kc*.tsx` (React
  root pattern); `useExhaustiveDependencies`, `useOptionalChain`, a11y
  rules, `noDangerouslySetInnerHtml` off in keycloakify-managed dirs to
  prevent fights with sync-extensions.

Run `pnpm run check` to apply lint + format + import sort in one shot.

## Gotchas / non-obvious things

1. **Tailwind v4 directives crash Biome's CSS parser** (`@theme`,
   `@source`, `@apply`, `@custom-variant`). Affected files are excluded
   from Biome — don't try to make Biome lint them.
2. **`update-keycloak.yml` cron is `*/5 * * * *`** = 8,640 runs/month
   for a release source that updates roughly monthly. Should be reduced
   when there's bandwidth.
3. **`peer` warnings on install** are accumulating from sync-extensions
   downgrading some packages (e.g. `tailwind-merge` 3.x → 2.6.x). Worth
   a cleanup pass eventually.
4. **The `noto-sans-kr@0.1.1` npm package** referenced in the email CDN
   URL is intentionally old — used because it's tiny and stable. Don't
   replace with `@fontsource/noto-sans-kr` for emails: email clients
   can't bundle and the path resolution would break.
5. **Storybook race condition** (`EEXIST: …keycloakify-dev-resources/
…/jquery/dist`): mitigated with `UV_THREADPOOL_SIZE=1` + 3-attempt
   retry in `storybook-preview` job. If you see it locally, retry.
6. **Auth-logo SVG is owned but the warning header stays** — that's
   just the keycloakify CLI not stripping the comment after `own`. The
   ownership flag is real; sync-extensions won't overwrite.

# Astro + TinaCMS

> Demo: [https://astro-tina-cms-starter.vercel.app/](https://astro-tina-cms-starter.vercel.app/)

> TinaCMS website: <https://tina.io/>

## Testimonials

- Smashing Magazine (2023-09-18): [How Smashing Magazine Uses TinaCMS To Manage An Editorial Workflow](https://www.smashingmagazine.com/2023/09/smashing-magazine-tinacms-manage-editorial-workflow/)
- Cassidy Williams (2023-10-23) [Trying out TinaCMS](https://blog.cassidoo.co/post/trying-tinacms/)

> TODO: description

## Docs

- Official Astro docs for [TinaCMS](https://docs.astro.build/en/guides/cms/tina-cms/)
- Official TinaCMS docs for [Astro](https://tina.io/docs/frameworks/astro/)
- [Instructions on self-hosting TinaCMS](https://tina.io/docs/self-hosted/overview/)

## Core Setup Tasks

### Config

- confirm that it's possible to init tina without clientId / creating a new cloud project
- in `tina/config.ts`: change default location for Tina's content collection to `src/content`
- to fully utilize Tina with Astro, define an Astro content collection (for e.g. `posts`)

### Development

- regular `pnpm dev` && `pnpm build` (both are modified to init `tinacms <task>` before running Astro)
- add clientId and token from the Tina project to `.env` (see `.env.example`)

### Deployment

- add environment variables to deployment environment:
  - `TINA_CLIENT_ID`
  - `TINA_EDIT_TOKEN`
  
## TODO

- [ ] figure out how to use Astro's image components / preprocessing with Tina
  - Tina also has an [Image Field type](https://tina.io/docs/reference/types/image/) 
- [ ] figure out `i18n` support [Official docs](https://tina.io/guides/tinacms/internationalization/guide/)
- [ ] figure out `mdx` support [Official docs](https://tina.io/docs/editing/markdown/#providing-custom-components-for-mdx-documents)
- [ ] how to re-share types / schema modeling btw. Tina and Astro?
  - Tina schema is defined in `tina/config.ts`
  - Astro schema is defined in `src/content/config.ts`

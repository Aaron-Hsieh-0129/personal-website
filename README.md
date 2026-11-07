# Chin-Wei (Aaron) Hsieh Personal Website

# Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

The static site is generated in `dist/`.

## GitHub Pages Deployment

1. Create a GitHub repository for this directory.
2. Push the site to the `main` branch.
3. In GitHub, open repository settings and enable Pages with GitHub Actions as the source.
4. The included workflow at `.github/workflows/deploy.yml` builds and deploys the site.

For a project site, the workflow sets:

```bash
ASTRO_SITE=https://Aaron-Hsieh-0129.github.io
ASTRO_BASE=/personal-website
```

## Content Editing

Primary content is stored in typed data files:

- `src/data/profile.ts`
- `src/data/interests.ts`
- `src/data/projects.ts`
- `src/data/simulations.ts`
- `src/data/skills.ts`
- `src/data/cv.ts`

No downloadable CV PDF is published in the site. Keep private CV material outside `public/`.

## Adding Simulation Cases

Add new gallery entries in `src/data/simulations.ts`.

Each case needs:

- `id`: unique case identifier
- `title`: short display title
- `group`: one of the existing gallery groups
- `model`: model or workflow name
- `embedUrl`: stable online embed URL, preferably a YouTube embed URL
- `source`: `VVMex gallery`, `models-web`, or `YouTube`
- `note`: one-sentence caption

Use online media URLs instead of copying large local video files into the repo.

Tropical Band VVM cases are featured together on the homepage. The first tropical-band case also supplies the hero preview. The gallery derives category counts and search content from this data; each video has a direct YouTube link as a fallback.

## Design

The site uses a warm editorial palette, DM Sans and Instrument Serif, and actual simulation output. Fonts are served locally from `public/fonts/`; their open-source licenses are included alongside them. The first three simulation posters are also local assets, while the remaining gallery posters load from YouTube. Video players load only after a visitor presses Play.

The homepage experiment switcher stops playback when changing experiments. Mobile navigation supports keyboard access and Escape to close; navigation remains available without JavaScript. The CV includes section navigation and a print stylesheet. Reduced-motion preferences are respected throughout.

The existing Astro static build and GitHub Pages deployment workflow are retained. All internal links and local assets honor `ASTRO_BASE`.

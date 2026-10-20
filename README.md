# Pokédex – Front-end (Vue 3 + TypeScript)

A Pokédex web app built with **Vue 3**, **TypeScript** and **Vite**, using data from [PokéAPI v2](https://pokeapi.co/docs/v2).

## Features

- **Home (`/`)**: paginated grid of Pokémon (20 per page) with artwork, number and name. The page is kept in the URL (`/?page=3`), so the browser's back button returns to it.
- **Search**: type a name or number (e.g. `pikachu` or `25`) to open that Pokémon.
- **Pokémon page (`/pokemon/:name`)**: types, height, weight, base experience, abilities and base stats.
- Loading and error states, including a "not found" message for unknown names.

## Tech stack

| Tool | Purpose |
| --- | --- |
| [Vue 3](https://vuejs.org/) | UI framework (`<script setup>` single-file components) |
| [TypeScript](https://www.typescriptlang.org/) | Static typing |
| [Vite](https://vite.dev/) | Dev server and bundler |
| [Vue Router 4](https://router.vuejs.org/) | Routes for the home and Pokémon pages |
| [axios](https://axios-http.com/) | HTTP requests to PokéAPI |
| [vue-tsc](https://github.com/vuejs/language-tools) | Type-checking `.vue` files during the build |

## Prerequisites

- **Node.js** 20.19+ or 22.12+ (required by Vite 8)
- **npm** (comes with Node.js)

## Getting started

```bash
# install dependencies
npm install

# start the dev server with hot reload (http://localhost:5173)
npm run dev
```

## Available scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the Vite dev server with hot module replacement |
| `npm run build` | Type-checks with `vue-tsc`, then builds for production into `dist/` |
| `npm run preview` | Serves the production build locally to check it |

## Project structure

```
.
├── index.html            # HTML entry point
├── public/               # Static files served as-is (favicon, icons)
├── src/
│   ├── main.ts           # App bootstrap: creates the Vue app and installs the router
│   ├── App.vue           # Root component: header + <RouterView />
│   ├── router/           # Route definitions (home, pokemon/:name)
│   ├── services/         # axios client and PokéAPI calls (pokeapi.ts)
│   ├── types/            # TypeScript interfaces for API responses
│   ├── utils/            # Helpers: id from URL, artwork URL, name/number formatting
│   ├── views/            # Pages: HomeView, PokemonView
│   ├── components/       # One component per part of a page, configured via props
│   └── style.css         # Global styles and color tokens (light/dark)
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript project references
├── tsconfig.app.json     # TS config for app code (src/)
└── tsconfig.node.json    # TS config for tooling files (vite.config.ts)
```

### Components

| Component | Props | Used in |
| --- | --- | --- |
| `AppHeader` | `title` | App |
| `SearchBar` | `placeholder?` (emits `search`) | Home |
| `PokemonList` | `pokemons` | Home |
| `PokemonCard` | `id`, `name`, `image` | PokemonList |
| `PaginationControls` | `page`, `totalPages` (emits `change`) | Home |
| `PokemonHeader` | `id`, `name`, `image`, `types` | Pokémon |
| `TypeBadge` | `type` | PokemonHeader |
| `PokemonInfo` | `height`, `weight`, `baseExperience` | Pokémon |
| `PokemonAbilities` | `abilities` | Pokémon |
| `PokemonStats` | `stats` | Pokémon |
| `LoadingSpinner` | — | Both pages |
| `ErrorMessage` | `message` | Both pages |

`PokemonView` gets the Pokémon's name as a prop straight from the route (`props: true`).

## Recommended editor setup

[VS Code](https://code.visualstudio.com/) with the
[Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) extension.
The workspace already recommends it in `.vscode/extensions.json`.

## Further reading

- [Vue + TypeScript guide](https://vuejs.org/guide/typescript/overview.html)
- [`<script setup>` docs](https://vuejs.org/api/sfc-script-setup.html)
- [Vite guide](https://vite.dev/guide/)

# [fairdataihub.org](https://fairdataihub.org)

## Project setup

Make sure to install the dependencies.

```bash
mise trust # only needed once
mise install
pnpm install
```

### Compiles and hot-reloads for development

Start the development server on <http://localhost:3000>

```bash
pnpm dev
```

### Compiles and minifies for production

Use this step to build a local production version of the site. Use `start` to preview the local build.

```bash
pnpm build
pnpm start
```

## Documentation

We recommend to look at the [documentation](https://nextjs.org/docs/getting-started).

### Requirements

- Node.js >= 22.18.0
- [mise](https://mise.jdx.dev/)
- pnpm >= 10

### Directory Structure

- [`.github`](.github) — GitHub configuration including the CI workflow.<br>
- [`.husky`](.husky) — Husky configuration and hooks.<br>
- [`public`](./public) — Static assets such as robots.txt, images, and favicon.<br>
- [`src`](./src) — Application source code, including pages, components, styles.
- [`cypress`](./cypress) — End-to-end tests.

### Scripts

- `pnpm dev` — Starts the application in development mode at `http://localhost:3000`.
- `pnpm build` — Creates an optimized production build of your application.
- `pnpm start` — Starts the application in production mode.
- `pnpm type-check` — Validate code using TypeScript compiler.
- `pnpm lint` — Runs ESLint for all files in the `src` directory.
- `pnpm format` — Runs Prettier for all files in the `src` directory.
- `pnpm cypress:run` — Runs Cypress tests in headless mode.
- `pnpm cypress:open` — Opens Cypress in interactive mode.

### Path Mapping

TypeScript are pre-configured with custom path mappings. To import components or files, use the `@` prefix.

```tsx
import { Button } from '@/components/Button';

// Import images or other files from the public folder
import avatar from '@/public/avatar.png';
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more information.

Note: You will not need to do anything to the hosted site. Continuous Delivery has been setup with Vercel. All you need to do is push your commit and wait for it to deploy.

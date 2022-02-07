# [fairdataihub.org](https://fairdataihub.org)

## Project setup

Make sure to install the dependencies.

```bash
yarn install
```

### Compiles and hot-reloads for development

Start the development server on http://localhost:3000

```bash
yarn dev
```

### Compiles and minifies for production

Use this step to build a local production version of the site. Use `start` to preview the local build.

```bash
yarn build
yarn start
```

## Documentation

We recommend to look at the [documentation](https://nextjs.org/docs/getting-started).

### Requirements

- Node.js >= 12.22.0
- Yarn 1 (Classic)

### Directory Structure

- [`.github`](.github) — GitHub configuration including the CI workflow.<br>
- [`.husky`](.husky) — Husky configuration and hooks.<br>
- [`public`](./public) — Static assets such as robots.txt, images, and favicon.<br>
- [`src`](./src) — Application source code, including pages, components, styles.

### Scripts

- `yarn dev` — Starts the application in development mode at `http://localhost:3000`.
- `yarn build` — Creates an optimized production build of your application.
- `yarn start` — Starts the application in production mode.
- `yarn type-check` — Validate code using TypeScript compiler.
- `yarn lint` — Runs ESLint for all files in the `src` directory.
- `yarn format` — Runs Prettier for all files in the `src` directory.
- `yarn commit` — Run commitizen. Alternative to `git commit`.

### Path Mapping

TypeScript are pre-configured with custom path mappings. To import components or files, use the `@` prefix.

```tsx
import { Button } from '@/components/Button';

// To import images or other files from the public folder
import avatar from '@/public/avatar.png';
```

## Note

This branch is a work in progress. We are actively working on improving the website.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more information.

Note: You will not need to do anything to the hosted site. Continuous Delivery has been setup with Vercel. All you need to do is push your commit and wait for it to deploy.

A special thank you to Vercel for hosting this website.

<a href="https://vercel.com/?utm_source=fairdataihub&utm_campaign=oss" target="_blank">
  <img src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg"  width="auto"/>
</a>

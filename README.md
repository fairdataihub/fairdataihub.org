# [fairdataihub.org](https://fairdataihub.org)

[![Total alerts](https://img.shields.io/lgtm/alerts/g/fairdataihub/fairdataihub-website.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/fairdataihub/fairdataihub-website/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/fairdataihub/fairdataihub-website.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/fairdataihub/fairdataihub-website/context:javascript)
[![CodeFactor](https://www.codefactor.io/repository/github/fairdataihub/fairdataihub.org/badge)](https://www.codefactor.io/repository/github/fairdataihub/fairdataihub.org)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=fairdataihub_fairdataihub-website&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=fairdataihub_fairdataihub-website)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=fairdataihub_fairdataihub-website&metric=bugs)](https://sonarcloud.io/summary/new_code?id=fairdataihub_fairdataihub-website)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=fairdataihub_fairdataihub-website&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=fairdataihub_fairdataihub-website)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=fairdataihub_fairdataihub-website&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=fairdataihub_fairdataihub-website)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=fairdataihub_fairdataihub-website&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=fairdataihub_fairdataihub-website)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=fairdataihub_fairdataihub-website&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=fairdataihub_fairdataihub-website)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=fairdataihub_fairdataihub-website&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=fairdataihub_fairdataihub-website)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=fairdataihub_fairdataihub-website&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=fairdataihub_fairdataihub-website)
![Checkly Status](https://api.checklyhq.com/v1/badges/checks/831d3a70-086d-445f-bdf6-509e48ebc18b?style=flat&theme=default)
![Checkly Response Time](https://api.checklyhq.com/v1/badges/checks/831d3a70-086d-445f-bdf6-509e48ebc18b?style=flat&theme=default&responseTime=true)

![](https://api.checklyhq.com/v1/badges/checks/831d3a70-086d-445f-bdf6-509e48ebc18b?style=flat&theme=default)
![](https://api.checklyhq.com/v1/badges/checks/831d3a70-086d-445f-bdf6-509e48ebc18b?style=flat&theme=default&responseTime=true)

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

## Acknowledgements

A special thank you to Vercel for hosting this website.

<a href="https://vercel.com/?utm_source=fairdataihub&utm_campaign=oss" target="_blank">
  <img src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg"  width="auto"/>
</a>

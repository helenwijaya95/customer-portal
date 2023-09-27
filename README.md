This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install dependency and run the development server:

```bash
npm install
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project Details
- This project is built using Next.js appDir structure
- All pages require session authentication, so there's a loading time while navigating the page.
- Built on top of [Chakra UI](https://chakra-ui.com/).
- The main layout consists of Header, Content, and Footer. Header and Footer items are configurable.
- All pages reside under /app/ directory, with layout.js as the main wrapper.
- States are managed under /store/
- Disabled button are there as a placeholder for future improvement.
- All filtered data from https://reqres.in/api/users is shown as a dependant list on homepage.
- Portfolio and Claim data is generated from [Faker-js](https://www.npmjs.com/package/@faker-js/faker).

## Improvement Ideas
- Filter and sort table.
- Claim details can be served in an overlay modal
- Implement testing: using react-testing-library, Cypress
- Reusable page (dynamic routes) for each form step.

### Other Source:

Multi-step form inspired by:
https://claritydev.net/blog/build-a-multistep-form-with-react-hook-form
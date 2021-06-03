# nextjs-shopify-app

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md)

Boilerplate to create an embedded Shopify app made with Node, [Next.js](https://nextjs.org/), [Polaris](https://github.com/Shopify/polaris-react), and [App Bridge React](https://shopify.dev/tools/app-bridge/react-components).

Based on [bluebeel/nextjs-shopify](https://github.com/bluebeel/nextjs-shopify), uses only Next.js as a server, enabling Serverless deployments. Unlike [Shopify/shopify-app-node](https://github.com/Shopify/shopify-app-node) which requires use of a custom server with Koa router.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fsellalong%2Fnextjs-shopify-app&env=HOST,SHOPIFY_API_SECRET,SHOPIFY_API_KEY&envDescription=Your%20shopify%20API%20Key%20%26%20Secret%20and%20the%20public%20url%20of%20your%20vercel%20deployement%20or%20domain%20name%20of%20your%20app)

## Requirements

- If you don’t have one, [create a Shopify partner account](https://partners.shopify.com/signup).
- If you don’t have one, [create a Development store](https://help.shopify.com/en/partners/dashboard/development-stores#create-a-development-store) where you can install and test your app.
- In the Partner dashboard, [create a new app](https://help.shopify.com/en/api/tools/partner-dashboard/your-apps#create-a-new-app). You’ll need this app’s API credentials during the setup process.

## Usage

1. [Install the latest stable version of Node.js](https://developers.shopify.com/tutorials/build-a-shopify-app-with-node-and-react/set-up-your-app#install-the-latest-stable-version)
2. Install the [Shopify App CLI](https://shopify.dev/tools/cli/installation)
3. Install npm packages (run: `npm install`)
4. Run `shopify connect` and select `Node.js App`
5. Start your app with `shopify serve`. The CLI should automatically start serving the app with Ngrok, and whitelist the callback urls in the partners dashboard
6. Open the ngrok based auth link in your browser to start the oauth process with your shopify development shop

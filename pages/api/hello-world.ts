import { authenticateShopifyAPI } from "@bluebeela/nextjs-shopify-auth";

export default authenticateShopifyAPI(async function helloWorld(req, res) {
  res.json({ hello: "world" });
});

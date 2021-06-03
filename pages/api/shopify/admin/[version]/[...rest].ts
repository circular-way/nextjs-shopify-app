import { authenticateShopifyAPI } from "@bluebeela/nextjs-shopify-auth";

const REST_PATH_PREFIX = "/admin/api";

export default authenticateShopifyAPI(async function handler(req, res) {
  const { query, shopOrigin, shopifyToken } = req;

  if (!shopOrigin || !shopifyToken) {
    res.statusCode = 403;
    res.end("Unauthorized");
    return;
  }

  const search = new URL(`${process.env.HOST}${req.url}`).search;

  const url = `https://${shopOrigin}${REST_PATH_PREFIX}/${query.version}/${
    Array.isArray(query.rest) ? query.rest.join("/") : query.rest
  }.json?${search}`;

  const response = await fetch(url, {
    method: req.method,
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": shopifyToken,
    },
    redirect: "follow",

    body: req.body ? JSON.stringify(req.body) : undefined,
  });
  const data = await response.json();
  res.json(data);
});

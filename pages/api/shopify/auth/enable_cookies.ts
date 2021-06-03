import { NextApiRequest, NextApiResponse } from "next";

import shopify from "../../../../lib/shopify";

export default async function shopifyAuthEnableCookies(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { enableCookies } = shopify;

  await enableCookies(req, res);
}

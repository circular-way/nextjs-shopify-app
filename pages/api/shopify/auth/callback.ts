import { NextApiRequest, NextApiResponse } from "next";

import shopify from "../../../../lib/shopify";

export default async function shopifyAuthCallback(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { oAuthCallback } = shopify;

  await oAuthCallback(req, res);
}

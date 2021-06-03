import { NextApiRequest, NextApiResponse } from "next";

import shopify from "../../../../lib/shopify";

export default async function shopifyAuthInline(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { oAuthStart } = shopify;

  await oAuthStart(req, res);
}

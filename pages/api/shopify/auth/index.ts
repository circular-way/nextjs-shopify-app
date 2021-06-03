import { NextApiRequest, NextApiResponse } from "next";
import {
  hasCookieAccess,
  shouldPerformInlineOAuth,
  grantedStorageAccess,
} from "@bluebeela/nextjs-shopify-auth";

import shopify from "../../../../lib/shopify";

export default async function shopifyAuthIndex(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    enableCookiesRedirect,
    oAuthStart,
    topLevelOAuthRedirect,
    requestStorageAccess,
  } = shopify;

  if (!hasCookieAccess(req.cookies)) {
    await enableCookiesRedirect(req, res);
    return;
  }

  if (!grantedStorageAccess(req.cookies)) {
    await requestStorageAccess(req, res);
    return;
  }

  if (shouldPerformInlineOAuth(req.cookies)) {
    await oAuthStart(req, res);
    return;
  }

  await topLevelOAuthRedirect(req, res);
}

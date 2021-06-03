import { withRouter } from "next/router";
import { ClientRouter as AppBridgeClientRouter } from "@shopify/app-bridge-react";
import { History } from "@shopify/app-bridge-react/components/ClientRouter/router";

type ClientRouterProps = {
  router: History;
};
function ClientRouter(props: ClientRouterProps) {
  const { router } = props;
  return <AppBridgeClientRouter history={router} />;
}

export default withRouter(ClientRouter);

import React from "react";
import {
  Banner,
  Card,
  DisplayText,
  Form,
  FormLayout,
  Frame,
  Layout,
  Page,
  PageActions,
  TextField,
  Toast,
} from "@shopify/polaris";
import store from "store-js";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const UPDATE_PRICE = gql`
  mutation productVariantUpdate($input: ProductVariantInput!) {
    productVariantUpdate(input: $input) {
      product {
        title
      }
      productVariant {
        id
        price
      }
    }
  }
`;

type State = {
  name: string;
  discount: string;
  price: string;
  variantId: string;
  showToast: boolean;
};

class EditProduct extends React.Component<{}, State> {
  state: State = {
    name: "",
    discount: "",
    price: "",
    variantId: "",
    showToast: false,
  };

  componentDidMount() {
    this.setState({ discount: this.itemToBeConsumed() });
  }

  render() {
    const { name, price, discount, variantId } = this.state;
    return (
      <Mutation mutation={UPDATE_PRICE}>
        {(handleSubmit, result) => {
          const { error, data } = result;
          const showError = error && (
            <Banner status="critical">{error.message}</Banner>
          );
          const showToast = data && data.productVariantUpdate && (
            <Toast
              content="Sucessfully updated"
              onDismiss={() => this.setState({ showToast: false })}
            />
          );
          return (
            <Frame>
              <Page>
                <Layout>
                  {showToast}
                  <Layout.Section>{showError}</Layout.Section>
                  <Layout.Section>
                    <DisplayText size="large">{name}</DisplayText>
                    <Form onSubmit={() => {}}>
                      <Card sectioned>
                        <FormLayout>
                          <FormLayout.Group>
                            <TextField
                              prefix="$"
                              value={price}
                              disabled
                              label="Original price"
                              type="currency"
                            />
                            <TextField
                              prefix="$"
                              value={discount}
                              onChange={this.handleChange("discount")}
                              label="Discounted price"
                              type="currency"
                            />
                          </FormLayout.Group>
                          <p>This sale price will expire in two weeks</p>
                        </FormLayout>
                      </Card>
                      <PageActions
                        primaryAction={{
                          content: "Save",
                          onAction: () => {
                            const productVariableInput = {
                              id: variantId,
                              price: discount,
                            };
                            handleSubmit({
                              variables: { input: productVariableInput },
                            });
                          },
                        }}
                        secondaryActions={[
                          {
                            content: "Remove discount",
                          },
                        ]}
                      />
                    </Form>
                  </Layout.Section>
                </Layout>
              </Page>
            </Frame>
          );
        }}
      </Mutation>
    );
  }

  handleChange = <F extends keyof State>(field: F) => {
    return (value: State[F]) =>
      this.setState({ [field]: value } as Pick<State, F>);
  };

  itemToBeConsumed = () => {
    const item = store.get("item");
    const price = item.variants.edges[0].node.price;
    const variantId = item.variants.edges[0].node.id;
    const discounter = price * 0.1;
    this.setState({ price, variantId });
    return (price - discounter).toFixed(2);
  };
}

export default EditProduct;

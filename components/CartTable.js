import { formatPrice, itemTotal } from "../utilityFunctions";
import { useEffect } from "react";
import { useAppContext } from "../state";

export default function CartTable({ cartItems, cartId, removeItem }) {
  const { itemQuantities, setItemQuantities, setCheckoutUrl } = useAppContext();
  const url = process.env.NEXT_PUBLIC_SHOPIFY_API_ENDPOINT
  const key = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN
  useEffect(async () => {
    try {
      const result = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token":
            key,
        },
        body: JSON.stringify({
          query: `
            query checkoutURL {
              cart(id: "${cartId}") {
                checkoutUrl
              }
            }
          `,
        }),
      }).then((res) => res.json());

      if (result.errors) {
        console.log({ errors: result.errors });
      } else if (!result || !result.data) {
        console.log({ result });
        return "No results found.";
      }
      setCheckoutUrl(result.data.cart.checkoutUrl)
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }, [])

  let removeItemFromCart = (itemId, quantity) => {
    fetch("/.netlify/functions/remove-from-cart", {
      method: "POST",
      body: JSON.stringify({
        cartId: cartId,
        lineId: itemId,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("--- Item deleted ---");

        removeItem(response.lines.edges);
        setItemQuantities(itemQuantities - quantity)
        return response;
      });
  };

  return (
    <table className="cart-table">
      <thead>
        <tr>
          <th className="cart-table-heading">Item</th>
          <th className="cart-table-heading">Price</th>
          <th className="cart-table-heading">Quantity</th>
          <th className="cart-table-heading">Total</th>
          <th className="cart-table-heading">Actions</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item, index) => {
          item = item.node;
          console.log(item);
          let merchandiseTitle =
            item.merchandise.title === "Default Title"
              ? ""
              : `(${item.merchandise.title})`;
          return (
            <tr className="cart-table-row" key={`cartItem${index}`}>
              <td className="cart-table-cell">
                {item.merchandise.product.title} {merchandiseTitle}
              </td>
              <td className="cart-table-cell">
                {formatPrice(
                  item.merchandise.priceV2.amount,
                  item.merchandise.priceV2.currencyCode
                )}
              </td>
              <td className="cart-table-cell">{item.quantity}</td>
              <td className="cart-table-cell">
                {itemTotal(item.merchandise.priceV2, item.quantity)}
              </td>
              <td className="cart-table-cell">
                <button
                  onClick={() => {
                    removeItemFromCart(item.id, item.quantity);
                  }}
                >
                  Remove Item
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

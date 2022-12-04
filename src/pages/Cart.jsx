import React from "react";
import { useGlobalPhoneContext } from "../context/PhoneContext";

const Cart = () => {
  const { dispatch, cart } = useGlobalPhoneContext();
  if (cart.length < 1) return <h1 className="title">Your Cart Is Empty!</h1>;
  const subTotal = cart.reduce((totalPrice, currentPhone) => {
    return (totalPrice += currentPhone.count * currentPhone.price);
  }, 0);
  const tax = subTotal / 10;
  return (
    <div className="cart container">
      <h1 className="title">Your Cart</h1>
      <div className="cart-details">
        <div className="detail">
          <div className="payment-title">
            <h3>Products</h3>
            <h3>Name of Product</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Remove</h3>
            <h3>Total</h3>
          </div>
          {cart.map((phone, index) => {
            const { id, model, image, price, count } = phone;
            return (
              <div className="product" key={index}>
                <div className="product-img">
                  <img src={image} alt={model} />
                </div>
                <h3 className="product-name">{model}</h3>
                <h3 className="product-price">{price}</h3>
                <div className="quantity">
                  <button
                    className="quantity-btn"
                    onClick={() =>
                      dispatch({ type: "DECREASE_ITEM", payload: id })
                    }
                  >
                    -
                  </button>
                  <p className="number">{count}</p>
                  <button
                    className="quantity-btn"
                    onClick={() =>
                      dispatch({ type: "INCREASE_ITEM", payload: id })
                    }
                  >
                    +
                  </button>
                </div>
                <h3
                  className="remove"
                  onClick={() => dispatch({ type: "REMOVE_ITEM", payload: id })}
                >
                  <i className="fas fa-trash"></i>
                </h3>
                <div className="product-total">
                  <h3>Item Total: ${count * price}</h3>
                </div>
              </div>
            );
          })}
        </div>
        <div className="payment">
          <button
            className="clear"
            onClick={() => dispatch({ type: "CLEAR_CART" })}
          >
            Clear Cart
          </button>
          <h3 className="sub-total">Sub-Total: {subTotal}</h3>
          <h3 className="tax">
            Tax <em>(10%)</em>: {tax}
          </h3>
          <h3 className="total">Total: {subTotal + tax}</h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;

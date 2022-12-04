import React from "react";
import { Link } from "react-router-dom";
import { useGlobalPhoneContext } from "../context/PhoneContext";

const Phone = ({ phone }) => {
  const { cart, dispatch } = useGlobalPhoneContext();
  const { id, model, price, image } = phone;
  const currentPhone = cart.find((phone) => phone.id === id);

  const addToCart = (phone) => {
    dispatch({ type: "ADD_TO_CART", payload: phone });
  };

  const handleEnter = (e) => {
    e.target.classList.add("display-add");
  };

  const handleLeave = (e) => {
    e.target.classList.remove("display-add");
  };

  return (
    <div className="phone" onMouseMove={handleEnter} onMouseLeave={handleLeave}>
      <Link to={`/phone/${id}`} className="phone-img">
        <img src={image} alt={model} />
      </Link>
      <div className="phone-price">
        <h2 className="model">{model}</h2>
        <p className="price">Price: {price}$</p>
      </div>
      <button
        disabled={currentPhone}
        onClick={() => addToCart(phone)}
        className="add-cart"
      >
        {currentPhone ? (
          "Incart"
        ) : (
          <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
        )}
      </button>
    </div>
  );
};

export default Phone;

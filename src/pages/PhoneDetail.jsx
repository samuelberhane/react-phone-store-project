import React from "react";
import { useParams, Link } from "react-router-dom";
import { phonesData } from "../data";
import { useGlobalPhoneContext } from "../context/PhoneContext";

const PhoneDetail = () => {
  const { id } = useParams();
  const { cart, dispatch } = useGlobalPhoneContext();
  const currentPhone = phonesData.find((phone) => phone.id === parseInt(id));
  const { model, brand, price, desc, image } = currentPhone;
  const inCart = cart.find((phone) => phone.id === parseInt(id));
  return (
    <div className="phone-detail container">
      <h1 className="title">{model}</h1>
      <div className="details">
        <div className="detail-img">
          <img src={image} alt={model} />
        </div>
        <div className="description">
          <h3>Model: {model} </h3>
          <h4>Brand: {brand}</h4>
          <p className="price">Price: {price}$</p>
          <h4>{model} Summery: </h4>
          <p>{desc}</p>
          <div className="detail-btn">
            <Link to="/">
              <button className="back">Continue Shopping</button>
            </Link>
            <button
              className="add"
              onClick={() =>
                dispatch({ type: "ADD_TO_CART", payload: currentPhone })
              }
              disabled={inCart}
            >{`${inCart ? "In Cart" : "Add To Cart"}`}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetail;

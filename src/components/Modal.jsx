import React from "react";
import { Link } from "react-router-dom";
import { useGlobalPhoneContext } from "../context/PhoneContext";

const Modal = () => {
  const { modalOpen, modalContent, dispatch } = useGlobalPhoneContext();
  if (!modalOpen) return "";
  const { image, price, model } = modalContent;
  return (
    <div className="modal-container">
      <div className="modal">
        <h2>Item Added To Cart</h2>
        <div className="modal-img">
          <img src={image} alt={model} />
        </div>

        <p>{model}</p>
        <p className="price">Price: {price}$</p>
        <div className="modal-btn">
          <button
            className="back"
            onClick={() => dispatch({ type: "CLOSE_MODAL" })}
          >
            <Link to="/">Continue Shopping</Link>
          </button>
          <button
            className="add"
            onClick={() => dispatch({ type: "CLOSE_MODAL" })}
          >
            <Link to="/cart">Go To Cart</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

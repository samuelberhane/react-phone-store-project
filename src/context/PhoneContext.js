import React, { useContext, useReducer, useEffect } from "react";
const cartItems = JSON.parse(localStorage.getItem("cartItems"));

const PhoneContext = React.createContext();
const reducer = (state, action) => {
  const { type, payload } = action;
  const { cart } = state;
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, payload],
        modalContent: payload,
        modalOpen: true,
      };
    case "CLOSE_MODAL":
      return { ...state, modalOpen: false, modalContent: null };
    case "INCREASE_ITEM":
      const increaseCart = cart.map((phone) => {
        if (phone.id === payload) return { ...phone, count: phone.count + 1 };
        return phone;
      });
      return { ...state, cart: increaseCart };
    case "DECREASE_ITEM":
      const decreaseCart = cart
        .map((phone) => {
          if (phone.id === payload) return { ...phone, count: phone.count - 1 };
          return phone;
        })
        .filter((phone) => phone.count > 0);
      return { ...state, cart: decreaseCart };
    case "CLEAR_CART":
      return { cart: [] };
    case "REMOVE_ITEM":
      return { ...state, cart: cart.filter((phone) => phone.id !== payload) };
    default:
      return state;
  }
};

const initialState = {
  cart: cartItems.cart || [],
  modalOpen: false,
  modalContent: null,
};

const PhoneContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state));
  }, [state]);

  return (
    <PhoneContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PhoneContext.Provider>
  );
};

const useGlobalPhoneContext = () => {
  return useContext(PhoneContext);
};

export { PhoneContextProvider, useGlobalPhoneContext };

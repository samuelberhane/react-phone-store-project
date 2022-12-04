import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Cart from "./pages/Cart";
import PhoneDetail from "./pages/PhoneDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from "./components/Modal";
import Error from "./pages/Error";

const App = () => {
  return (
    <main className="app">
      <BrowserRouter>
        <Navbar />
        <Modal />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/phone/:id" element={<PhoneDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;

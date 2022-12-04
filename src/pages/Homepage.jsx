import React from "react";
import { phonesData } from "../data";
import Phone from "../components/Phone";

const Homepage = () => {
  return (
    <section className="homepage container">
      <h1 className="title">Our Products</h1>
      <div className="phones">
        {phonesData.map((phone, index) => (
          <Phone key={index} phone={phone} />
        ))}
      </div>
    </section>
  );
};

export default Homepage;

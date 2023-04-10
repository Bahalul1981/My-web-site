import React, { useEffect, useState } from "react";
import "./NewArraivel.css";

export const NewArraivel = () => {
  const [newProducts, setNewProducts] = useState([]);
  useEffect(() => {
    async function getFakeApi() {
      try {
        const res = await fetch("https://fakestoreapi.com/products/");
        const data = await res.json();
        setNewProducts(data);
        // console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    getFakeApi();
  }, []);
  return (
    <div>
      <h1 className="all-new-collections">
        Ckeckout all of our new collections
      </h1>
      <div className="under-home-page">
        {newProducts.map((res) => (
          <div className="display-all-new-collections" key={res.id}>
            <img
              src={res.image}
              alt={res.title}
              style={{ width: "80%", minHeight: "250px", marginTop: "20px" }}
            />

            <div className="all-new-products-informations">
              <h2>{res.title}</h2>
              <p>Price: {res.price} $</p>
              <button className="add-to-card-btn">Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

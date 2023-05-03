import React, { useEffect, useState } from "react";
import Header from "../../header/Header";
import "./men.css";
import { useDispatch } from "react-redux";

export const Men = () => {
  const dispatch = useDispatch();
  const [menData, setMenData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  function additeam() {}

  useEffect(() => {
    async function getMenData() {
      try {
        const response = await fetch("http://localhost:3001/men");
        const data = await response.json();
        setMenData(data);
      } catch (err) {
        console.log(err);
      }
    }

    getMenData();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <Header />

      {!selectedProduct && (
        <div className="men-page-container">
          {menData.map((product) => (
            <div
              key={product.id}
              className="men-page"
              onClick={() => handleProductClick(product)}
            >
              <h2>{product.name}</h2>
              <img
                style={{ height: "300px", width: "200px" }}
                src={`http://localhost:3001${product.image}`}
              />
            </div>
          ))}
        </div>
      )}

      {selectedProduct && (
        <div className="men-page-container">
          <div className="men-page-details">
            <h2>{selectedProduct.name}</h2>
            <img
              style={{ height: "300px", width: "200px" }}
              src={`http://localhost:3001${selectedProduct.image}`}
            />
            <p>{selectedProduct.description}</p>
            <p>{selectedProduct.price}</p>
            <button onClick={additeam}>Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

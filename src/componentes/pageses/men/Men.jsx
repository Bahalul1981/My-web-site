import React, { useEffect, useState } from "react";
import Header from "../../header/Header";
import { useNavigate } from "react-router-dom";
import "./men.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../state/addToCartSlice";

export const Men = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [menData, setMenData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getMenData() {
      try {
        const response = await fetch("http://localhost:3001/men");
        const data = await response.json();
        setMenData(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }

    getMenData();
  }, []);

  function additeam(product) {
    dispatch(addToCart(product));
    alert("The item you selected has been added");
    navigate("/items");
  }

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <Header />

      {loading && <p>Loading...</p>}

      {!loading && !selectedProduct && (
        <div className="men-page-container">
          {menData.map((product) => (
            <div
              key={product.id}
              className="men-page"
              onClick={() => handleProductClick(product)}
            >
              <img
                style={{ height: "300px", width: "200px" }}
                src={`http://localhost:3001${product.image}`}
              />
              <h4>{product.name}</h4>
              <p>{`Price: ${product.price} kr`}</p>
            </div>
          ))}
        </div>
      )}

      {!loading && selectedProduct && (
        <div className="men-page-container-details">
          <div className="men-page-details">
            <h2>{selectedProduct.name}</h2>
            <img
              style={{ height: "550px", width: "400px" }}
              src={`http://localhost:3001${selectedProduct.image}`}
              alt={selectedProduct.name}
            />
            <p>{selectedProduct.description}</p>
            <h3>{`Price: ${selectedProduct.price} kr`}</h3>
            <button
              className="add-to-cart-button"
              onClick={() => additeam(selectedProduct)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

import React, { useEffect, useState } from "react";
import Header from "../../header/Header";

export const Woman = () => {
  const [womenData, setWomenData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchWomenData = async () => {
    try {
      const response = await fetch("http://localhost:3001/woman");
      const data = await response.json();
      setWomenData(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchWomenData();
  }, []);

  if (isLoading) {
    return (
      <div style={{ fontSize: "2rem", textAlign: "center" }}>
        Page loading...
      </div>
    );
  }

  return (
    <div>
      <Header />
      {womenData.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.email}</p>
        </div>
      ))}
    </div>
  );
};

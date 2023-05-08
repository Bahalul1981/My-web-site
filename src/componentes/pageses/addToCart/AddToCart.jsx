import { useSelector, useDispatch } from "react-redux";
import Header from "../../header/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Icon } from "@blueprintjs/core";
import "./addCart.css";

import {
  addToCart,
  removeFromCart,
  updateUser,
} from "../../state/addToCartSlice";

export function AddToCart() {
  const items = useSelector((state) => state.products.items.addtoCart);
  const totalPrice = items.reduce((total, item) => total + item.price, 0);
  const [shoUserDetails, setShoUserDetails] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleConfirmOrder = () => {
    setShoUserDetails(true);
  };

  const handleUserIfo = (e) => {
    e.preventDefault(); // prevent form submission
    const formData = new FormData(e.target); // get form data
    const fullName = formData.get("fullName");
    const postAddress = formData.get("postAddress");
    const email = formData.get("email");
    const mobileNumber = formData.get("mobileNumber");
    const user = { fullName, postAddress, email, mobileNumber };
    dispatch(updateUser(user));
    setUserDetails(user);

    navigate("/");
  };

  return (
    <div>
      <Header />

      <div className="order-summary">
        {items.length > 0 ? (
          <>
            {items.map((item) => (
              <div key={item.id}>
                <img
                  style={{ height: "100px", width: "70px" }}
                  src={`http://localhost:3001${item.image}`}
                />
                <div>{`Product Name: ${item.name}`}</div>
                <div>{`Price: ${item.price}`}</div>
                <Icon
                  icon="trash"
                  color="red"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleRemoveItem(item.id)}
                />
              </div>
            ))}
            <div>Total to pay: {totalPrice}</div>
            <button onClick={handleConfirmOrder}>Confirm Order</button>
          </>
        ) : (
          <h1>You have no any order yet. Please add your order</h1>
        )}
      </div>
      {shoUserDetails && (
        <div className="user-address-details">
          <form onSubmit={handleUserIfo}>
            <div>
              <label htmlFor="fullName">Full Name:</label>
              <input type="text" name="fullName" id="fullName" />
            </div>
            <div>
              <label htmlFor="postAddress">Post Address: </label>
              <input type="text" name="postAddress" id="postAddress" />
            </div>
            <div>
              <label htmlFor="email">E-mail: </label>
              <input type="email" name="email" id="email" />
            </div>
            <div>
              <label htmlFor="mobileNumber">Mobile number:</label>
              <input type="number" name="mobileNumber" id="mobileNumber" />
            </div>
            <button type="submit">Go to payment</button>
          </form>
        </div>
      )}
    </div>
  );
}

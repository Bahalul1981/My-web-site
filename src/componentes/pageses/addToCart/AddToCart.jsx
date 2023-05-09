import { useSelector, useDispatch } from "react-redux";
import Header from "../../header/Header";
import { useNavigate } from "react-router-dom";
import React, { useRef } from "react";
import { useState } from "react";
import { Icon } from "@blueprintjs/core";
import "./addCart.css";
import emailjs from "emailjs-com";

import {
  addToCart,
  removeFromCart,
  updateUser,
} from "../../state/addToCartSlice";

export function AddToCart() {
  const items = useSelector((state) => state.products.items.addtoCart);
  console.log(items);
  const totalPrice = items.reduce((total, item) => total + item.price, 0);
  const [shoUserDetails, setShoUserDetails] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const form = useRef();
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
    const user_email = formData.get("user_email");
    const mobileNumber = formData.get("mobileNumber");
    const user = { fullName, postAddress, user_email, mobileNumber };
    dispatch(updateUser(user));
    setUserDetails(user);
    emailjs
      .sendForm(
        "service_cek3f7e",
        "template_05bql7b",
        form.current,
        "j5XREZA_VsedX_grw"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your massage is success");
        },
        (error) => {
          console.log(error.text);
        }
      );

    navigate("/");
  };

  return (
    <div>
      <Header />

      <div className="order-summary">
        {items.length > 0 ? (
          <>
            {items.map((item) => (
              <div key={item.id} className="selected-products">
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
            <button onClick={handleConfirmOrder} className="confirm-order">
              Confirm Order
            </button>
          </>
        ) : (
          <h1>No orders found. Please add one.</h1>
        )}
      </div>
      {shoUserDetails && (
        <div className="user-address-details">
          <form ref={form} onSubmit={handleUserIfo}>
            <div>
              <label htmlFor="fullName">Full Name:</label>
              <input type="text" name="fullName" id="fullName" required />
            </div>
            <div>
              <label htmlFor="postAddress">Post Address: </label>
              <input type="text" name="postAddress" id="postAddress" required />
            </div>
            <div>
              <label htmlFor="user_email">E-mail: </label>
              <input type="email" name="user_email" id="user_email" required />
            </div>
            <div>
              <label htmlFor="mobileNumber">Mobile number:</label>
              <input
                type="number"
                name="mobileNumber"
                id="mobileNumber"
                required
              />
            </div>
            <button type="submit">Finish order</button>
          </form>
        </div>
      )}
    </div>
  );
}

import React, { useState } from "react";
import Header from "../../header/Header";
import "./login.css";
import { useDispatch } from "react-redux";
import { setUser } from "../../state/userSlice";

export const Login = () => {
  const dispatch = useDispatch();
  const [displayReg, setDisplayReg] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });

  const [alertMessage, setAlertMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegistration = (e) => {
    e.preventDefault();
    const { firstName, lastName, userName, email, password } = formData;
    if (!firstName || !lastName || !userName || !email || !password) {
      setAlertMessage("Please fill all fields");
      return;
    }
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u) => u.userName === userName);
    if (user) {
      setAlertMessage(
        "Username already exists. Please choose a different username."
      );
      return;
    }
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));
    setFormData({
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
    });
    setAlertMessage("");
    setDisplayReg(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { userName, password } = formData;
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const loggedInUser = users.find(
      (user) => user.userName === userName && user.password === password
    );

    if (!loggedInUser) {
      setAlertMessage("Incorrect username or password");
      return;
    } else {
      setAlertMessage("");
    }

    dispatch(setUser(loggedInUser.userName));
  };

  // const handleLogout = () => {
  //   localStorage.removeItem("loggedInUser");
  //   setLoggedInUser(null);
  // };

  const redStyle = {
    color: "red",
    fontSize: "24px",
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleRegistrationClick = () => {
    setDisplayReg(true);
    setAlertMessage("");
  };

  const handleLoginClick = () => {
    setDisplayReg(false);
    setAlertMessage("");
  };

  return (
    <div className="login-container">
      <Header />
      <div className="login">
        <h2>{displayReg ? "Register " : "Login"}</h2>
        {alertMessage && <p style={redStyle}>{alertMessage}</p>}
        <form onSubmit={displayReg ? handleRegistration : handleLogin}>
          {displayReg && (
            <div>
              <label>
                First Name:
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
              </label>
              <br />
              <label>
                Last Name:
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
              </label>
              <br />
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </label>
              <br />
            </div>
          )}
          <label>
            Username:
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={(e) =>
                setFormData({ ...formData, userName: e.target.value })
              }
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <button type="button" onClick={togglePasswordVisibility}>
              {showPassword ? "Hide" : "Show"}
            </button>
          </label>
          <br />
          <button type="submit">{displayReg ? "Register" : "Login"}</button>
          {displayReg ? (
            <p>
              Already have an account?{" "}
              <button type="button" onClick={handleLoginClick}>
                Login
              </button>
            </p>
          ) : (
            <p>
              Don't have an account?{" "}
              <button type="button" onClick={handleRegistrationClick}>
                Register
              </button>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

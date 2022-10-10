import React from "react";
import "@styles/CreateNewPassword.scss";
import logo from "@logos/logo_yard_sale.svg";

const CreateNewPassword = () => {
  return (
    <>
      <div className="login">
        <div className="form-container">
          <img src={logo} alt="logo" className="logo" />
          <h1 className="title">Create a new password</h1>
          <p className="subtitle">Enter a new password for your account</p>
          <form action="/" className="form">
            <label htmlfor="password" className="label">Password</label>
            <input type="password" id="password" placeholder="*********" className="input input-password" />
            <label htmlfor="new-password" className="label">Password</label>
            <input type="password" id="new-password" placeholder="*********" className="input input-password" />
            <input type="submit" defaultvalue="Confirm" className="primary-button login-button" />
          </form>
        </div>
      </div>
    </>
  );
};

export { CreateNewPassword };
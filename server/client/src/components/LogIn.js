import React from 'react';
import {NavLink} from 'react-router-dom';
import '../style/LogIn.css';
import login from '../images/login.svg'

const LogIn = () => {
  return <div>
      <section className="login">
        <div className="container">
          <div className="login-content">
          <div className="d-flex">

            <div className="login-image">
              <img className="login-form-image" src={login} alt="" />
              <NavLink to="/signup" className="'login-image-link">Not registered! Register </NavLink>
            </div>

            <div className="login-form">
            
              <h2 className="login-form-title">
                Log In
              </h2>

              <form className="register-login-form" id ="register-login-form">

                <div className="login-form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input type="email" name="email" className="login-form-input" id="email" placeholder="Your Email" required="true" />
                </div>

                <div className="login-form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name="password" className="login-form-input" id="password" placeholder="Your Password" required="true" />
                </div>

                <div className="login-form-button">
                  <input type="submit" name="login" id="login" className="login-form-submit" value="Log In" />
                </div> 

              </form>
            </div>
            </div>
          </div>
        </div>
      </section>
  </div>;
};

export default LogIn;

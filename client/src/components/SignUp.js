import React from 'react';
import {NavLink} from 'react-router-dom';
import '../style/SignUp.css';
import signup from '../images/signup.png'

const SignIn = () => {
  return <div>
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="signup-form-title">
                Sign Up
              </h2>
              <div className="d-flex">
              <form className="register-form" id ="register-form">


                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input type="text" name="name" className="form-input" id="name" placeholder="Your Name" required="true" />
                </div>


                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input type="email" name="email" className="form-input" id="email" placeholder="Your Email" required="true" />
                </div>


                <div className="form-group">
                  <label htmlFor="phone">
                    <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                  </label>
                  <input type="text" name="phone" className="form-input" id="phone" placeholder="Your Phone " required="true" />
                </div>


                <div className="form-group">
                  <label htmlFor="work">
                    <i className="zmdi zmdi-slideshow material-icons-name"></i>
                  </label>
                  <input type="text" name="work" className="form-input" id="work" placeholder="Your Profession" required="true" />
                </div>


                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name="password" className="form-input" id="password" placeholder="Your Password" required="true" />
                </div>


                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name="cpassword" className="form-input" id="cpassword" placeholder="Confirm Your Password" required="true" />
                </div>


                <div className="form-button">
                  <input type="submit" name="signup" id="signup" className="form-submit" value="Register" />
                </div> 


              </form>

              <div className="signup-image">
                  <img className="form-image" src={signup} alt="" />
                  <NavLink to="/login" className="'signup-image-link">I am already registered</NavLink>
              </div>

              </div>


            </div>
          </div>
        </div>
      </section>
  </div>;
};

export default SignIn;

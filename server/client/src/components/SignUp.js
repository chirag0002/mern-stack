import React, {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import '../style/SignUp.css';
import signup from '../images/signup.png'

const SignIn = () => {

  const navigate = useNavigate()
 
  const [user, setUser]=useState({
    name:"", email:"", phone:"", work:"", password:"", cpassword:""
  });


  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value=e.target.value;

    setUser({...user,[name]:value});
  }

  const postData = async (e) => {
    e.preventDefault();
    console.log("inside post");
    const {name, email, phone, work, password, cpassword}= user;
    const res = await fetch("/register", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Accept": 'application/json'
      },
      body:JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword
      })
    });
    const data= await res.json();
    if(res.status===422 || !data){
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successful");
      navigate('/login')
    }
  }

  return <div>
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="signup-form-title">
                Sign Up
              </h2>
              <div className="d-flex">
              <form method ="POST" className="register-form" id ="register-form">


                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input type="text" name="name" className="form-input" id="name" required="true" 
                    value={user.name}
                    onChange={handleInputs}
                    placeholder="Your Name"
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input type="email" name="email" className="form-input" id="email" required="true" 
                    value={user.email}
                    onChange={handleInputs}
                    placeholder="Your Email" 
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="phone">
                    <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                  </label>
                  <input type="number" name="phone" className="form-input" id="phone" required="true" 
                    value={user.phone}
                    onChange={handleInputs}
                    placeholder="Your Phone "
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="work">
                    <i className="zmdi zmdi-slideshow material-icons-name"></i>
                  </label>
                  <input type="text" name="work" className="form-input" id="work" required="true" 
                    value={user.work}
                    onChange={handleInputs}
                    placeholder="Your Profession" 
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name="password" className="form-input" id="password" required="true" 
                    value={user.password}
                    onChange={handleInputs}
                    placeholder="Your Password" 
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name="cpassword" className="form-input" id="cpassword" required="true" 
                    value={user.cpassword}
                    onChange={handleInputs}
                    placeholder="Confirm Your Password" 
                  />
                </div>


                <div className="form-button">
                  <input type="submit" name="signup" id="signup" className="form-submit" value="Register" onClick={postData} />
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

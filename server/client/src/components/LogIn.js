import React, {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import '../style/LogIn.css';
import login from '../images/login.svg'
// import {UserContext} from '../App';


const LogIn = () => {

  // eslint-disable-next-line no-unused-vars
  // const {state, dispatch} = useContext(UserContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async(e)=>{
    e.preventDefault();
    const res = await fetch('/signin', { 
      method:"POST",
      headers:{
        "Content-Type": "application/json",
        "Accept": 'application/json'
      },
      body:JSON.stringify({
        email,
        password
      })
    });
    const data= res.json();
    if(res.status === 400 || !data){
      window.alert("Invalid Credentials");
      console.log("Invalid Credentials");
    } else {
      // dispatch({type:"USER", payload:true});
      window.alert("Login Successfull");
      console.log("Login Successfull");
      navigate('/');
    }
  }
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

              <form  method="POST" className="register-login-form" id ="register-login-form">

                <div className="login-form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input type="email" name="email" className="login-form-input" id="email" 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    placeholder="Your Email" required="true" />
                </div>

                <div className="login-form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name="password" className="login-form-input" id="password" 
                    value={password}                 
                    onChange={(e)=> setPassword(e.target.value)}
                    placeholder="Your Password" required="true" />
                </div>

                <div className="login-form-button">
                  <input type="submit" name="login" id="login" className="login-form-submit" value="Log In"
                    onClick={loginUser}                    
                  />
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

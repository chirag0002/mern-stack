import React from 'react';
// import React, {useContext} from 'react';
import{NavLink} from 'react-router-dom';
import logo from '../images/logo.png';
// import {UserContext} from '../App';


const Navbar = () => {
  // eslint-disable-next-line no-unused-vars
  // const {state, dispatch}=useContext(UserContext);
  const RenderMenu = () =>{
    // if (state) {
      return(
       <>
         <li className="nav-item">
           <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>
          <li className="nav-item">
             <NavLink className="nav-link" to="/login">LogIn</NavLink>
           </li>
          <li className="nav-item">
           <NavLink className="nav-link" to="/signup">Register</NavLink>
           </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/logout">LogOut</NavLink>
          </li>
       </>
      );
    // }else{
    //   return(
    //     <>
    //       <li className="nav-item">
    //        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
    //       </li>
    //       <li className="nav-item">
    //         <NavLink className="nav-link" to="/about">About</NavLink>
    //       </li>
    //       <li className="nav-item">
    //         <NavLink className="nav-link" to="/contact">Contact</NavLink>
    //       </li>
    //       <li className="nav-item">
    //         <NavLink className="nav-link" to="/login">LogIn</NavLink>
    //       </li>
    //       <li className="nav-item">
    //        <NavLink className="nav-link" to="/signup">Register</NavLink>
    //       </li>
    //     </>
    //   )
    // }
  }
  return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <img  style={{height: '50px'}} src={logo} alt="" />
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
               
                <RenderMenu />

              </ul>
            </div>
          </div>
        </nav>
      </>
  );
};

export default Navbar;

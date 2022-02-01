import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/LogIn';
import Signup from './components/SignUp';
import {Route, Routes} from 'react-router-dom';


const App = () => {
  return <div className="bg-light">
    <Navbar />
    
    <Routes>
       <Route exact path="/" element={<Home />} />
       <Route exact path="/about" element={<About />} />
       <Route exact path="/contact" element={<Contact />} />
       <Route exact path="/login" element={<Login />} />
       <Route exact path="/signup" element={<Signup />} />
    </Routes>
  </div>;
};

export default App;

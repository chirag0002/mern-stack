import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/LogIn';
import Signup from './components/SignUp';
import Logout from './components/LogOut';
import {Route, Routes} from 'react-router-dom';
// import {initialState, reducer} from '../src/reducer/UseReducer';


// eslint-disable-next-line no-undef
// export const UserContext = createContext();

const Routing = () => {
    return (
      <Routes>
       <Route exact path="/" element={<Home />} />
       <Route exact path="/about" element={<About />} />
       <Route exact path="/contact" element={<Contact />} />
       <Route exact path="/login" element={<Login />} />
       <Route exact path="/signup" element={<Signup />} />
       <Route exact path="/logout" element={<Logout />} />
      </Routes>
    )
  }

const App = () => {
  
  // const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="bg-light">
      {/* <UserContext.Provider value={{state, dispatch}}> */}

        <Navbar />
        <Routing />

      {/* </UserContext.Provider> */}
    </div>
  );
};

export default App;

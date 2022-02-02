import React, {useEffect} from 'react';
// import React, {useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
// import {UserContext} from '../App';

const LogOut = () => {

    // eslint-disable-next-line no-unused-vars
    // const {state, dispatch} = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() =>{
        fetch('/logout',{
            method: "GET",
            headers: {
                "Content-Type":"application/json",
                Accept: "application/json"
            }
        }).then((res)=>{
            // dispatch({type:"USER", payload:false});
            navigate("/login");
            if(!res.status ===200){
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err)=>{
            console.log(err);
        });
    });
  return <div>

  </div>;
};

export default LogOut;

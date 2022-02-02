import React, {useEffect, useState} from 'react';
import '../style/About.css';
import pic from '../images/pic.png';
import {useNavigate} from 'react-router-dom';

const About = () => {
  
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  
  const callAboutPage = async () => {
      try {
          const res = await fetch('/abouts', {
            method: "GET",
            headers:{
              "Content-Type": 'application/json',
              Accept: 'application/json'
            },
            credentials:"include"
          });
          const data = await res.json();
          console.log(data);
          setUserData(data);

          if(!res.status === 200) {
            const error = new Error(res.error);
            throw error;
          }

      } catch (err) {
          console.error(err);
          navigate("/login");
      }
  }


  useEffect(() => {
    callAboutPage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return <div>
     <div className="container emp-profile">
       <form method="GET">
         <div className="row">

           <div className="col-md-4 emp-img">
             <img className="emp-image" src={pic} alt=" " />
           </div>

           <div className="col-md-6">
             <div className="profile-head">
               <h5>{userData.name}</h5>
               <h6 style={{color:"blue"}}>{userData.work}</h6>
               <p className="profile-rating mt-3 mb-5">RANKINGS: <span> 1/10 </span></p>

               <ul className="nav nav-pills" role="tablist">
                 <li className="nav-item"><a className="nav-link active" data-toggle="pill" href="#home" id="home-tab" role="tab">About</a></li>
                 <li className="nav-item"><a className="nav-link" data-toggle="pill" href="#profile" id="profile-tab" role="tab">Timeline</a></li>
               </ul>
                
                <div className="col-md-8 pl-1 mt-3 about-info">
                 <div class="tab-content profile-tab" id="myTabContent">
                   {/* eslint-disable-next-line jsx-a11y/aria-role */}
                   <div id="home" class="tab-pane fade show active" role="tabpannel" aria-labelledby="home-tab">

                     <div className="row">
                       <div className="col-md-6">
                         <label>User Id</label>
                       </div>
                       <div className="col-md-6">
                         <p>{userData._id}</p>
                       </div>
                      </div>

                      <div className="row mt-3">
                       <div className="col-md-6">
                         <label>Name</label>
                       </div>
                       <div className="col-md-6">
                         <p>{userData.name}</p>
                       </div>
                     </div>

                     <div className="row mt-3">
                       <div className="col-md-6">
                         <label>Email</label>
                       </div>
                       <div className="col-md-6">
                         <p>{userData.email}</p>
                       </div>
                     </div>

                     <div className="row mt-3">
                       <div className="col-md-6">
                         <label>Profession</label>
                       </div>
                       <div className="col-md-6">
                         <p>{userData.work}</p>
                       </div>
                     </div>

                     <div className="row mt-3">
                       <div className="col-md-6">
                         <label>Phone</label>
                       </div>
                       <div className="col-md-6">
                         <p>{userData.phone}</p>
                       </div>
                     </div>

                   </div>

                   {/* eslint-disable-next-line jsx-a11y/aria-role */}
                   <div id="profile" class="tab-pane fade show" role="tabpannel" aria-labelledby="home-tab">

                     <div className="row">
                       <div className="col-md-6">
                         <label>User Id</label>
                       </div>
                       <div className="col-md-6">
                         <p>3723732732732732</p>
                       </div>
                      </div>

                      <div className="row mt-3">
                       <div className="col-md-6">
                         <label>Name</label>
                       </div>
                       <div className="col-md-6">
                         <p>Chirag Varshney</p>
                       </div>
                     </div>

                     <div className="row mt-3">
                       <div className="col-md-6">
                         <label>Name</label>
                       </div>
                       <div className="col-md-6">
                         <p>Chirag Varshney</p>
                       </div>
                     </div>

                     <div className="row mt-3">
                       <div className="col-md-6">
                         <label>Name</label>
                       </div>
                       <div className="col-md-6">
                         <p>Chirag Varshney</p>
                       </div>
                     </div>

                     <div className="row mt-3">
                       <div className="col-md-6">
                         <label>Name</label>
                       </div>
                       <div className="col-md-6">
                         <p>Chirag Varshney</p>
                       </div>
                     </div>

                   </div>
                 </div>
                </div>

             </div>
           </div>
           
           <div className="col-md-2">
             <input type="submit" className="profile-edit-button" name="btnAddMore" value="Edit Profile" />
           </div>
         </div>
       </form>
     </div>
  </div>;
};

export default About;

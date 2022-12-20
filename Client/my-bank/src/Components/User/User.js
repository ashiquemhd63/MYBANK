import {React, useState, useEffect} from 'react'

import { Outlet, Link } from "react-router-dom";

import { userProfile } from "../../UserServices/userServices";

import './User.css'



import { Button } from "bootstrap";



function User() {

  const [User, setProfile] = useState([]);

  useEffect(() => {

    userProfile().then((data) => {
      setProfile(data);

    });

  }, []);



  return (

    <div className="mainbody">

     {console.log(User)}

      <div >

        <div className="container">

          <div className="profile">

            <div className="card ">

              <ul className="list-group list-group-flush ">

                <li className="list-group-item hello">Account Number : 834452444432</li>

                <li className="list-group-item">Name : {User.name}</li>

                <li className="list-group-item">Email : {User.email}</li>

                <li className="list-group-item">Phone : {User.phone}</li>

                <li className="list-group-item">Aadhaar Number : {User.aadhaarNumber}</li>



              </ul>

            </div>




          </div>



          <div className="sub-body">

            <div>

              <Link to="/userDashboard/deposite">

                <button type="submit" className="adminBtn">Deposite</button>

              </Link>



            </div>

            <div>

              <Link to="/userDashboard/withdraw">

                <button type="submit" className="adminBtn">Withdraw</button>

              </Link>



            </div>



            <div>

              <Link to="/userDashboard/loan">

                <button type="submit" className="adminBtn">Apply for loan</button>

              </Link>



            </div>



          </div>

        </div>

      </div>



    </div>

  );

}



export default User;
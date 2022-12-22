import { React, useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import './Admin.css'
import { userProfile } from '../../AdminServices/AdminServices';

function Admin() {

    const [User, setProfile] = useState([]);
    // console.log("hello")
    useEffect(() => {
        userProfile().then((data) => {
            //     console.log('hello')
            // console.log(data)
            setProfile(data);
        });
    }, []);

    // const getRow = (user, index) => {
    //     return (
    //         <tr key={index}>
    //             <td>{user.firstName}</td>
    //             <td>{user.lastName}</td>
    //             <td>{user.email}</td>
    //             <td>{user.phone}</td>
    //         </tr>
    //     )
    // }


    return (
        <>
            <div className="container">
                <div className="profile">
                    <div className="right-div">
                        <div className="card">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Name : {User.name}</li>
                                <li className="list-group-item">Email : {User.email}</li>
                                <li className="list-group-item">Phone : {User.phone}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="adminBtnDiv">
                    <div>
                        <Link to="/admin/loanApprove">
                            <button type="submit" className="adminBtn">Loan Approval</button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/admin/accountApprove">
                            <button type="submit" className="adminBtn">Account Approval</button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/admin/allAccountDetails">
                            <button type="submit" className="adminBtn">Account Details</button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/admin/allLoanDetails">
                            <button type="submit" className="adminBtn">Loan Details</button>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default Admin


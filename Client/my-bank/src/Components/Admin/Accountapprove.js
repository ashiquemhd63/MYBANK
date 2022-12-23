import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Loanapprove.css';

import { accountApproveList,accountApprove } from "../../AdminServices/AdminServices";


function Accountapprove() {

    const [User, setUser] = useState([]);

    useEffect(() => {
        accountApproveList().then((data) => {
            setUser(data)

        })
    }, []);

    const getRow = (user, index) => {
        return(
            <tr key={index} id={user.id}>
                <td>{user.name}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.panNumber}</td>
                <td>{user.aadhaarNumber}</td>
                <td>
                    <button type="button" className="btn btn-warning" onClick={(e) => approve(user.id, e)}>Accpet</button>
                    <button type="button" className="btn btn-warning">Reject</button>
                </td>
            </tr>
        )
    }
// deleting the row after admin approving the request
    function approve(userId, e){
        if(!window.confirm('Are you sure you want to approve this account?')){
            return;
        }
        accountApprove(userId, e);
        var row = document.getElementById(userId);
        row.remove();
    }

    return (
        <>
        <div className="container">
        <div className="table-container">
        <table className="table table-striped table-dark" style={{"color" : "white"}}>
            <thead>
            <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Pan Number</th>
                <th>Aadhaar Number</th>
                <th></th>
            </tr>
            </thead>
    
            
           <tbody>
             {User.map(getRow)}
           </tbody>
                  
        </table>
        </div>
        </div> 
        </>
    );
}
export default Accountapprove;
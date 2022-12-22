import { useEffect, useState } from "react";

import '../../Components/Admin/Loanapprove.css'



import { allAccountDetails } from "../../AdminServices/AdminServices";




function Accountdetails() {

    const [User, userProfile] = useState([]);

    useEffect(() => {

        allAccountDetails().then((data) => {

            userProfile(data.data)

        })

    }, []);



    const getRow = (user, index) => {

        return (

            <tr key={index} id={user.accountId}>

                <td>{user.accountNumber} </td>

                <td>{user.name}</td>

                <td>{user.email}</td>

                <td>{user.phone}</td>

                <td>{user.dateOpened} </td>

                <td>{user.currentBalance}</td>

               

               

            </tr>

        )



    }

    const [searchTerm, setsearchTerm] = useState("");

    return (



        <>

        <div className="container">

            <div className="search">

                <input type="text" placeholder="Search By Account No.." className="form-control " style={{marginTop: 50, marginBottom: 20, width: "40%"}} onChange={(e)=>

                {

                    setsearchTerm(e.target.value);

                }}/>

            </div>

            <div className="table-container">

                <table className="table table-striped table-dark">

                    <thead>

                        <tr>

                            <th>Account Number</th>

                            <th>Name</th>

                            <th>Email</th>

                            <th>Phone</th>

                            <th>Date oppened</th>

                            <th>Current Balance</th>

                           

                        </tr>

                    </thead>

                    <tbody>

                        {User.filter(val => {

                            if(searchTerm === "")

                            {

                                return val;

                            }

                            else if (val.accountNumber.toString().includes(searchTerm.toString())

                            )

                            {

                                return val

                            }

                        })

                        .map(getRow)}

                    </tbody>



                </table>

            </div>

        </div>

        </>

    )

}

export default Accountdetails;
import { useEffect, useState } from "react";

import '../../Components/Admin/Loanapprove.css'



import {allLoanDetails} from "../../AdminServices/AdminServices";




function Loandetails() {

    const [User, setUser] = useState([]);

    useEffect(() => {

        allLoanDetails().then((data) => {

            setUser(data.data)

        })

    }, []);



    const getRow = (user, index) => {

        return (

            <tr key={index} id={user.loanId}>

                <td>{user.name} </td>

                <td>{user.email} </td>

                <td>{user.phone} </td>

                <td>{user.amount} </td>

                <td>{user.startDate} </td>

                <td>{user.endDate} </td>

                {/* <td>{user.userId} </td> */}

                <td>{user.approvalStatus} </td>

            </tr>

        )



    }

    const [searchTerm, setsearchTerm] = useState("");

    return (



        <>

        <div className="container">

            <div className="search">

                <input type="text" placeholder="Search By Approval Status.." className="form-control " style={{marginTop: 50, marginBottom: 20, width: "40%"}} onChange={(e)=>

                {

                    setsearchTerm(e.target.value);

                }}/>

            </div>

            <div className="table-container">

                <table className="table table-striped table-dark">

                    <thead>

                        <tr>

                            {/* <th>Account Id</th> */}

                            <th> Name</th>

                            <th> Email</th>

                            <th> Phone</th>

                            <th> Loan Amount</th>

                            <th> Start Date</th>

                            <th> End Date</th>

                            {/* <th>User Id</th> */}

                            <th>ApprovalStatus</th>

                        </tr>

                    </thead>

                    <tbody>

                        {User.filter(val => {

                            if(searchTerm === "")

                            {

                                return val;

                            }

                            else if (val.approvalStatus.toString().includes(searchTerm.toString())

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

export default Loandetails;
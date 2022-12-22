import { Link } from "react-router-dom";
import './Loanapprove.css';
import { loanApprovalList,loanApprove,loanReject } from "../../AdminServices/AdminServices"
import { useEffect, useState } from "react";



function Loanapprove() {

    const [Loan, setLoan] = useState([]);
    
    useEffect(() => {
        loanApprovalList().then((data) => {
            setLoan(data)
        })
    }, []);





    const getRow = (loan, index) => {
        return (
            <tr key={index} id={loan.loanId}>
                <td>{loan.accountId}</td>
                <td>{loan.loanId}</td>
                <td>{loan.startDate}</td>
                <td>{loan.endDate}</td>
                <td>{loan.amount}</td>
                <td>
                        <button type="submit" className="btn btn-warning" onClick={(e) => approve(loan.loanId, e)}>Accpet</button>                                                       
                        <button type="submit" className="btn btn-warning" onClick={(e) => reject(loan.loanId, e)}>Reject</button>
                </td>
                   
            </tr >
        )
}
//deleting the row after admin approving the request
function approve(loanId,e){
    if(!confirm('Are you sure want to approve this loan?'))
    {
        return;
    }
    loanApprove(loanId,e);
    var row = document.getElementById(loanId);
    row.remove();
}

//deleting the row after admin rejecting the request
function reject(loanId,e){
    if(!confirm('Are you sure want to reject this loan?'))
    {
        return;
    }
    loanReject(loanId,e);
    var row = document.getElementById(loanId);
    row.remove();
}
return (
    <>
        
        <div className="container">
            <div className="table-container">
                
                <table className="table table-striped table-dark" style={{ "color": "white" }}>
                    <thead>
                        <tr>
                            <th>Account Id</th>
                            <th>Loan Id</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Amount</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {Loan.map(getRow)}
                    </tbody>
                </table>
               
            </div>
        </div>
    </>
);
}
export default Loanapprove;
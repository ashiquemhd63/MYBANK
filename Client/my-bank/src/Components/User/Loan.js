import './Loan.css'
import { Outlet, Link } from "react-router-dom";
import './LoanDetails.css'

function Loan() {
      
    return (
        <div className='loan'>
            <div className="container-fluid row ">

                <div className="loansDiv col">
                    <Link to="/userDashboard/loan/personalLoan">
                        <div>
                            <button type="submit" className="adminBtn">Personal loan</button>
                        </div>

                    </Link>
                    <Link to="/userDashboard/loan/homeLoan">

                    <div>
                        <button type="submit" className="adminBtn">Gold loan</button>
                    </div>
                    </Link>
                    <Link to="/userDashboard/loan/goldLoan">

                    <div>
                        <button type="submit" className="adminBtn">Gold loan</button>
                    </div>
                    </Link>
                </div>

                <div className='row loan-body'>
                    <Outlet></Outlet>

                </div>
            </div>
        </div>
    )
}



export default Loan;
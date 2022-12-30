// import {Link} from "react-router-dom";
import {Outlet} from "react-router-dom";
import Adminnavbar from "./Adminnavbar";

function Loanapprovehome()
{
    return(
        <>
        <Adminnavbar></Adminnavbar>
        <Outlet></Outlet>
        </>
    );
}

export default Loanapprovehome;
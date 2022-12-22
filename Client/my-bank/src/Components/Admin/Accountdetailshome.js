import {Link} from "react-router-dom";
import {Outlet} from "react-router-dom";
import Adminnavbar from "./Adminnavbar";

function Accountapprovehome()
{
    return(
        <>
        <Adminnavbar></Adminnavbar>
        <Outlet></Outlet>
        </>
    );
}

export default Accountapprovehome;
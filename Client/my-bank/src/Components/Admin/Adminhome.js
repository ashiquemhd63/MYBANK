// import {Link} from "react-router-dom";
import {Outlet,useNavigate} from "react-router-dom";
import Adminnavbar from "./Adminnavbar";
import {useEffect} from "react";

function Adminhome()
{

    const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token){
      return navigate("/auth/login");
    }
  });
    return(
        <>
        <Adminnavbar></Adminnavbar>
        <Outlet></Outlet>
        </>
    );
}

export default Adminhome;
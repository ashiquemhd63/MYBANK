import { Outlet, useNavigate } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import {useEffect} from "react"



function UserHome() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token){
      return navigate("/auth/login");
    }
  });
  return (
    <>

      <header>
        <UserNavbar></UserNavbar>
      </header>


      <main>
        <Outlet></Outlet>

      </main>




    </>
  );
}

export default UserHome;
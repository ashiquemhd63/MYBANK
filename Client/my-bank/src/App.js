

import "bootstrap/dist/css/bootstrap.css";

import Home from "./Components/Public/Home";



import {Outlet} from "react-router-dom";


function App() {
  
  return (

    <div className="App" >
      
      <Home></Home>
      <Outlet></Outlet>

    </div>
  );
}

export default App
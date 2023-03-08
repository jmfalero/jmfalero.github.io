import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                  <Link className="navbar-brand" to={"/"}><img src={"images/loguito.png"} alt={"imangenlogo"} width="80"></img></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to={"/category/Header"}>Header</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to={"/category/Exhaust"}>Exhaust</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to={"/category/Camshafts"}>Camshafts</NavLink>
                      </li>  
                      <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to={"/category/Coilovers"}>Coilovers</NavLink>
                      </li>   
                    </ul> 
                  </div>
                </div>
              </nav>
          </div>        
          
            <div className= "col-md-6 d-flex justify-content-end align-items-center">
              <CartWidget/>
            </div>
          </div>    
        </div>    
      )
  }


export default NavBar;
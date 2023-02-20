import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
          <div className="container">
           <div className="row">
                <div className="col-md-6">
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/"><img src={"images/loguito.png"} alt= {"PerformanceFirst"} width={80}></img></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link" href="/Headers">Headers</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/CoilOvers">CoilOvers</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/Exhasuts">Exhasuts</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/Camshafts">Camshafts</a>
                            </li>
                        </ul>
                       </div>
                    </div>
                    </nav>
                </div>
                <div className="col-md-6 d-flex justify-content-end align-items-center">
                    <CartWidget />
                </div> 
            </div>
        </div>
    )

}

export default NavBar;
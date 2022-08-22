import React from "react";
import Logo from '../../Assets/logo.png';


function LogoAndDropdown () {
  return (
    <div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <img className="navbar-brand" src={Logo} alt="PEP Logo"></img>
    </div>
  )
}

export default LogoAndDropdown;
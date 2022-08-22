import React from "react";
import NavbarLink from "./NavbarLinks";


function NavbarElements () {
    return (
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavbarLink 
            title= "Home"
            link= "#Home"
            />
            <NavbarLink 
            title= "Features"
            link= "#Features"
            />
            <NavbarLink 
            title= "Reviews"
            link= "#Reviews"
            />
            <NavbarLink 
            title= "Pricing"
            link= "#Pricing"
            />
            <NavbarLink 
            title= "Support"
            link= "#Support"
            />
        </ul>
     </div>
    )
}

export default NavbarElements;
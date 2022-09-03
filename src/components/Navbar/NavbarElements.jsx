import React from "react";
import NavbarLink from "./NavbarLinks";



function NavbarElements () {
    return (
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavbarLink 
            title= "Home"
            link= "/"
            />
            <NavbarLink 
            title= "Features"
            link= "/#FeaturesSection"
            />
            <NavbarLink 
            title= "Comparisons"
            link= "/#ComparisonSection"
            />
            <NavbarLink 
            title= "Reviews"
            link= "/#ReviewSection"
            />
            <NavbarLink 
            title= "Pricing"
            link= "/#PricingSection"
            />
            <NavbarLink 
            title= "Support"
            link= "/Support"
            />
        </ul>
     </div>
    )
}

export default NavbarElements;
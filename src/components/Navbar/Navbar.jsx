import React from "react";
import LogoAndDropdown from "./LogoAndDropdown";
import NavbarElements from "./NavbarElements";


function Navbar () {

return(
<header>
<nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container">
    <LogoAndDropdown />
    <NavbarElements />
  </div>
</nav>
</header>
)

}

export default Navbar;
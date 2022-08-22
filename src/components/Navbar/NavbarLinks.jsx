import React from "react";

function NavbarLink (props) {
    return (
        <li className="nav-item">
            <a className="nav-link" href={props.link}>{props.title}</a>
        </li>
    )
}

export default NavbarLink;
import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

function NavbarLink (props) {
    return (
        <li className="nav-item">
            {/* <a className="nav-link" href={props.link}>{props.title}</a> */}
           <Link className="nav-link" to={props.link}>{props.title}</Link> 
        </li>
    )
}

export default NavbarLink;
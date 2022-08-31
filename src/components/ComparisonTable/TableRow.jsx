import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";





function TableRow (props) {
return (
<tr>
    <th  scope='row'>{props.title}</th>
    <td><FontAwesomeIcon className="checkMark" icon={props.pepfiber}/></td>
    <td><FontAwesomeIcon className="checkMark" icon={props.company2}/></td>
    <td><FontAwesomeIcon className="checkMark" icon={props.company3}/></td>
</tr>
)
}

export default TableRow;
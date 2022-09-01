import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import TableRow from "./TableRow";


function CompareTable () {
return (

    <section id='ComparisonSection'>
 
    <div className='container'>
        <table className='table table-responsive table-borderless rounded-2'>
            <thead>
                <tr>
                    <th scope='col'>Features</th>
                    <th scope='col'>PEP Fiber</th>
                    <th scope='col'>Company 2</th>
                    <th scope='col'>Company 3</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th  scope='row'>Fast Internet</th>
                    <td><FontAwesomeIcon className="checkMark" icon={faCircleCheck}/></td>
                    <td><FontAwesomeIcon className="checkMark" icon={faCircleCheck}/></td>
                    <td><FontAwesomeIcon className="checkMark" icon={faCircleCheck}/></td>
                </tr>
                <tr>
                    <th  scope='row'>Unlimited Data</th>
                    <td><FontAwesomeIcon className="checkMark" icon={faCircleCheck}/></td>
                    <td></td>
                    <td><FontAwesomeIcon className="checkMark" icon={faCircleCheck}/></td>
                </tr>
                <tr>
                    <th  scope='row'>Anytime Contract Cancels</th>
                    <td><FontAwesomeIcon className="checkMark" icon={faCircleCheck}/></td>
                    <td><FontAwesomeIcon className="checkMark" icon={faCircleCheck}/></td>
                    <td className="bottomRightCorner"></td>
                </tr>
            </tbody>
        </table>
   

</div>

    </section>

    )

}

export default CompareTable;
import React from "react";
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import TableRow from "./TableRow";


function CompareTable () {
return (

    <section id='ComparisonSection'>
 
    <div className='container'>
        <table className='table table-responsive table-borderless'>
            <thead>
                <tr>
                    <th scope='col'>Features</th>
                    <th scope='col'>PEP Fiber</th>
                    <th scope='col'>Company 2</th>
                    <th scope='col'>Company 3</th>
                </tr>
            </thead>
            <tbody>
                <TableRow
                title="Fast Internet"
                pepfiber= {faCircleCheck}
                company2= {faCircleCheck}
                company3= {faCircleCheck}
                 />
                <TableRow
                title="Unlimited Data"
                pepfiber={faCircleCheck}
                company2=""
                company3={faCircleCheck}
                 />
                <TableRow
                title="Anytime Contract Cancels"
                pepfiber={faCircleCheck}
                company2={faCircleCheck}
                company3=""
                 />
            </tbody>
        </table>
   

</div>

    </section>

    )

}

export default CompareTable;
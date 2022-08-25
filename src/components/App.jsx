import React from 'react';
import Navbar from './Navbar/Navbar.jsx';
import Home from './Home/Home.jsx';
import Features from './Features/Features.jsx';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';



function App () {

return (
    <>
        <Navbar />
        <Home />
        <Features />


        <section id='pricingSection'>
        <div className='container'>
            <table className='table table-responsive table-borderless'>
                <thead >
                    <tr>
                        <th scope='col'>Features</th>
                        <th scope='col'>PEP Fiber</th>
                        <th scope='col'>Company 1</th>
                        <th scope='col'>Company 2</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th  scope='row'>Fast internet</th>
                        <td><FontAwesomeIcon className='checkMark' icon={faCircleCheck} /></td>
                        <td><FontAwesomeIcon className='checkMark' icon={faCircleCheck} /></td>
                        <td><FontAwesomeIcon className='checkMark' icon={faCircleCheck} /></td>
                    </tr>
                    <tr>
                        <th  scope='row'>Unlimited Data</th>
                        <td><FontAwesomeIcon className='checkMark' icon={faCircleCheck} /></td>
                        <td><FontAwesomeIcon className='checkMark' icon={faCircleCheck} /></td>
                        <td><FontAwesomeIcon className='checkMark' icon={faCircleCheck} /></td>
                    </tr>
                    <tr>
                        <th  scope='row'>Anytime contract cancels</th>
                        <td><FontAwesomeIcon className='checkMark' icon={faCircleCheck} /></td>
                        <td><FontAwesomeIcon className='checkMark' icon={faCircleCheck} /></td>
                        <td><FontAwesomeIcon className='checkMark' icon={faCircleCheck} /></td>
                    </tr>
                </tbody>
            </table>

        </div>
        </section>


    </>
)
}

export default App;
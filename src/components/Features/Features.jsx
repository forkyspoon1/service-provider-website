import React from "react";
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { faGaugeHigh, faTag, faInfinity } from '@fortawesome/free-solid-svg-icons'

function Features () {
    return (
        <section id='featuresSection'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-12 featureElement'>
                        <FontAwesomeIcon className='featureIcon' icon={faGaugeHigh} />
                        <h2>Fast</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className='col-lg-4 col-md-12 featureElement'>
                        <FontAwesomeIcon className='featureIcon'icon={faTag} />
                        <h2>Affordable</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div> 
                    <div className='col-lg-4 col-md-12 featureElement'>
                        <FontAwesomeIcon className='featureIcon' icon={faInfinity} />
                        <h2>Unlimited</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Features;
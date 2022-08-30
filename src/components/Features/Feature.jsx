import React from "react";
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { faGaugeHigh, faTag, faInfinity } from '@fortawesome/free-solid-svg-icons'

let featuresArray = [
    {
        title: "Fast",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        icon: faGaugeHigh
    },

    {
        title: "Affordable",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        icon: faTag
    },

    {
        title: "Unlimited",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        icon: faInfinity
    }
]


function Feature (props) {
return (
    <div className='col-lg-4 col-md-12 featureElement'>
        <FontAwesomeIcon className='featureIcon' icon={props.icon} />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </div>
)
}

export default Feature;
export { featuresArray };
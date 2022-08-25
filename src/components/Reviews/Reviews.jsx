import React from "react";
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import {faStar, faStarHalf} from '@fortawesome/free-solid-svg-icons'
import pfpPlaceholder from '../../Assets/pfpplaceholder.png'


function Reviews () {
    return (
<section id="ReviewSection">
<div className="container">
<div className="row">
<div className="col-lg-12 col-md-12">
<div id="reviewCarousel" className="carousel slide" data-bs-ride="carousel">
  <ol className="carousel-indicators">
    <li type="button" data-bs-target="#reviewCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></li>
    <li type="button" data-bs-target="#reviewCarousel" data-bs-slide-to="1" aria-label="Slide 2"></li>
    <li type="button" data-bs-target="#reviewCarousel" data-bs-slide-to="2" aria-label="Slide 3"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
        <div className="itemContainer">
            <img src={pfpPlaceholder} alt="pfp" className="pfpPlaceholder"></img>
            <h1>Random Guy</h1>
            <p className="starIcons"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></p>
            <h4>My family has been using PEP Fiber for over 10 years now and we have been absolutely loving it!</h4>
        </div>
    </div>
    <div className="carousel-item">
        <div className="itemContainer">
            <img src={pfpPlaceholder} alt="pfp" className="pfpPlaceholder"></img>
            <h1>Random Guy</h1>
            <p className="starIcons"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalf}/></p>
            <h4>My family has been using PEP Fiber for over 10 years now and we have been absolutely loving it!</h4>
        </div>
    </div>
    <div className="carousel-item">
    <div className="itemContainer">
            <img src={pfpPlaceholder} alt="pfp" className="pfpPlaceholder"></img>
            <h1>Random Guy</h1>
            <p className="starIcons"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalf}/></p>
            <h4>My family has been using PEP Fiber for over 10 years now and we have been absolutely loving it!</h4>
        </div>
    </div>
  </div>
  </div>
  </div>
</div>
</div>
</section>

    )
}

export default Reviews;
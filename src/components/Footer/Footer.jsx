import React from "react";
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'


function Footer () {

var currentYear = new Date().getFullYear();


return(
<section id="FooterSection">
<div className="container">
  <footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <h5>Resources</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#HomeSection" className="nav-link p-0 text-muted">Home</a></li>
          <li className="nav-item mb-2"><a href="#HomeSection" className="nav-link p-0 text-muted">Features</a></li>
          <li className="nav-item mb-2"><a href="#HomeSection" className="nav-link p-0 text-muted">Reviews</a></li>
          <li className="nav-item mb-2"><a href="#HomeSection" className="nav-link p-0 text-muted">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#HomeSection" className="nav-link p-0 text-muted">Support</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>About</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#HomeSection" className="nav-link p-0 text-muted">Our mission</a></li>
          <li className="nav-item mb-2"><a href="#HomeSection" className="nav-link p-0 text-muted">Locations</a></li>
          <li className="nav-item mb-2"><a href="#HomeSection" className="nav-link p-0 text-muted">Terms</a></li>
        </ul>
      </div>
      <div className="col-md-5 offset-md-3 supportBox">
        <h5>Support Hotline</h5>
        <p>000-123-4567</p>
      </div>
    </div>


  

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>&copy; {currentYear} PEP Fiber. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-dark" href="#HomeSection"><svg className="bi" width="24" height="24"><FontAwesomeIcon icon={faTwitter}/></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#HomeSection"><svg className="bi" width="24" height="24"><FontAwesomeIcon icon={faInstagram}/></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#HomeSection"><svg className="bi" width="24" height="24"><FontAwesomeIcon icon={faFacebook}/></svg></a></li>
      </ul>
    </div>
    
  </footer>
</div>
</section>
)
}

export default Footer;
import React from "react";

function Form () {
return (
<form className="rounded mx-auto">
  <div className="mb-3">
    <label htmlFor="emailLogin" className="form-label">Email address</label>
    <input type="email" className="form-control" id="emailLogin" name="emailInput" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="passwordLogin" className="form-label">Password</label>
    <input type="password" className="form-control" id="passwordLogin" name="passwordInput"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="rememberMe"/>
    <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
  </div>
  <button type="submit" className="btn btn-primary me-1">Login</button>
  <button href="#" className="btn btn-primary">Register</button>
</form>
)
}

export default Form;
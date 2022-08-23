import React from "react";

function Form () {
return (
<form className="rounded">
  <div className="mb-3">
    <label htmlFor="emailLogin" className="form-label">Email address</label>
    <input type="email" className="form-control" id="emailLogin" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="passwordLogin" className="form-label">Password</label>
    <input type="password" className="form-control" id="passwordLogin"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
  </div>
  <button type="submit" className="btn btn-primary">Login</button>
  <button href="#" className="btn btn-primary">Register</button>
</form>
)
}

export default Form;
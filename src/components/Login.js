import React, { useContext } from 'react'
import { LoginContext } from '../context/LoginContext.js'



function Login() {

    const { setUsername, setShowProfile } = useContext(LoginContext);

  return (
<div className="container mt-5">
<div className="card border-light mb-3" >
  <div className="card-header text-center">Login Page</div>
  <div className="card-body">

    <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" class="form-label">Username</label>
    <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  type="text"
        placeholder='Username...'
        onChange={(event) => {
            setUsername(event.target.value);
        }} />
    <div id="emailHelp" class="form-text">We'll never share your username with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary" onClick={() => {
            setShowProfile(true);
        }}>Login</button>
</form>
  </div>
</div>

</div>



  )
}

export default Login
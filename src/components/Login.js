import React, { useContext } from 'react'
import { LoginContext } from '../context/LoginContext.js'



function Login() {

    const { setUsername, setShowProfile } = useContext(LoginContext);

  return (
    <div>
        <div>Login</div>

        <input 
        type="text"
        placeholder='Username...'
        onChange={(event) => {
            setUsername(event.target.value);
        }} />
        <input 
        type="text"
        placeholder='Password...' />
        <button 
        onClick={() => {
            setShowProfile(true);
        }}>
            Login
        </button>
        </div>
  )
}

export default Login
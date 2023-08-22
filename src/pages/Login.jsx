import React, {useState, useContext, useRef} from 'react'
import '../pages/Login.css'
import { json, useNavigate } from 'react-router-dom'

import SignUp from './SignUp'
const Login = () => {

  const navigate = useNavigate()
  const [username, setUserName] = useState('')
  const [loginEmail, setLoginEmail]= useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const handleLogin = (e)  => {

    
    e.preventDefault()
    if(loginEmail.trim() === '' || loginPassword.trim() === ''){
      setErrorMessage('Please enter email and password')
    }
    else{
      const savedUsers = JSON.parse(localStorage.getItem('users'))
      if(savedUsers && savedUsers[loginEmail] === loginPassword){
        navigate('/')
        setTimeout(() => {
          alert("Register has been successfully created")
        }, 1000)
      } else{
        setErrorMessage("Invalid email or password")
      }
    }
  
    }
  
  
  return (
    <div className='login-section'>
         <div className="login">
          <div className="forms">
            <form  onSubmit={handleLogin}>
            <label htmlFor="Email">Email</label>
                      <input type="email" 
                       className='form-control'
                         value={loginEmail}
                         placeholder='Enter your Email'
                       onChange={(e) => setLoginEmail(e.target.value)}
                          />
                         <br />
                        <label htmlFor="Password">Password</label>
                      <input type="password"
                       className='form-control'
                   value={loginPassword}
                         placeholder='Enter your Password'
                       onChange={(e) => setLoginPassword(e.target.value)}
                       
                
                     />
                       <button type='submit' className='btn btn-primary'>Login</button>
                         {errorMessage && <p style={{
                          color: "red",
                        display: "flex",
                         marginLeft: "115+-px",
                          justifyContent: "space-between",
                         alignItems: "center"
                         }}>{errorMessage}</p>}
            </form>
          </div>
         </div>
    </div>
  )
}

export default Login
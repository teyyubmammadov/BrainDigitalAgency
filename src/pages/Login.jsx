import React, {useState, useContext, useRef} from 'react'
import '../pages/Login.css'
import { Link, json, useNavigate } from 'react-router-dom'

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
            <label htmlFor="Email">e-poçt</label>
                      <input type="email" 
                       className='form-control'
                         value={loginEmail}
                         placeholder='E-poçtunuzu daxil edin'
                       onChange={(e) => setLoginEmail(e.target.value)}
                          />
                         <br />
                        <label htmlFor="Password">şifrə</label>
                      <input type="password"
                       className='form-control'
                   value={loginPassword}
                         placeholder='Şifrənizi daxil edin'
                       onChange={(e) => setLoginPassword(e.target.value)}
                       
                
                     />
                       <button type='submit' className='btn btn-register btn-primary'>Daxil ol</button>
                         {errorMessage && <p style={{
                          color: "red",
                        display: "flex",
                         marginLeft: "115+-px",
                          justifyContent: "space-between",
                         alignItems: "center"
                         }}>{errorMessage}</p>}

                      <Link to="signup"><button type='submit' className='btn btn-register me-2 btn-primary'>Geri qayıt</button></Link>
            </form>
          </div>
         </div>
    </div>
  )
}

export default Login
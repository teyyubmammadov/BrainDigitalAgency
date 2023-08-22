import React, {useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


const SignUp = () => {
  const navigate = useNavigate()
 const [users, setUsers] = useState({})
 const [registerUsername, setRegisterUsername] = useState('')
 const [registerEmail, setRegisterEmail]= useState('')
 const [errorEmail, setErrorEmail] = useState('')
 const [registerPassword, setRegisterPassword]= useState('')
 const [errorMessage, setErrorMessage]= useState('')
 const [errorPassword, setErrorPassword]= useState('')
  const handleSubmit = (e) => {
e.preventDefault()
if(registerEmail.trim() === '' || registerPassword.trim() === ''){
  setErrorMessage('Please enter email, password or username')
}
else if(registerPassword.length < 8 || registerPassword.length > 12){
  setErrorPassword('Please enter a valid password')
}

else{
  const newUser = {...users, [registerEmail] : registerPassword}
  localStorage.setItem('users', JSON.stringify(newUser))
  setUsers(newUser)
  setErrorMessage("login has been succesfully created")
  setRegisterUsername('')
  setRegisterPassword('')
  navigate('/login')

}

  }

  return (
    <div className='signup-section '>
        <div className="signup ">
           
          <div className="right-side " >
                <div className="form-section">
                    <div className="heading">
                        <h2>Create An Account</h2>
                    </div>
                    <form  onSubmit={handleSubmit}>
                        <label htmlFor="Name">Name</label>
                      <input 
                      type="text" 
                         className='form-control '
                      placeholder='Enter your Name'
                      value={registerUsername}
                      onChange={(e) => setRegisterUsername(e.target.value)}
                    
                         />
            
                         <br />
                      <label htmlFor="email">Email</label>
                       <input type="email" 
                         className='form-control'
                          placeholder='Enter your Email'
                          //  onBlur={handleEmailValidation}
                          value={registerEmail}
                          onChange={(e) => setRegisterEmail(e.target.value)}
                      
                        />
                        { errorEmail && <p style={{color: "red", paddingTop: "5px"}}>{errorEmail}</p>}
                        <br />
                         <label htmlFor="password">Password</label>
                        <input type="password"
                       className='form-control'
                         placeholder='Enter your Password'
                         value={registerPassword}
                          // onBlur={handleValidation}
                         
                          
                         onChange={(e) =>  setRegisterPassword(e.target.value)}
                         
                         />
                         {errorPassword && <p style={{color: 'red', paddingTop: '5px'}}>{errorPassword}</p>}
                         
                         <button type='submit' className='btn btn-primary'>Register</button>
                         {errorMessage && <p  className="error" style={{
                          color: "red",
                              maxWidth: "400px",
                              display: "flex",
                            marginLeft: "55px"
                              
                         }}>{errorMessage}</p>}
                   </form>
                   <div className="account">
                   <p>Have already an account?</p> <Link className='link' to= '/login'>Login here</Link>
                   </div>
                   
                </div>
           </div>
          </div>
            </div>
       
     

  )
}

export default SignUp
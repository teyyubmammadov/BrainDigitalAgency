import Aos from 'aos'
import React, {useState, useEffect, useRef} from 'react'
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
  useEffect(() => {
    Aos.init({
        duration: 1500
    });
}, []);
  return (
    <div className='signup-section '>
        <div className="signup container" data-aos="zoom-in">
           
          <div className="right-side " >
                <div className="form-section">
                    <div className="heading">
                        <h2>Hesabınızı yaradın!</h2>
                    </div>
                    <form  onSubmit={handleSubmit}>
                        <label htmlFor="Name">ad</label>
                      <input 
                      type="text" 
                         className='form-control '
                      placeholder='Adınızı daxil edin'
                      value={registerUsername}
                      onChange={(e) => setRegisterUsername(e.target.value)}
                    
                         />
            
                         <br />
                      <label htmlFor="email">e-poçt</label>
                       <input type="email" 
                         className='form-control'
                          placeholder='E-poçtunuzu daxil edin'
                          //  onBlur={handleEmailValidation}
                          value={registerEmail}
                          onChange={(e) => setRegisterEmail(e.target.value)}
                      
                        />
                        { errorEmail && <p style={{color: "red", paddingTop: "5px"}}>{errorEmail}</p>}
                        <br />
                         <label htmlFor="password">şifrə</label>
                        <input type="password"
                       className='form-control'
                         placeholder='Şifrənizi daxil edin'
                         value={registerPassword}
                          // onBlur={handleValidation}
                         
                          
                         onChange={(e) =>  setRegisterPassword(e.target.value)}
                         
                         />
                         {errorPassword && <p style={{color: 'red', paddingTop: '5px'}}>{errorPassword}</p>}
                         
                         <button type='submit' className='btn btn-register btn-primary'>Qeydiyyatdan keçin</button>
                         {errorMessage && <p  className="error" style={{
                          color: "red",
                              maxWidth: "400px",
                              display: "flex",
                            marginLeft: "55px"
                              
                         }}>{errorMessage}</p>}
                   </form>
                   <div className="account">
                   <p>Artıq hesabınız var?</p> <Link className='link' to= '/login'>Buradan daxil olun</Link>
                   </div>
                   
                </div>
           </div>
          </div>
            </div>
       
     

  )
}

export default SignUp
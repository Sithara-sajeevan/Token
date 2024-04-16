import React, {  useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../Header'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { BASE_URL } from '../../services/baseURL'
/* import { useContext } from 'react';
import { isAuthTokenContext } from '../context/ContextShare';
 */



function Auth({ register  }) {


//const {isAuthToken,setAuthToken} = useContext(isAuthTokenContext)


  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: ""
 
  })
  const navigate = useNavigate()
  /* console.log(userData);
   */
  const RegisterForm = register ? true : false

 //const  [userType,setUserType] = useState("")



  //function to register 
  const handleRegister = async (e) => {
    e.preventDefault()
     
 

  const { username, email, password  } = userData
  console.log(userData);

  if (!username || !email || !password  ) {
    toast.info('Please fill the form completely')

  }
  else {
    //const result = await  registerAPI(userData)
    const result = await axios.post(`${BASE_URL}/user/register`, userData)
    console.log(result);
    if (result.status === 200) {
      toast.success(`${result.data.username} register successfully`)
      setUserData({
        username: "", email: "", password: ""
      })
      navigate('/login')


      
    }
    else {
      toast.error(`${result.response.data}`)
    }
  }


 }



  //login 
  const handleLogin = async (e) => {
    e.preventDefault()

  const { email, password } = userData
  if (!email || !password) {
    toast.info('please fill the form completly')
  }
  else {
    console.log(userData);
    const result = await axios.post(`${BASE_URL}/user/login`, userData)
    console.log(result);

    if(!result)
    {
      console.log('data null');
    }
    /* if(result.data.existingUser.username=="admin"  && result.data.existingUser.email == "admin@gmail.com" && result.data.existingUser.password=="admin123")
    {
      navigate('/list')
    } */
   // else{
    if (result.status === 200) {
      //isAuthToken(true)
     // setIsAuthToken(true)
      //store data
      sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
      sessionStorage.setItem("token", result.data.token)

      toast.success('login successfull')

      setUserData({
        username: "", email: "", password: ""
      })
      setTimeout(() => {
        navigate('/dashboard')

      }, 2000)
    }
    else {
      alert(result.response.data)
    }
  }

    
  }

  return (
    <>
      <div>
        <Header  auth/>

        <div style={{ color: 'white' }}>
          <div>
            <div class="d-flex">
              <div class="sidebar d-flex flex-column " >
              </div>
            </div>
            <div class="col-md-5  mt-5" style={{ marginLeft: '350px' }}>


              <Form style={{ backgroundColor: 'lavender' }} className='w-100 p-5'>
                <h5 className='align-items-center text-align-center ' style={{ color: 'black' }}>
               
               
                  {RegisterForm ? "sign up to your Account" : "sign in to your Account"
                  }
               </h5>
            

                {RegisterForm &&
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Username" value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })} />

                  </Form.Group>}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter Email Id" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />

                </Form.Group>
              
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="passwword" placeholder="Enter Password" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />

                </Form.Group>



                {RegisterForm ?
                  <div >
                    <Button onClick={handleRegister} variant="primary" type="submit" className='btn-btn-warning mt-1 '>Register</Button>
                    <p style={{ color: 'black' }}>Already a  user? Click here to <Link style={{ textDecoration: 'none' }} to={'/login'}>login</Link></p>
                  </div>
                  :

                  <div>
                    <Button onClick={handleLogin} variant="primary" type="submit" className='btn-btn-warning mt-1 ' >Login</Button>
                    <p style={{ color: 'black' }}>New User? Click here to <Link style={{ textDecoration: 'none' }} to={'/register'}>Register</Link></p>
                  </div>
                }
                 <div >
                  <p style={{color:'black'}}>Are u an <Link to={'/admin'} style={{textDecoration:'none'}}>Admin?</Link> </p>
                 <Link to={'/'}><button className='btn  '>Back  To Home</button>
                </Link>
                    </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer theme='colored' autoClose={200} position='top-center' />
    </>
  )
}

export default Auth
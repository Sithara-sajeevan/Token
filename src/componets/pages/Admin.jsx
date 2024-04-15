import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../Header'
//import { loginAPI, registerAPI } from '../../services/allAPI'
import { Button, Form } from 'react-bootstrap'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { BASE_URL } from '../../services/baseURL';


function Admin({reg}) {

  
  const [adminData, setAdminData] = useState({
    username: "",
    email: "",
    password: "",
  })
  const navigate = useNavigate() 
   console.log(adminData);
  

  //reg
   const RegisterForm = reg ? true : false
  const handleAdminRegister = async (e) => {
    e.preventDefault()
     
  const { username, email, password  } = adminData
  console.log(adminData); 
   if (!username || !email || !password   ) {
    toast.info('Please fill the form completely')

  }
  else {
    //const result = await  registerAPI(userData)
    const result = await axios.post(`${BASE_URL}/admin/register`, adminData)
    console.log(result);


    if (result.status === 200) {
      toast.success(`${result.data.username} register successfully`)
      setAdminData({
        username: "", email: "", password: ""
        
      })
      navigate('/adminL')
    }
    else {
   
        toast.error('account already exist please login')

      
    }
  }


 }

  //login
  
  const handleAdminLogin = async (e) => {
    e.preventDefault()

    const { email, password  } = adminData
    if (!email || !password ) {
      toast.info('please fill the form completly')
    }
    else {
      console.log(adminData);
  
  
      const result =await axios.post(`${BASE_URL}/admin/login`,adminData)
      console.log(result); 
  


      if (result.status === 200) {
      
        sessionStorage.setItem("existingAdmin", JSON.stringify(result.data.existingAdmin))
        sessionStorage.setItem("token", result.data.token)
  
        toast.success('login successfull')
  
        setAdminData({
          username: "", email: "", password: "" 
        })
      
        
          setTimeout(() => {
            navigate('/list')
    
          }, 2000)
        
       
      }
      else {
        toast.error(result.response.data)
      }
    }
   
 
  }

   


  return (
<>
<Header admin/>
<h2>Welcome Admin</h2>
  
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
                    <Form.Control type="text" placeholder="Enter Username" value={adminData.username} onChange={(e) => setAdminData({ ...adminData, username: e.target.value })} />

                  </Form.Group>}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter Email Id" value={adminData.email} onChange={(e) => setAdminData({ ...adminData, email: e.target.value })} />

                </Form.Group>
              
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="passwword" placeholder="Enter Password" value={adminData.password} onChange={(e) => setAdminData({ ...adminData, password: e.target.value })} />

                </Form.Group>
                
               



                {RegisterForm ?
                  <div >
                    <Button onClick={handleAdminRegister} variant="primary" type="submit" className='btn-btn-warning mt-1 '>Register</Button>
                    <p style={{ color: 'black' }}>Already a  Admin? Click here to <Link style={{ textDecoration: 'none' }} to={'/adminL'}>Login</Link></p>
                  </div>
                  :

                  <div>
                    <Button  onClick={handleAdminLogin} variant="primary" type="submit" className='btn-btn-warning mt-1 ' >Login</Button>
                    <p style={{ color: 'black' }}>New Admin? Click here to <Link style={{ textDecoration: 'none' }} to={'/admin'}>Register</Link></p>
                  </div>
                }

                <Link to={'/'}><button className='btn  '>Back  To Home</button>
                </Link>
              </Form>
            </div>
          </div>
        </div>
      
      <ToastContainer theme='colored' autoClose={200} position='top-center' />
    

</>  ) 

}
export default Admin 




























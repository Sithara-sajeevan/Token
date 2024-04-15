import React, { useState } from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import { registerAPI } from '../../services/allAPI'


function Register({register}) {
const [userData,setUserData] = useState({
  username:"",
  email:"",
  password:""
})
/* console.log(userData);
 */
const RegisterForm = register ? true:false 


const handleRegister =async(e)=>{
  e.preventDefault()
  const {username,email,password}=userData

  if(!username || !email ||!password){
    alert('Please fill the form compleately')

  }
  else{
    const result = await registerAPI(userData)
    console.log(result);
 if(result.status===200){
      alert(`${result.data.user} `)

   
  }
} 
}


  return (
    <>{/* 
       <div>
         <Header/>

         <div style={{color:'white'}}>
        <div>
      <div class="d-flex">
    <div class="sidebar d-flex flex-column " >
    </div>
    </div>
      <div class="col-md-5  mt-5" style={{marginLeft:'350px'}}>
      
      <h5 className='text-align ms-5 mt-4'>
          {
            RegisterForm ? "sign up to your Account":"sign in to your Account"
          }
        </h5>
        <Form className='w-100 p-5'>
     {RegisterForm &&
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter Username"  onChange={(e)=>setUserData({...userData,username:e.target.value})} />
      
      </Form.Group>}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter EmailId" onChange={(e)=>setUserData({...userData,email:e.target.value})} />
      
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter Password" onChange={(e)=>setUserData({...userData,password:e.target.value})}/>
      
      </Form.Group>


      </Form>


       {RegisterForm?
    <div>
        <Button variant="primary" type="submit"className='btn-btn-warning'>Register</Button>
        <p>Already a  user?Click here to <Link to={'/login'}>login</Link></p>
    </div>:


<div>
    <Button  variant="primary" type="submit" className='btn-btn-warning'>Login</Button>
        <p>New User?Click here to <Link to={'/register'}>Register</Link></p>
</div>
}

     <Link to={'/'}><button className='btn'>Back</button>
     </Link> 
        </div> 
    </div>
    </div>
    </div> */}
    </>
  )
}

export default Register

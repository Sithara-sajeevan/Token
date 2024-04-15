import React from 'react'
//import { useContext } from 'react'
import {  Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
//import { isAuthTokenContext } from './context/ContextShare'

function Header({dashboard,list}) {

//const  {isAuthToken,setAuthToken}=useContext(isAuthTokenContext)


const navigate = useNavigate()
const handleLogout=()=>{
  sessionStorage.removeItem("token")
  sessionStorage.removeItem("existingUser")
  navigate('/')
 // setAuthToken(false) 

}

  return (
    <Navbar className='bg-primary p-3'>
     
           <Navbar.Brand className='text-white'>
        <Link to={'/'}> <span className='fs-3' style={{color:'white' , }}>DocTokenHub</span>
        </Link>

        </Navbar.Brand>  
       
      {
        dashboard && 
        <button onClick={handleLogout}  className='btn ' style={{marginLeft:'800px'}}><i class="fa-solid fa-power-off"></i>logout</button>
    
      }

   
{
        list && 
        <button onClick={handleLogout}  className='btn ' style={{marginLeft:'800px'}}><i class="fa-solid fa-power-off"></i>logout</button>
    
      }


    </Navbar>
    )
}

export default Header
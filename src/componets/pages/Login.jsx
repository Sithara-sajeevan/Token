import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Header from '../Header';


function Login() {
  return (

    <>
   {/*  <Header />
    <div  class="col-md-5  mt-5" style={{marginLeft:'350px'}}>
        <form  class="mt-3 border shadow p-5 " >
                <h2  > <i class="fa-solid fa-user "></i> Login</h2>
                
               
             
                <div class="mb-3">
                    <input type="email" class="form-control" placeholder="Email" />
                </div>
                <div class="mb-3">
                    <input type="Password" class="form-control" placeholder="Password" />
                </div>
             
              <div>
                    
        <Button variant="primary" size="sm" className='btn btn-reload' >
        Cancel
        </Button>
      <Button   variant="secondary"  className='ms-5' size="sm" > <Link className='text-light text-decoration-none' to={'/dashboard'}>
        Login
        </Link>
        </Button> 
        <h6 className='text-light mt-4'>Are You A new User please<Link className='text-light text-decoration-none' to={'/register'}> Register</Link></h6> 

      </div>
       
            </form>
            <Link to={'/'}><button className='btn'>Back</button>
     </Link> 
    </div> */}
    </>

  )
}

export default Login
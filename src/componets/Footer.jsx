import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div style={{height:'300px', color:'white'}} className='d-flex justify-content-center w-100 align-items-center flex-column bg-primary'>
    <div className='d-flex justify-content-evenly align-items-center w-100'>

        <div style={{width:'400px'}} className="websites">
        <h4 className='mb-3' style={{overflowY:'hidden'}}>
        <i class="fa-solid fa-hospital"></i> 
          __DocTokenHub 
        </h4>
        <h6>a central hub for managing tokens related to healthcare services</h6>
        </div>

        <div className="links d-flex flex-column">
       
        </div>

        <div className="contacts d-flex flex-column">
            <h4 className='mb-3'>Contact us</h4>
            
            <div className='d-flex justify-content-evenly align-items-center mt-3'>
            <Link to={'https://instagram.com/'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
           
            <Link to={'https://whatsapp.com/'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-whatsapp fa-2x"></i></Link>
            <Link to={'https://location.com/'} style={{textDecoration:'none', color:'white'}}>   <i class="fa-solid fa-location-dot fa-2x"></i>
</Link>

            </div>
            <div className='d-flex justify-content-evenly align-items-center mt-3'>
              <h5>Ph no : 9876543212</h5>
        </div>
        </div>
    </div>
  
   </div>
  )
}

export default Footer
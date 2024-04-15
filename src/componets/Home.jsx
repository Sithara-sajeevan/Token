import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

function Home() {

   const[isLogin , setLogin]=useState(false)



  useEffect(()=>{
    if(sessionStorage.getItem("token")){
setLogin(true)
    }

  })
  return (
    <>
  <Header />
    
<h1 className='text-center'>Welcome To <span >Nila  Clinic</span></h1>    
 <div className='row container'>
     <div className='col-lg-6 mt-3 mb-5'>
     <img src="https://i.pinimg.com/originals/cb/f5/bf/cbf5bfc2edfea803bc1a447c1c516b21.jpg"  alt="no image" width={'450px'} />
     </div>

     <div className='col-lg-6 mt-5'>
        <p>An organized medical service offering diagnostic, therapeutic, or preventive outpatient services. Often, the term covers an entire medical teaching centre, including the hospital and the outpatient facilities.</p>
     
     </div>
    </div>
    <div className='row container'>

     <div className='col-lg-6 mt-5 '>
      <h4>Dr.Ithal  
        (MBBS )
      </h4>
      <p>A pediatrician is a doctor who focuses on the health of infants, children, adolescents and young adults. Doctors diagnose disease, provide treatment, counsel patients with injuries, diseases or illnesses. The specific duties depend upon the speciality you pursue in your MBBS. </p>
     { isLogin?
     
     <Link to={'/dashboard'}> <button className='btn btn-rounded  btn-primary' style={{color:'white'}}>Book Now</button></Link>:

        <Link to={'/register'}> <button className='btn btn-rounded  btn-primary' style={{color:'white'}}>Register</button></Link>}
     </div>
     <div className='col-lg-2'></div>
       <div className='col-lg-4 mt-3 mb-5' style={{}}>
     <img src="https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg"  alt="no image" width={'450px'} />
     </div>




    </div>


    <div className='row container'>
      <h4 style={{textAlign:'center'}}>About Clinic</h4>
      <div className='col-lg-6 mt-5 mb-5 '>
        <img src="https://thumbs.dreamstime.com/b/empty-modern-hospital-corridor-clinic-hallway-interior-background-white-chairs-patients-waiting-doctor-visit-contemporary-208439059.jpg" alt="" width={'450px'} />
      </div>
      <div className='col-lg-2'></div>

      <div className='col-lg-4 mt-5 mb-5'>
        
<ul>
  <li>Trained Medical Staff.</li>
<li>Trained Nursing Staff.</li>
<li>24*7 Emergency Services.</li>
<li>Consultation Area.</li>
<li>Plaster / Dressing Room.</li>
<li>Observation Ward.</li>
<li>        Consultation Area.</li>
</ul>
      </div>
    </div>
<Footer/>
    </>
  )
}

export default Home
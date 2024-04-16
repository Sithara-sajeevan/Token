import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import './Dashboard.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from '../Header';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { addDetialAPI } from '../../services/allAPI';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import axios from 'axios';
import { BASE_URL } from '../../services/baseURL';




function Dashboard() {

  const [personalDetails, setPersonalDetails] = useState({
    personalImage: "",
    name: "",
    age: "",
    date: "",
    place: "",
    gender: ""
  })

  //hold url
  const [preview, setPreview] = useState("")

  const [token, setToken] = useState("")


  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    }
  }, [])

  useEffect(() => {
    personalDetails.personalImage &&
      setPreview(URL.createObjectURL(personalDetails.personalImage))
  }, [personalDetails.personalImage])
  console.log(preview);
  //console.log(personalDetails); 





  //function to book 
  const handleBook = async (e) => {
    e.preventDefault()

    const { personalImage, name, age, date, place, gender } = personalDetails


    if (!personalImage || !name || !age || !date || !place || !gender) {
      toast.info('please fill the form completly')
    }

    else {
      //reqbody

      const reqBody = new FormData()
      //add data -append()
      reqBody.append("personalImage", personalImage)
      reqBody.append("name", name)
      reqBody.append("age", age)
      reqBody.append("date", date)
      reqBody.append("place", place)
      reqBody.append("gender", gender)


      console.log(personalDetails);
 
      if (token) {
        const reqHeader =
        {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }

        //const result=await addDetialAPI(reqBody,reqHeader)


        const result = await axios.post(`${BASE_URL}/detail/add`, personalDetails, { headers: { 'Content-Type': 'multipart/form-data' } })
        console.log(result);
        if (result.status === 200) {
          console.log(result.data);
          // toast.success('Booking Compleated successfully')
          Swal.fire({
            // title: "The Internet?",
            text: "Booked successfull",
            icon: "success"
          });


        }

      }

    }
  }

  //reload
  const reload = () => {
    window.location.reload()
  }




  return (
    <>
      <Header dashboard />
      <div className='container ' >

      </div>
      <Card className="text-center mt-4 mb-5" style={{ width: '700px', marginLeft: '300px' }}>
        <Card.Header></Card.Header>
        <Card.Body >
          <Card.Title>Fill The Form </Card.Title>
          <label htmlFor="upload">
            <input id='upload' type="file" style={{ display: 'none' }} onChange={(e) => setPersonalDetails({ ...personalDetails, personalImage: e.target.files[0] })} />
            <img className='img-fluid' src={preview ? preview : "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png"} alt="" width={'100px'} />
          </label>
{/*           <h6>Png Image</h6>
 */}

          <Form className='mt-5' padding='20px'>
            <Row>
              <Col>
                <Form.Control className='mb-3' placeholder="Enter Your Name" value={personalDetails.name} onChange={(e) => setPersonalDetails({ ...personalDetails, name: e.target.value })} />
              </Col>
              <Col>
                <Form.Control className='mb-3' placeholder="Enter Your Age" value={personalDetails.age} onChange={(e) => setPersonalDetails({ ...personalDetails, age: e.target.value })} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control className='mb-3' type='date' value={personalDetails.date} onChange={(e) => setPersonalDetails({ ...personalDetails, date: e.target.value })} />
              </Col>
              <Col>
                <Form.Control className='mb-3' placeholder=" Enter Place " value={personalDetails.place} onChange={(e) => setPersonalDetails({ ...personalDetails, place: e.target.value })} />
              </Col>
            </Row>
            <Row>

              <Col>
              </Col>
            </Row>

            <div style={{ marginTop: '10px', textAlign: 'center', padding: '20px' }} value={personalDetails.gender} onChange={(e) => setPersonalDetails({ ...personalDetails, gender: e.target.value })}>

              <input id="male" type="radio" value={'Male'} name="gender" />
              <label htmlFor="male">Male</label>
              <input id="female" className='ms-3' type="radio" value={'Female'} name="gender" />
              <label htmlFor="female">Female</label>
            </div>


          </Form>
          <Button variant="primary" onClick={handleBook}>Book</Button>
          <Button className='ms-2' variant="primary" onClick={reload} >Cancel</Button>
        </Card.Body>
        <Card.Footer className="text-muted mb-3"></Card.Footer>
      </Card>
      <ToastContainer theme='colored' autoClose={500} position='top-center' />

    </>

  )
}

export default Dashboard

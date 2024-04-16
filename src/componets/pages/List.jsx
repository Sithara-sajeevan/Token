import React, { useEffect, useState } from 'react'
import Header from '../Header'
//import { alldetailAPI } from '../../services/allAPI'
import axios from 'axios'

function List() {

const  [dataList,setDataList]= useState([])

const [searchKey,setSearchKey]= useState("")


useEffect(()=>{
  const fetchData = async ()=>{
    try {
      const response = await axios.get('http://localhost:4001/detail/list');
      setDataList(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  fetchData()
},[]) 



/* const handleDelete = async(e)=>{
  e.preventDefault()
  const result = await axios.delete(`${BASE_URL}/detail/delete/register`)
  console.log(result);

}
 */
//const result = await axios.put(`${BASE_URL}/detail/edit`,)
console.log(searchKey);


  return (
    <>
    <Header list/>
        <div style={{textAlign:'center' ,fontSize:'20px'}}> 
        <h5>List of Patients</h5>
        <div className='d-flex justify-content-center'>
        <div className='d-flex mt-5 w-25 '>
          <input value={searchKey} onChange={(e)=>setSearchKey(e.target.value)} type="text" className='form-control' placeholder='Search Name' />
        </div>
        </div>
      
        </div>
         
  
  <table  className='table justify-content-center align-items-center' >
    <thead >
        <tr >
           <th>Name</th>
           
            <th>Age</th>
            <th>Date</th>
            <th>Place</th>
            <th>Gender</th>
{/*            <th>delete</th>
 */}
        </tr>
    </thead>
    <tbody >
    {dataList.filter((item)=>{
       return searchKey.toLowerCase() === '' ? item
      : item.name.toLowerCase().includes(searchKey)
    }).map((data, index) => (
     <tr key={index} > 
      
       <td>{data.name}</td>
    <td> {data.age}</td>
    <td>{data.place}</td>
    <td>{data.date}</td>
    <td>{data.gender}</td>
 {/*  <button onClick={handleDelete}><i class="fa-solid fa-trash"></i></button>  
   */}   </tr> ))} 
    </tbody>
  </table> 


</>
  )
}

export default List
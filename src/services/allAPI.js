import { BASE_URL } from "./baseURL"
import { commonAPI } from "./commonAPI"




export const registerAPI = async(users)=>{
  return await  commonAPI('POST',`${BASE_URL}/user/register`,users,"")
}
export const loginAPI = async(users)=>{
  return await commonAPI('POST',`${BASE_URL}/user/login`,users,"")
}

export const addDetialAPI = async(reqBody,reqHeader)=>{
  return await commonAPI('POST',`${BASE_URL}/detail/add`,reqBody,reqHeader)

}


export const adminRegisterAPI = async(admins)=>{
  return await commonAPI('POST',`${BASE_URL}/admin/register`,admins,"")

}
 export const adminLoginAPI = async(admins)=>{
  return await commonAPI('POST',`${BASE_URL}/admin/login`,admins,"")

} 
/* 
//edit 
export const deleteUserAPI= async(userId)=>{
  return await commonAPI('DELETE',`${BASE_URL}/detail/delete/${userId}`)

}   */
 


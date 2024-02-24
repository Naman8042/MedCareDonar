import { useState } from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Search(){
    const navigate = useNavigate()
    const[data,setdata] = useState("")
  const location = useLocation()
  const {from}=location.state
  const id = from.datas._id
  const email = from.datas.email
  console.log(id)
  console.log(email)
  let submit= async()=>{
        
    try{
        alert('submitted')
         
      await axios.post("http://localhost:4000/api/v1/edit",{id,email})
      .then(res=>setdata(res))
       navigate("/admin")
        
    }
    catch{

    }
  }
  
    return(
        <div>
           <button onClick={submit}>submit</button>
        </div>
    )
}
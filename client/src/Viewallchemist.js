


import {useState,useEffect} from "react"
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar'
import { toast } from "react-toastify"

export default function Search(){
    const navigate = useNavigate()
  const[data,setData]=useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/api/v1/showchemist",{
             method:"GET"
            })
            .then((res)=>res.json())
            .then((data)=>setData(data.data))
            .catch((err)=>console.log(err))
            
       },[])
 
    console.log(data);
    
    // const[a,seta] = useState("");
    
    let i=1;
    return (
      <div className="bg-gradient-to-r from-indigo-800 h-screen">
      <Navbar/>   
     <div className='flex justify-center items-center text-4xl m-[2%] bg-gradient-to-r from-indigo-400'> 
     View All Registered Chemist 
     </div>
        
   <div className="px-[8%] mt-[5%] w-full">
     <div className="flex ">
         <div className="w-1/6 text-center text-xl border-collapse bg-black border-4 border-white text-white  p-[1%] px-[2.5%] ">Serial No</div>
         <div className="w-1/6 text-center text-xl border-collapse bg-black border-4 border-white text-white  p-[1%] px-[2%] ">Owner Name</div>
         <div className="w-1/6 text-center text-xl border-collapse bg-black border-4 border-white text-white  p-[1%] px-[2%] ">Shop Name</div>
         <div className="w-1/6 text-center text-xl border-collapse bg-black border-4 border-white text-white  p-[1%] px-[2%] ">Address</div>
         <div className="w-1/6 text-center text-xl border-collapse bg-black border-4 border-white text-white  p-[1%] px-[2.5%]">Timings</div>
         <div className="w-1/6 text-center text-xl border-collapse bg-black border-4 border-white text-white  p-[2%] px-[2.5%]">Phone No</div>
         <div className="w-2/6 mx-[1%]"></div>
     </div>
     {
         data.map((datas)=>(
             <div className="flex ">
             <div className="w-1/6  text-center text-xl border-collapse bg-black border-4 border-white text-white p-[1%] ">{i++}</div>
             <div className="w-1/6 text-center text-xl border-collapse bg-black border-4 border-white text-white p-[1%] ">{datas.name}</div>
             <div className="w-1/6 text-center text-xl border-collapse bg-black border-4 border-white text-white p-[1%] ">{datas.shopname}</div>
             <div className="w-1/6 text-center text-xl border-collapse bg-black border-4 border-white text-white p-[1%] ">{datas.Address}</div>
             <div className="w-1/6 text-center text-xl border-collapse bg-black border-4 border-white text-white p-[1%] ">{datas.time}</div>
             <div className="w-1/6 text-center text-xl border-collapse bg-black border-4 border-white text-white p-[1%] ">{datas.phoneNumber}</div>
             <div className="flex w-2/6"><button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600 m-[4%]"><Link to="/viewmychemist" state={{ from: {datas}}}>Buy Now</Link></button>
             <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600 m-[4%]"><Link to="/donate" state={{ from: {datas}}}>Sell Now</Link></button></div>
             
             </div>
         ))
     }
   </div>
   </div>
    )}
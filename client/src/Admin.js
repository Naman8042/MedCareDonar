import {useState,useEffect} from "react"
import axios from 'axios'
import Navbar from './Navbar'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useLocation,Link } from 'react-router-dom'
function Search(props){
  const navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem("email")){
          toast.error("login first")
          navigate("/login")
        }  
       },[])
    
    const[data,setData]=useState([])
    useEffect(() => {
        const fetchData = async()=> {
          const d = await axios.post("http://localhost:4000/api/v1/showallavailable",{chemistemail:localStorage.getItem("email")})
          .then((res)=>setData(res.data.data))
     
          
        }
        fetchData()
      }, []);
    async function onAccept(data){
      const id = data._id;
     const email = data.email
     try{
      alert('submitted')
       
    await axios.post("http://localhost:4000/api/v1/edit",{id,email})
    window.location.reload(); 
     
      
  }
  catch{

  }
  } 
    async function onDecline(data){
      const id = data._id;
     const email = data.email
     try{
      alert('submitted')
       
    await axios.post("http://localhost:4000/api/v1/decline",{id,email})
    window.location.reload(); 
     
      
  }
  catch{

  }
  } 
    console.log(data)
    let i=1;
    return (
        <div>
         <Navbar/>   
        <div className='flex justify-center items-center text-4xl m-[2%]'> 
        View All Available Medicine
        </div>
           
      <div className="px-[8%] mt-[5%] w-full">
        <div className="flex ">
            <div className="w-1/6 p-[1%] text-center text-xl  border-collapse border border-slate-400">Sno</div>
            <div className="w-1/6 p-[1%] text-center text-xl border-collapse border border-slate-400">Donar Name</div>
            <div className="w-1/6 p-[1%] text-center text-xl border-collapse border border-slate-400">Medicine Name</div>
            <div className="w-1/6 p-[1%] text-center text-xl border-collapse border border-slate-400">Quantity</div>
        </div>
        {
            data.map((datas)=>(
                <div className="flex ">
                <div className="w-1/6 p-[1%] text-center text-xl border-collapse border border-slate-300 ">{i++}</div>
                <div className="w-1/6 p-[1%] text-center text-xl border-collapse border border-slate-300 ">{datas.donarName}</div>
                <div className="w-1/6 p-[1%] text-center text-xl border-collapse border border-slate-300 ">{datas.brandName}</div>
                <div className="w-1/6 p-[1%] text-center text-xl border-collapse border border-slate-300 ">{datas.Quantity}</div>
                <div className="w-1/6 p-[1%] text-center text-xl "><button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" onClick={()=>onAccept(datas)}>Accept</button></div>
                <div className="w-1/6 p-[1%] text-center text-xl "><button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" onClick={() => onDecline(datas)}>Reject</button> </div>
                </div>
            ))
        }
      </div>
      </div>
    )
}
export default Search
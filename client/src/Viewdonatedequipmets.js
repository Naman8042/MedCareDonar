import {useState,useEffect} from "react"
import axios from 'axios'
import Navbar from './Navbar'
import { toast } from "react-toastify";
import { useLocation,useNavigate } from 'react-router-dom'
function Search(){
  const navigate = useNavigate()
  const[data,setData] = useState("")
  
  
    useEffect(() => {
      
     
        const fetchData = async()=> {
          const d = await axios.get("http://localhost:4000/api/v1/showallavailable")
          .then((res)=>setData(res.data.data))
          
          
        }
        fetchData()
      }, []);
      
  
    const length = data.length
    let i=1;
    return (
         length===0?(
          <div className="bg-gradient-to-r from-indigo-400">
          <Navbar/>
          <div className='flex justify-center items-center text-4xl m-[2%]' > 
        No Medicine is Available
        </div>
          </div>
          
         ):(
          <div >
         <Navbar/>   
        <div className='flex justify-center items-center text-4xl m-[2%]' > 
        View All Available Medicine
        </div>
           
      <div className="px-[8%] mt-[5%] w-full">
        <div className="flex ">
            <div className="w-1/3 text-center text-xl  border-collapse border border-slate-400">Serial Number</div>
            {/* <div className="w-1/4 text-center text-xl border-collapse border border-slate-400">Donar Name</div> */}
            <div className="w-1/3 text-center text-xl border-collapse border border-slate-400">Medicine Name</div>
            <div className="w-1/3 text-center text-xl border-collapse border border-slate-400">Quantity</div>
        </div>
        {
            data.map((datas)=>(
                <div className="flex">
                <div className="w-1/3 text-center text-xl border-collapse border border-slate-300 ">{i++}</div>
                {/* <div className="w-1/3 text-center text-xl border-collapse border border-slate-300 ">{datas.donarName}</div> */}
                <div className="w-1/3 text-center text-xl border-collapse border border-slate-300 ">{datas.brandName}</div>
                <div className="w-1/3 text-center text-xl border-collapse border border-slate-300 ">{datas.Quantity}</div>
                </div>
            ))
        }
      </div>
      </div>
         )
        
    )
}
export default Search
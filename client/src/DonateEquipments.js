import {useEffect, useState,} from "react"
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import react from "react"
import { toast } from "react-toastify";
import Nav from "./Navbar";
import 'react-toastify/dist/ReactToastify.css';

function Search(){
  const navigate = useNavigate();
  const[donarName,setdonarName]=useState("");
  const[mobileNumber,setmobileNumber]=useState("")
  const[address,setaddress] = useState("")
  const[pinCode,setpinCode]=useState("")
  const[Description,setDescription] = useState("")
  const[equipmentName,setmedicineName]=useState("")
  const[brandName,setbrandName]=useState("")
  
 
  
  const[data1,setData1]=useState("")
  const[data,setData]=useState([])
    useEffect(() => {
        const fetchData = async()=> {
          const d = await axios.get("http://localhost:4000/api/v1/showequip")
          .then((res)=>setData(res.data.data))
     
          
        }
        fetchData()
      }, []);
    console.log(data)
     
     
  
  
    let i =1;
    console.log(data1)
    return (
    <div className="mt-[5.2%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen" >
      <Nav/>
        <div className="grid content-center justify-center my-[2%]" >
          <h1 className="text-4xl font-serif">Donated Equipments</h1>
        </div>
        <div className="flex mx-[2%]">
            <div className="w-1/5 text-center text-2xl  border-collapse border-4 border-grey">Serial Number</div>
            <div className="w-1/5 text-center text-2xl border-collapse border-4 border-grey">Donor's Name</div>
            {/* <div className="w-1/5 text-center text-2xl border-collapse border-4 border-grey">Donor's Contact No</div> */}
            <div className="w-1/5 text-center text-2xl border-collapse border-4 border-grey">Equipment Name</div>
            <div className="w-1/5 text-center text-2xl border-collapse border-4 border-grey">Brand Name</div>
            <div className="w-1/5 "></div>
        </div>
        {
          data.map((datas)=>(
            <div className="flex mx-[2%]">
             <div className="w-1/5 text-center text-xl border-collapse border border-slate-300 flex items-center justify-center">{i++}</div> 
            <div className="w-1/5 text-center text-xl border-collapse border border-slate-300 flex items-center justify-center">{datas.donarName}</div>
            <div className="w-1/5 text-center text-xl border-collapse border border-slate-300 flex items-center justify-center">{datas.equipmentName}</div>
            <div className="w-1/5 text-center text-xl border-collapse border border-slate-300 flex items-center justify-center">{datas.brandName}</div>
            <div className="w-1/5"><button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600 m-[4%]">Book Now</button></div>
            </div>
          ))
        }
    </div>

    )
}
export default Search

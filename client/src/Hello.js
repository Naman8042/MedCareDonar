import {useState,useEffect} from "react"
import axios from 'axios'
import Navbar from './Navbar'
function Search(){
    const[data,setData]=useState([])
    useEffect(() => {
        const fetchData = async()=> {
          const d = await axios.post("http://localhost:4000/api/v1/showuser",{email:localStorage.getItem("email")})
          .then((res)=>setData(res.data.data))
     
          
        }
        fetchData()
      }, []);
  
  
    console.log(data.length)
    let i=1;
    return (
        <div className="bg-gradient-to-r from-indigo-200 via-purple-500 to-pink-300 h-screen pt-[5%]">
         <Navbar/>   
        <div className='flex justify-center items-center text-4xl m-[2%]'> 
        View All Donation 
        </div>
           
      <div className="px-[8%] mt-[5%] w-full bg-gradient-to-r from-indigo-200 via-purple-500 to-pink-300">
        <div className="flex ">
            <div className="w-1/4 text-center text-xl  border-collapse border-2 border-black">Serial Number</div>
            <div className="w-1/4 text-center text-xl border-collapse border-2 border-black">Donor Name</div>
            <div className="w-1/4 text-center text-xl border-collapse border-2 border-black">Medicine Name</div>
            <div className="w-1/4 text-center text-xl border-collapse border-2 border-black">Quantity</div>
        </div>
        {
            data.map((datas)=>(
                <div className="flex">
                <div className="w-1/4 text-center text-xl border-collapse border border-black ">{i++}</div>
                <div className="w-1/4 text-center text-xl border-collapse border border-black ">{datas.donarName}</div>
                <div className="w-1/4 text-center text-xl border-collapse border border-black ">{datas.medicineName}</div>
                <div className="w-1/4 text-center text-xl border-collapse border border-black ">{datas.Quantity}</div>
                </div>
            ))
        }
      </div>
      </div>
    )
}
export default Search
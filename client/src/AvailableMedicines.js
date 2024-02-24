import {useState,useEffect} from "react"
import axios from 'axios'
import react from "react"
import Navbar from "./Navbar"
import { toast } from "react-toastify";
import { useLocation ,useNavigate} from 'react-router-dom'
function Search(){
  const navigate = useNavigate()
  const location = useLocation()
  const {from}=location.state
  const chemistemail = from.datas.email

  
  const[donarName,setdonarName]=useState("");
  const[mobileNumber,setmobileNumber]=useState("")
  const[address,setaddress] = useState("")
  const[pinCode,setpinCode]=useState("")
  const[Quantity,setQuantity]=useState("")
  const[medicineName,setmedicineName]=useState("")
  const[brandName,setbrandName]=useState("")
  const[manufactureDate,setmanufactureDate]=useState("")
  const[expiryDate,setexpiryDate]=useState("")
  const[Category,setCategory]=useState("")
  const[image,setimage]=useState("")
  const[data1,setData1]=useState("")
  
  let submit= async(e)=>{
      e.preventDefault();
      try{
        if(!localStorage.getItem("email")){
          toast.error("Login First")
          navigate("/login")
        } 
        toast.success("Request Sent Successfully") 
        navigate("/")    
        await axios.post("http://localhost:4000/api/v1/addMedicine", {donarName,mobileNumber,
        address,
        pinCode,
        medicineName,Quantity, brandName, manufactureDate,expiryDate,Category,image,email:localStorage.getItem("email"),chemistemail})
        .then((res)=>setData1(res))
        
          
      }
      catch{
  
      }
    }
     
    const handleSubmit = async(e)=>{
      const file = e.target.files[0]
      const base64 = await convertToBase64(file);
      
      setimage(...image,base64);
      console.log(image)
    }
    return (
    <div className="bg-gradient-to-r from-indigo-200 via-purple-500 to-pink-300 h-full">
      <Navbar/>
        <div className=" items-center my-[2%] pt-[3%] w-full">
          <div className="flex justify-center font-serif text-6xl rounded-xl p-[1%] w-full">Sell Medicine</div>
        </div>
        <div className="grid grid-rows-5 grid-flow-col gap-2.5 mx-[4%] px-1  ">
        <div ><label for={donarName}>Donor Name</label> <br/><input  className="border-solid border-2 border-black h-10 w-full p-2 " type="text" value={donarName} onChange={(e)=>{setdonarName(e.target.value)}}/> <br/> </div>    
        <div ><label for={mobileNumber}>Mobile Number</label> <br/><input  className="border-solid border-2 border-black h-10 w-full p-2" type="text" value={mobileNumber} onChange={(e)=>{setmobileNumber(e.target.value)}}/> <br/> </div>    
        <div ><label for={address}>Address</label> <br/><input  className="border-solid border-2 border-black h-10 w-full p-2" type="text" value={address} onChange={(e)=>{setaddress(e.target.value)}}/> <br/> </div>    
        <div ><label for={Quantity}>Quantity</label> <br/><input  className="border-solid border-2 border-black h-10 w-full p-2  " type="number" value={Quantity} onChange={(e)=>{setQuantity(e.target.value)}}/></div>    
        <div ><label for={medicineName}>Medicine Name</label> <br/><input  className="border-solid border-2 border-black h-10 w-full p-2" type="text" value={medicineName} onChange={(e)=>{setmedicineName(e.target.value)}}/> <br/> </div>    
        <div ><label for={manufactureDate}>Manufacture Date</label> <br/><input  className="border-solid border-2 border-black h-10 w-full p-2" type="date" value={expiryDate} onChange={(e)=>setexpiryDate(e.target.value)}/></div>
        <div ><label for={pinCode}>Pin Code</label> <br/><input  className="border-solid border-2 border-black h-10 w-full p-2" type="text" value={pinCode} onChange={(e)=>{setpinCode(e.target.value)}}/> <br/> </div>
        <div ><label for={brandName}>Medicine Generic Name</label> <br/><input  className="border-solid border-2 border-black h-10 w-full p-2" type="text" value={brandName} onChange={(e)=>{setbrandName(e.target.value)}}/></div>
        <div ><label for={expiryDate}>Expiry Date</label> <br/><input  className="border-solid border-2 border-black h-10 w-full p-2" type="date" value={manufactureDate} onChange={(e)=>setmanufactureDate(e.target.value)}/></div>
        <div className="border-solid border-2 border-black w-full p-2"><label for={Category}>Select Category</label>
        
        <br/>
           <select className=" w-full " onClick={(e)=>setCategory(e.target.value)}>
           
           <option >Tablet</option>
           <option >Syrup</option>
           
         </select></div>
        </div>
        <div className="grid content-center justify-center p-10 mt-10">
        <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"onClick={submit}>SUBMIT</button>    
        </div>
    </div>

    )
}
export default Search
function convertToBase64(file){
  return new Promise((resolve,reject)=>{
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file);
    fileReader.onload=()=>{
      resolve(fileReader.result)
    };
    fileReader.onerror=(error)=>{
      reject(error)
    }
  }) 
}
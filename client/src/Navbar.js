import { useNavigate ,Link} from "react-router-dom";
import {  toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Medcaredonor from './medcaredonor.png'
import Mylogo from './mylogo.jpg'
import logo1  from './logo3.jpg'
import logo2  from './logo2.jpg'
// import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'

import 'react-toastify/dist/ReactToastify.css';
export default function Nav(){
  const navigate = useNavigate();
  function handleBeforeUnload(){
  localStorage.removeItem("success")
  localStorage.removeItem("Role")
  localStorage.removeItem("email")
  toast.success("Logged Out Successfully")
  navigate("/login")
}
function onLoad(){
  localStorage.removeItem("success")
  localStorage.removeItem("Role")
  localStorage.removeItem("email")
  
}

    return(
        
        <div className="flex flex-wrap fixed w-full top-[0%] bg-gradient-to-l from-indigo-700 bg-black" >
          
          <div className="flex w-2/12 flex justify-center items-center text-white">
          {/* {/* <div className="h-1/2"><img src={logo1} alt="" className="p-[1%] roundex-3xl bg-gray "/></div> */}
          <div className="w-full"><img src={logo1} alt="" className=" p-[0%] roundex-3xl bg-gray object-fit w-90 h-20"/></div>
          </div>
          <div className="w-8/12 flex flex-row-reverse flex-wrap p-5 gap-5 text-white ">
            
            {
              (localStorage.getItem("Role"))==="chemist"?
                <button className="text-lg mx-2 text-center hover:text-xl hover:border-b-2"><Link to="/admin">View All Requested Medicine</Link></button>
              :
              ""
              
            }
            {
              (localStorage.getItem("Role"))==="user"?<div>
              <button className="text-lg mx-2 text-center hover:text-xl hover:border-b-2"><Link to="/view">
              My Sold Medicines
              </Link></button>
              <button className="text-lg mx-2 text-center hover:text-xl hover:border-b-2"><Link to="/rewards">My Rewards</Link></button>
              </div>:
              ""
            }
            <div className=""><Link to="/viewchemist"><button
        type="button"
        className="inline-block font-serif text-black rounded bg-amber-300 px-6  py-[2%] text-xl rounded-xl  transition duration-150 ease-in-out text-2xl hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
      >
        View Chemist
      </button></Link></div>
            <div className="text-lg mx-1 text-center hover:text-xl hover:border-b-2 "><Link to="/contactus">Contact Us</Link></div>
            {/* <div className="text-lg mx-1 text-center hover:text-xl hover:border-b-2"><Link to="/aboutus">About</Link></div> */}
            
            <div className="text-lg mx-1 text-center hover:text-xl hover:border-b-2  "><Link to="/donateequipments">Buy Equipments</Link></div>
            <div className="text-lg mx-1 text-center hover:text-xl hover:border-b-2  "><Link to="/">Home</Link></div>
          </div>
          <div className="w-2/12 flex justify-center items-center hover:text-xl hover:border-b-2">
          {
              (localStorage.getItem("success"))?
                <button onClick={handleBeforeUnload} className="text-base  text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >Logout</button>
              :
              <div>
                <button className="text-base mx-2 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"><Link to="/login">Login</Link></button>
                <button  className="text-base text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"><Link to="/signup">SignUp</Link></button>
              </div>
              
            }
          </div>
        </div>
    )
}
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Medcaredonor from './medcaredonor.png'
import Mylogo from './mylogo.jpg'
import logo1 from './logo3.jpg'
import logo2 from './logo2.jpg'
// import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'

import 'react-toastify/dist/ReactToastify.css';
export default function Nav() {
  const navigate = useNavigate();
  function handleBeforeUnload() {
    localStorage.removeItem("success")
    localStorage.removeItem("Role")
    localStorage.removeItem("email")
    toast.success("Logged Out Successfully")
    navigate("/login")
  }
  function onLoad() {
    localStorage.removeItem("success")
    localStorage.removeItem("Role")
    localStorage.removeItem("email")

  }

  return (

    <div className="absolute top-0 flex justify-between items-center shadow-md w-full px-10 py-3" >

      <div className="text-xl font-bold">
        MedCareDonor
      </div>
      <div className="">

        {
          (localStorage.getItem("Role")) === "chemist" ?
            <button className=""><Link to="/admin">View All Requested Medicine</Link></button>
            :
            ""

        }
        {
          (localStorage.getItem("Role")) === "user" ? <div>
            <button className=""><Link to="/view">
              My Sold Medicines
            </Link></button>
            <button className=""><Link to="/rewards">My Rewards</Link></button>
          </div> :
            ""
        }


      </div>
      {/* <div className="text-lg mx-1 text-center hover:text-xl hover:border-b-2"><Link to="/aboutus">About</Link></div> */}
      <div className=" "><Link to="/">Home</Link></div>

      <Link to="/contactus">Contact Us</Link>
      <Link to="/viewchemist"><button
        className=""
      >
        View Chemist
      </button></Link>
      <div className=""><Link to="/donateequipments">Buy Equipments</Link></div>

      <div className="">
        {
          (localStorage.getItem("success")) ?
            <button onClick={handleBeforeUnload} className="" >Logout</button>
            :
            <div className=" flex gap-2">
              <button className="bg-blue-500 text-white rounded-2xl w-20 py-1"><Link to="/login">Login</Link></button>
              <button className="bg-blue-500 text-white rounded-2xl w-20 py-1"><Link to="/signup">SignUp</Link></button>
            </div>

        }
      </div>
    </div>
  )
}
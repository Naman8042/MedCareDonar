// name,email,phoneNumber,password,role
import {useState} from "react"
import axios from 'axios'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate ,Link} from "react-router-dom";
// import logo from './image1.jpg';

function Search(){

  const[password,setPassword]=useState("");
  const[name,setName] = useState("")
  const[email,setEmail] = useState("")
  const[phoneNumber,setPhoneNumber] = useState("")
  const[data,setData]=useState("")
  
  let submit= async(e)=>{
      e.preventDefault();
      try{
          alert('submitted')
           
        await axios.post("http://localhost:4000/api/v1/SignUp",{name,email,phoneNumber,password})
        .then((res)=>setData(res.data.message))
         
          
      }
      catch{
  
      }
    }
    console.log(data);
    return (
        // <div className="flex w-screen bg-black item-center">
        //     <div className="flex-initial w-1/2">
        //     <h1>Sign Up</h1>
        //     <div><input className="border-b-2 border-solid border-black w-3/5" placeholder="Enter your Name" type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br/></div>
        //     <div><input className="border-b-2 border-solid border-black w-3/5" placeholder="Enter your email" type="text"value={email} onChange={(e)=>setEmail(e.target.value)}/><br/></div>
        //     <div><input className="border-b-2 border-solid border-black w-3/5" placeholder="Enter your Phone Number" type="number"value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/><br/></div>
        //     <div><input className="border-b-2 border-solid border-black w-3/5" placeholder="Enter your Password" type="text"value={password} onChange={(e)=>setPassword(e.target.value)}/><br/></div>
        //     <div><input className="border-b-2 border-solid border-black w-3/5" placeholder="Enter your Role" type="text"value={role} onChange={(e)=>setRole(e.target.value)}/><br/></div>
        //     <div></div><button onClick={submit}>SUBMIT</button>
        //     </div>
        //     <div className="flex-initial w-1/2">
        //      <img src={logo} alt="hello"/>
        //     </div>
            
        // </div>
        <>
        <Navbar/>
        <div className="m-[4%]"></div>
        <div className="flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
               Sign in as User
            </h1>
            
            <form className="mt-6">
                <div className="mb-2">
                    <label
                        for="name"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Enter Your Name
                    </label>
                    <input
                        type="name"
                        onChange={(e)=>{setName(e.target.value)}}
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                    <label
                        for="email"
                        
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Enter Your Email
                    </label>
                    <input
                        type="email"
                        onChange={(e)=>{setEmail(e.target.value)}}
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                
                <div className="mb-2">
                    <label
                        for="password"
                        
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Enter Your Password
                    </label>
                    <input
                        type="password"
                        onChange={(e)=>{setPassword(e.target.value)}}
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                    <label
                        for="phoneNumber"
                        
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Enter Your Mobile Number
                    </label>
                    <input
                        type="number"
                        onChange={(e)=>{setPhoneNumber(e.target.value)}}
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                {/* <div className="mb-2">
                    <label
                        for="role"
                        
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Enter Your Role
                    </label>
                    <select onClick={(e)=>{setRole(e.target.value)}}className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" >
                  <option >admin</option>
                  <option >user</option>
                  </select>
                </div> */}
                
                <div className="mt-6">
                    <button onClick={submit}className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                        Login
                    </button>
                </div>
                <p className="mt-8 font-light text-center text-gray-700">OR</p>
          <p className="mt-8 font-light text-center text-gray-700">
              
              <Link to="/chemist">Sign up As Chemist</Link>
               
              
          </p>
            </form>

           
        </div>
    </div>
    <Footer/>
    </>

    )
}
export default Search
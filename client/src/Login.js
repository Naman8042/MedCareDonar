import {useState,useEffect} from "react"
import axios from 'axios'
import { useNavigate ,Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Search(){
    const navigate = useNavigate();
    const[role,setRole]=useState("");
  const[password,setPassword]=useState("");
  const[email,setEmail] = useState("")
  const[data,setData]=useState("")
  function login(){
    if(data){
     toast.success("Logged In Successfully")   
    navigate('/') }
    else{
        if(data===undefined){
            toast.error("Wrong User Details")
            setData("")
        }
       
    }
    }
 
  let submit= async(e)=>{
      e.preventDefault();
      try{
        
           
        await axios.post("http://localhost:4000/api/v1//Login",{email,password,role})
        .then((res)=>{setData(res.data.success);localStorage.setItem("success",res.data.success)
        localStorage.setItem("Role",res.data.data); localStorage.setItem("email",res.data.email);setData(res.data.success)

    })
        
        login()
        
        
          
      }
      catch(err){
       
      }
    }
    console.log(data)
    return (
      <div>
        <div></div>
        <div>
          <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
             Sign in
          </h1>
          <form className="mt-6">
              <div className="mb-2">
                  <label
                      for="email"
                      className="block text-sm font-semibold text-gray-800"
                  >
                      Email
                  </label>
                  <input
                      type="email"
                      className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      onChange={(e)=>{setEmail(e.target.value)}}  
                  />
              </div>
              <div className="mb-2">
                  <label
                      for="password"
                      className="block text-sm font-semibold text-gray-800"
                  >
                      Password
                  </label>
                  <input
                      type="password"
                      className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      onChange={(e)=>{setPassword(e.target.value)}}  
                  />
              </div>
             
              
                            
              <div className="mt-6">
                  <button onClick={submit}className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                      Login
                  </button>
              </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
              {" "}
              Don't have an account?{" "}
              <Link to="/signup">Sign up</Link>
                  Sign up
              
          </p>
      </div>
  </div>
        </div>
      </div>
    )
}
export default Search
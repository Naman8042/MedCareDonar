import {useState,useEffect} from "react"
import axios from 'axios'
import Navbar from './Navbar'
import spotify from './spotify.png'
import amazon from './amazon.png'
import zomato from './zomato.png'
function Search(){
    const[data,setData]=useState([])
    useEffect(() => {
        const fetchData = async()=> {
          const d = await axios.post("http://localhost:4000/api/v1/showuser",{email:localStorage.getItem("email")})
          .then((res)=>setData(res.data.data))
     
          
        }
        fetchData()
      }, []);
  
  
    const Rewards = data.length*50;
    return (
      <div className="font-serif w-full h-screen bg-gradient-to-r from-blue-900">
      <Navbar/>   
         
          <div className="flex justify-end items-center text-2xl mt-[2%] font-serif">
            Your Points: {Rewards}
          </div>
          <div className='flex justify-center items-center text-4xl font-serif m-[2%]'> 
          Your Rewards
          </div>
          <div className="flex justify-center items-center flex-wrap font-serif">
          <div className='flex flex-col justify-center  rounded-2xl m-[0.5%] font-serif'>
            <img src = {amazon} alt='hello' className='w-72 h-72 justify-center item-center m-[1%] font-serif border-4 border-black rounded-xl' />
            <h1 className='text-2xl p-[1%] font-serif'>Rs.200 Amazon Gift Voucher</h1>
            <h1 className="text-start m-[1%] font-serif">
                        Min Points:150
                    </h1>
                    <button className=" m-[1%] bg-black text-white w-1/3 flex justify-center item-center font-serif">
                        Claim Now
                    </button>

            
        </div>
        <div className='flex flex-col justify-center rounded-2xl m-[0.5%] font-serif'>
            <img src = {zomato} alt='hello' className='w-72 h-72 m-[1%] font-serif border-4 border-black rounded-xl' />
            <h1 className='text-2xl p-[1%] font-serif'>Rs.400 on first Zomato Order</h1>
            <h1 className="text-start m-[1%] font-serif">
                        Min Points:500
                    </h1>
                    <button className="bg-black text-white w-1/3 flex justify-center item-center m-[1%] font-serif">
                        Claim Now
                    </button>

            
        </div>
        <div className='flex flex-col justify-center font-serif rounded-2xl m-[0.5%]'>
            <img src = {spotify} alt='hello' className='w-72 h-72 justify-center item-center m-[1%] font-serif border-4 border-black rounded-xl' />
            <h1 className='text-2xl p-[1%] font-serif'>Rs.150 Spotify premium Subscription</h1>
            <h1 className="text-start m-[1%] font-serif">
                        Min Points:250
                    </h1>
                    <button className="m-[1%] bg-black text-white w-1/3 flex justify-center item-center font-serif">
                        Claim Now
                    </button>

            
        </div>

          </div>
        
      </div>
    )
}
export default Search
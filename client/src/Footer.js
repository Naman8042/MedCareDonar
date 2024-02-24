import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/facebook'
import 'react-social-icons/instagram'
import 'react-social-icons/twitter'
import 'react-social-icons/linkedin'
import 'react-social-icons/email'
export default function footer(){
    return (
        <div className='overflow-x-hidden bg-gradient-to-l from-indigo-700 bg-black'>
        <div className="flex  border-b-2 border-white">
            <div className="flex my-[2%] w-1/2">
                <div className="w-1/2 text-center text-white">
                    <h1 className="m-[0.5%] text-2xl my-[2%]">MedCareDonor</h1>
                    <h1 className="m-[0.5%] text-lg">New Delhi</h1>
                    <h1 className="m-[0.5%] text-lg">Phone : +91123456789</h1>
                    <h1 className="m-[0.5%] text-lg">Email : medcaredonor@gmail.com</h1>
                </div>
                <div className="w-1/2 text-center text-white">
                    <h1 className="text-xl">USEFUL LINKS</h1>
                    <div className="m-[0.5%] text-lg">Home</div>
                    <div className="m-[0.5%] text-lg">Services</div>
                    <div className="m-[0.5%] text-lg">About</div>
                    <div className="m-[0.5%] text-lg">Contact Us</div>
                </div>
            </div>
            <div className="w-1/2 my-[2%] flex text-white ">
                <div className='w-1/2'>
                <h1 className="text-xl mb-[3%] mt-[1%]">SUBSCRIBE TO OUR NEWSLETTER</h1>
                <span className="w-3/4 mr-[1%]"><input className="p-[3%]"type="text" placeholder="Enter Your Email"/></span>
                <span><SocialIcon  url="www.email.com" /></span>
                </div>
                <div className='w-1/2 mt-[2%] text-white'>
                <h1 className="text-xl m-[1%] ">FOLLOW US</h1>
                <span className="m-[2%]"><SocialIcon  url="www.facebook.com" /></span>                
                <span className="m-[2%]"><SocialIcon  url="www.instagram.com" /></span>
                <span className="m-[2%]"><SocialIcon  url="www.linkedin.com" /></span>                
                <span className="m-[2%]"><SocialIcon  url="www.twitter.com" /></span>               
                </div>
            </div>
            
        </div>
        <div className='flex  bg-blue/1 justify-center py-[1%] text-white'>
                Copyright ©️ 2024.All Rights Reserved.
            </div>
        </div>
    )
}
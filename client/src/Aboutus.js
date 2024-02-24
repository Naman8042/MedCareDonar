import React, { Component } from "react";
import Guest from './guest.png'
import Navbar from './Navbar'
import Footer from './Footer'
// import "./Aboutus.css";

class App extends Component {
  render() {
    return (
      <div className="bg-gradient-to-r from-indigo-700">
        <Navbar/>
        <div className="bg-gradient-to-r from-indigo-700">
          <h1 className="text-center text-6xl font-serif text-black mt-[5%] ">MedCareDonor</h1>
          <p className="flex align-items-center justify-center mt-[0.5%] text-2xl font-serif">India’s leading Digital Healthcare Platform.</p>
          <p className="flex align-items-center justify-center mb-[1%] text-2xl font-serif">We focus on simplifying Healthcare & Impacting lives.</p>
        </div>
        <section className="flex mt-[-1%]">
          <div className="w-2/3 bg-gradient-to-r from-indigo-700">
            {/* <div className="text-center text-3xl mt-[2%] text-white ">Who Are We? </div> */}
            <span className="flex align-items-center justify-center font-serif text-xl m-[1%] text-black ">
              Each year, 39 million people are pushed into poverty by out- of
              pocket payment for healthcare,with world bank data reveals that
              household on average devote 5.8% of thier expenditures to medical
              care.
              So to overcome this problem, MedCareDonor is amazing platform where user can
              donate surplus medicines and medical equipments in order to help needy people.
            </span>
          </div>
          <div className="w-1/3 bg-transparent border-8 border-black">
            <img src="https://medicomart.in/images/aboutus1.jpg" alt="" />
          </div>
        </section>
        <div className="separation"></div>
        <div>
          <div>
            {/* <div><img src={Guest} alt=""/></div> */}
            <div>
              {/* <h1>Naman Sharma</h1> */}
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;

// src/App.js
import React, {} from "react";
import Navbar from './Navbar'
import "./contactus.css";
import Footer from './Footer'
export default function App() {
  return (
    <div className="bg-gradient-to-r from-indigo-400">
    {/* <div className="bg-gradient-to-r from-indigo-200 via-purple-500 to-pink-300"> */}
    <Navbar/>
    <div className="m-[4.5%]"></div>

    <div style={{ width: "100%", height: "100%"}}>
      <div className="heading" style={{ textAlign: "center", width: "100%" }}>
        Contact Us
      </div>

      <div className="container bg-gradient-to-r from-indigo-400">
        <div className="left" style={{ color: "white" }}>
          <div
            style={{
              fontWeight: "600",
              fontSize: "35px",
              margin: "auto",
              width: "90%",
              height: "100px",
              height: "fit-content",
              marginTop: "50px",
            }}
          >
            Contact For Business
          </div>
          {/* <div
            style={{
              margin: "auto",
              width: "80%",
              height: "50px",
              fontWeight: "600",
              fontSize: "15px",
              marginTop: "10px",
            }}
          >
            Already a customer or need help with a billing issue?
          </div> */}

          <div
            style={{
              fontWeight: "600",
              fontSize: "30px ",
              marginTop: "20px",
              margin: "auto",
              width: "80%",
              minHeight: "10px",
            }}
          >
            India Sales
          </div>

          <div
            style={{
              display: "flex",
              margin: "auto",
              marginTop: "10px",
              width: "80%",
            }}
          >
            <img
              style={{ height: " 100%", width: " 10%" }}
              src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-01-256.png"
              alt=""
            />
            <span
              style={{
                fontWeight: "600",
                fontSize: "17px",
                height: "100%",
                marginTop: "5px",
              }}
            >
              +1800 484 484{" "}
            </span>
          </div>

          <div
            style={{
              margin: " auto",
              marginTop: "300px",
              width: "80%",
              height: "50px",
              display: "flex",
                
            
            }}
          >
            <div style={{marginRight:"4%"}}>
            <img
              style={{ height: " 100%", width: "100%",
              marginLeft: "10px", }}
              src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Instagram-64.png"
              alt=""
            />
            </div>
            <div style={{marginRight:"4%"}}>
            <img
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "10px",
                marginLeft: "10px",
              }}
              src="data:image/png;base64,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"
              alt=""
            />
            </div>
            <div style={{marginRight:"4%"}}>
            <img
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "10px",
                marginLeft: "10px",
              }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEUAAAD///8aGhoJCQkFBQX8/PwMDAz09PQHBwcQEBD6+vqYmJijo6P29vbc3Nw6Ojrq6urGxsa6urp4eHjr6+tqampSUlJ+fn7Nzc1lZWVfX181NTXZ2dmKioq9vb1FRUUuLi6tra0kJCSIiIhWVlaTk5MvLy8YGBhGRkagoKCXl5dxcXEgICD1uq7FAAAK/0lEQVR4nO1da1siPQyttJQW5aIIKnhBRMHV///7Xq/Tk8LATJvu+3Sfnv227A5zppk2yUmC6Ih/HYVh/igM80dhmD8Kw/xRGOaPwjB/FIb5ozDMH4Vh/igM80dhmD8Kw/xRGOaPwjB/FIb5ozDMH4Vh/igM80dhmD8Kw/xRGOaPwjB/FIaBUFzXib9Qa4Yda9QxGBN9X79Qv99mVjLsCm0ZmtHgpHsU/RuWVTRi2vu95Mm90EEXac1QPJ80wFAEPnECO7qsrnjbCTSM1laqxX0Tio867IkDlF4Oq+uNV6HXa7/TyEWvAcNuvJ0acV5drnejQ9/t9gyNmHQbUAx/6D/Q+sI9r2n4dQJOCwlffchOA3eGH2jx6q71HPFah5yHRoybUJyIiENDyyd3pdeYhxXEUE/6DRheLsIfvBTzQXWhc22DLxTo0yhxVn197/mU4NltD6En2CdGbju7XsUQDPTa7MrZ6ZP32QI/ClxFs4BzYhTnIYX6pevKiPpzQ8+FqVvfUdiJYd9vna0/BN7hLwIZSrDTW7qjaPHo3qBOiIFZC5v1NNY7Cl1DKdxjfrTkfbMrZ2LPAfuphqd3chd35oiI6EnPq72gv/b8l7Wz01nrGzTiynkUZ/HOX0R86A6sMd3tcBFubctbVOgy3TM48OEMrbx2dkrvBE247WmtZ3BOSIYIJWINJcQ21H9Rala5BN15m2sqPXKHzfg92kRFFENF7NRbxD/OTtsc2FI4w+jNNUcYHZOnsRAqXtAtQetaEz4ECVf8iL9YEJWJMg/OTq88Hg/OJZg2ZYinbPcuxnEHRDFU6L8syA1JNOFlM4pa3lX/5+RP9EH4g7hsohbO+zjfUDtVzgW/aGSnUkxdyHIvo9xtQGS+1EIqxfOz1Qua8PE9Q4Fhn1y/cxGMzwjfVHc12BKGRjrfZNwkVBxBPBERWvqIZYh+9jX1XySa8NG3Sq+clzCOjScQ0Wso392jP6U87KI+ivRhO3BOzJm20S/E6xZqXRljd+Z9dlN9NJjJQ68imkL3imsb/UI8QylOq5u7XXouOJjwoXXBs+XkVXIS5NCebAdCRW8/lWDCunb3IPHEBesKMqlro+oc69/Q29PuiBvUbx96DfEE5zv4CQ6GEtSa8Yq8bgpMeFhzxin94HakYYd3BZnWUILC4KW67QpDxb12itHk5cxyiau/4NGAJaQ337zPXES7X63BeKLPFE8geBga8eT8l5F37oOddnYXUYrH6vPuE/dLKNh0fFyIc2qMGk3Y+G+Z1i5WjhJgasFVqaAX6GcTmK0z4alnp1q84TnB5m4DuBgquNXeA7E1I64qEuOlpv9rBvHEJgVBvmoT6mdTO8VQURGKkHcaLrjPiW/w1dOgqui9UBpccMzK6RUKMGx3QsHHUOm3yn/pbelHYlIxuRxV5O27W9v+OsE2+gXGmihFUt2eC74nVLTisfpL5ngCwVn1hZLMH7okZuns9O7bhKWAvNOpSkWQua4NVMUbUpJGsnIP33/jLDe2quEgWBlKqJ8YCi+76EzyK80E2tWH4SZ6Bz/Bu4YakvJeVRQ1YSkhmTw0CVyZCszVlxDpeX72x+HuXIK53UA8sWWPJxDMDIlas/RSxGDC1p0TgzlbNepecFfQWouSDKFoIA50Fttvki2OAXuNsKzxXz6LYcEJrcAlwNSCnSH62ZcLzwXfrU19TBJPIPjrvC34L/f0IMet9hvnNjXBFJXsZoSpbrKKCs6IT9y+pDvpf5GA4QFV0WDmN2E8gUjRjUBS3R3PTqGG+iMCSbuNfiFJvwUWaHt7JaqKUWWjjZGEoRLzisZg7eX5nap4+TeMNFHPDFZFHVAVr//GIibqCpK6tioKVcW7v/Aipup7Mmun1qy9D52q2D+sKrIgVe8aqjXDQFWRB8m68zA+eqTGKDduq33dyYJzI2H/oVNr+m+equgK8fuz1K9iOoZEVXwnNAyqNbG9NceQcA1RVfSka/vuXPCzFHIMIGWXLKqKE88YH9xHPL2KtUjJUEHF9o6qCFttaHdoMyTtdKaqoueC1wrjzEjby61fav0X9YDCeEI7TctQibeKRm9LemuIqpgyEE7cj09S3Z7kJp0Jx/SAHUPqiQNKQ1WUl7V5waxcMjtNzdBAZfNg62XBnQlfbpPtp4kZKjOD3NMtbfTS0pnw8QLUUCTeafSLM9JPO6WvoulgD1iiVUy9l9IEqafWGDF1as229ipxSMrQCL/re2g9VdGpNbd8xesEKRmSRsIfPNLyWNvBGuok+2lChpqmf38w9VXFKlQc3CTZbFLGhzeuQQTq8D1VUaIwnmIRkzFUGCBdL2pDRSOCesCaIxlD0nC+kIvaXkXp7JSrXY0gFUO7JA3nklRFeYXSIIy/8O+niRiiiNiffxDEqqh74WUXnZ026wFrhVRZfRhM8vT14sndqqhfQLtt94ph9hVFImXGxX4nZ98nIK2KMnX//LJhr2JzpGCozMSVJFR2R0LFelWRo0GdIIUGrGZ7G0R0/awFtWQYF1IDfoak4RzzvUo4tWYwp/6LhBpqZlUxAUNsOJ9hbkZLKECV3rkPqmLbMQyHkaCexr1TgxtqcFLUFkzZl1ShIjdDEk/4BV1Kgqroz1pwwnh3xim5cdcmYuHv805mwsDHw5f6cSGci8hdXwoN5/saROisBbLCGtoYzxizNqwMacP5/nkYTq3pTujcC+1qqE98YTwCvAwhnhi+1LTiOTsdd6g0DONChnHzvRCcDPWyQcO5FLWpblQV+dQaRoYW0vT9de1mgWNt/M12lEBV5GPYvOF8AlVR3lgbMGGusQpsDEk88XpogNWBWQuaCOM8ryJfd96VOyeO5FtsfWEfzXaw2CnbGkIN9/nRA9uFigOqKkpUFXna9XgYKosN50c9Z1oV5fUqthkX0gRMvdyk4fx4rZrZ1I4L0ct2Y22OgqcfX7lzojdv8uChKsobF0LUmvYT+3bBwRCNruFzN/WSjLZowvEUGRhqA20Udw3DggNVUUagCUefivEMQxvOt5jqrlUV/Yk37RHNUImtOwjPm2uAB6qiiAserSrGryHmnZYtXhvsYfd6gywWoMbup9GTsJbBDef6QFXUFmtT4yjGzmuzEE+0LIY19f6LlFCAGrmIcQxJw/mk7daudW2oSLJycU20cZMhUcc+bT8QVy7r/GwlYayNPy6kHWIYtokn9sKQwj6PBqg1UYV9UWu4hnMi6GimfnYaVTGcobIzd06EZjjlO44LoXPB3TEUNXsonKEG52q8DdzSDaqKW4+GE8Z7EapiMEMJB3ZvHfyikKqoTv24kPD9NJShl3cK3+z0O85aUPDnkDDeAoEMNRzJcZqmAhd8Z5gZ9NYEq4phDDUOOoxsOJfaSTLD1zOCU7eIwVOkAn/BYwaT4YN+/wBgdnrY9+JPoKWErSHRsWPDG4WSTD1CVcUQhliCPlwEfS2B2lvEuIPbPRP7GiCAod3AYJIHjnTY7qyFvQhTFdszJAVdUx6JSC0uDzCr0OpHCH7RmiEZYPUc/wMbXzDN7NRrt22GtgyVuINfEGET+eRORfhehLjgrddw1hsMel/oXzCOIJOj4c9l6zEYdAPmEbVmuLHyB7xV2VLJ4wiZ9RLw64AO7b/uAHQDhiHfmLrv6f9HYZg/CsP8URjmj8IwfxSG+aMwzB+FYf4oDPNHYZg/CsP8URjmj8IwfxSG+aMwzB+FYf4oDPNHYZg/CsP8URjmj8IwfxSG+ePfZ7j5v28gOVabzr+N/wAWNH6azeG0ygAAAABJRU5ErkJggg=="
              alt=""
            />
            </div>
          </div>
        </div>
        <div className="right bg-gradient-to-r from-indigo-500">
          <div className="row1">
            <div className="span">
              <div className="inputtext">First Name</div>
              <input className="input border-solid border-2 border-black rounded-xl p-[2%]" type="text" placeholder="First Name" />
            </div>

            <div className="span">
              <div className="inputtext">Last Name</div>
              <input className="input border-solid border-2 border-black rounded-xl p-[2%]" type="text" placeholder="Last Name" />
            </div>
          </div>

          <div className="row1">
            <div className="span">
              <div className="inputtext">Email</div>
              <input
                className="input border-solid border-2 border-black rounded-xl p-[2%]"
                type="text"
                placeholder="name@gmail.com"
              />
            </div>

            <div className="span">
              <div className="inputtext">Phone No.</div>
              <input className="input border-solid border-2 border-black rounded-xl p-[2%]" type="number" placeholder="Phone" />
            </div>
          </div>

          <div className="row1">
            <div className="span">
              <div className="inputtext">Company Name</div>
              <input className="input border-solid border-2 border-black rounded-xl p-[2%]" type="text" placeholder="Company Name" />
            </div>

            <div className="span">
              <div className="inputtext">Country</div>
              <input className="input border-solid border-2 border-black rounded-xl p-[2%]" type="text" placeholder="Country" />
            </div>

            
          </div>

          {/* <div className="row1">
            {/* <div className="span">
              <div className="inputtext">Annual revenue</div>
              <input
                className="input border-solid border-2 border-black rounded-xl p-[2%]"
                type="text"
                placeholder="Annual revenue"
              />
            </div> */}

        

          <div style={{ marginLeft: "50px", marginTop: "50px" }}>
            <div>
              <input type="checkbox" style={{ fontSize: "20px" }} />{" "}
              <span>
                Yes, I would like to recieve news and offers via email
              </span>
            </div>
            <div>
              <input type="checkbox" style={{ fontSize: "20px" }} />{" "}
              <span>Yes, I agree to recieve phone calls</span>
            </div>
          </div>

          <button
            type="submit"
            style={{
              fontSize: "20px",
              borderRadius: "5px",
              border: "none",
              marginLeft: "50px",
              marginTop: "50px",
              minHeight: "10px",
              width: "100px",
              padding: "10px",
              color: "white",
              backgroundColor: "blue",
              type: "submit",
            }}
          >
            Submit
          </button>
        </div>
        <div class="clear bg-gradient-to-r from-indigo-800"></div>
      </div>
    </div>
    <Footer/>
  </div>
  );
}

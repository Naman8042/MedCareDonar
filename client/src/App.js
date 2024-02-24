import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Chatbot from './Chatbot'
import Test from './Test'
import Piyush from './Piyush'
import Contactus from './Contactus'
// import DonateEquip from './DonateEquipments'
import Viewequip from './Viewdonatedequipmets'
import Aboutus from './Aboutus'
import Allchemist from './Viewallchemist'
import Donate from './DonateEquipments'
import Naman from "./Naman"
import Loginchemist from './Loginchemist'
import { ToastContainer, toast } from 'react-toastify';
import AvailableMedicines from './AvailableMedicines'
import Availatchemist from './Viewavailabeatchemist'
import Login from './Login'
import SignUp from './Signup'
import Navbar from "./Navbar"
import Slider from './Slider'
import Home from './Home'
import Hello from './Hello'
import Rewards from './Rewards'
import Admin from './Admin'
import Chemist from './Signupchemist'
// import Services from './Services'


// import Admin from './Admin'
function App() {
  
  return (
    <div>
      {/* <Login/>
      {/* <SignUp/> */}
      {/* <Navbar/> */}
      {/* <AvailableMedicines/> */}
      {/* <Admin/> */}
      {/* <Services/> */} 
      <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path="/navbar"
                        element={<Navbar/>}
                    />
                    <Route
                        exact
                        path="/"
                        element={<Home/>}
                    />
                    <Route
                        exact
                        path="/login"
                        element={<Login />}
                    />
                    <Route
                        exact
                        path="/signup"
                        element={<SignUp />}
                    />
                    <Route
                        exact
                        path="/donate"
                        element={<AvailableMedicines/>}
                    />
                    <Route
                        exact
                        path="/search"
                        element={<Naman/>}
                    />
                    <Route
                        exact
                        path="/slider"
                        element={<Slider/>}
                    />
                    <Route
                        exact
                        path="/view"
                        element={<Hello/>}
                    />
                    <Route
                        exact
                        path="/rewards"
                        element={<Rewards/>}
                    />
                    <Route
                        exact
                        path="/admin"
                        element={<Admin/>}
                    />
                    <Route
                        exact
                        path="/donateequipments"
                        element={<Donate/>}
                    />
                    <Route
                        exact
                        path="/chemist"
                        element={<Chemist/>}
                    />
                    <Route
                        exact
                        path="/loginchemist"
                        element={<Loginchemist/>}
                    />
                    <Route
                        exact
                        path="/viewchemist"
                        element={<Allchemist/>}
                    />
                    <Route
                        exact
                        path="/viewmychemist"
                        element={<Availatchemist/>}
                    />
                    <Route
                        exact
                        path="/aboutus"
                        element={<Aboutus/>}
                    />
                    <Route
                        exact
                        path="/chatbot"
                        element={<Chatbot/>}
                    />
                    <Route
                        exact
                        path="/contactus"
                        element={<Contactus/>}
                    />
                    <Route
                        exact
                        path="/test"
                        element={<Test/>}
                    />
                    <Route
                        exact
                        path="/donateeqip"
                        element={<Viewequip/>}
                    />
                    <Route
                        exact
                        path="/piyush"
                        element={<Piyush/>}
                    />
                    
                    
                </Routes>
            </BrowserRouter>
            <ToastContainer />


    </div>
    
    // </div>
  );
}

export default App;

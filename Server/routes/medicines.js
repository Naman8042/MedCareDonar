const express = require("express")
const router = express.Router();

const {createMedicines} = require("../controllers/createMedicines")
const {searchMedicines} = require("../controllers/searchMedicines")
const{createUser} = require("../controllers/addMedicine")
const{showAll,showUser,showChemist,edit,decline} = require("../controllers/addMedicine")
const {create} = require("../controllers/createUser")
const{Signup,Login} = require("../controllers/Auth")
const{donateEquipments,showAllequip} = require("../controllers/equipments")
const{Loginchemist,Signupchemist,Allchemist} = require("../controllers/Authchemist")
router.post("/createMedicines",createMedicines)
router.post("/searchMedicines",searchMedicines)
router.post("/addMedicine",createUser);
router.post("/addUser",create);
router.post("/Signup",Signup);
router.post("/Login",Login);
router.post("/Signupchemist",Signupchemist);
router.post("/Loginchemist",Loginchemist);
router.get("/showAll",showAll)
router.get("/showchemist",Allchemist)
router.get("/showequip",showAllequip)

router.post("/showuser",showUser)
router.post("/edit",edit)
router.post("/decline",decline)
router.post("/showallavailable",showChemist)
router.post("/equipments",donateEquipments)


module.exports = router
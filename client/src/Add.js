import {useState} from "react"
import axios from 'axios'
import react from "react"

function Search(){
    const[Name,setName]=useState("");
    const[Quantity,setQuantity]=useState("");

    
    
    return (
      <div>
        <input type="text" value={Name} onChange={(e)=setName(e.target.value)}/>
        <input type="number" value={Quantity} onChange={(e)=setQuantity(e.target.value)}/>
      </div>
    )
}
export default Search
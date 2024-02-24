import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
const Fetch = () => {
  const [Data, setData] = useState([]);
  // useEffect(() => {
  //   fetch('https://api.fda.gov/drug/label.json?search=paracetamol')
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setData(data.results);
  //     });
  // }, []);
  const [messages, setMessages] = useState([
    { id: uuidv4(), sender: 'Bot', text: 'Hello! How can I help you?' },
  ]);
  const [userInput, setUserInput] = useState('');
  let submit= async(e)=>{
    e.preventDefault();
    try{
        alert('submitted')
         
      await axios.post("http://localhost:4000/api/v1/searchMedicines",{name:userInput})
      .then((res)=>setData(res.data.data))
       
        
    }
    catch{

    }
  }
  console.log(Data)
  return (
    <div className="bg-black">
      <div className="">
      <div className="">
        {messages.map((message) => (
          <div key={message.id} className={message.sender.toLowerCase()}>
            <strong>{message.sender}:</strong> {message.text}
          </div>
        ))}
      </div>
      <div className="">
        <input
          type="text"
          placeholder="Type a message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={submit}>Send</button>
      </div>
    </div>
      
    </div>
  );
};
export default Fetch;

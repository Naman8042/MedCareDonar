import React, { useState, useEffect } from "react";
import Send from './send.png'
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

function Search() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [messages, setMessages] = useState([
    { id: uuidv4(), sender: "Bot", text: "Hello! How can I help you?" },
  ]);

  const submit = async (e) => {
    e.preventDefault();
    try {
      // Simulate user message
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: uuidv4(), sender: "User", text: name },
      ]);

      // Simulate bot response
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: uuidv4(), sender: "Bot", text: "Searching..." },
      ]);

      // Fetch data from the server
      const response = await axios.post(
        "http://localhost:4000/api/v1/searchMedicines",
        { name: name }
      );
      const responseData = response.data.data;

      // Simulate bot response with fetched data
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: uuidv4(), sender: "Bot", text: "Here is the information:" },
      ]);

      // Set the fetched data
      setData(responseData);

      // Simulate bot response with data details
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: uuidv4(),
          sender: "Bot",
          text: `Name: ${responseData.genericname}`,
        },
        { id: uuidv4(), sender: "Bot", text: `Uses: ${responseData.Uses}` },
        {
          id: uuidv4(),
          sender: "Bot",
          text: `Incidences: ${responseData.incridents}`,
        },
      ]);
    } catch (error) {
      // Handle error
      console.error("Error:", error);
    }
  };

  const onLoad = () => {
    setData([]);
    // Simulate bot greeting on load
    setMessages([
      {
        id: uuidv4(),
        sender: "Bot",
        text: "Welcome back! How can I assist you today?",
      },
    ]);
  };

  useEffect(() => {
    onLoad();
  }, []); // Run on component mount

  return (
    <div className="bg-gray-200 w-screen h-screen">
    <div className="flex flex-col justify-center items-center ">
      <div className="h-80 overflow-y-scroll scroll-auto fixed top-[20%] bg-white w-1/4 p-[1%] rounded-lg ">
        {messages.map((message) => (
          <div key={message.id} className={message.sender.toLowerCase()}>
            <strong>{message.sender}:</strong> {message.text}
          </div>
        ))}
      </div>
      
      <div className="fixed top-[63%] flex bg-white w-1/4 rounded-lg border-t-4 border-gray-300 ">
        <input
          value={name}
          placeholder="Enter The Medicine Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="m-5 h-16 w-72  outline-none p-[1%]"
        />
        <button
          onClick={submit}
          
          className=""
        >
          <img src={Send} alt="" className="h-16 w-16"/>
        </button>
      </div>
     
    </div>
    </div>
  );
}

export default Search;

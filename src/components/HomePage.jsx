import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const submitHandler = () => {
    navigate(`/room/${input}`);
  };
  return (
    <div>
      <div className="flex items-center justify-center">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter your name....."
          className="border border-black"
        />
        <button onClick={submitHandler} className="border border-black rounded-md">Join</button>
      </div>
    </div>
  );
};

export default Home;

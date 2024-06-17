import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const submitHandler = () => {
    navigate(`/room/${input}`);
  };
  
};



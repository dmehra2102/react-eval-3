import axios from "axios";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const {isAuth,setIsAuth} = useContext(AuthContext);
  const [info,setInfo] = useState({
    email: "eve.holt@reqres.in",
    password : "cityslicka"
  })
  const navigator = useNavigate();
  const handlechange = (e)=>{
    const {value,id} = e.target;
    setInfo({
      ...info,
      [id] : value,
    });
    console.log(info);
  }
  const handlesubmit = ()=>{
    axios({url: "https://reqres.in/api/users",
    type: "POST",
    data: info
  }).then(()=> setIsAuth(true)).catch(()=> console.log("buy"));
  navigator("/products")

  }
  return (
    <div> Login 
      <input data-cy="login-email" onChange={handlechange} defaultValue="eve.holt@reqres.in" id="email"/>
      <input data-cy="login-password" onChange={handlechange} defaultValue="cityslicka" id="password"/>
      <button data-cy="login-submit" onClick={handlesubmit}>Login</button>
    </div>
  );
};

export default Login;

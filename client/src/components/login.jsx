import React from 'react'
import { useState } from 'react';
import * as API from '../api/index'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

const Login = () => {

  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const navigate = useNavigate();

  useEffect( () => {
      const user = localStorage.getItem("user")
      if(user === "true")
        navigate("/Home");
  }, [navigate])

  const submit = async () => {
      if(email === undefined || pass === undefined)
          alert("Email OR Password cannot be empty");
      else{
          const obj = {
            email: email.trim(),
            pass: pass          
          }
          
        const response = await API.LOGIN(obj);
        
        if(response.data.code === -1)
            alert("User not found")
        else{
            localStorage.setItem("user", "true");
            localStorage.setItem("data", JSON.stringify(response.data.user));
            navigate("/Home");
        }
      }
  }

  return (
      <div> 
        <center>
            <br />
            <h1> Login </h1>
            <input type = "text" placeholder='Email' onChange={ (e) => setEmail(e.target.value) } />  <br />
            <input type = "text" placeholder="Password" onChange={ (e) => setPass(e.target.value) } /> <br />
            <button onClick={submit} className="button"> Login</button> <br /> <br />
            <Link to="/Signup"> Create a Account ?  Signup </Link>
        </center>
      </div>
  )
}

export default Login


import React, { useState } from 'react'
import "../stylesheets/login.css"
import user_icon from "../Assets/user.png";
import email_icon from "../Assets/email.png"
import password_icon from "../Assets/password.png"

const Login = ()=> {
  const[action, setaction]=useState("Login"); 
  return (
    <section className="bodys">
    <div className='container'>
<div className="header">
  <div className="text">{action}</div>
  <div className="underline"></div>
</div>
<div className="inputs">
  {action==="Login"?<div></div>:<div className="input">
    <img src={user_icon} alt="" />
    <input type="text" placeholder='Name' />
  </div>}
  
</div>
<div className="inputs">
  <div className="input">
    <img src={email_icon} alt="" />
    <input type="email" placeholder='Email Id' />
  </div>
</div>
<div className="inputs">
  <div className="input">
    <img src={password_icon} alt="" />
    <input type="password" placeholder='Passowrd' />
  </div>
  {action==="Sign up"?<div></div>: <div className="forgotpassword">
    Lost Password? <span>Click Here</span>
  </div>}
 
</div>
      <div className="submitcontainer">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setaction("Login")}}>Login</div>
        <div className={action==="Sign up"?"submit gray":"submit"} onClick={()=>{setaction("Sign up")}}>Sign up</div>
      </div>
    </div>
    </section>
  )
}

export default Login

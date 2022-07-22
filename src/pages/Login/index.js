import React from 'react';
import { LoginBg } from "../../assets";
import { Input, Button, Gap, Link } from "../../components";

const Login = () => {
  return (
    <div className="main-page">
    <div className="left">
      <img src={LoginBg} className="bg-image" alt="imageBg"/>
    </div>
    <div className="right">
      <p className="title">Login</p>
      <Input label="Email" placeholder="Email"/>
      <Gap height={10} />
      <Input label="Password" placeholder="Password"/>
      <Gap height={20} />
      <Button title="Login" />
      <Gap height={50}/>
      <Link title="Have'n Account ? Register Please" />
    </div>
  </div>
  )
}

export default Login
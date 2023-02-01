import { PasswordSharp } from "@mui/icons-material";
import axios from "axios";
import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";
import {useNavigate} from "react-router"
import { Link } from "react-router-dom";


export default function Register() {

  const email = useRef();
  const password = useRef();
  const username = useRef();
  const passwordAgain = useRef();
  const {isFetching, error,dispatch,user,url} = useContext(AuthContext);
  const navigate = useNavigate()

  const handleClick = async (e)=>{
    e.preventDefault();
    if(passwordAgain.current.value !== password.current.value){
      password.current.setCustomValidity("Password dont match");
    }else{
      const user={
        username:username.current.value,
        email:email.current.value,
        password:password.current.value,
      };
      try{
        await axios.post(`${url}auth/register`, user);
        navigate("/login");
      }catch(err){

      }
    }
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SahilSocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on SahilSocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Username" required className="loginInput" ref={username}/>
            <input type={"email"} placeholder="Email" required className="loginInput" ref={email} />
            <input type={"password"} placeholder="Password" required className="loginInput" ref={password} minLength="6" />
            <input type={"password"} placeholder="Password Again" required className="loginInput" ref={passwordAgain}/>
            <button className="loginButton" type="submit">Sign Up</button>
            <Link to={"/login"} className="loginRegisterButtonLink">
            <button className="loginRegisterBtn">
              Log into Account
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

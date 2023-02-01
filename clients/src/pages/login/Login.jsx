import { useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from '@mui/material/CircularProgress';
import { grey } from '@mui/material/colors';
import { Link } from "react-router-dom";



export default function Login() {

  const email = useRef();
  const password = useRef();
  const {isFetching, error,dispatch,user,url} = useContext(AuthContext);

  const handleClick =(e)=>{
    e.preventDefault();
    // console.log(email.current.value)
    loginCall({ email: email.current.value, password: password.current.value }, dispatch,url);
  }

  console.log(user);
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
            <input type={"email"} required placeholder="Email" className="loginInput" ref={email}/>

            <input type={"password"} required placeholder="Password" className="loginInput" ref={password} minLength="6"/>

            <button type="submit" className="loginButton">{isFetching? <CircularProgress  color="info"/> : "Log In"}</button>

            <span className="loginForgot">Forgot Password?</span>
            <Link to={"/register"} className="loginRegisterButtonLink">
              <button type="button" className="loginRegisterBtn" >
                Create a New Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

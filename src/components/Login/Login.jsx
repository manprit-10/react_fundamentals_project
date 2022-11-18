import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../common/Button/Button";
import { Header } from "../Header/Header";
import './Login.css'

const Login = () => {
  // const [loginForm, setLoginForm] = useState();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError,setShowError] = useState(false)

  const navigate = useNavigate();


  // const loginChangeHandler = (event) => {
  //   setLoginForm({
  //     ...loginForm,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  const submitLogin =  (e) => {
    e.preventDefault();

    if(email.trim().length===0||password.trim().length<6){
      setShowError(true)
      return
    }

    loginUser();
    navigate('/courses')
  };

  const loginUser = async () => {
    let result = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    
    
  };

  return (
    <div className="login-page">
      {showError&&<p style={{color:'red'}}>Email cant be empty and Password length should be greater than 6</p>}
      <form className="login-form">
        <h2>Login Page</h2>
        <label>Email</label>
        <div>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
            type="email"
            placeholder="Enter Email"
          />
        </div>

        <label>Password</label>
        <div>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="password"
            type="password"
            placeholder="Enter Password"
          />
        </div>

        <div>
          <Button
            className="btn"
            type="submit"
            onClick={submitLogin}
            name="Login"
          />
        </div>
        <p>
          If you not have an account you can
          <span
            onClick={() => {
              navigate("/");
            }}
            style={{ color: "blue", cursor: "pointer" }}
          >
            {" "}
            Registration
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../Header/Header";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  

  const submitRegistration = async (e) => {
    e.preventDefault();

    
    let res = await registerUser();
    res = await res.json();

    setName("");
    setEmail("");
    setPassword("");
    navigate('/login')
  };

  const registerUser = async () => {
    return fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div>
      <form onSubmit={submitRegistration}>
        <label>Name</label>
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            type="text"
            placeholder="Enter Name"
            
          />
        </div>

        <label>Email</label>
        <div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            placeholder="Enter Email"
          />
        </div>

        <label>Password</label>
        <div>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            placeholder="Enter Password"
          />
        </div>

        <div>
          <button className="btn" type="submit" onClick={submitRegistration}>
            Registration
          </button>
        </div>
        <p>
          If you have an account you can
          <span
            onClick={() => {
              navigate("/login");
            }}
            style={{ color: "blue", cursor: "pointer" }}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Registration;

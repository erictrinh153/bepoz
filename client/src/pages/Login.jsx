import { useContext, useState } from "react";
import { login } from "../context/apiCalls";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const { error, dispatch } = useContext(AuthContext);

  console.log("Error ", error);
  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
    if(error){
    setErrorMessage(error.message);
    }else{
      navigate('/');
    }
  };
  return (
    <div className="Login">
      <div className="form">
     <form onSubmit={handleLogin}>
       <div className="input-container">
         <label>Email </label>
         <input type="text" name="email" required onChange={(e)=>{
          setEmail(e.target.value);
          setErrorMessage(null);
          }}/>
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="password" required onChange={(e)=>{
          setPassword(e.target.value);
          setErrorMessage(null);
          }}/>
       <p>New to Application? <a href="/register">Sign Up</a></p>
       {error && <p className="error">{errorMessage}</p>}
       </div>
       <div className="button-container">
         <input type="submit" value="Log In"/>
       </div>
     </form>
   </div>
    </div>
  );
}
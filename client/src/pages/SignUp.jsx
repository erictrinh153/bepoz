import axios from "axios";
import { useRef } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
export default function Register() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const newUser = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
    }
    try{
    await axios.post("auth/register", newUser);
    navigate('/login');
    }catch(error){
    console.log("Error:", error);
    }

  };
  return (
    <div className="Signup">
      <div className="form">
     <form onSubmit={handleSignup}>
       <div className="input-container">
         <label>Email </label>
         <input type="text" name="uname" required ref={emailRef}/>
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="password" required ref={passwordRef}/>
       </div>
       <p className="interactiveText"><a href="/">Back to Home</a></p>
       <div className="input-container">
       </div>
       <div className="button-container">
         <input type="submit" value="Sign Up"/>
       </div>
     </form>
   </div>
    </div>
  );
}
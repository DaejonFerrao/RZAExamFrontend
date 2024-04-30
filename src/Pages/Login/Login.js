import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

// import Elephants from "../Images/elephants.jpg"

const Login = () => {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigateTo = useNavigate()


  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (!email || !pass) {
        console.error('all fields are required')
        return;
      }

      const postData = { email, pass }
      console.log(postData)
      const response = await axios.post("http://127.0.0.1:8000/users/login", postData);
      console.log(response.data)
    } catch (error) {
      console.error('an error has occured', error)
    }
  };
    return (
      <form className="form-position" onSubmit={handleSubmit}>
        <div className="form-container">
          <p className="title">Login</p>
          <p className="message">Please login here</p>
        </div>
        <div className="form-name">
          <input className="form-input" onChange={(e) => { setEmail(e.target.value) }} value={email} required="" placeholder="Email" type="text" input="text" />

          <input className="form-input" onChange={(e) => { setPass(e.target.value) }} value={pass} required="" placeholder="Password" type="password" input="text" />

          <button className="submit">Sign In</button>
          <div className="sign">
            <p>Not yet registered?<a href="" onClick={() => navigateTo("/Login")}>Register Here</a> </p>
          </div>
        </div>
      </form>
    );
};

export default Login;

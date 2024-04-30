import { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const navigateTo = useNavigate();


    const handleSubmit = async (e) => {

        try {
            e.preventDefault();
            if(!name || !pass || !email) {
                console.error('all fields are required')
                return;
            }

            const postData = { display_name: name, pass, email }
            console.log(postData)
            const response = await axios.post("http://127.0.0.1:8000/users/register", postData);
            console.log(response.data)
        } catch (error) {
            console.error('an error has occured', error)
        }
      
    };

    return (
        <form className="form-position" onSubmit={handleSubmit}>
            <div className="form-container">
                <p className="title">Register</p>
                <p className="message">Please fill in the details below</p>
            </div>

            <div className="form-name" >
                <input className="form-input" onChange={(e) => { setName(e.target.value) }} value={name} required="" placeholder="Full Name" type="text" input="text" />

                <input className="form-input" onChange={(e) => { setEmail(e.target.value) }} value={email} required="" placeholder="Email" type="text" input="text" />

                <input className="form-input" onChange={(e) => { setPass(e.target.value) }} value={pass} required="" placeholder="Password" type="password" input="text" />

                <button className="submit">Submit</button>
                <div className="sign">
                    <p>Already Registered?<a href="" onClick={() => navigateTo("/Login")}>Login Here</a> </p>
                </div>
            </div>
        </form>
    );



};

export default Register;


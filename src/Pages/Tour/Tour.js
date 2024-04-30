import "./Tour.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

// import Elephants from "../Images/elephants.jpg"

const Tour = () => {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [ticket, setTicket] = useState("");
    const [date, setDate] = useState("");
    const navigateTo = useNavigate()


    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            if (!email | !ticket | !pass) {
                console.error('all fields are required')
                return;
            }

            const postData = { email, pass, ticket, date:date.format('YYYY-MM-DD') }
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
                <p className="title">Ticket Form</p>
                <p className="message">Please select the tickets below</p>
            </div>
            <div className="form-name">
                <input className="form-input" onChange={(e) => { setEmail(e.target.value) }} value={email} required="" placeholder="Email" type="text" input="text" />

                <input className="form-input" onChange={(e) => { setPass(e.target.value) }} value={pass} required="" placeholder="Password" type="password" input="text" />

                <input className="form-input" onChange={(e) => { setTicket(e.target.value) }} value={ticket} min={1} max={15} required="" placeholder="number of tickets required" type="text" input="text" />

                <input className="form-input" onChange={(e) => { setDate(e.target.value) }} value={date} required="" placeholder='please select a date' type="date" input="text" />

                <button className="submit">Buy Now</button>
            </div>
        </form>
    );
};

export default Tour;
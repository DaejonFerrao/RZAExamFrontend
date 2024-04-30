import "./BookingForm.css";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {

    const navigateTo = useNavigate();

    return (
        <div>
            <form className="formcon">
                <div className="form-container">
                    <p className="title">Booking Form</p>
                    <p className="message">Please fill in the details below</p>
                </div>

                <div className="formname" >

                    <label className="data">
                        <span className="credentials">Full Name</span>
                        <input className="information"  required="" placeholder="Full Name" type="text" input="text" />
                    </label>

                    <label>
                        <span className="credentials">Email</span>
                        <input className="information" required="" placeholder="Email" type="text" input="text" />
                    </label>

                    <label>
                        <span className="credentials">Enter Date of Birth</span>
                        <input className="information"  required="" placeholder="Enter Birth Date" type="Date" input="text" />
                    </label>

                    <label>
                        <span className="credentials">Room Information</span>
                        <select className="information">
                        <option hidden="">Room Type</option>
                        <option>Standard</option>
                        <option>Deluxe</option>
                        <option>Suite</option>
                        </select>
                        <span className="credentials">Occupiers</span>
                        <input className="information"  required="" placeholder="Occupiers" type="password" input="text" />
                    </label>

                    <label>
                        <span className="credentials">Enter Address</span>
                        <input className="information"  required="" placeholder="Enter Address" type="text" input="text" />

                        <span className="credentials">Enter PostCode</span>
                        <input className="information"  required="" placeholder="Enter PostCode" type="text" input="text" />

                        <span className="credentials">Enter Country</span>
                        <select className="information">
                        <option hidden="">Country</option>
                        <option>United Kingdom</option>
                        <option>United States of America</option>
                        <option>Portugal</option>
                        <option>Brazil</option>
                        <option>Argentina</option>
                        <option>Kuwait</option>
                        <input className="information"  required="" placeholder="Enter Country" type="Date" input="text" />
                        </select>
                    </label>


                    <button className="submit">Submit</button>
                    <div className="signin">
                        <p>Want to view other rooms<a href="" onClick={() => navigateTo("/Hotel")}>Click Here</a> </p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BookingForm;


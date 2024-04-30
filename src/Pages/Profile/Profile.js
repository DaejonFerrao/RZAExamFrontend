import "./Profile.css";
import Button from "../../Components/Button/Button";
import pfp from "../../../src/Pages/Images/pfp.webp";

const Profile = () => {
    return (
        <div className="pfp">
            <div className="pfp-index" >

                <span className="pfp-name">Full Name: </span>
                <span className="pfp-information">User Full Name</span>



                <span className="pfp-name">Email: </span>
                <span className="pfp-information">User Email</span>



                <span className="pfp-name">Date of Birth: </span>
                <span className="pfp-information">User DOB</span>



                <span className="pfp-name">Address: </span>
                <span className="pfp-information">Full Address</span>

                <span className="pfp-name">PostCode: </span>
                <span className="pfp-information">PostCode</span>

                <span className="pfp-name">edit information</span>
                <button className="pfp-information">edit</button>
            </div>

            <div className="profile">
                <div className="pfp-boxes">
                    <p>Manage Your Tickets here:</p>
                    <input className="information" required="" placeholder="ticker number" type="password" input="text" />
                    <Button path="/BookingForm" text="Sumbit" />
                </div>
            </div>

            <div className="profile-pfp">
                <div className="pfp-box">
                    <img src={pfp} className="display" alt="tiger" />
                    <p>username</p>
                    <p>custom user id:</p>
                    <Button path="/Memberships" text="view your rewards" />
                </div>
            </div>
        </div >
    );
};

export default Profile;
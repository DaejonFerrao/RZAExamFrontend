import "./Hotel.css";
import Button from "../../Components/Button/Button";
import zoohotel from "../../../src/Pages/Images/zoo hotel.jpg"

const Hotel = () => {
    return (
        <div className="hotel-box">
            <div>
            <img src={zoohotel} className="hotel-image" alt="tiger" />
                <div className="hotel-boxes">
                <h1>This is a new room</h1>
                <p>please view the different conditions that this room has to offer</p>
                <Button path="/BookingForm" text="Book This Room" />
            </div>
            </div>
            

            <img src={zoohotel} className="hotel-image" alt="tiger" />
            <div className="hotel-boxes">
                <h1>This is a new room</h1>
                <p>please view the different conditions that this room has to offer</p>
                <Button path="/BookingForm" text="Book This Room" />
            </div>


            <img src={zoohotel} className="hotel-image" alt="tiger" />
            <div className="hotel-boxes">
                <h1>This is a new room</h1>
                <p>please view the different conditions that this room has to offer</p>
                <Button path="/BookingForm" text="Book This Room" />
            </div>

            <img src={zoohotel} className="hotel-image" alt="tiger" />
            <div className="hotel-boxes">
                <h1>This is a new room</h1>
                <p>please view the different conditions that this room has to offer</p>
                <Button path="/BookingForm" text="Book This Room" />
            </div>
        </div>
    );
};

export default Hotel;
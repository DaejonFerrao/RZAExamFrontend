import "./Home.css";

import tiger from "../Images/tiger.jpg";
import Button from "../../Components/Button/Button";
import elephants from "../../Pages/Images/elephants.jpg";

const Home = () => {
    return (
        <div>
            <div className="Slideshow">
                <img src={tiger} className="tiger-img" alt="tiger" />
            </div>

            <div className="animal-description">
                <h1>This is a tiger</h1>
                <p>This is a special species of a tiger</p>
                <Button path="/Articles" text="Learn More" />
            </div>

            <div className="information-boxes">
                <h1>Memberships</h1>
                <p>We offer many benefits if you get a membership</p>
                <Button path="/Register" text="Join Now" />
            </div>

            <div className="information-box">
                <h1>Hotel</h1>
                <p>We offer rooms on suite, so you can see the animals sleep</p>
                <Button path="/Hotel" text="Book A Room" />
            </div>

            <div className="extra-info">
                <h1>Open Timings</h1>
                <p>Open daily from 8am-6pm</p>
                <Button path="/Tour" text="Book A Tour" />
            </div> 

        </div>
    );
};

export default Home;
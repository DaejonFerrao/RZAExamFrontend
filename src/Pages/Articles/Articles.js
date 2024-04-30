import "./Articles.css";
import art from "../../../src/Pages/Images/tiger.jpg"
import Button from "../../Components/Button/Button";

const Articles = () => {
    return (
            <div className="articles-container">
                <div className="article">
                    <img src={art} className="art" alt="tiger.jpg" />
                    <header>Tiger's Den</header>
                    <p>Click to learn more about the tiger</p>
                    <Button path="/Articles" text="Read Now" />
                </div> 

                <div className="article">
                    <img src={art} className="art" alt="tiger.jpg" />
                    <header>Tiger's Den</header>
                    <p>Click to learn more about the tiger</p>
                    <Button path="/Articles" text="Read Now" />
                </div> 

                <div className="article">
                    <img src={art} className="art" alt="tiger.jpg" />
                    <header>Tiger's Den</header>
                    <p>Click to learn more about the tiger</p>
                    <Button path="/Articles" text="Read Now" />
                </div> 

                <div className="article">
                    <img src={art} className="art" alt="tiger.jpg" />
                    <header>Tiger's Den</header>
                    <p>Click to learn more about the tiger</p>
                    <Button path="/Articles" text="Read Now" />
                </div> 

                <div className="article">
                    <img src={art} className="art" alt="tiger.jpg" />
                    <header>Tiger's Den</header>
                    <p>Click to learn more about the tiger</p>
                    <Button path="/Articles" text="Read Now" />
                </div> 
                <div className="article">
                    <img src={art} className="art" alt="tiger.jpg" />
                    <header>Tiger's Den</header>
                    <p>Click to learn more about the tiger</p>
                    <Button path="/Articles" text="Read Now" />
                </div> 
                <div className="article">
                    <img src={art} className="art" alt="tiger.jpg" />
                    <header>Tiger's Den</header>
                    <p>Click to learn more about the tiger</p>
                    <Button path="/Articles" text="Read Now" />
                </div> 
                <div className="article">
                    <img src={art} className="art" alt="tiger.jpg" />
                    <header>Tiger's Den</header>
                    <p>Click to learn more about the tiger</p>
                    <Button path="/Articles" text="Read Now" />
                </div> 
            </div>
    );
};

export default Articles;
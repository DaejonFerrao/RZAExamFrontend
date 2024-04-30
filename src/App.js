import { useNavigate, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from "./Pages/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Terms from "./Pages/Terms/Terms";
import Privacy from "./Pages/Privacy/Privacy";
import Register from "./Pages/Register/Register";
import Login from './Pages/Login/Login';
import Tour from './Pages/Tour/Tour';
import Hotel from './Pages/Hotel/Hotel';
import Articles from "./Pages/Articles/Articles";
import AboutUs from './Pages/AboutUs/AboutUs';
import BookingForm from "./Pages/BookingForm/BookingForm";
import Profile from './Pages/Profile/Profile';
import Dark from './Components/DarkMode/dark';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Hotel" element={<Hotel />} />
      <Route path="/Tour" element={<Tour />} />
      <Route path="/BookingForm" element={<BookingForm />} />
      <Route path="/Articles" element={<Articles />} />
      <Route path="/Terms" element={<Terms />} />
      <Route path="/Privacy" element={<Privacy />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Profile" element={<Profile />} />
      </Routes>
      <Dark />
      <Footer />
    </div>
  );
}

export default App;

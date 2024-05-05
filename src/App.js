import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OTP from "./Pages/OTP";
import Profile from "./Pages/Profile";
import MedicalCare from "./Pages/MedicalCare";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Testmonial from "./components/Testmonial";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/medicalcare" element={<MedicalCare />} />
        </Routes>
      </BrowserRouter>
      <Testmonial />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;

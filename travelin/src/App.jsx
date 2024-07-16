import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Caraousel from "./pages/Caraousel";
import MainContent from "./pages/MainContent";
import Hero from "./pages/Hero";
import MainSecond from "./pages/MainSecond";
import FormBooking from "./pages/FormBooking";
import Login from "./pages/Login";
import Villa from "./pages/Villa";
import PromoPage from "./pages/PromoPage";
import Hotel from "./pages/Hotel";
import Train from "./pages/Train";
import Travel from "./pages/Travel";
import Flights from "./pages/Flights";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Hero" Component={Hero} />
        <Route path="/Carousel" Component={Caraousel} />
        <Route path="/Main" Component={PromoPage} />
        <Route path="/Mainsec" Component={MainSecond} />
        <Route path="/FormBook" Component={FormBooking} />
        <Route path="/LoginPage" Component={Login} />
        <Route path="/detailvila" Component={Villa} />
        <Route path="/detailHotel" Component={Hotel} />
        <Route path="/detailTrain" Component={Train} />
        <Route path="/detailTravel" Component={Travel} />
        <Route path="/detailFlights" Component={Flights} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

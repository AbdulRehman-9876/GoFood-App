import "./App.css";
import Home from "./Views/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Auth/Login.js";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Register from "./Components/Auth/Register.js";
import Profile from "./Components/User/Profile.js";
import MainLayout from "./Layouts/MainLayout.js";
import Resturants from "./Components/Food/Restaurants.js";
import AboutUs from "./Components/Food/AboutUs.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/restaurants" element={<Resturants />}></Route>
          <Route exact path="/aboutUs" element={<AboutUs />}></Route>
        </Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

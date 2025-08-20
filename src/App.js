import "./App.css";
import Home from "./Views/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Auth/Login.js";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Register from "./Components/Auth/Register.js"
import Profile from "./Components/User/Profile.js"
function App() {
  return (
    <Router>
      <div>
      <Routes>
        <Route exact path = "/" element = {<Home/>} > </Route>
        <Route exact path = "/Login" element = {<Login/>} ></Route>
        <Route exact path = "/register" element = {<Register/>}></Route>
        <Route exact path = "/profile" element = {<Profile/>}></Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;

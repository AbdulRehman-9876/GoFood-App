import "./App.css";
import Home from "./Screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Screens/Login";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from "./Screens/Signup.js";
import Example from "./Screens/Example.js"
function App() {
  return (
    <Router>
      <div>
      <Routes>
        <Route exact path = "/" element = {<Home/>} > </Route>
        <Route exact path = "/Login" element = {<Login/>} ></Route>
        <Route exact path = "/createuser" element = {<Signup/>}></Route>
        <Route exact path = "/test" element = {<Example/>}></Route>

      </Routes>
      </div>
    </Router>
  );
}

export default App;

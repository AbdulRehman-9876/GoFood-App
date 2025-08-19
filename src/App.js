import "./App.css";
import Home from "./Screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Screens/Login";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Register from "./Screens/Register.js"
function App() {
  return (
    <Router>
      <div>
      <Routes>
        <Route exact path = "/" element = {<Home/>} > </Route>
        <Route exact path = "/Login" element = {<Login/>} ></Route>
        <Route exact path = "/createuser" element = {<Register/>}></Route>

      </Routes>
      </div>
    </Router>
  );
}

export default App;

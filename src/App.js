import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

const Home = lazy (() => import("./Views/Home.js"));
const MainLayout = lazy(() => import("./Layouts/MainLayout.js"));
const Login = lazy(() => import("./Components/Auth/Login.js"));
const Register = lazy(() => import("./Components/Auth/Register.js"));
const Profile = lazy(() => import("./Components/User/Profile.js"));
const Restaurants = lazy(() => import("./Components/Food/Restaurants.js"));
const AboutUs = lazy(() => import("./Components/Food/AboutUs.js"));
const LoadingPage = lazy(() => import("./Components/LoadingPage.js"));
function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingPage/>}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route  path="/" element={<Home />}></Route>
            <Route  path="/profile" element={<Profile />}></Route>
            <Route  path="/restaurants" element={<Restaurants />}></Route>
            <Route  path="/aboutUs" element={<AboutUs />}></Route>
          </Route>
          <Route  path="/Login" element={<Login />}></Route>
          <Route  path="/register" element={<Register />}></Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

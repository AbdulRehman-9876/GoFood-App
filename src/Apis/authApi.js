// register, login, logout, token handling
import axios from "axios";

export const registerUser = async (userData) => {
  try {
    axios.post("http://localhost:5000/api/register", userData);
  } catch (err) {
    console.log(`Error in fetching signup api ${err}`);
  }
};

export const loginUser = async (userData) => {
  try {
    const response = axios.post("http://localhost:5000/api/login", userData);
    const json = await response.json();
    if (!json.success) {
      alert("Enter Valid Credentials");
    }

    if (json.success) {
      localStorage.setItem("authToken", json.authToken);
      console.log(localStorage.getItem("authToken"));
      console.log(json);
    }
    
  } catch (err) {
    console.log(`Error in fetching login api ${err}`);
  }
};

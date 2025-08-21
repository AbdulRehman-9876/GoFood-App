// register, login, logout, token handling
import axios from "axios";

export const registerUser = async (userData) => {
  try {
    await axios.post("http://localhost:5000/api/register", userData);
  } catch (err) {
    console.log(`Error in fetching signup api ${err}`);
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/login",
      userData
    );

    console.log(response.data);
    localStorage.setItem("authToken", response.data.authToken);
    return response.data;
  } catch (err) {
    console.log(`Error in fetching login api ${err}`);
  }
};

// register, login, logout, token handling
import axios from "axios";
const URL = process.env.REACT_APP_URL;

export const registerUser = async (userData) => {
  try {
    await axios.post(`${URL}/api/register`, userData);
  } catch (err) {
    console.log(`Error in fetching signup api ${err}`);
  }
};

export const loginUser = async (data) => {
  try {
    const response = await axios.post(`${URL}/api/login`, data);

    localStorage.setItem("authToken", response.data.authToken); //Setting Session Token
    localStorage.setItem("userData", JSON.stringify(response.data.userData)); //Setting Session User Data

    return response.data;
  } catch (err) {
    console.log(`Error in fetching login api ${err}`);
  }
};

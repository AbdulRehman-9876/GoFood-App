// register, login, logout, token handling
import axios from "axios";

export const registerUser = async (userData) => {
  try {
    await axios.post("http://localhost:5000/api/register", userData);
  } catch (err) {
    console.log(`Error in fetching signup api ${err}`);
  }
};

export const loginUser = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/login",
      data
    );

    localStorage.setItem("authToken", response.data.authToken); //Setting Session Token
    localStorage.setItem("userData", JSON.stringify(response.data.userData)); //Setting Session User Data

    return response.data;
  } catch (err) {
    console.log(`Error in fetching login api ${err}`);
  }
};

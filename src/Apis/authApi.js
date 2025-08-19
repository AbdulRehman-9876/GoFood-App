// register, login, logout, token handling
import axios from "axios";

const registerUser = async(userData) => {
    try{
        axios.post("http://localhost:5000/api/create-user", userData);
    }catch(err){
        console.log(`Error in fetching signup api ${err}`)
    }
}

exports = {
    registerUser
}
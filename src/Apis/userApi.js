// user profile, update account, address
import axios from "axios";
const URL = process.env.REACT_APP_URL;

export const updatePersonalInformation = async(user_id, data) => {
    try{
        const response = await axios.patch(`${URL}/user/PersonalInformation/${user_id}`, data);
        return response.data;
    }catch(err){
        console.log(err)
    }
}
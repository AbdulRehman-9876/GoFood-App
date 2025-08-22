// food items, categories, search
import axios from "axios";
const URL = process.env.REACT_APP_URL;

const addFood = async (data) => {
    try{
        const response = await axios.post(`${URL}/food/addFood`, data)
        return response.data;
    } catch(err){
        console.log(err)
    }
}
const getFood = async () => {
    try{
        const response = await axios.get(`${URL}/food/getFood`)
        return response.data;
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    addFood,
    getFood
}
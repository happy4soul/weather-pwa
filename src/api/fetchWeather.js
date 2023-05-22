import axios from "axios";

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '88cf95f7cf94614c9f4a97c683c838c8'

export const fetchWeather = async(query) => {
    const {data} = await axios.get(URL,{
        params : {
            q : query,
            units : 'metric',
            APPID : API_KEY
        }
    })

    return data
}
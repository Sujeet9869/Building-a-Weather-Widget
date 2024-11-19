import { useState } from "react"
import SearchBox from "./SearchBox"
import InfoBox from "./infoBox"

export default function WeatherApp () {

    const [weatherinfo,setWeatherinfo] = useState({

        city : "Sujeet",
        temp: 23.48,
        tempMin :25.05,
        tempMax : 25.45,
        humidity : 45,
        feelsLike: 35.84,
        weather : "Haze",
    });

    let updateinfo = (newInfo)=> {
        setWeatherinfo(newInfo);
    }





    return(
        <div style={{textAlign : "center"}}>
            <h2>Weather App by Delta</h2>
            <br />
            <SearchBox  updateinfo = {updateinfo}/>
            <InfoBox info = {weatherinfo}/>
        </div>
    )
}
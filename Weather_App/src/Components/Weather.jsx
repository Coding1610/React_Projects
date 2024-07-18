import React, { useEffect, useRef, useState } from 'react'
import './Weather.css'
import { assets } from '../Images/assets'

export default function Weather() {

    const  inputRef = useRef();

    const [temp,setTemp] = useState(0);
    const [wind,setWind] = useState(0);
    const [humidity,setHumidity] = useState(0);
    const [location,setlocation] = useState("");
    const [icons,setIcons] = useState();

    const allIcons = {
        "01d" : assets.sun_icon, 
        "01n" : assets.sun_icon,
        "02d" : assets.cloud_icon,
        "02n" : assets.cloud_icon,
        "03d" : assets.cloud_icon,
        "03n" : assets.cloud_icon,
        "04d" : assets.drizzle_icon,
        "04n" : assets.drizzle_icon,
        "09d" : assets.rain_icon,
        "09n" : assets.rain_icon,
        "10d" : assets.rain_icon,
        "10n" : assets.rain_icon,
        "13d" : assets.snow_icon,
        "13n" : assets.snow_icon
    }

    const search = async (city) => {

        if( city === "" ){
            alert("enter city name !!");
            return;
        }

        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f1e12a0ec1eb0924ed4cfec050d56f6a`;
            const response = await fetch(url);
            const data = await response.json();

            if( !response.ok ){
                alert("enter valid city name !! ");
            }

            if( city === "India" || city === "india" || city === "INDIA"){
                setlocation("India");
            }
            else{
                setlocation(data.name);
            }

            setTemp(Math.floor(data.main.temp));
            setIcons(allIcons[data.weather[0].icon]||assets.sun_icon)
            setWind(data.wind.speed);
            setHumidity(data.main.humidity);
        }
        catch(error){
            console.log("Error in fetching data !!!");
            return;
        }

    }

    return (
        <>
        <div className='weather'>

            <div className='searchBox'>
                <input ref={inputRef} type="text" placeholder='Search Country...'/>
                <img src={assets.search_icon} alt="search_icon" onClick={()=>{search(inputRef.current.value)}}/>
            </div>

            {location ? <>
            
                <img className='weatherImg' src={icons} alt="weather_icon" />
                <p className='temprature'>{temp}°C</p>
                <p className='location'>{location}</p>

                <div className='weatherData'>
                    <div className='col' >
                        <img src={assets.humidity_icon} alt="humidity_icon" />
                        <div>
                            <p>{humidity}%</p>
                            <span>Humidity</span>
                        </div>
                    </div>
                    <div className='col' >
                        <img src={assets.wind_icon} alt="wind_speed_icon" />
                        <div>
                            <p>{wind} Km/h</p>
                            <span>Wind Speed</span>
                        </div>
                    </div>
            </div>

            </> : <></>}

        </div>
        </>
    )
}
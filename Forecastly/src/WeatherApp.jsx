import './WeatherApp.css';
import SearchBox from './SearchBox.jsx';
import InfoBox from './InfoBox.jsx';
import { useState } from 'react';
export default function WeatherApp(){
    const [weatherInfo,setweatherInfo]=useState({city:"Coimbatore",feelsLike: 28.97,humidity: 74,temp: 26.88,tempMax:26.88,tempMin: 26.88,weather: "haze"});
    let update=(newinfo)=>{
        setweatherInfo(newinfo);

    }
    return(
        <div style={{textAlign:'center'}}>
            <h2 className='title'>Forecastly</h2>
            <SearchBox updateinfo={update}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}
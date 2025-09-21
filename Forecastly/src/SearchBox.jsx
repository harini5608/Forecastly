import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import {useState} from 'react';
export default function SearchBox({updateinfo}){
    let [city,setcity]=useState("");
    let [err,seterr]=useState(false);
    const APIURL="";
    const APIKEY="";
    let weatherurl=async()=>{
        try{
            let response=await fetch(`${APIURL}?q=${city}&appid=${APIKEY}&units=metric`);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description
        };
        console.log(result);
        return result;

        }catch(err){
            throw(err);
            
        }
        
};
    
    let sub=async (evt)=>{
        try{
            evt.preventDefault();
        console.log(city);
        setcity("");
        let newinfo=await weatherurl();
        updateinfo(newinfo);
        }
        catch(err){
            seterr(true);

        }

    }
    let handleChange=(evt)=>{

        setcity(evt.target.value);
    }
    return(
        <div className='SearchBox'>
        
        <form onSubmit={sub}>
            <TextField id="city" label="City Name" variant="outlined"  required
            value={city} onChange={handleChange}/>
            
            
            <Button variant='contained' type="submit">Search</Button>
            {err&&<p>No such place exist!!</p>}
        </form>
        
        </div>
    );
}
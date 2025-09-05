import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import {useState} from 'react';
export default function SearchBox(){
    let [city,setcity]=useState("");
    let sub=(evt)=>{
        evt.preventDefault();
        console.log(city);
        setcity("");

    }
    let handleChange=(evt)=>{

        setcity(evt.target.value);
    }
    return(
        <div className='SearchBox'>
        <h3>SearchBox </h3>
        <form onSubmit={sub}>
            <TextField id="city" label="City Name" variant="outlined"  required
            value={city} onChange={handleChange}/>
            
            
            <Button variant='contained' type="submit">Search</Button>

        </form>
        </div>
    );
}
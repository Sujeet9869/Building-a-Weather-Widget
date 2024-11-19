import TextField from '@mui/material/TextField';



import Button from '@mui/material/Button';
import { useState } from 'react';
import './SearchBox.css'
import { red } from '@mui/material/colors';

export default function SearchBox ({updateinfo}) {
    let [city,setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "439e7ed265db1f675ffa2da6df0235fd";

    let getweatherinfo = async() =>{

        try{
            
      let response = await fetch(`${API_URL}?q=${city} &appid=${API_KEY}&units=metric`);
      let jsonrespone = await response.json();
      console.log(jsonrespone);

      let result = {

       city : city,     
       temp : jsonrespone.main.temp,
       tempMin : jsonrespone.main.temp_min,
       tempMax : jsonrespone.main.temp_max,
       humidity : jsonrespone.main.humidity,
       feelsLike : jsonrespone.main.feels_like,
       weather : jsonrespone.weather[0].description,
      };
      console.log(result);
      return result;


        }catch(err){
           throw err;
        }

       
       
    }
    


    let handchange = (event) => {
        setCity(event.target.value)
    }

    let handlesubmit =async (event) => {
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
         let newInfo = await getweatherinfo();
         updateinfo(newInfo);

        }catch(err){
            setError(true);
        }
     
        
    }

    return(
        <div className='SearchBox'>
    
        <form  onSubmit={handlesubmit}> 
        <TextField id="City" label="City Name" variant="outlined" required value={city} onChange={handchange}/>
        <br /><br />
        <Button variant="contained" type='submit' >
        Search
      </Button>
      {error && <h2><p style={{color : "red"}}>No such place exist!</p></h2>}
     

        </form>
       
        </div>
    );
}
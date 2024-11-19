import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import './InfoBox.css'


export default function InfoBox ({info}) {

    const INIT_URL = "https://images.unsplash.com/photo-1597535827808-73616636cc96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


    let COLD_URL = "https://images.unsplash.com/photo-1708597645803-64cadbfd1794?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let HOT_URL = "https://images.unsplash.com/photo-1610557013547-dc7a52d44709?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL = "https://images.unsplash.com/photo-1607500098489-1991d1fbab7a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";



    return(
        <div className='InfoBox'>
      
        <br />
        <div className='Cardcontainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity >= 70 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
      </CardContent>
       <p> Temperture = {info.temp}&deg;C</p>
       <p> Humidity = {info.humidity}</p>
       <p>Min Temp = {info.tempMin}&deg;C</p>
       <p>Max Temp = {info.tempMax}&deg;C</p>
       <p>
        This Weather can be describe as {info.weather} and feel like {info.feelsLike}&deg;C
       </p>
    </Card>
    </div>
        </div>
    )
}
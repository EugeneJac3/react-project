import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const SevenDayWeather = ({weather}) => {


   
    let dt = new Date(weather[0].dt * 1000); // time stamp

    console.log("component weather", weather)
    console.log("dt", dt)

return(
    <div className="weather">
      
      <Container maxWidth="md">
          <Grid container spacing={1} alignItems='center' justifyContent='center'>
        {weather.map((daily) => (
          <>
        
        <Card style={{backgroundColor:'rgba(255,255,255,0.5)'}}sx={{minWidth: 275,m:2}}>
      <CardContent style={{}}>
        <Typography sx={{ fontSize: 20 }} color="black">
          Temp for {dt.toDateString()}
        </Typography>
        <Typography sx={{mb:1}}variant="h8" color='black' component="div">
         High {daily.temp.max}°F - Low {daily.temp.min}°F
        </Typography>
        <Typography sx={{ fontSize: 20}} color="black">
        Wind Speed
        </Typography>
        <Typography variant='h8' color="black">
        {daily.wind_speed.toFixed()} MPH
        </Typography>
        <Typography sx={{fontSize:20}}>
          Humidity
        </Typography>
        <Typography variant="h8">
         {daily.humidity}%
        </Typography>
      </CardContent>
    </Card>

          </>
        ))}
        </Grid>
      </Container>
    </div>
)
}

export default SevenDayWeather;


{/* <Typography
variant="h4"
component="h2"
marginTop={5}
marginBottom={3}
>
  <p>{daily.temp.day}</p>
</Typography> */}
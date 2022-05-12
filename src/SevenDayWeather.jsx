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


   
    

    function dateString(daily) {
        let dt = new Date(daily.dt * 1000); // time stamp

        return dt

    }

    console.log("component weather", weather)
   

return(
    <div className="weather">
      
      <Container maxWidth="md">
          <Grid container spacing={1} alignItems='center' justifyContent='center'>
        {weather.map((dailyObj) => (
            
          <>
        
        <Card style={{backgroundColor:'rgba(255,255,255,0.5)'}}sx={{minWidth: 275,m:2}}>
      <CardContent style={{}}>
        <Typography sx={{ fontSize: 20 }} color="black">
          Temp for {dateString(dailyObj).toDateString()}
        </Typography>
        <Typography sx={{mb:.5}}variant="h8" color='black' component="div">
         High {dailyObj.temp.max}°F - Low {dailyObj.temp.min}°F
        </Typography>
        <Typography sx={{ fontSize: 20}} color="black">
        Wind Speed
        </Typography>
        <Typography variant='h8' color="black">
        {dailyObj.wind_speed.toFixed()} MPH
        </Typography>
        <Typography sx={{fontSize:20}}>
          Humidity
        </Typography>
        <Typography variant="h8">
         {dailyObj.humidity}%
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
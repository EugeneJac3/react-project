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
return(
    <div className="App">
      
      <Container maxWidth="sm">
          <Grid container spacing={1}>
        {weather.map((daily) => (
          <>
        
        <Card sx={{minWidth: 275,}}>
      <CardContent s={{backgroundColor:"rgba(255,255,255,0.2"}}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Temperature
        </Typography>
        <Typography variant="h7" component="div">
         High {daily.temp.max}°F - Low {daily.temp.min}°F
        </Typography>
        <Typography sx={{ mt: 1.5 }} color="text.secondary">
        Wind Speed {daily.wind_speed.toFixed()} MPH
        </Typography>
        <Typography variant="body2">
          
          Humidity - {daily.humidity}%
          <br />
          {'"a benevolent smile"'}
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
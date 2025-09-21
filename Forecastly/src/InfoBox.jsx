import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}){
    const img="https://plus.unsplash.com/premium_photo-1667926195926-b210e1963e2f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const cold="https://images.unsplash.com/photo-1528191710846-99b8717a2830?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const hot="https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const rain="https://plus.unsplash.com/premium_photo-1733436275328-bbb7da0fe4ae?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    return (
    <div >
        
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?rain:info.temp>15?hot:cold}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <p>Temperature ={info.temp}&deg;C</p>
          <p>Humidity ={info.humidity}%</p>
          <p>Minimum Temperature ={info.tempMin}&deg;C</p>
          <p>Maximum Temperature ={info.tempMax}&deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i> and it feels like {info.feelsLike}&deg;C </p>
          
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    );
}
import { Grid, Typography } from '@mui/material';
import './index.css'

interface CardProps {
  icon: string
  title: string
}

function Card(props: CardProps) {
  return (
    <Grid item className='card' container sx={{ marginBlock: 2}} direction='column' justifyContent='center' alignItems='center'
    >
      <img className='card-icon' src={props.icon} />
      <Typography variant='h6'>{props.title}</Typography>
    </Grid>
  );
}

export default Card;
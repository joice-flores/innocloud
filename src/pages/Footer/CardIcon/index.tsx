
import { Grid, Link, Typography } from '@mui/material';
import './index.css'

interface CardProps {
  icon: string
  link: string
  text: string
}

function CardIcon(props: CardProps) {
  return (
    <Grid href={props.link} target='blank' component={Link} container item xs={2} className='container'>
      <i className={props.icon}></i>
      <Typography>
        {props.text}
      </Typography>
    </Grid>
  )
}

export default CardIcon; 
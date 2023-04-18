
import { Grid } from '@mui/material';
import './index.css'

interface CardProps {
  icon: string
  link: string
  text: string
}

function CardIcon(props: CardProps) {
  return (
    <Grid container item xs={2} className='container'>
      <i className={props.icon}></i>
      <a target='blank' href={props.link}>
        {props.text}
      </a>
    </Grid>
  )
}

export default CardIcon; 
import Foto from '../../assets/images/profissional.png'
import Blob from '../../assets/images/blob-white.png'
import { Grid, Typography } from '@mui/material';
import './index.css'

const About = () => {
  return (
    <Grid container id="about">
      <Typography variant='h5'>SOBRE</Typography>
      <Grid container className='box-about'>
        <Grid className='box-text'>
          <Typography variant='body1' className='texto'>Esse ‘flerte’ do presidente com líderes da América Latina que não respeitam a democracia está causando uma verdadeira crise de imagem para o político. Lula sempre se esquiva de perguntas que o confrontam sobre seu posicionamento em relação a esses países, e sua falta de declarações repudiando tais atos faz com que uma parte da sociedade questione o motivo disso.</Typography>
          <Typography variant='h5'> INNOCLOUD</Typography>
        </Grid>
        <Grid className='box-text'>
          <Typography variant='body1'>Lula sempre se esquiva de perguntas que o confrontam sobre seu posicionamento em relação a esses países, e sua falta de declarações repudiando tais atos faz com que uma parte da sociedade questione o motivo disso.</Typography>
          <Typography variant='h5'>Jonatas Costa</Typography>
        </Grid>
      </Grid>
      <img src={Foto} className='professional'/>
      <img src={Blob} className='blob-white'/>
    </Grid>
  )
}

export default About;
import Foto from '../../assets/images/profissional.png'
import { Grid, Typography } from '@mui/material';
import './index.css'

const About = () => {
  return (
    <Grid container id="about">
      <Typography variant='h5'>SOBRE</Typography>
      <Grid container className='box-about'>
        <Grid className='box-text'>
          <Typography variant='subtitle1' className='texto'>
            Somos a sua fonte de soluções baseada em tecnologia. Contamos com consultor de TI, capaz de fornecer valor aos sistemas de informação da sua empresa. Ajudamos sua empresa a transformar dados em lucro, vinculando a tecnologia a suas metas de negócios.
          </Typography>
          <Typography variant='h5'> INNOCLOUD</Typography>
        </Grid>
        <Grid className='box-text'>
          <Typography variant='subtitle1'>Técnico de informática pela Instituto Federal Do Espírito Santo, campus Alegre e Analista de Sistemas pela Universidade do Estado de Minas Gerais.</Typography>
          <Typography variant='h5'>Jonatas Costa</Typography>
        </Grid>
      </Grid>
      <img src={Foto} className='professional' alt='foto de Jonatas de braços cruzados e usando um capacete de proteção branco'/>
    </Grid>
  )
}

export default About;
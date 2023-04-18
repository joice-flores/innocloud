import { Grid, Typography } from '@mui/material';
import './index.css'

const Contatos = () => {
  return (
    <Grid container id='contact' className='form-content'>
      <form>
      <Typography variant="h5">CONTATO</Typography>
        <div className='form-box'>
          <Grid container className='form-item'>
            <Grid item className='form-input'>
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="Email" autoComplete='on' required />
            </Grid>
            <Grid  item className='form-input'>
              <label htmlFor="text">Mensagem:</label>
              <textarea cols={50} rows={10}
                id="mensagem" required />
            </Grid>
            <Grid className='form-buttons'>
              <input type="reset" value='Limpar' />
              <input type="submit" value='Enviar' />
            </Grid>
          </Grid>
        </div>
      </form>
    </Grid>


  )

}

export default Contatos;
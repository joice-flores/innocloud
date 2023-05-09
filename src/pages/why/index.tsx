import { Grid, Typography } from "@mui/material";
import "./index.css";
import { cardProps } from "./Mock";
import Card from "./Card";

const Why = () => {
  
	return (
		<Grid container id="contact" className="content">
      <Typography variant="h5">Por quê nos contratar</Typography>
			<Grid container item className='form-box' justifyContent='center' spacing={5} alignItems='flex-start'>
				{
          cardProps.map((item) => (
            <Card icon={item.icon} title={item.title} describe1={item.describe1} describe2={item.describe2} describe3={item.describe3} />
          ))
        }
			</Grid>
			{/* <form>
        <div className='form-box'>
          <Grid container className='form-item'>
            <Grid item className='form-input'>
              <label htmlFor="fullName">Nome Completo:</label>
              <input type="text" id="fullName" autoComplete='on' required />
            </Grid>
            <Grid item className='form-input'>
              <label htmlFor="phone">Telefone:</label>
              <input placeholder='(00)00000-0000' type="tel" id="phone" autoComplete='on' required />
            </Grid>
            <Grid item className='form-input'>
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="Email" autoComplete='on' required placeholder='seuemail@mail.com' />
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
      </form> */}
		</Grid>
	);
};

export default Why;

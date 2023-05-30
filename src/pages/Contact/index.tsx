import { Button, Grid, Typography } from "@mui/material";
import "./index.css";

const Contatos = () => {
	return (
		<Grid container id="contact" className="form-content">
			<Typography variant="h5">Quer fazer um orçamento?</Typography>
			<Grid container className="form-input">
				<a
					className="linkWhats"
					href="https://wa.me/5532984172073?text=Gostaria de fazer um orçamento"
					target="_blank"
				>
					<Button
						variant="outlined"
						style={{ color: "#fff", borderColor: "#eac358" }}
					>
						Clique aqui
					</Button>
				</a>
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

export default Contatos;

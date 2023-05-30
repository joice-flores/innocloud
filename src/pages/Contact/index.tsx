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
          rel="noreferrer"
				>
					<Button
						variant="outlined"
						style={{ color: "#fff", borderColor: "#eac358" }}
					>
						Clique aqui
					</Button>
				</a>
			</Grid>
		</Grid>
	);
};

export default Contatos;

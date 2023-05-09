import { Grid, Typography } from "@mui/material";
import "./index.css";

interface CardProps {
	icon: string;
	title: string;
  describe?: string
}

function Card(props: CardProps) {
	return (
		<Grid className="flip-card">
			<Grid className="flip-card-inner">
				<Grid item className="flip-card-front" container>
					<img className="card-icon" src={props.icon} alt='' />
					<Typography variant="h6">{props.title}</Typography>
				</Grid>
				<Grid item className="flip-card-back" container>
					<Typography variant="body1">{props.describe}</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default Card;

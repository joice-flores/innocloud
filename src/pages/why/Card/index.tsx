import { Grid, Typography } from "@mui/material";

export interface DescribeProps {
  describe: string
}

export interface CardWhyProps {
  icon: string
  title: string
  describe1: string
  describe2?: string
  describe3?: string
} 

function Card(props: CardWhyProps) {
	return (
		<Grid
			container
			item
			xs={10}
			md={5}
			justifyContent="start"
			direction="column"
			alignItems="center"
		>
			<i className={props.icon} style={{ color: '#eac358', fontSize: 30}}></i>
			<Typography variant="h6" style={{ color: '#eac358', fontFamily: 'Rajdhani' }}>{props.title}</Typography>
			<Typography style={{ marginBlock: 10, color: '#fff', fontFamily: 'Rajdhani'}}>{props.describe1}</Typography>
			{props.describe2 && <Typography style={{ color: '#fff', fontFamily: 'Rajdhani'}}>{props.describe2}</Typography>}
			{props.describe3 && <Typography style={{ marginTop: 10, color: '#fff', fontFamily: 'Rajdhani'}}>{props.describe3}</Typography>}
		</Grid>
	);
}

export default Card;

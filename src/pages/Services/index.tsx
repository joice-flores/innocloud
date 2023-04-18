import { Grid, Typography } from "@mui/material";
import { cardProps } from "./Mock";
import Card from "./Card";
import Blob from "../../assets/images/blob-blue.png";
import "./index.css";

function Services() {
	return (
		<Grid container id="service">
			<Typography variant="h5">SERVIÇOS</Typography>
			<Grid container item xs={10} className="box-card">
				{cardProps.map((item, index) => (
					<Card
						key={index}
						title={item.title}
						icon={item.icon}
					/>
				))}
			</Grid>

			<img src={Blob} className="blob-blue" alt="" />
		</Grid>
	);
}

export default Services;

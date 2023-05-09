import { Grid, Typography } from "@mui/material";

import CardIcon from "./CardIcon";

import "./index.css";
import { cardProps } from "./Mock";

const Footer = () => {
	return (
		<Grid container className="footer-box">
			<Grid container item xs={12} md={8} className="footer-item">
        {cardProps.map(item => (
          <CardIcon
            icon={item.icon}
            link={item.link}
            text={item.text}
          />
        ))}
			</Grid>
			<Typography className="copyright">
				&copy;Copyright Esse site foi produzido<br/> por Fiori Solutions - 2023
			</Typography>
		</Grid>
	);
};
export default Footer;

import { Grid } from "@mui/material";

import CardIcon from "./CardIcon";

import "./index.css";
import { cardProps } from "./Mock";

const Footer = () => {
	return (
		<Grid container className="footer-box">
			<Grid container className="footer-item">
        {cardProps.map(item => (
          <CardIcon
            icon={item.icon}
            link={item.link}
            text={item.text}
          />
        ))}
			</Grid>
			<p className="copyright">
				&copy;Copyright Esse site foi produzido<br/> por Fiori Solutions - 2023
			</p>
		</Grid>
	);
};
export default Footer;

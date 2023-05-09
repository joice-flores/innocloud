import React from "react";
import Logo from "../../assets/images/logo.png";
import "./index.css";
import { Grid, Typography } from "@mui/material";
import Typed from "typed.js";


const Home = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['tecnológia da informação', 'Automação', 'segurança eletrônica', 'assistência técnica', 'serviços elétricos', 'informática'],
      typeSpeed: 110,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

	return (
		<Grid container id="home">
			<Grid container item className="box-home">
				<Grid container item className="box-text-home" direction='column'>
					<Typography color="white" variant="h6">
						Somos consultores em
					</Typography>
					<Typography className="writen">Soluções de</Typography>
					<Typography className="writen" ref={el}>''</Typography>
				</Grid>
				{/* <Grid item xs={12} sm={6} md={4}>
					<img src={Logo} className="logo" />
				</Grid> */}
			</Grid>
		</Grid>
	);
};

export default Home;

import React from "react";
import { Grid, Typography } from "@mui/material";
import Typed from "typed.js";
import "./index.css";


const Home = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['tecnológia da informação', 'Automação', 'segurança eletrônica', 'assistência técnica', 'serviços elétricos', 'informática'],
      typeSpeed: 110,
      loop: true,
    });

    return () => {
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
					<Typography className="writen">Soluções </Typography>
					<Typography className="writen" ref={el}>''</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Home;
